// pages/Chinese/select/select.js
const titleUrl ='https://pic.imgdb.cn/item/674dc556d0e0a243d4dc3629.png'
const pinyinUrl='https://pic.imgdb.cn/item/674dc948d0e0a243d4dc36f1.png'
const hanziUrl='https://pic.imgdb.cn/item/674dc6c9d0e0a243d4dc3683.png'
const poetryUrl='https://pic.imgdb.cn/item/674dc998d0e0a243d4dc36f9.png'

Page({
  data: {
    titleUrl,
    pinyinUrl,
    hanziUrl,
    poetryUrl
  },

  onHanzi(){
    wx.navigateTo({
        url: '/pages/Chinese/hanzi-select/hanzi-select'
      });
  },

  onPinyin(){
    wx.navigateTo({
      url: '/pages/Chinese/pinyin/pinyin'
    });
  },

  onPoetry(){
    
  }
})