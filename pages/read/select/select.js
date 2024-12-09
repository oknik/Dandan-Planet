const titleUrl = 'https://pic.imgdb.cn/item/6754571ed0e0a243d4dfcc29.png'
const chineseUrl = 'https://pic.imgdb.cn/item/67546358d0e0a243d4dfce6b.png'
const englishUrl = 'https://pic.imgdb.cn/item/67546378d0e0a243d4dfce77.png'
const chineseBookData = [
    {
        id: 1,
        name: '水果跑啊跑',
        url: 'https://pic.imgdb.cn/item/675557aed0e0a243d4dfed34.jpg',
    },
    {   
        id: 2,
        name: '我要骑大马',
        url: 'https://pic.imgdb.cn/item/67545d13d0e0a243d4dfcd7f.jpg',
    },
]
const englishBookData = [
    {
        id: 3,
        name: 'Mike helps out',
        url: 'https://pic.imgdb.cn/item/67546012d0e0a243d4dfce04.jpg',
    },
    {   
        id: 4,
        name: 'Splat',
        url: 'https://pic.imgdb.cn/item/6754648cd0e0a243d4dfcf1f.png',        
    },
]


Page({
    data: {
        titleUrl,
        chineseUrl,
        chineseBookData,
        englishUrl,
        englishBookData,
    },

    onImageTap: function(event) {
        const itemId = event.currentTarget.dataset.id;
        wx.navigateTo({
          url: `/pages/read/detail/detail?id=${itemId}`
        });
      }
})