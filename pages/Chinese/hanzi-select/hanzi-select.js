// pages/Chinese/hanzi-select/hanzi-select.js
const titleUrl ='https://pic.imgdb.cn/item/6747e1e2d0e0a243d4d847fb.png'
const easyUrl='https://pic.imgdb.cn/item/6747e87fd0e0a243d4d85a2f.png'
const mediumUrl='https://pic.imgdb.cn/item/6747e8a8d0e0a243d4d85a95.png'
const hardUrl='https://pic.imgdb.cn/item/6747e8c6d0e0a243d4d85adc.png'

Page({
  data: {
    titleUrl,
    easyUrl,
    mediumUrl,
    hardUrl
  },

  onEasy(){
    wx.navigateTo({
        url: '/pages/Chinese/hanzi-page/hanzi-page?level=easy'
      });
  },

  onMedium(){
    wx.navigateTo({
      url: '/pages/Chinese/hanzi-page/hanzi-page?level=medium'
    });
  },

  onHard(){
    wx.navigateTo({
      url: '/pages/Chinese/hanzi-page/hanzi-page?level=hard'
    });
  }
})