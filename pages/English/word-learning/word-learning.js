// pages/English/word-learning/word-learning.js
const wordData=[
  {
    theme: "weather",
    themeUrl: 'https://pic.imgdb.cn/item/676173f0d0e0a243d4e582b0.png',
    words:[
      {
        word:"sunny",
        wordUrl:'https://pic.imgdb.cn/item/67619e49d0e0a243d4e58c42.jpg',
      },
      {
        word:"rainy",
        wordUrl:'https://pic.imgdb.cn/item/67619e71d0e0a243d4e58c44.jpg',
      },
      {
        word: "cloudy",
        wordUrl: 'https://pic.imgdb.cn/item/67626102d0e0a243d4e5a7b8.jpg'
      },
      {
        word: "snowy",
        wordUrl: 'https://pic.imgdb.cn/item/67626133d0e0a243d4e5a7bf.jpg'
      },
      {
        word: "stormy",
        wordUrl: 'https://pic.imgdb.cn/item/67626172d0e0a243d4e5a7cd.jpg',
      }
    ]
  },
  {
    theme: "month",
    themeUrl: 'https://pic.imgdb.cn/item/6761a3dad0e0a243d4e58dda.png',
    words:[
      {
        word:"January",
        wordUrl:'https://pic.imgdb.cn/item/676261d1d0e0a243d4e5a7ea.jpg',
      },
      {
        word:"February",
        wordUrl:'https://pic.imgdb.cn/item/676261e1d0e0a243d4e5a7f2.jpg',
      },
      {
        word:"March",
        wordUrl:'https://pic.imgdb.cn/item/676261f4d0e0a243d4e5a7f5.jpg',
      },
      {
        word: "April",
        wordUrl: 'https://pic.imgdb.cn/item/67626216d0e0a243d4e5a7f9.jpg'
      },
      {
        word: "May",
        wordUrl: 'https://pic.imgdb.cn/item/67626236d0e0a243d4e5a7fd.jpg',
      },
      {
        word:"June",
        wordUrl: 'https://pic.imgdb.cn/item/67626271d0e0a243d4e5a804.jpg',
      },
      {
        word: "July",
        wordUrl: 'https://pic.imgdb.cn/item/67626326d0e0a243d4e5a83d.jpg'
      },
      {
        word: "August",
        wordUrl: 'https://pic.imgdb.cn/item/6762633ed0e0a243d4e5a841.jpg'
      },
      {
        word: "September",
        wordUrl: 'https://pic.imgdb.cn/item/6762634ad0e0a243d4e5a844.jpg'
      },
      {
        word: "October",
        wordUrl: 'https://pic.imgdb.cn/item/67626355d0e0a243d4e5a847.jpg'
      },
      {
        word: "November",
        wordUrl: 'https://pic.imgdb.cn/item/67626370d0e0a243d4e5a84c.jpg'
      },
      {
        word: "December",
        wordUrl: 'https://pic.imgdb.cn/item/67626393d0e0a243d4e5a85b.jpg'
      }
    ]
  },
  {
    theme: "food",
    themeUrl: 'https://pic.imgdb.cn/item/676263e8d0e0a243d4e5a86e.png',
    words:[
      {
        word: "egg",
        wordUrl:'https://pic.imgdb.cn/item/67626483d0e0a243d4e5a890.jpg'
      },
      {
        word: "cookie",
        wordUrl:'https://pic.imgdb.cn/item/6762648fd0e0a243d4e5a891.jpg'
      },
      {
        word: "bread",
        wordUrl:'https://pic.imgdb.cn/item/676264a2d0e0a243d4e5a896.jpg'
      },
      {
        word: "cake",
        wordUrl:'https://pic.imgdb.cn/item/676264bbd0e0a243d4e5a899.jpg'
      },
      {
        word: "burger",
        wordUrl:'https://pic.imgdb.cn/item/676264cad0e0a243d4e5a89b.jpg'
      },
      {
        word: "candy",
        wordUrl:'https://pic.imgdb.cn/item/676264e6d0e0a243d4e5a8a0.jpg'
      },
    ]
  },
  {
    theme: "color",
    themeUrl: 'https://pic.imgdb.cn/item/676265fdd0e0a243d4e5a905.png',
    words: [
      {
        word:"yellow",
        wordUrl:'https://pic.imgdb.cn/item/676265a4d0e0a243d4e5a8df.png', 
      },
      {
        word: "black",
        wordUrl: 'https://pic.imgdb.cn/item/67626632d0e0a243d4e5a90f.png',
      },
      {
        word: "blue",
        wordUrl: 'https://pic.imgdb.cn/item/67626670d0e0a243d4e5a92f.png',
      },
      {
        word: "red",
        wordUrl: 'https://pic.imgdb.cn/item/676266a1d0e0a243d4e5a941.png'
      },
      {
        word: "purple",
        wordUrl: 'https://pic.imgdb.cn/item/676266ced0e0a243d4e5a961.png'
      },
      {
        word: "white",
        wordUrl: 'https://pic.imgdb.cn/item/676266f1d0e0a243d4e5a96d.png'
      },
      {
        word: "green",
        wordUrl: 'https://pic.imgdb.cn/item/67626717d0e0a243d4e5a97f.png'
      },
      {
        word:"orange",
        wordUrl: 'https://pic.imgdb.cn/item/6762674fd0e0a243d4e5a98b.png'
      },
      {
        word: "pink",
        wordUrl: 'https://pic.imgdb.cn/item/6762677cd0e0a243d4e5a993.png'
      }
    ]
  },
  {
    theme: "clothing",
    themeUrl: 'https://pic.imgdb.cn/item/676267dcd0e0a243d4e5a9b6.png',
    words:[
      {
        word:"cap",
        wordUrl:'https://pic.imgdb.cn/item/67626852d0e0a243d4e5a9e7.png'
      },
      {
        word:"coat",
        wordUrl:'https://pic.imgdb.cn/item/6762686ad0e0a243d4e5a9f5.png'
      },
      {
        word:"dress",
        wordUrl:'https://pic.imgdb.cn/item/67626885d0e0a243d4e5a9fc.png'
      },
      {
        word:"gloves",
        wordUrl:'https://pic.imgdb.cn/item/67626914d0e0a243d4e5aa3b.png'
      },
      {
        word:"hoody",
        wordUrl:'https://pic.imgdb.cn/item/6762696cd0e0a243d4e5aa50.png'
      },
      {
        word:"jeans",
        wordUrl:'https://pic.imgdb.cn/item/676269a3d0e0a243d4e5aa55.png'
      },
      {
        word:"shirt",
        wordUrl:'https://pic.imgdb.cn/item/676269d9d0e0a243d4e5aa60.png'
      },
    ]
  },
  {
    theme: "feeling",
    themeUrl: 'https://pic.imgdb.cn/item/67626b0dd0e0a243d4e5aaf0.png',
    words:[
      {
        word: "tired",
        wordUrl: 'https://pic.imgdb.cn/item/67626b85d0e0a243d4e5ab43.png'
      },
      {
        word: "angry",
        wordUrl: 'https://pic.imgdb.cn/item/67626ba1d0e0a243d4e5ab49.png'
      },
      {
        word: "happy",
        wordUrl: 'https://pic.imgdb.cn/item/67626bb9d0e0a243d4e5ab50.png'
      },
      {
        word: "hungry",
        wordUrl: 'https://pic.imgdb.cn/item/67626bdfd0e0a243d4e5ab57.png'
      },
      {
        word: "sad",
        wordUrl: 'https://pic.imgdb.cn/item/67626bf9d0e0a243d4e5ab5b.png'
      },
      {
        word: "scared",
        wordUrl: 'https://pic.imgdb.cn/item/67626c1cd0e0a243d4e5ab61.png'
      },
    ]
  },
  {
    theme:"season",
    themeUrl: 'https://pic.imgdb.cn/item/67626c71d0e0a243d4e5ab9b.png',
    words:[
      {
        word:"spring",
        wordUrl: 'https://pic.imgdb.cn/item/67626cb6d0e0a243d4e5abca.png'
      },
      {
        word:"summer",
        wordUrl: 'https://pic.imgdb.cn/item/67626ce0d0e0a243d4e5abd3.png'
      },
      {
        word:"autumn",
        wordUrl: 'https://pic.imgdb.cn/item/67626cfdd0e0a243d4e5abd6.png'
      },
      {
        word:"winter",
        wordUrl: 'https://pic.imgdb.cn/item/67626d22d0e0a243d4e5abe2.png'
      },
    ]
  },
  {
    theme: "preposition",
    themeUrl: 'https://pic.imgdb.cn/item/67626dc7d0e0a243d4e5ac22.png',
    words:[
      {
        word: "in",
        wordUrl: 'https://pic.imgdb.cn/item/67626e0ad0e0a243d4e5ac45.png',
      },
      {
        word: "on",
        wordUrl: 'https://pic.imgdb.cn/item/67626e29d0e0a243d4e5ac4e.png',
      },
      {
        word: "above",
        wordUrl: 'https://pic.imgdb.cn/item/67626e4bd0e0a243d4e5ac62.png',
      },
      {
        word: "between",
        wordUrl: 'https://pic.imgdb.cn/item/67626e60d0e0a243d4e5ac6d.png',
      },
      {
        word: "behind",
        wordUrl: 'https://pic.imgdb.cn/item/67626e87d0e0a243d4e5ac77.png',
      },
      {
        word: "under",
        wordUrl: 'https://pic.imgdb.cn/item/67626eb7d0e0a243d4e5ac91.png',
      },
    ]
  },
  {
    theme: "transport",
    themeUrl: 'https://pic.imgdb.cn/item/67626f2bd0e0a243d4e5acae.png',
    words: [
      {
        word: "bicycle",
        wordUrl: 'https://pic.imgdb.cn/item/67626f4cd0e0a243d4e5acc2.png'
      },
      {
        word: "bus",
        wordUrl: 'https://pic.imgdb.cn/item/67626fcad0e0a243d4e5aced.png'
      },
      {
        word: "car",
        wordUrl: 'https://pic.imgdb.cn/item/67626fe8d0e0a243d4e5acf3.png'
      },
      {
        word: "ferry",
        wordUrl: 'https://pic.imgdb.cn/item/67627015d0e0a243d4e5acff.png'
      },
      {
        word: "taxi",
        wordUrl: 'https://pic.imgdb.cn/item/67627057d0e0a243d4e5ad27.png'
      },
    ]
  },
  {
    theme:"day",
    themeUrl: 'https://pic.imgdb.cn/item/676270b9d0e0a243d4e5ad2c.png',
    words: [
      {
        word: "Monday",
        wordUrl: 'https://pic.imgdb.cn/item/67627105d0e0a243d4e5ad4a.png'
      },
      {
        word: "Tuesday",
        wordUrl: 'https://pic.imgdb.cn/item/67627143d0e0a243d4e5ad6f.png'
      },
      {
        word: "Wednesday",
        wordUrl: 'https://pic.imgdb.cn/item/6762716ad0e0a243d4e5ae8e.png'
      },
      {
        word: "Thursday",
        wordUrl: 'https://pic.imgdb.cn/item/6762717fd0e0a243d4e5ae93.png'
      },
      {
        word: "Friday",
        wordUrl: 'https://pic.imgdb.cn/item/6762719dd0e0a243d4e5ae99.png'
      },
      {
        word: "Saturday",
        wordUrl: 'https://pic.imgdb.cn/item/676271b6d0e0a243d4e5aea3.png'
      },
      {
        word: "Sunday",
        wordUrl: 'https://pic.imgdb.cn/item/676271ced0e0a243d4e5aeaf.png'
      },
    ]
  },
  {
    theme: "time",
    themeUrl: 'https://pic.imgdb.cn/item/67627249d0e0a243d4e5aec8.png',
    words: [
      {
        word: "twelve o'clock",
        wordUrl: 'https://pic.imgdb.cn/item/676272f4d0e0a243d4e5af48.png'
      },
      {
        word: "ten past twelve",
        wordUrl: 'https://pic.imgdb.cn/item/6762731dd0e0a243d4e5af55.png'
      },
      {
        word: "nine thirty",
        wordUrl: 'https://pic.imgdb.cn/item/67627380d0e0a243d4e5af87.png'
      }
    ]
  },
  {
    theme:"sports",
    themeUrl: 'https://pic.imgdb.cn/item/676273fcd0e0a243d4e5afb2.png',
    words: [
      {
        word: "badminton",
        wordUrl: 'https://pic.imgdb.cn/item/67627446d0e0a243d4e5afcb.png',
      },
      {
        word: "baseball",
        wordUrl: 'https://pic.imgdb.cn/item/67627463d0e0a243d4e5afde.png',
      },
      {
        word: "basketball",
        wordUrl: 'https://pic.imgdb.cn/item/67627473d0e0a243d4e5afe6.png',
      },
      {
        word: "football",
        wordUrl: 'https://pic.imgdb.cn/item/6762749dd0e0a243d4e5aff3.png',
      },
      {
        word: "skiing",
        wordUrl: 'https://pic.imgdb.cn/item/676274c9d0e0a243d4e5b00d.png',
      },
      {
        word: "swimming",
        wordUrl: 'https://pic.imgdb.cn/item/676274e6d0e0a243d4e5b019.png',
      },
    ]
  },
  {
    theme: "vegetable",
    themeUrl: 'https://pic.imgdb.cn/item/67627575d0e0a243d4e5b036.png',
    words: [
      {
        word: "carrot",
        wordUrl: 'https://pic.imgdb.cn/item/676275add0e0a243d4e5b04d.png'
      },
      {
        word: "corn",
        wordUrl: 'https://pic.imgdb.cn/item/676275cfd0e0a243d4e5b05b.png'
      },
      {
        word: "cucumber",
        wordUrl: 'https://pic.imgdb.cn/item/676275e8d0e0a243d4e5b060.png'
      },
      {
        word: "mushroom",
        wordUrl: 'https://pic.imgdb.cn/item/67627615d0e0a243d4e5b08b.png'
      },
      {
        word: "pepper",
        wordUrl: 'https://pic.imgdb.cn/item/6762763ad0e0a243d4e5b09e.png'
      },
      {
        word: "spinach",
        wordUrl: 'https://pic.imgdb.cn/item/6762765fd0e0a243d4e5b0b8.png'
      },
    ]
  },
  {
    theme:"activity",
    themeUrl:'https://pic.imgdb.cn/item/676276ecd0e0a243d4e5b103.png',
    words: [
      {
        word: "climbing",
        wordUrl: 'https://pic.imgdb.cn/item/67627700d0e0a243d4e5b10e.png'
      },
      {
        word: "cooking",
        wordUrl: 'https://pic.imgdb.cn/item/67627732d0e0a243d4e5b133.png'
      },
      {
        word: "dancing",
        wordUrl: 'https://pic.imgdb.cn/item/6762774fd0e0a243d4e5b137.png'
      },
      {
        word: "reading",
        wordUrl: 'https://pic.imgdb.cn/item/6762776ed0e0a243d4e5b13c.png'
      },
    ]
  },
  {
    theme: "shape",
    themeUrl: 'https://pic.imgdb.cn/item/676277b9d0e0a243d4e5b149.png',
    words:[
      {
        word: "triangle",
        wordUrl: 'https://pic.imgdb.cn/item/67627808d0e0a243d4e5b164.png'
      },
      {
        word: "circle",
        wordUrl: 'https://pic.imgdb.cn/item/67627824d0e0a243d4e5b168.png'
      },
      {
        word: "heart",
        wordUrl: 'https://pic.imgdb.cn/item/6762784ed0e0a243d4e5b170.png'
      },
      {
        word: "rectangle",
        wordUrl: 'https://pic.imgdb.cn/item/67627868d0e0a243d4e5b17d.png'
      },
      {
        word: "square",
        wordUrl: 'https://pic.imgdb.cn/item/67627888d0e0a243d4e5b183.png'
      },
    ]
  }
]

