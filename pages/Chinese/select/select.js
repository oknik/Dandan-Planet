// pages/Chinese/select/select.js
const titleUrl ='https://pic.imgdb.cn/item/6747c6e1d0e0a243d4d7b727.png'
const pinyinUrl='https://pic.imgdb.cn/item/6747d580d0e0a243d4d808c4.png'
const hanziUrl='https://pic.imgdb.cn/item/6747d2bad0e0a243d4d7f5f6.png'
const poetryUrl='https://pic.imgdb.cn/item/6747d770d0e0a243d4d8155b.png'

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