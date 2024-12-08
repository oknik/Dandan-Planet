const apiBaseUrl = getApp().globalData.apiBaseUrl;

function sendVerificationCode(phoneNumber, callback) {
  if (!phoneNumber) {
    wx.showToast({
      title: '请输入手机号',
      icon: 'none',
      duration: 2000
    });
    return;
  }

  wx.request({
    url: `${apiBaseUrl}/auth/send_verification`,
    method: 'POST',
    data: {
      phone_number: phoneNumber
    },
    success: (res) => {
      if (res.statusCode === 200) {
        wx.showToast({
          title: '验证码已发送',
          icon: 'success',
          duration: 2000
        });
        // 执行回调，传递验证码
        callback(res.data.response.code);
        console.log(res.data.response.code)
      } else {
        wx.showToast({
          title: res.data.response.message,
          icon: 'none',
          duration: 2000
        });
      }
    },
    fail: (err) => {
      wx.showToast({
        title: '发送失败，请重试',
        icon: 'none',
        duration: 2000
      });
    }
  });
}
module.exports = {
  sendVerificationCode
};