Page({
  data: {
    theme: '',  // 存储传递过来的主题
    words: [],  // 当前主题的单词列表
    themeUrl: '',  // 当前主题图片
    currentPage: 1,  // 当前页
    totalPages: 1,  // 总页数
    prevBtnImage: 'https://pic.imgdb.cn/item/67494eced0e0a243d4dab4ba.png',
    nextBtnImage: 'https://pic.imgdb.cn/item/67495522d0e0a243d4dabeac.png',
    prevBtnDisabledImage: 'https://pic.imgdb.cn/item/674954e7d0e0a243d4dabe3e.png',
    nextBtnDisabledImage: 'https://pic.imgdb.cn/item/674955b8d0e0a243d4dabfaa.png',
    touchStartX: 0, // 记录触摸起始位置
    touchEndX: 0, // 记录触摸结束位置
  },

  onLoad(options) {
    console.log('Received options:', options);
    const { theme } = options;  // 获取传递过来的参数
    console.log('Received theme:', theme);

    // 查找当前主题的单词数据
    const themeData = wordData.find(item => item.theme === theme);
    if (themeData) {
      this.setData({
        theme,  // 设置主题
        words: themeData.words,  // 设置当前主题的单词数据
        themeUrl: themeData.themeUrl,  // 设置主题图片
        totalPages: themeData.words.length,  // 设置总页数
      });
      this.updateWordImage();  // 更新当前页的单词信息
    }
  },

  // 更新当前页的单词
  updateWordImage() {
    const { words, currentPage } = this.data;
    const currentWord = words[currentPage - 1];  // 获取当前页的单词
    this.setData({
      currentWord,  // 更新当前单词
    });
  },

  // 下一页
  nextPage() {
    const { currentPage, totalPages } = this.data;
    if (currentPage < totalPages) {
      this.setData({
        currentPage: currentPage + 1,  // 翻到下一页
      });
      this.updateWordImage();  // 更新单词信息
    }
  },

  // 上一页
  prevPage() {
    const { currentPage } = this.data;
    if (currentPage > 1) {
      this.setData({
        currentPage: currentPage - 1,  // 翻到上一页
      });
      this.updateWordImage();  // 更新单词信息
    }
  },

  // 触摸开始事件
  touchStart(e) {
    this.setData({
      touchStartX: e.changedTouches[0].pageX, // 记录触摸开始位置
    });
  },

  // 触摸结束事件
  touchEnd(e) {
    this.setData({
      touchEndX: e.changedTouches[0].pageX, // 记录触摸结束位置
    });
    this.handleSwipe(); // 处理滑动逻辑
  },

  // 处理滑动逻辑
  handleSwipe() {
    const { touchStartX, touchEndX } = this.data;
    const swipeDistance = touchEndX - touchStartX; // 计算水平滑动的距离

    if (swipeDistance > 50) {
      // 向右滑动，上一页
      this.prevPage();
    } else if (swipeDistance < -50) {
      // 向左滑动，下一页
      this.nextPage();
    }
  },

  // 播放单词音频
  playAudio(){
    const { currentWord  } = this.data;
    const text = currentWord.word;
    console.log(text);
    // text存放的是需要转语音的文本


    
  }
})