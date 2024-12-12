const titleUrl = 'https://pic.imgdb.cn/item/6747fbe6d0e0a243d4d8721d.png'
const watermelonUrl = 'https://pic.imgdb.cn/item/67480077d0e0a243d4d885d8.png'
const circleUrl = 'https://pic.imgdb.cn/item/674829dfd0e0a243d4d95d20.png'
const bigUrl= 'https://pic.imgdb.cn/item/674afed5d0e0a243d4db75cc.jpg'
const smallUrl = 'https://pic.imgdb.cn/item/674afee9d0e0a243d4db75d3.jpg'
const sameUrl = 'https://pic.imgdb.cn/item/674afef2d0e0a243d4db75d4.jpg'
const questionUrl = 'https://pic.imgdb.cn/item/674825dad0e0a243d4d94a7e.jpg'
const confirmUrl = 'https://pic.imgdb.cn/item/6748023bd0e0a243d4d88f35.jpg'
const nextUrl = 'https://pic.imgdb.cn/item/675b0da4d0e0a243d4e30b33.png'
const rightUrl = 'https://pic.imgdb.cn/item/675b077ad0e0a243d4e309f4.png'
const wrongUrl = 'https://pic.imgdb.cn/item/675b0796d0e0a243d4e309f6.png'
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
const apiBaseUrl=getApp().globalData.apiBaseUrl;
const {audioPlayer}=require('../../../utils/playaudio.js');
const audioBaseUrl='/static'
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
    nextUrl,
    rightUrl,
    wrongUrl,
    showRightImage: false,
    showWrongImage: false,
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
    audioPlayer(`${audioBaseUrl}/big.mp3`)
  },

  onSame(){
    this.setData({
      circleUrl: this.data.sameUrl,
      choice: 'same',
    });
    audioPlayer(`${audioBaseUrl}/same.mp3`)
  },

  onSmall(){
    this.setData({
      circleUrl: this.data.smallUrl,
      choice: 'small',
    });
    audioPlayer(`${audioBaseUrl}/small.mp3`)
  },

  showRightToast() {
    this.setData({
      showRightImage: true
    });

    // 自动关闭弹框
    setTimeout(() => {
      this.setData({
        showRightImage: false
      });
    }, 2000); // 持续2秒后关闭
  },

  showWrongToast() {
    this.setData({
      showWrongImage: true
    });

    // 自动关闭弹框
    setTimeout(() => {
      this.setData({
        showWrongImage: false
      });
    }, 2000); // 持续2秒后关闭
  },

  onConfirm() {
    const { num1, num2, choice } = this.data;

    wx.request({
        url: `${apiBaseUrl}/math/compare`,
        method: 'POST',
        data: {
            a: num1,
            b: num2,
            operator: choice
        },
        success: (res) => {
            const response = res.data.response;
            const result = response.result;
            const correctAnswer = response.correct_answer;
            this.setData({
                result,
                correctAnswer
            });
            //返回了结果和正确答案
            console.log(result,correctAnswer)
            if(result) {
              audioPlayer(`${audioBaseUrl}/right.mp3`)
              this.showRightToast()
              /*
              wx.showToast({
                title: '答对啦!',
                icon: 'success',
                duration: 2000
              })*/
            } else {
              this.showWrongToast()
              /*
              wx.showToast({
                title: '答错啦!',
                icon: 'error',
                duration: 2000
              })*/
              if(correctAnswer==='big')
                audioPlayer(`${audioBaseUrl}/false/big.mp3`)
              else if(correctAnswer==='small')
                audioPlayer(`${audioBaseUrl}/false/small.mp3`)
              else
                audioPlayer(`${audioBaseUrl}/false/same.mp3`)
            }
        },
        fail: (err) => {
            console.error('请求失败', err);
        }
    });
  },

  onNext() {
    this.setData({
      circleUrl: circleUrl,
      choice: '',
    });
    this.generateRandomNumbers();
  }

}); 