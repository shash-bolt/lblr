import * as RNFS from 'react-native-fs';

var directoryPath = RNFS.DocumentDirectoryPath;
var labelHead = directoryPath + '/LabelsHeading';
var labelData = directoryPath + '/LabelsData';
var shopKart = directoryPath + '/ShopKart';

export function initSetup() {
  //Labels Heading folder
  RNFS.mkdir(labelHead);
  var HPath = labelHead + '/HeadingList.json';
  var HData = {
    data: [{file: 'testfile', title: 'Test File'}],
  };
  RNFS.writeFile(HPath, JSON.stringify(HData));
  console.log('Header created');
  //LabelsData
  RNFS.mkdir(labelData);
  var LPath = labelData + '/testfile.json';
  var LData = {
    data: [
      {item: 'test Item 1', strikethrough: true},
      {item: 'test Item 2', strikethrough: false},
      {item: 'test Item 3', strikethrough: false},
    ],
  };
  RNFS.writeFile(LPath, JSON.stringify(LData));
  console.log('Items created');
  //shopping Kart
  RNFS.mkdir(shopKart);
  var SPath = shopKart + '/shopping.json';
  var SData = {
    data: [
      {item: 'Shopping Item 1', strikethrough: true},
      {item: 'Shopping Item 2', strikethrough: false},
      {item: 'Shopping Item 3', strikethrough: false},
    ],
  };
  RNFS.writeFile(SPath, JSON.stringify(SData));
  console.log('ShopKart created');
}

export function saveLabel(qrImage, label) {
  console.log(qrImage);
  console.log(label);
  return new Promise(function (resolve, reject) {
    var HPath = labelHead + '/HeadingList.json';
    RNFS.readFile(HPath)
      .then((res) => {
        var curObj = {file: qrImage, title: label};
        var savedVal = JSON.parse(res);
        savedVal.data.push(curObj);
        RNFS.writeFile(HPath, JSON.stringify(savedVal));
      })
      .then(() => {
        var LPath = labelData + '/' + qrImage + '.json';
        var LData = {
          data: [{item: 'Dummy', strikethrough: true}],
        };
        RNFS.writeFile(LPath, JSON.stringify(LData));
      })
      .then(resolve('Done'));
  });
}

export function deleteLabel(qrImage) {
  return new Promise(function (resolve, reject) {
    var HPath = labelHead + '/HeadingList.json';
    var LPath = labelData + '/' + qrImage + '.json';

    RNFS.readFile(HPath).then((res) => {
      var HData = JSON.parse(res);
      //   var HData = {
      //     data: [{file: 'testfile', title: 'Test File'}],
      //   };
      var index = HData.data.findIndex((item) => item.file === qrImage);
      if (index > -1) {
        HData.data.splice(index, 1);
      }

      RNFS.unlink(LPath);

      RNFS.unlink(HPath).then(() => {
        RNFS.writeFile(HPath, JSON.stringify(HData)).then(resolve('Done'));
      });
    });
  });
}

export function updateHeader(qrImage, newLabel) {
  return new Promise(function (resolve, reject) {
    var HPath = labelHead + '/HeadingList.json';
    //console.log('qr: ' + qrImage);
    //console.log('newLabel:' + newLabel);

    RNFS.readFile(HPath).then((res) => {
      var HData = JSON.parse(res);
      var index = HData.data.findIndex((item) => item.file === qrImage);
      HData.data[index].title = newLabel;
      console.log('HData ==== ' + JSON.stringify(HData));
      //https://github.com/itinance/react-native-fs/issues/700#issuecomment-570650632
      RNFS.unlink(HPath).then(() => {
        RNFS.writeFile(HPath, JSON.stringify(HData)).then(resolve('Done'));
      });
    });
  });
}

export function addItemToList(qrImage, item) {
  return new Promise(function (resolve, reject) {
    var LPath = labelData + '/' + qrImage + '.json';
    console.log(qrImage);
    console.log(item);
    RNFS.readFile(LPath).then((res) => {
      var LData = JSON.parse(res);
      var nItem = {item: item, strikethrough: false};
      LData.data.push(nItem);
      RNFS.writeFile(LPath, JSON.stringify(LData)).then(resolve('Done'));
    });
  });
}

export function removeItemfromList(qrImage, remItem) {
  return new Promise(function (resolve, reject) {
    var LPath = labelData + '/' + qrImage + '.json';
    RNFS.readFile(LPath).then((res) => {
      var LData = JSON.parse(res);
      var index = LData.data.findIndex((it) => it.item === remItem);
      if (index > -1) {
        LData.data.splice(index, 1);
      }
      RNFS.unlink(LPath).then(() => {
        RNFS.writeFile(LPath, JSON.stringify(LData)).then(resolve('Done'));
      });
    });
  });
}

