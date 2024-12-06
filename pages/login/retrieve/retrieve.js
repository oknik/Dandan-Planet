const backgroundUrl ='https://pic.imgdb.cn/item/6741f55bd29ded1a8c345248.jpg'
const nameUrl = 'https://pic.imgdb.cn/item/6721e774d29ded1a8c1f12cf.png'

Page({
    data:{
        backgroundUrl,
        nameUrl,
        disabled: true,
        btnstate: 'default',
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
})