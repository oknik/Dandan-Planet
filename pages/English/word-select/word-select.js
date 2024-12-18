// pages/English/word-select/word-select.js
const titleUrl ='https://pic.imgdb.cn/item/674c8ec1d0e0a243d4dbab3d.png'
const themeData=[
  {
    id: 1,
    theme: "weather",
    url: 'https://pic.imgdb.cn/item/67613705d0e0a243d4e52fbd.png',
  },
  {
    id: 2,
    theme: "month",
    url: 'https://pic.imgdb.cn/item/67613736d0e0a243d4e52fd4.png',
  },
  {
    id: 3,
    theme: "food",
    url: 'https://pic.imgdb.cn/item/6761375cd0e0a243d4e52ff3.png',
  },
  {
    id: 4,
    theme: "color",
    url: 'https://pic.imgdb.cn/item/6761378ad0e0a243d4e53069.png',
  },
  {
    id: 5,
    theme: "clothing",
    url: 'https://pic.imgdb.cn/item/676147bbd0e0a243d4e55d1d.png',
  },
  {
    id: 6,
    theme: "feeling",
    url: 'https://pic.imgdb.cn/item/676137b3d0e0a243d4e530be.png',
  },
  {
    id: 7,
    theme: "season",
    url: 'https://pic.imgdb.cn/item/676137edd0e0a243d4e530d3.png',
  },
  {
    id: 8,
    theme: "preposition",
    url: 'https://pic.imgdb.cn/item/67613830d0e0a243d4e530fb.png',
  },
  {
    id: 9,
    theme: "transport",
    url: 'https://pic.imgdb.cn/item/676147fed0e0a243d4e55db9.png',
  },
  {
    id: 10,
    theme: "day",
    url: 'https://pic.imgdb.cn/item/67613871d0e0a243d4e5311a.png',
  },
  {
    id: 11,
    theme: "time",
    url: 'https://pic.imgdb.cn/item/67613896d0e0a243d4e53133.png',
  },
  {
    id: 12,
    theme: "sports",
    url: 'https://pic.imgdb.cn/item/676138b9d0e0a243d4e53163.png',
  },
  {
    id: 13,
    theme: "vegetable",
    url: 'https://pic.imgdb.cn/item/67614836d0e0a243d4e55e6a.png',
  },
  {
    id: 14,
    theme: "activity",
    url: 'https://pic.imgdb.cn/item/67614859d0e0a243d4e55ee0.png',
  },
  {
    id: 15,
    theme: "shape",
    url: 'https://pic.imgdb.cn/item/6761486dd0e0a243d4e55f09.png',
  },
]

Page({
  data: {
    titleUrl,
    themeData,
  },

  // 页面加载时调试输出 themeData
  onLoad() {
    console.log(this.data.themeData);  // 确保数据正常加载
  },

  // 处理主题图片点击事件
  onThemeClick(event) {
    const theme = event.currentTarget.dataset.theme; // 获取点击的主题
    console.log('Theme clicked:', theme); // 输出点击的主题
    // 跳转到学习单词页面，并传递theme参数
    wx.navigateTo({
      url: `/pages/English/word-learning/word-learning?theme=${theme}`,
    });
  },

})