export function updateItem(qrImage, upItem) {
  return new Promise(function (resolve, reject) {
    var LPath = labelData + '/' + qrImage + '.json';
    //console.log(qrImage);
    //console.log(upItem);
    RNFS.readFile(LPath).then((res) => {
      var LData = JSON.parse(res);
      var index = LData.data.findIndex((it) => it.item === upItem);
      LData.data[index].strikethrough = !LData.data[index].strikethrough;

      console.log(LData);
      RNFS.unlink(LPath).then(() => {
        RNFS.writeFile(LPath, JSON.stringify(LData)).then(resolve('Done'));
      });
    });
  });
}

export function searchItems1(srItem) {
  var headers = new Array();
  console.log(srItem);
  return new Promise(function (resolve, reject) {
    var HPath = labelHead + '/HeadingList.json';
    RNFS.readFile(HPath)
      .then((res) => {
        return new Promise(function (resolve1, reject) {
          var HData = JSON.parse(res);
          HData.data.forEach((item) => {
            var LPath = labelData + '/' + item.file + '.json';
            RNFS.readFile(LPath).then((res1) => {
              return new Promise(function (resolve2, reject) {
                var LData = JSON.parse(res1);
                //console.log(res1);
                console.log('----------');
                var index = LData.data.findIndex((it) => it.item === srItem);
                if (index > -1) {
                  headers.push({
                    file: item.title,
                    item: LData.data[index].item,
                  });
                  //console.log(headers);
                }
              });
            });
          });
          resolve1();
        });
      })
      .then(() => {
        console.log('return: ' + headers);
        resolve(headers);
      });
  });
}

export async function searchItems(srItem) {
  var headers = new Array();
  console.log(srItem);
  let res_1 = await getHeader();
  let res_2 = await loopThruHeaders(res_1);
   return await returnData(res_2);
  

  function getHeader() {
    return new Promise(function (resolve, reject) {
      var HPath = labelHead + '/HeadingList.json';
      console.log(1);
      RNFS.readFile(HPath).then((res) => resolve(res));
    });
  }

  function loopThruHeaders(head) {
    var HData = JSON.parse(head);
    console.log('second data: ' + head);
    return new Promise(function (resolve, reject) {
      looping().then(()=>{
        console.log(2.3);
      console.log(headers);
      resolve();
      })
    })

    async function looping() {      
      for(const item of HData.data){
        var LPath = labelData + '/' + item.file + '.json';
        await RNFS.readFile(LPath).then(async (res1) => {
          await getList(item, res1);
        });
      }
    }  
    function getList(item, res1) {
      return new Promise(function (resolve, reject) {
        var LData = JSON.parse(res1);
        console.log("2.2");
        console.log('----------');
        var index = LData.data.findIndex((it) => it.item === srItem);
        if (index > -1) {
          headers.push({
            file: item.title,
            item: LData.data[index].item,
          });
          console.log(headers);
        }
        resolve();
      });
    }
    
  }

  function returnData() {
    return new Promise(function (resolve, reject) {
      console.log(3);
      console.log('return: ' + JSON.stringify( headers));
     resolve(headers);
    });
  }


}

export function addToKart(addItem) {
  return new Promise(function (resolve, reject) {
    var SPath = shopKart + '/shopping.json';
    RNFS.readFile(SPath).then((res) => {
      var SData = JSON.parse(res);
      var nItem = {item: addItem, strikethrough: false};
      SData.data.push(nItem);
      RNFS.writeFile(SPath, JSON.stringify(SData)).then(resolve('Done'));
    });
  });
}

export function removeFromKart(rmItem) {
  return new Promise(function (resolve, reject) {
    var SPath = shopKart + '/shopping.json';
    RNFS.readFile(SPath).then((res) => {
      var SData = JSON.parse(res);
      var index = SData.data.findIndex((it) => it.item === rmItem);
      if (index > -1) {
        SData.data.splice(index, 1);
      }
      RNFS.unlink(SPath).then(() => {
        RNFS.writeFile(SPath, JSON.stringify(SData)).then(resolve('Done'));
      });
    });
  });
}

export function strikeKartItem(STItem) {
  return new Promise(function (resolve, reject) {
    var SPath = shopKart + '/shopping.json';
    RNFS.readFile(SPath).then((res) => {
      var SData = JSON.parse(res);
      var index = SData.data.findIndex((it) => it.item === STItem);
      SData.data[index].strikethrough = !SData.data[index].strikethrough;

      RNFS.unlink(SPath).then(() => {
        RNFS.writeFile(SPath, JSON.stringify(SData)).then(resolve('Done'));
      });
    });
  });
}
