// index.js
const backgroundUrl = 'https://pic.imgdb.cn/item/6725bebdd29ded1a8c600e6d.jpg'
const newUrl ='https://pic.imgdb.cn/item/6741f55bd29ded1a8c345248.jpg'
const nameUrl = 'https://pic.imgdb.cn/item/6721e774d29ded1a8c1f12cf.png'
const seeUrl = 'https://pic.imgdb.cn/item/67262438d29ded1a8cafcac2.png'
const unseeUrl = 'https://pic.imgdb.cn/item/6726243cd29ded1a8cafcdb2.png'

Page({
  data: {
    backgroundUrl: backgroundUrl,
    newUrl: newUrl,
    nameUrl: nameUrl,
    activeTab: 'password',
    userPhone: '',
    userPassword: '',
    seeUrl: seeUrl,
    unseeUrl: unseeUrl,
    passwordVisible: true,
    userCode: '',
  },

  switchTab(event) {
    const { name } = event.currentTarget.dataset;
    this.setData({
      activeTab: name
    });
  },

  togglePasswordVisibility() {
    this.setData({
      passwordVisible: !this.data.passwordVisible
    });
  },

  sendCode() {

  },

  onLogin(){
    wx.navigateTo({
        url: '/pages/dashboard/dashboard'
      });
  },

  onRegister(){

  }
})
