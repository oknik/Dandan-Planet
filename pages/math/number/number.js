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
    imageUrl: "https://pic.imgdb.cn/item/674203b2d29ded1a8c408cb6.png"
  },
  {
    name: "two",
    path: "two/two",
    imageUrl: "https://pic.imgdb.cn/item/67420400d29ded1a8c40cf51.png"
  },
  {
    name: "three",
    path: "three/three",
    imageUrl: "https://pic.imgdb.cn/item/674205a9d29ded1a8c42810d.png"
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
    imageUrl: "https://pic.imgdb.cn/item/67420664d29ded1a8c430997.png"
  },
  {
    name: "seven",
    path: "seven/seven", 
    imageUrl: "https://pic.imgdb.cn/item/67420707d29ded1a8c437a23.png"
  },
  {
    name: "eight",
    path: "eight/eight",
    imageUrl: "https://pic.imgdb.cn/item/67420781d29ded1a8c43d57c.png"
  },
  {
    name: "nine",
    path: "nine/nine",
    imageUrl: "https://pic.imgdb.cn/item/674207ebd29ded1a8c44371e.png"
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