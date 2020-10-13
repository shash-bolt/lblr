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
  console.log("Header created");
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
  console.log("Items created");
  //shopping Kart
  RNFS.mkdir(shopKart);
  var SPath = labelData + '/shopping.json';
  var SData = {
    data: [
      {item: 'test Item 1', strikethrough: true},
      {item: 'test Item 2', strikethrough: false},
      {item: 'test Item 3', strikethrough: false},
    ],
  };
  RNFS.writeFile(SPath, JSON.stringify(SData));
  console.log("ShopKart created");
}

export function saveLabel(qrImage, label) {
  RNFS.readFile(labelHead + '/HeadingList.json')
    .then((res) => {
      var curObj = {file: qrImage, title: label};
      var savedVal = JSON.parse(res);
      savedVal.data.push(curObj);
      return JSON.stringify(savedVal);
    })
    .then((content) => {
      var HPath = labelHead + '/HeadingList.json';
      RNFS.writeFile(HPath, JSON.stringify(content));

      var LPath = labelData + '/' + qrImage + '.json';
      var LData = {
        data: [{item: 'Dummy', strikethrough: true}],
      };
      RNFS.writeFile(LPath, JSON.stringify(LData));
    });
}

export function deleteLabel(qrImage) {
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
    RNFS.writeFile(HPath, JSON.stringify(HData));
    RNFS.unlink(LPath);
  });
}

export function updateHeader(qrImage, newLabel) {
  var HPath = labelHead + '/HeadingList.json';

  RNFS.readFile(HPath).then((res) => {
    var HData = JSON.parse(res);
    var index = HData.data.findIndex((item) => item.file === qrImage);
    HData.data[index].title = newLabel;
    RNFS.writeFile(HPath, JSON.stringify(HData));
  });
}

export function addItem(qrImage, item) {
  var LPath = labelData + '/' + qrImage + '.json';
  RNFS.readFile(LPath).then((res) => {
    var LData = JSON.parse(res);
    var nItem = {item: item, strikethrough: false};
    LData.data.push(nItem);
    RNFS.writeFile(LPath, JSON.stringify(LData));
  });
}

export function removeItem(qrImage, remItem) {
  var LPath = labelData + '/' + qrImage + '.json';
  RNFS.readFile(LPath).then((res) => {
    var LData = JSON.parse(res);
    var index = LData.data.findIndex((it) => it.item === remItem);
    if (index > -1) {
      LData.data.splice(index, 1);
    }
    RNFS.writeFile(LPath, JSON.stringify(LData));
  });
}

export function updateItem(qrImage, upItem) {
    var LPath = labelData + '/' + qrImage + '.json';  
    RNFS.readFile(LPath).then((res) => {
        var LData = JSON.parse(res);
      var index = LData.data.findIndex((it) => it.item === upItem);
      LData.data[index].strikethrough = !LData.data[index].strikethrough;
      RNFS.writeFile(LPath, JSON.stringify(LData));
    });
  }

export function searchItems(srItem) {}

export function addToKart(addItem){

    var SPath = labelData + '/shopping.json';
    RNFS.readFile(SPath).then((res) => {
      var SData = JSON.parse(res);
      var nItem = {item: addItem, strikethrough: false};
      SData.data.push(nItem);
      RNFS.writeFile(SPath, JSON.stringify(SData));
    });

}

export function removeFromKart(rmItem){
    var SPath = labelData + '/shopping.json';
    RNFS.readFile(SPath).then((res) => {
        var SData = JSON.parse(res);
      var index = SData.data.findIndex((it) => it.item === rmItem);
      if (index > -1) {
        SData.data.splice(index, 1);
      }
      RNFS.writeFile(SPath, JSON.stringify(SData));
    });
}

export function strikeKartItem(STItem) {
    var SPath = labelData + '/shopping.json';
    RNFS.readFile(SPath).then((res) => {
        var SData = JSON.parse(res);
      var index = SData.data.findIndex((it) => it.item === STItem);
      SData.data[index].strikethrough = !SData.data[index].strikethrough;
      RNFS.writeFile(SPath, JSON.stringify(SData));
    });
  }
