// index.js
const backgroundUrl = 'https://pic.imgdb.cn/item/6741f55bd29ded1a8c345248.jpg'
const nameUrl = 'https://pic.imgdb.cn/item/6721e774d29ded1a8c1f12cf.png'
const seeUrl = 'https://pic.imgdb.cn/item/67262438d29ded1a8cafcac2.png'
const unseeUrl = 'https://pic.imgdb.cn/item/6726243cd29ded1a8cafcdb2.png'
const apiBaseUrl=getApp().globalData.apiBaseUrl;
const { sendVerificationCode } = require('../../utils/verification.js');

Page({
  data: {
    backgroundUrl: backgroundUrl,
    nameUrl: nameUrl,
    activeTab: 'code',
    userPhone: '',
    userPassword: '',
    seeUrl: seeUrl,
    unseeUrl: unseeUrl,
    passwordVisible: true,
    userCode: '',
  },

  onPhoneInput(event) {
    this.setData({
      userPhone: event.detail.value
    });
  },

  onCodeInput(event){
    this.setData({
      userCode: event.detail.value
    });
  },

  onPasswordInput(event) {
    this.setData({
      userPassword: event.detail.value
    });
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
    sendVerificationCode(this.data.userPhone, (code) => {
      this.setData({
        verificationCode: code
      });
      // 开始倒计时
      //this.startCountdown();
    });
  },

  onForgotPassword(){
    wx.navigateTo({
        url: '/pages/login/retrieve/retrieve'
      });
  },
  
  onLogin(){
    console.log(this.data.activeTab)
    console.log(apiBaseUrl)
    if (this.data.activeTab === 'password') {
      if (!this.data.userPhone || !this.data.userPassword) {
        wx.showToast({
          title: '请输入手机号和密码',
          icon: 'none',
        });
        return;
      }
      this.loginWithPassword();
    } else if (this.data.activeTab === 'code') {
      if (!this.data.userPhone || !this.data.userCode) {
        wx.showToast({
          title: '请输入手机号和验证码',
          icon: 'none',
        });
        return;
      }
      this.loginWithCode();
    }
  },

  // onLogin(){
  //   wx.navigateTo({
  //       url: '/pages/dashboard/dashboard'
  //     });
  // },

  loginWithPassword() {
    wx.request({
      url: `${apiBaseUrl}/auth/login`,
      method: 'POST',
      data: {
        phone_number: this.data.userPhone,
        password: this.data.userPassword,
      },
      success: (res) => {
        if (res.statusCode === 200) {
          const userData = res.data.response;
          const User = getApp().globalData.User;
          const user = new User(userData.username, userData.level, userData.stars,userData.sign_status,userData.userphone);
          getApp().setUserInfo(user);
          wx.navigateTo({
            url: '/pages/dashboard/dashboard', 
          });
        } else {
          wx.showToast({
            title: res.data.message || '登录失败',
            icon: 'none',
          });
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '请求失败，请稍后再试',
          icon: 'none',
        });
        console.error('登录请求失败:', err);
      },
    });
  },

  loginWithCode() {
    wx.request({
      url: `${apiBaseUrl}/auth/login_with_code`,
      method: 'POST',
      data: {
        phone_number: this.data.userPhone,
        code: this.data.userCode,
      },
      success: (res) => {
        if (res.statusCode === 200) {
          const userData = res.data.response;
          const User = getApp().globalData.User;
          console.log(userData.sign_status)
          const user = new User(userData.username, userData.level, userData.stars,userData.sign_status,userData.userphone);
          getApp().setUserInfo(user);
          wx.navigateTo({
            url: '/pages/dashboard/dashboard', 
          });
        } else {
          wx.showToast({
            title: res.data.message || '验证码登录失败',
            icon: 'none',
          });
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '请求失败，请稍后再试',
          icon: 'none',
        });
        console.error('验证码登录请求失败:', err);
      },
    });
  },

  onRegister(){
    wx.navigateTo({
      url: '/pages/login/register/register'
    });
  }
})