const app = getApp();
const nameUrl = 'https://pic.imgdb.cn/item/673488b3d29ded1a8c89b493.png'
const features = [
  {
    path: "Chinese/characters",
    name: "语文",
    imageUrl: "https://pic.imgdb.cn/item/67349ebcd29ded1a8c9b8610.jpg",
  },
  {
    path: "math/select/select",
    name: "数学",
    imageUrl: "https://pic.imgdb.cn/item/67349071d29ded1a8c8f8926.jpg"
  },
  {
    path: "english",
    name: "英语",
    imageUrl: "https://pic.imgdb.cn/item/67349a3cd29ded1a8c9805dd.jpg"
  },
  {
    path: "pictureBook",
    name: "绘本",
    imageUrl: "https://pic.imgdb.cn/item/6734a0ccd29ded1a8c9d2211.jpg"
  },
  {
    path: "reward",
    name: "奖励",
    imageUrl: "https://pic.imgdb.cn/item/6734a15ed29ded1a8c9d9b90.jpg"
  },
  {
    path: "selfCenter",
    name: "个人中心",
    imageUrl: "https://pic.imgdb.cn/item/67388efbd29ded1a8cb0baa0.png"
  }
];

Page({
  data: {
    nameUrl,
    features,
    userInfo: {},
  },
  
  onLoad() {
    const userInfo = app.globalData.userInfo.getUserInfo();
    this.setData({
      userInfo: userInfo
    });
  },

  goToPage: function (e) {
    console.log(e.currentTarget);
    const path = e.currentTarget.dataset.path
    wx.navigateTo({
      url: `/pages/${path}`
    });
  }
});

