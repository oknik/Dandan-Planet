const titleUrl = 'https://pic.imgdb.cn/item/6741fb6ed29ded1a8c3991f0.png'
const numberUrl = 'https://pic.imgdb.cn/item/6741fdfed29ded1a8c3c02f0.png'
const compareUrl = 'https://pic.imgdb.cn/item/6741fe0dd29ded1a8c3c102e.png'
const caculateUrl = 'https://pic.imgdb.cn/item/6741fe20d29ded1a8c3c21ae.png'

Page({
    data: {
        titleUrl,
        numberUrl,
        compareUrl,
        caculateUrl
    },

    onNumber(){
        wx.navigateTo({
            url: '/pages/math/number/number'
          });
      },

    onCompare(){
        wx.navigateTo({
            url: '/pages/math/compare/compare'
          });
    },

    onCaculate(){
        wx.navigateTo({
            url: '/pages/math/caculate/caculate'
          });
    }
})