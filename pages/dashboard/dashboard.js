const app = getApp();
const nameUrl = 'https://pic.imgdb.cn/item/673488b3d29ded1a8c89b493.png'
const signInUrl = 'https://pic.imgdb.cn/item/675933e5d0e0a243d4e1b329.jpg'
const signInOKUrl = 'https://pic.imgdb.cn/item/675933fad0e0a243d4e1b333.jpg'
const apiBaseUrl=getApp().globalData.apiBaseUrl;
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
    name: "家长中心",
    imageUrl: "https://pic.imgdb.cn/item/67388efbd29ded1a8cb0baa0.png"
  }
];
const {audioPlayer}=require('../../utils/playaudio.js');
Page({
  data: {
    nameUrl,
    signUrl: signInUrl,
    features,
    userInfo: {},
  },
  
  onLoad() {
    const userInfo = app.globalData.userInfo.getUserInfo();
    this.setData({
      userInfo: userInfo,
      signUrl: userInfo.userSignStatus === true ? signInOKUrl : signInUrl // 根据签到状态设置链接
    });
    console.log(userInfo.userSignStatus)
    audioPlayer('/static/welcome.mp3')
  },

  signIn(){
    const userInfo = this.data.userInfo;
    wx.request({
      url: `${apiBaseUrl}/checkin/`, // 后端签到接口
      method: 'POST',
      data: { phone_number: userInfo.userPhone },
      success: (res) => {
        if (res.statusCode === 200) {
          this.setData({
            signUrl: signInOKUrl,
            'userInfo.userStars':res.data.response.stars
          });
          audioPlayer('/static/signin_success.mp3');
        } else {
          audioPlayer('/static/already_signed_in.mp3');
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '请求失败，请稍后再试',
          icon: 'none',
        });
        console.error('签到请求失败:', err);
      }
    });
  },

  goToPage: function (e) {
    console.log(e.currentTarget);
    const path = e.currentTarget.dataset.path
    wx.navigateTo({
      url: `/pages/${path}`
    });
  }
});