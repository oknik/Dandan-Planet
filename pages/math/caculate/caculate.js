const titleUrl = 'https://pic.imgdb.cn/item/67485097d0e0a243d4da3849.jpg'
const audioBaseUrl='/static/number'
const {audioPlayer}=require('../../../utils/playaudio.js');
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
]
const imageData2 = [
  {
    name: "0",
    imageUrl: "https://pic.imgdb.cn/item/674b0259d0e0a243d4db7662.jpg",
    audioUrl:`${audioBaseUrl}/0.mp3`
  },
  {
    name: "1",
    imageUrl: "https://pic.imgdb.cn/item/674b0312d0e0a243d4db767b.jpg",
    audioUrl:`${audioBaseUrl}/1.mp3`
  },
  {
    name: "2",
    imageUrl: "https://pic.imgdb.cn/item/674b0393d0e0a243d4db768d.jpg",
    audioUrl:`${audioBaseUrl}/2.mp3`
  },
  {
    name: "3",
    imageUrl: "https://pic.imgdb.cn/item/674b039bd0e0a243d4db7691.jpg",
    audioUrl:`${audioBaseUrl}/3.mp3`
  },
  {
    name: "4",
    imageUrl: "https://pic.imgdb.cn/item/674b0404d0e0a243d4db769d.jpg",
    audioUrl:`${audioBaseUrl}/4.mp3`
  },
  {
    name: "5",
    imageUrl: "https://pic.imgdb.cn/item/674b040ed0e0a243d4db769e.jpg",
    audioUrl:`${audioBaseUrl}/5.mp3`
  },
  {
    name: "6",
    imageUrl: "https://pic.imgdb.cn/item/674b0417d0e0a243d4db769f.jpg",
    audioUrl:`${audioBaseUrl}/6.mp3`
  },
  {
    name: "7",
    imageUrl: "https://pic.imgdb.cn/item/674b0582d0e0a243d4db76c6.jpg",
    audioUrl:`${audioBaseUrl}/7.mp3`
  },
  {
    name: "8",
    imageUrl: "https://pic.imgdb.cn/item/674b058bd0e0a243d4db76c9.jpg",
    audioUrl:`${audioBaseUrl}/8.mp3`
  },
  {
    name: "9",
    imageUrl: "https://pic.imgdb.cn/item/674b0594d0e0a243d4db76ca.jpg",
    audioUrl:`${audioBaseUrl}/9.mp3`
  },
  {
    name: "10",
    imageUrl: "https://pic.imgdb.cn/item/674b059cd0e0a243d4db76cc.jpg",
    audioUrl:`${audioBaseUrl}/10.mp3`
  }
]
const operators = [
    {
      name: "+",
      imageUrl: "https://pic.imgdb.cn/item/67484cb2d0e0a243d4da2acb.jpg"
    },
    {
      name: "-",
      imageUrl: "https://pic.imgdb.cn/item/67484cbcd0e0a243d4da2af4.jpg"
    },
]
const equalUrl = 'https://pic.imgdb.cn/item/674825c9d0e0a243d4d94a66.jpg'
const circleUrl = 'https://pic.imgdb.cn/item/674829dfd0e0a243d4d95d20.png'
const watermelonUrl = 'https://pic.imgdb.cn/item/67480077d0e0a243d4d885d8.png'
const confirmUrl = 'https://pic.imgdb.cn/item/6748023bd0e0a243d4d88f35.jpg'
const nextUrl = 'https://pic.imgdb.cn/item/675b0da4d0e0a243d4e30b33.png'
const rightUrl = 'https://pic.imgdb.cn/item/675b077ad0e0a243d4e309f4.png'
const wrongUrl = 'https://pic.imgdb.cn/item/675b0796d0e0a243d4e309f6.png'
const apiBaseUrl=getApp().globalData.apiBaseUrl;
Page({
    data: {
      num1: 0,
      num2: 0,
      result: 0,
      operator: "+",
      titleUrl,
      imageData,
      imageData2,
      numImage1: "",
      numImage2: "",
      operatorImage: "",
      equalUrl,
      circleUrl,
      watermelonUrl,
      confirmUrl,
      nextUrl, 
      rightUrl,
      wrongUrl,
    },
  
    onLoad() {
      this.generateMathProblem();
    },
  
    generateMathProblem() {
        let num1, num2, result, operator, operatorImage;
  
        operator = Math.random() > 0.5 ? "+" : "-";
        operatorImage = operator === "+" ? operators[0].imageUrl : operators[1].imageUrl;

        if (operator === "+") {
            num1 = Math.floor(Math.random() * 9) + 1;
            num2 = Math.floor(Math.random() * (10 - num1)) + 1;
        } else {
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * num1)+ 1;
        }
  
        this.setData({
            num1,
            num2,
            result,
            operator,
            numImage1: imageData[num1].imageUrl,
            numImage2: imageData[num2].imageUrl,
            operatorImage
        });
    },

    onChoose(event) {
        const index = event.currentTarget.dataset.index;
        const selectedImage = this.data.imageData2[index].imageUrl;
        this.setData({
          circleUrl: selectedImage,
          result: index
        });
        audioPlayer(this.data.imageData2[index].audioUrl)
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
        const { num1, num2, result,operator } = this.data;
    
        wx.request({
            url: `${apiBaseUrl}/math/calculate`,
            method: 'POST',
            data: {
                a: num1,
                b: num2,
                c: result,
                operator: operator,
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
                if(result){
                  audioPlayer(`/static/right.mp3`)
                  this.showRightToast()
                }
                else{
                  this.showWrongToast()
                  wx.request({
                    url: `${apiBaseUrl}/tts/get-text`,
                    method: 'POST',
                    data: {
                        text: `哎呀答错啦，正确答案是${correctAnswer}`,
                        voice_type: 2,
                    },
                    success: (res) => {
                        const response = res.data.response;
                        const filename = response.data;
                        console.log(res.data.response)
                        console.log(filename)
                        audioPlayer(`/audio/${filename}`)
                    },
                    fail: (err) => {
                        console.error('请求失败', err);
                    }
                });
              }    
            },
            fail: (err) => {
                console.error('请求失败', err);
            }
        });
    },

    onNext() {
      // 重置页面状态
      this.setData({
        circleUrl: circleUrl,
        choice: '',
        numImage1: '',
        numImage2: '',
        operatorImage: '',
        showRightImage: false,
        showWrongImage: false,
        result: 0
      });
      
      // 生成新的随机数并更新页面
      this.generateMathProblem()
    }
  
  });