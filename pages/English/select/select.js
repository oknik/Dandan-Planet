// pages/English/select/select.js

const titleUrl ='https://pic.imgdb.cn/item/674c8ea4d0e0a243d4dbab3b.png'
const letterUrl='https://pic.imgdb.cn/item/674c8eb4d0e0a243d4dbab3c.png'
const wordUrl='https://pic.imgdb.cn/item/674c8ec1d0e0a243d4dbab3d.png'

Page({
  data: {
    titleUrl,
    letterUrl,
    wordUrl,
  },

  onLetter(){
    wx.navigateTo({
        url: '/pages/English/letter-select/letter-select'
      });
  },

  onWord(){
    wx.navigateTo({
      url: '/pages/English/word-select/word-select'
    });
  },

  
})