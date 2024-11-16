const nameUrl = 'https://pic.imgdb.cn/item/673488b3d29ded1a8c89b493.png'
const titleUrl = 'https://pic.imgdb.cn/item/673865b6d29ded1a8c8fcc3d.jpg'
const imageData = [
  {
    path: "zero/zero",
    imageUrl: "https://pic.imgdb.cn/item/67384037d29ded1a8c6fd15e.png"
  },
  {
    path: "one/one",
    imageUrl: "https://pic.imgdb.cn/item/6736ef7fd29ded1a8c5e0874.png"
  },
  {
    path: "two/two",
    imageUrl: "https://pic.imgdb.cn/item/6736efc7d29ded1a8c5e3d05.png"
  },
  {
    path: "three/three",
    imageUrl: "https://pic.imgdb.cn/item/6736f1dbd29ded1a8c5fee27.png"
  },
  {
    path: "four/four",
    imageUrl: "https://pic.imgdb.cn/item/6736f106d29ded1a8c5f09a8.png"
  },
  {
    path: "five/five",
    imageUrl: "https://pic.imgdb.cn/item/6736f19cd29ded1a8c5fb35b.png"
  },
  {
    path: "six/six",
    imageUrl: "https://pic.imgdb.cn/item/6738404fd29ded1a8c6fe931.png"
  },
  {
    path: "seven/seven", 
    imageUrl: "https://pic.imgdb.cn/item/67384063d29ded1a8c6ffa46.png"
  },
  {
    path: "eight/eight",
    imageUrl: "https://pic.imgdb.cn/item/67384072d29ded1a8c7005c2.png"
  },
  {
    path: "nine/nine",
    imageUrl: "https://pic.imgdb.cn/item/6738407dd29ded1a8c700f7d.png"
  }
];
/*
const imageData = [
  { number: "zero", url: 'https://pic.imgdb.cn/item/67384037d29ded1a8c6fd15e.png' },
  { number: "one", url: 'https://pic.imgdb.cn/item/6736ef7fd29ded1a8c5e0874.png' },
  { number: "two", url: 'https://pic.imgdb.cn/item/6736efc7d29ded1a8c5e3d05.png' },
  { number: 'three', url: 'https://pic.imgdb.cn/item/6736f1dbd29ded1a8c5fee27.png' },
  { number: 'four', url: 'https://pic.imgdb.cn/item/6736f106d29ded1a8c5f09a8.png' },
  { number: 'five', url: 'https://pic.imgdb.cn/item/6736f19cd29ded1a8c5fb35b.png' },
  { number: 'six', url: 'https://pic.imgdb.cn/item/6738404fd29ded1a8c6fe931.png' },
  { number: 'seven', url: 'https://pic.imgdb.cn/item/67384063d29ded1a8c6ffa46.png' },
  { number: 'eight', url: 'https://pic.imgdb.cn/item/67384072d29ded1a8c7005c2.png' },
  { number: 'nine', url: 'https://pic.imgdb.cn/item/6738407dd29ded1a8c700f7d.png' }
]
*/

Page ({
    data: {
        nameUrl,
        titleUrl,
        imageData
      },
    
      onImageTap: function (e) {
        const path = e.currentTarget.dataset.path;
        console.log(path)
        wx.navigateTo({
          url: `/pages/math/zero/zero`  // 根据路径跳转
        });
      }
}) 