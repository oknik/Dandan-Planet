const app = getApp();
const nameUrl = 'https://pic.imgdb.cn/item/673488b3d29ded1a8c89b493.png'
const features = [
  {
    name: "语文",
    imageUrl: "https://pic.imgdb.cn/item/67349ebcd29ded1a8c9b8610.jpg"
  },
  {
    name: "数学",
    imageUrl: "https://pic.imgdb.cn/item/67349071d29ded1a8c8f8926.jpg"
  },
  {
    name: "英语",
    imageUrl: "https://pic.imgdb.cn/item/67349a3cd29ded1a8c9805dd.jpg"
  },
  {
    name: "绘本",
    imageUrl: "https://pic.imgdb.cn/item/6734a0ccd29ded1a8c9d2211.jpg"
  },
  {
    name: "？",
    imageUrl: "https://example.com/images/english_letters.png"
  },
  {
    name: "奖励",
    imageUrl: "https://pic.imgdb.cn/item/6734a15ed29ded1a8c9d9b90.jpg"
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
  }
});
