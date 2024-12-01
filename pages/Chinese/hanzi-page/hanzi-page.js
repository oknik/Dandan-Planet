// pages/Chinese/hanzi-page/hanzi-page.js
const createHanziWriterContext = require('hanzi-writer-miniprogram');

Page({
  data: {
    titleUrl: '',
    easyChar: [
      '一','二','三','四','五','六','七','八','九','十',
      '大','小','多','少','人','车','工','左','右','上',
      '爸','妈','白','云','日','月','太','阳','牛','马',
      '金','木','水','火','土','天','田','地','衣','花',
      '内','外','下','公','母','爷','奶','兴','子','女',
    ],
    mediumChar: [
      '家','国','同','有','无','济','电','我','你','他',
      '学','习','体','民','得','因','果','由','其','前',
      '后','里','化','高','分','成','可','年','月','日',
      '时','秒','是','从','物','先','现','好','坏','说',
      '产','正','反','心','气','向','明','位','问','育',
    ],
    hardChar: [
      '商','越','复','影','酸','甜','苦','辣','咸','感',
      '情','理','省','市','区','县','东','西','南','北',
      '率','劳','动','光','荣','素','荤','书','诗','音',
      '医','院','食','堂','警','察','消','防','政','府',
      '族','养','自','律','红','橙','黄','绿','青','蓝',
    ],
    characters: [],  // 默认字符数组为空
    currentPage: 1,  // 当前页数
    charactersPerPage: 25,  // 每页显示的汉字数
    totalPages: 0,  // 总页数
    prevBtnImage: 'https://pic.imgdb.cn/item/67494eced0e0a243d4dab4ba.png',
    nextBtnImage: 'https://pic.imgdb.cn/item/67495522d0e0a243d4dabeac.png',
    prevBtnDisabledImage: 'https://pic.imgdb.cn/item/674954e7d0e0a243d4dabe3e.png',
    nextBtnDisabledImage: 'https://pic.imgdb.cn/item/674955b8d0e0a243d4dabfaa.png',
  },

  onLoad(options) {
    // 获取传递的 level 参数
    const { level } = options;  
    let titleUrl = '';
    let selectedCharacters = []; // 选择的汉字数组

    // 根据传递的 level 设置不同的内容
    if (level === 'easy') {
      titleUrl = 'https://pic.imgdb.cn/item/6747e87fd0e0a243d4d85a2f.png';   
      selectedCharacters = this.data.easyChar;  // 设置 easy 字符数组    
    } else if (level === 'medium') {
      titleUrl = 'https://pic.imgdb.cn/item/6747e8a8d0e0a243d4d85a95.png';     
      selectedCharacters = this.data.mediumChar;  // 设置 medium 字符数组
    } else if (level === 'hard') {
      titleUrl = 'https://pic.imgdb.cn/item/6747e8c6d0e0a243d4d85adc.png';  
      selectedCharacters = this.data.hardChar;  // 设置 hard 字符数组
    }

    // 分页设置
    const totalPages = Math.ceil(selectedCharacters.length / this.data.charactersPerPage);

    this.setData({
      titleUrl,      
      characters: selectedCharacters,  // 设置要展示的汉字
      totalPages,  // 设置总页数
    },() => {
      this.updatePage();
    });
  },

  // 更新页面的汉字
  updatePage() {
    const { currentPage, charactersPerPage, characters } = this.data;
    const start = (currentPage - 1) * charactersPerPage;
    const end = start + charactersPerPage;

    const currentCharacters = characters.slice(start, end);  // 获取当前页的汉字

    this.setData({ currentCharacters }, () => {
      this.drawCharacters();  // 绘制当前页的汉字
    });
  },

  // 绘制当前页的所有汉字
  drawCharacters() {
    const characters = this.data.currentCharacters;
    characters.forEach((character, index) => {
      this.drawCharacter(character, index);
    });
  },

  // 绘制单个汉字
  drawCharacter: function(character, index) {
    // 使用唯一的 id 为每个汉字绘制上下文
    this.writerCtx = createHanziWriterContext({
      id: `hz-writer-${index}`,  // 每个汉字的 id 必须唯一
      character: character,
      page: this,
    });
  },

  // 上一页按钮点击事件
  prevPage() {
    if (this.data.currentPage > 1) {
      this.setData({ currentPage: this.data.currentPage - 1 }, () => {
        this.updatePage();
      });
    }
  },

  // 下一页按钮点击事件
  nextPage() {
    if (this.data.currentPage < this.data.totalPages) {
      this.setData({ currentPage: this.data.currentPage + 1 }, () => {
        this.updatePage();
      });
    }
  },

  // 汉字点击事件，跳转到学习页面
  onCharacterClick(e) {
    const character = e.currentTarget.dataset.character;  // 获取点击的汉字
    console.log(character);
    wx.navigateTo({
      url: `/pages/Chinese/hanzi-learn/hanzi-learn?character=${character}`,
    });
  }
})