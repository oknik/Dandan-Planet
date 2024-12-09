// pages/register/register.js
const newUrl ='https://pic.imgdb.cn/item/6741f55bd29ded1a8c345248.jpg'
const nameUrl = 'https://pic.imgdb.cn/item/6721e774d29ded1a8c1f12cf.png'
const seeUrl = 'https://pic.imgdb.cn/item/67262438d29ded1a8cafcac2.png'
const unseeUrl = 'https://pic.imgdb.cn/item/6726243cd29ded1a8cafcdb2.png'
const apiBaseUrl=getApp().globalData.apiBaseUrl;
const { sendVerificationCode } = require('../../../utils/verification.js');
Page({
  data: {
    newUrl: newUrl,
    nameUrl: nameUrl,
    seeUrl: seeUrl,
    unseeUrl: unseeUrl,
    userName: '',
    password: '',
    birthdate: '2010-09-01',
    gender: '', // 记录性别
    userPhone: '',
    code: '',
    disabled: true, // 注册按钮初始为禁用
    btnstate: 'default', // 注册按钮默认样式
    verificationCode: '', // 验证码
    timer: null, // 计时器
    countdown: 60, // 验证码倒计时
  },

  // 监听用户姓名输入
  onUserNameChange(e) {
    this.setData({
      userName: e.detail.value
    });
    //console.log('用户名输入：', e.detail.value);
    this.updateButtonState();
  },

  // 监听密码输入
  onPasswordChange(e) {
    this.setData({
      password: e.detail.value
    });
    //console.log('密码输入：', e.detail.value);
    this.updateButtonState();
  },

  onBirthdateChange: function(e) {
    // 获取选择的生日
    const birthdate = e.detail.value;
    //console.log('picker发送选择改变，携带值为', birthdate)
    this.setData({
      birthdate: birthdate
    });
  },

  // 监听性别选择
  onGenderChange(e) {
    this.setData({
      gender: e.detail.value
    });
    //console.log('性别选择：', e.detail.value);
    this.updateButtonState();
  },

  // 监听手机号输入
  onPhoneChange(e) {
    this.setData({
      userPhone: e.detail.value
    });
    //console.log('手机号输入：', e.detail.value);
    this.updateButtonState();
  },

  // 监听验证码输入
  onCodeChange(e) {
    this.setData({
      code: e.detail.value
    });
    //console.log('验证码输入：', e.detail.value);
    this.updateButtonState();
  },

  // 判断按钮是否可以点击
  updateButtonState() {
    const { userName, password, birthdate, gender, userPhone, code } = this.data;
    console.log('判断按钮是否可用:', { userName, password, birthdate, gender, userPhone, code });
    if (userName && password && birthdate && gender && userPhone && code) {
      this.setData({
        disabled: false,
        btnstate: 'primary', // 按钮变为蓝色
      });
      //console.log('按钮可以点击');
    } else {
      this.setData({
        disabled: true,
        btnstate: 'default', // 按钮恢复默认样式
      });
      //console.log('按钮不可点击');
    }
  },

  // 提交表单
  formSubmit(e) {
    // 提交注册信息
    const { userName, password, birthdate, gender, userPhone, code } = this.data;
    console.log('提交的数据：', { userName, password, birthdate, gender, userPhone, code });
    // 假设验证码正确
    if (this.data.verificationCode === this.data.code) {
      wx.request({
        url: `${apiBaseUrl}/auth/register`,  // 后端接口地址
        method: 'POST',
        data: {
          username: userName,
          password: password,
          birthdate: birthdate,
          gender: gender,
          phone_number: userPhone,
          code: code
        },
        success: (res) => {
          if (res.statusCode === 201) {
            wx.showToast({
              title: '注册成功',
              icon: 'success',
              duration: 2000,
            });
            wx.navigateTo({
              url: '/pages/index/index'
            });
          } else {
            wx.showToast({
              title: res.data.response.message,
              icon: 'none',
              duration: 2000,
            });
          }
        },
        fail: (err) => {
          wx.showToast({
            title: '注册失败，请稍后重试',
            icon: 'none',
            duration: 2000
          });
        }
      });
    } else {
      wx.showToast({
        title: '验证码错误',
        icon: 'none',
        duration: 2000,
      });
    }
  },

  // 重置表单
  formReset(e) {
    this.setData({
      userName: '',
      password: '',
      birthdate: '2010-09-01',
      gender: '',
      userPhone: '',
      code: '',
      disabled: true,
      btnstate: 'default'
    });
  },
  // 倒计时功能
  startCountdown() {
    let countdown = this.data.countdown;
    const timer = setInterval(() => {
      countdown--;
      this.setData({
        countdown
      });

      if (countdown <= 0) {
        clearInterval(timer);
        this.setData({
          countdown: 60,
        });
      }
    }, 1000);

    this.setData({
      timer
    });
  },
  // 点击验证码按钮
  onCodeClick() {
    sendVerificationCode(this.data.userPhone, (code) => {
      this.setData({
        verificationCode: code
      });
      // 开始倒计时
      //this.startCountdown();
    });
  },
})