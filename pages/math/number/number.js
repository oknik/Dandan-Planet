const nameUrl = 'https://pic.imgdb.cn/item/673488b3d29ded1a8c89b493.png'
const titleUrl = 'https://pic.imgdb.cn/item/673865b6d29ded1a8c8fcc3d.jpg'
const imageData = [
  {
    name: "zero",
    path: "zero/zero",
    imageUrl: "https://pic.imgdb.cn/item/67384037d29ded1a8c6fd15e.png"
  },
  {
    name: "one",
    path: "one/one",
    imageUrl: "https://pic.imgdb.cn/item/6736ef7fd29ded1a8c5e0874.png"
  },
  {
    name: "two",
    path: "two/two",
    imageUrl: "https://pic.imgdb.cn/item/6736efc7d29ded1a8c5e3d05.png"
  },
  {
    name: "three",
    path: "three/three",
    imageUrl: "https://pic.imgdb.cn/item/6736f1dbd29ded1a8c5fee27.png"
  },
  {
    name: "four",
    path: "four/four",
    imageUrl: "https://pic.imgdb.cn/item/6736f106d29ded1a8c5f09a8.png"
  },
  {
    name: "five",
    path: "five/five",
    imageUrl: "https://pic.imgdb.cn/item/6736f19cd29ded1a8c5fb35b.png"
  },
  {
    name: "six",
    path: "six/six",
    imageUrl: "https://pic.imgdb.cn/item/6738404fd29ded1a8c6fe931.png"
  },
  {
    name: "seven",
    path: "seven/seven", 
    imageUrl: "https://pic.imgdb.cn/item/67384063d29ded1a8c6ffa46.png"
  },
  {
    name: "eight",
    path: "eight/eight",
    imageUrl: "https://pic.imgdb.cn/item/67384072d29ded1a8c7005c2.png"
  },
  {
    name: "nine",
    path: "nine/nine",
    imageUrl: "https://pic.imgdb.cn/item/6738407dd29ded1a8c700f7d.png"
  }
];

Page ({
    data: {
        nameUrl,
        titleUrl,
        imageData
      },
    
      onImageTap: function (e) {
        const path = e.currentTarget.dataset.path;
        const name = this.data.imageData.find(item => item.path === path).name;
        wx.navigateTo({
          url: `/pages/math/detail/detail?name=${encodeURIComponent(name)}`
        });
      }
}) 