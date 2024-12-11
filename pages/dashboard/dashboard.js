const app = getApp();
const nameUrl = 'https://pic.imgdb.cn/item/673488b3d29ded1a8c89b493.png'
const signInUrl = 'https://pic.imgdb.cn/item/675933e5d0e0a243d4e1b329.jpg'
const signInOKUrl = 'https://pic.imgdb.cn/item/675933fad0e0a243d4e1b333.jpg'
const features = [
  {
    path: "Chinese/select/select",
    name: "语文童话镇",
    imageUrl: "https://pic.imgdb.cn/item/67349ebcd29ded1a8c9b8610.jpg",
  },
  {
    path: "math/select/select",
    name: "数学小达人",
    imageUrl: "https://pic.imgdb.cn/item/67349071d29ded1a8c8f8926.jpg"
  },
  {
    path: "English/select/select",
    name: "英语梦工厂",
    imageUrl: "https://pic.imgdb.cn/item/67349a3cd29ded1a8c9805dd.jpg"
  },
  {
    path: "read/select/select",
    name: "悦读绘本园",
    imageUrl: "https://pic.imgdb.cn/item/6734a0ccd29ded1a8c9d2211.jpg"
  },
  {
    path: "draw/draw",
    name: "我是小画家",
    imageUrl: "https://pic.imgdb.cn/item/67485ce5d0e0a243d4da5f78.jpg"
  },
  {
    path: "selfCenter",
    name: "个人中心",
    imageUrl: "https://pic.imgdb.cn/item/67388efbd29ded1a8cb0baa0.png"
  }
];
const {audioPlayer}=require('../../utils/playaudio.js');
Page({
  data: {
    nameUrl,
    signInUrl,
    signInOKUrl,
    features,
    userInfo: {},
  },
  
  onLoad() {
    const userInfo = app.globalData.userInfo.getUserInfo();
    this.setData({
      userInfo: userInfo
    });
    audioPlayer('/static/welcome.mp4')
  },

  signIn(){
    this.setData({
      signInUrl: signInOKUrl
    })
  },

  goToPage: function (e) {
    console.log(e.currentTarget);
    const path = e.currentTarget.dataset.path
    wx.navigateTo({
      url: `/pages/${path}`
    });
  }
});