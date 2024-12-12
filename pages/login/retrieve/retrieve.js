const backgroundUrl ='https://pic.imgdb.cn/item/6741f55bd29ded1a8c345248.jpg'
const nameUrl = 'https://pic.imgdb.cn/item/6721e774d29ded1a8c1f12cf.png'
const apiBaseUrl=getApp().globalData.apiBaseUrl;
const { sendVerificationCode } = require('../../../utils/verification.js');
Page({
    data:{
        backgroundUrl,
        nameUrl,
        disabled: true,
        btnstate: 'default',
        verificationCode: '',
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

    onPasswordChange(e) {
        this.setData({
          password: e.detail.value
        });
        //console.log('密码输入：', e.detail.value);
        this.updateButtonState();
    },

    // 判断按钮是否可以点击
    updateButtonState() {
        const { userPhone, code, password } = this.data;
        console.log('判断按钮是否可用:', { userPhone, code, password });
        if (userPhone && code && password) {
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
    formSubmit(e) {
      // 提交注册信息
      const { userPhone, code, password } = this.data;
      console.log('提交的数据：', { userPhone, code, password  });
      // 假设验证码正确
      if (this.data.verificationCode === this.data.code) {
        wx.request({
          url: `${apiBaseUrl}/auth/retrieve`,  // 后端接口地址
          method: 'POST',
          data: {
            password: password,
            phone_number: userPhone,
          },
          success: (res) => {
            if (res.statusCode === 200) {
              wx.showToast({
                title: '重置密码成功',
                icon: 'success',
                duration: 2000,
              });
              setTimeout(() => {
                wx.navigateTo({
                    url: '/pages/index/index'
                });
              }, 500);
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