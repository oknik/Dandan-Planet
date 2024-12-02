// pages/English/letter-select/letter-select.js
const titleUrl ='https://pic.imgdb.cn/item/674c8eb4d0e0a243d4dbab3c.png'
Page({
  data: {
    titleUrl,
    letters: [],  // 存储字母数据
    //lettersForCurrentPage: [],  // 当前页的字母数据
    currentPage: 1,  // 当前页数
    lettersPerPage: 9,  // 每页显示的字母数，3列 x 3行
    totalPages: 0,  // 总页数
    prevBtnImage: 'https://pic.imgdb.cn/item/67494eced0e0a243d4dab4ba.png',
    nextBtnImage: 'https://pic.imgdb.cn/item/67495522d0e0a243d4dabeac.png',
    prevBtnDisabledImage: 'https://pic.imgdb.cn/item/674954e7d0e0a243d4dabe3e.png',
    nextBtnDisabledImage: 'https://pic.imgdb.cn/item/674955b8d0e0a243d4dabfaa.png',
  },

  onLoad(){
    // 初始化字母数组，每个字母对应一张图片
    const letters = this.generateLetters();
    // console.log('Generated letters:', letters);  // 检查生成的字母数据
    const totalPages = Math.ceil(letters.length / this.data.lettersPerPage);
    // console.log('Total pages:', totalPages);  // 检查总页数是否正确

    // 初始化字母数据和分页信息
    this.setData({
      letters, 
      totalPages,
    }, () => {
      // 在 setData 完成后获取当前页数据并打印
      const lettersForCurrentPage = this.getLettersForPage(1);
      console.log('Letters for current page after setData:', lettersForCurrentPage);  // 打印当前页数据
      this.setData({
        lettersForCurrentPage
      });
    });
  },

  // 生成字母数据
  generateLetters() {
    const letterList = [];
    // 字母和图片URL的映射关系
    const letterImages = {
      A: 'https://pic.imgdb.cn/item/674d9907d0e0a243d4dc1141.png',
      B: 'https://pic.imgdb.cn/item/674da4ffd0e0a243d4dc1c97.png',
      C: 'https://pic.imgdb.cn/item/674da51dd0e0a243d4dc1cb9.png',
      D: 'https://pic.imgdb.cn/item/674da52ed0e0a243d4dc1cd0.png',
      E: 'https://pic.imgdb.cn/item/674da543d0e0a243d4dc1cda.png',
      F: 'https://pic.imgdb.cn/item/674da561d0e0a243d4dc1cfb.png',
      G: 'https://pic.imgdb.cn/item/674da596d0e0a243d4dc1d53.png',
      H: 'https://pic.imgdb.cn/item/674da5a8d0e0a243d4dc1d64.png',
      I: 'https://pic.imgdb.cn/item/674da5cdd0e0a243d4dc1d98.png',
      J: 'https://pic.imgdb.cn/item/674da5ebd0e0a243d4dc1db6.png',
      K: 'https://pic.imgdb.cn/item/674da600d0e0a243d4dc1dc9.png',
      L: 'https://pic.imgdb.cn/item/674da61cd0e0a243d4dc1df2.png',
      M: 'https://pic.imgdb.cn/item/674da62ad0e0a243d4dc1e00.png',
      N: 'https://pic.imgdb.cn/item/674da63ad0e0a243d4dc1e0b.png',
      O: 'https://pic.imgdb.cn/item/674da647d0e0a243d4dc1e0d.png',
      P: 'https://pic.imgdb.cn/item/674da658d0e0a243d4dc1e28.png',
      Q: 'https://pic.imgdb.cn/item/674da668d0e0a243d4dc1e39.png',
      R: 'https://pic.imgdb.cn/item/674da675d0e0a243d4dc1e4d.png',
      S: 'https://pic.imgdb.cn/item/674da682d0e0a243d4dc1e62.png',
      T: 'https://pic.imgdb.cn/item/674da6e4d0e0a243d4dc1eaf.png',
      U: 'https://pic.imgdb.cn/item/674da72ad0e0a243d4dc1f09.png',
      V: 'https://pic.imgdb.cn/item/674da74ed0e0a243d4dc1f18.png',
      W: 'https://pic.imgdb.cn/item/674da773d0e0a243d4dc1f3e.png',
      X: 'https://pic.imgdb.cn/item/674da781d0e0a243d4dc1f4c.png',
      Y: 'https://pic.imgdb.cn/item/674da791d0e0a243d4dc1f52.png',
      Z: 'https://pic.imgdb.cn/item/674da7a3d0e0a243d4dc1f6e.png',
    };
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    // 生成字母数据，字母与对应的图片
    alphabet.forEach(letter => {
      letterList.push({
        letter,
        imageUrl: letterImages[letter] || '',
      });
    });

    return letterList;
  },

  // 获取指定页的数据
  getLettersForPage(page) {
    const start = (page - 1) * this.data.lettersPerPage;
    const end = start + this.data.lettersPerPage;
    return this.data.letters.slice(start, end);
    const pageData = this.data.letters.slice(start, end);  // 获取当前页的数据
    console.log('Page data:', pageData);  // 打印当前页数据，检查切割结果
    return pageData;
  },

  // 上一页按钮点击事件
  prevPage() {
    if (this.data.currentPage > 1) {
      this.setData({
        currentPage: this.data.currentPage - 1
      }, () => {
        this.updatePage();
      });
    }
  },

  // 下一页按钮点击事件
  nextPage() {
    if (this.data.currentPage < this.data.totalPages) {
      this.setData({
        currentPage: this.data.currentPage + 1
      }, () => {
        this.updatePage();
      });
    }
  },

  // 更新当前页的字母数据
  updatePage() {
    const lettersForCurrentPage = this.getLettersForPage(this.data.currentPage);
    this.setData({
      lettersForCurrentPage
    });
    console.log(this.data.lettersForCurrentPage);  // 打印检查更新后的数据
  },

  // 字母点击事件
  onLetterClick(e) {
    const letter = e.currentTarget.dataset.letter;
    wx.navigateTo({
      url: `/pages/English/letter-detail/letter-detail?letter=${letter}`, // 跳转到字母学习页面
    });
  },

})