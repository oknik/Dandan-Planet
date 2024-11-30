const titleUrl = 'https://pic.imgdb.cn/item/6747fbe6d0e0a243d4d8721d.png'
const watermelonUrl = 'https://pic.imgdb.cn/item/67480077d0e0a243d4d885d8.png'
const circleUrl = 'https://pic.imgdb.cn/item/674829dfd0e0a243d4d95d20.png'
const bigUrl= 'https://pic.imgdb.cn/item/674afed5d0e0a243d4db75cc.jpg'
const smallUrl = 'https://pic.imgdb.cn/item/674afee9d0e0a243d4db75d3.jpg'
const sameUrl = 'https://pic.imgdb.cn/item/674afef2d0e0a243d4db75d4.jpg'
const questionUrl = 'https://pic.imgdb.cn/item/674825dad0e0a243d4d94a7e.jpg'
const confirmUrl = 'https://pic.imgdb.cn/item/6748023bd0e0a243d4d88f35.jpg'
const imageData = [
  {
    name: "0",
    imageUrl: "https://pic.imgdb.cn/item/67481044d0e0a243d4d8dabe.png"
  },
  {
    name: "1",
    imageUrl: "https://pic.imgdb.cn/item/67481063d0e0a243d4d8dba1.jpg"
  },
  {
    name: "2",
    imageUrl: "https://pic.imgdb.cn/item/67481073d0e0a243d4d8dc1b.png"
  },
  {
    name: "3",
    imageUrl: "https://pic.imgdb.cn/item/67481087d0e0a243d4d8dc90.png"
  },
  {
    name: "4",
    imageUrl: "https://pic.imgdb.cn/item/67481094d0e0a243d4d8dcf5.jpg"
  },
  {
    name: "5",
    imageUrl: "https://pic.imgdb.cn/item/674810a2d0e0a243d4d8dd49.jpg"
  },
  {
    name: "6",
    imageUrl: "https://pic.imgdb.cn/item/674810abd0e0a243d4d8dd93.png"
  },
  {
    name: "7",
    imageUrl: "https://pic.imgdb.cn/item/674810b5d0e0a243d4d8dddf.jpg"
  },
  {
    name: "8",
    imageUrl: "https://pic.imgdb.cn/item/674810c6d0e0a243d4d8de3f.jpg"
  },
  {
    name: "9",
    imageUrl: "https://pic.imgdb.cn/item/674810d5d0e0a243d4d8dea3.jpg"
  },
  {
    name: "10",
    imageUrl: "https://pic.imgdb.cn/item/674810efd0e0a243d4d8df55.jpg"
  }
];

Page({
  data: {
    titleUrl,
    watermelonUrl,
    circleUrl,
    bigUrl,
    smallUrl,
    sameUrl,
    questionUrl,
    confirmUrl,
    num1: 0,
    num2: 0,
    numImage1: '',
    numImage2: '',
    choice: '',
  },

  onLoad() {
    this.generateRandomNumbers();
  },

  generateRandomNumbers() {
    const num1 = Math.floor(Math.random() * 10 + 1);
    const num2 = Math.floor(Math.random() * 10 + 1);

    const numImage1 = imageData[num1].imageUrl;
    const numImage2 = imageData[num2].imageUrl;

    this.setData({
      num1,
      num2,
      numImage1,
      numImage2,
    });
  },

  onBig(){
    this.setData({
      circleUrl: this.data.bigUrl,
      choice: 'big',
    });
  },

  onSame(){
    this.setData({
      circleUrl: this.data.sameUrl,
      choice: 'same',
    });
  },

  onSmall(){
    this.setData({
      circleUrl: this.data.smallUrl,
      choice: 'small',
    });
  },

});