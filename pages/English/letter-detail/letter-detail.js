// pages/English/letter-detail/letter-detail.js
const eraserUrl = 'https://pic.imgdb.cn/item/673cc329d29ded1a8c322f63.png';
const audioBtUrl = 'https://pic.imgdb.cn/item/6757e7f3d0e0a243d4e0f927.png';
const AllData = [
  {
    letter: "A",
    word: "apple",
    letterUrl: 'https://pic.imgdb.cn/item/6757e047d0e0a243d4e0f5dc.png',
    wordUrl: 'https://pic.imgdb.cn/item/6757e0b9d0e0a243d4e0f5ff.png',
    writeUrl: 'https://pic.imgdb.cn/item/6757e254d0e0a243d4e0f6ff.png',

  },
  {
    letter: "B",
    word: "banana",
    letterUrl: 'https://pic.imgdb.cn/item/6757e28cd0e0a243d4e0f706.png',
    wordUrl: 'https://pic.imgdb.cn/item/6757e2b5d0e0a243d4e0f714.png',
    writeUrl: 'https://pic.imgdb.cn/item/6757e30ad0e0a243d4e0f72a.png',
  },  
  {
    letter: "C",
    word: "",
    letterUrl: '',
    wordUrl: '',
    writeUrl: '',
  },
  {
    letter: "D",
    word: "",
    letterUrl: '',
    wordUrl: '',
    writeUrl: '',
  },
];


Page({
  data: {
    letter: '',  // 当前字母
    word: '',
    letterUrl: '',
    wordUrl: '',
    writeUrl:'',
    eraserUrl,
    audioBtUrl,
    isErasing: false, // 橡皮擦状态
  },
  canvas: null, // 保存 canvas 对象到类实例
  ctx: null,    // 保存绘图上下文到类实例
  isDrawing: false, // 绘图状态保存到类实例
  startX: 0,    // 开始绘制的 X 坐标
  startY: 0,    // 开始绘制的 Y 坐标
  backgroundImage: null, // 保存背景图片对象

  onLoad(options) {
    const letter = options.letter || '';
    const matchedItem = AllData.find(item => item.letter === letter);
    if (matchedItem) {
      this.setData({
        letter: matchedItem.letter,
        word: matchedItem.word,
        letterUrl: matchedItem.letterUrl,
        wordUrl: matchedItem.wordUrl,
        writeUrl: matchedItem.writeUrl,

      });
    }

    wx.createSelectorQuery()
      .select('#myCanvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        this.canvas = res[0].node;
        this.ctx = this.canvas.getContext('2d');

        const dpr = wx.getWindowInfo().pixelRatio;
        const width = res[0].width;
        const height = res[0].height;

        this.canvas.width = width * dpr;
        this.canvas.height = height * dpr;
        this.ctx.scale(dpr, dpr);

        // 初始化背景图片
        this.loadBackgroundImage(width, height, matchedItem.writeUrl);

        // 设置画笔参数
        this.ctx.strokeStyle = '#000000'; // 黑色线条
        this.ctx.lineWidth = 8;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
      });
  },

  // 加载背景图片函数
  loadBackgroundImage(width, height, url) {
    const backgroundImage = this.canvas.createImage();
    backgroundImage.onload = () => {
      this.backgroundImage = backgroundImage; // 保存背景图片对象
      this.ctx.drawImage(backgroundImage, 0, 0, width, height);
    };
    backgroundImage.src = url;
  },

  // 用户触摸开始
  handleTouchStart(event) {
    const touch = event.touches[0];
    this.isDrawing = true;
    this.startX = touch.x;
    this.startY = touch.y;

    // 开始新的绘制路径
    this.ctx.beginPath();
    this.ctx.moveTo(touch.x, touch.y);
  },

  // 用户触摸移动
  handleTouchMove(event) {
    if (!this.isDrawing) return;

    const touch = event.touches[0];

    if (this.isErasing) {
      // 橡皮擦模式 - 擦除部分背景
      this.erase(touch.x, touch.y);
    } else {
      // 正常绘制模式
      this.ctx.lineTo(touch.x, touch.y);
      this.ctx.stroke();
    }
  },

  // 用户触摸结束
  handleTouchEnd() {
    this.isDrawing = false;
  },

  // 橡皮擦功能
  // erase(x, y) {
  //   const eraseSize = 20; // 逻辑上的橡皮擦大小
  //   const dpr = wx.getWindowInfo().pixelRatio;
    
  //   // 从逻辑坐标转换为画布坐标
  //   const canvasX = x * dpr;
  //   const canvasY = y * dpr;
  
  //   // 计算适应 DPR 的擦除区域大小
  //   const adjustedEraseSize = eraseSize * dpr;
  
  //   // 清除擦除区域的背景图像
  //   this.ctx.clearRect(canvasX - adjustedEraseSize / 2, canvasY - adjustedEraseSize / 2, adjustedEraseSize, adjustedEraseSize);
  
  //   // 恢复背景图像，按照初始化时的比例绘制
  //   const bgWidth = this.backgroundImageWidth * dpr; // 根据 DPI 计算背景图的实际宽度
  //   const bgHeight = this.backgroundImageHeight * dpr; // 根据 DPI 计算背景图的实际高度
  
  //   // 绘制背景图像的一部分覆盖当前擦除位置
  //   this.ctx.drawImage(
  //     this.backgroundImage, // 源图像
  //     0, 0, this.backgroundImageWidth, this.backgroundImageHeight, // 源图像区域
  //     0, 0, bgWidth, bgHeight // 目标区域，保持相同的比例
  //   );
  // },
  // 橡皮擦功能
  erase(x, y) {
    const eraseSize = 20; // 逻辑上的橡皮擦大小
    const dpr = wx.getWindowInfo().pixelRatio;
    
    // 从逻辑坐标转换为画布坐标
    const canvasX = x * dpr;
    const canvasY = y * dpr;
  
    // 计算适应 DPR 的擦除区域大小
    const adjustedEraseSize = eraseSize * dpr;

    // 清除擦除区域的内容
    this.ctx.clearRect(canvasX - adjustedEraseSize / 2, canvasY - adjustedEraseSize / 2, adjustedEraseSize, adjustedEraseSize);
  
    // 恢复背景图像，按照初始化时的比例绘制
    const bgWidth = this.canvas.width; // 使用画布的实际宽度
    const bgHeight = this.canvas.height; // 使用画布的实际高度
  
    // 绘制背景图像的一部分覆盖当前擦除位置
    this.ctx.drawImage(
      this.backgroundImage, // 源图像
      0, 0, this.canvas.width, this.canvas.height, // 源图像区域
      0, 0, bgWidth, bgHeight // 目标区域，保持相同的比例
    );
  },

  toggleEraser() {
    const newMode = !this.data.isErasing;  // 切换模式
    console.log("切换模式:", newMode);  // 输出新模式
    this.setData({
      isErasing: newMode,
    });

    if (this.isErasing) {
      this.ctx.strokeStyle = '#ffffff00'; // 设置透明颜色，确保擦除
    } else {
      this.ctx.strokeStyle = '#000000'; // 恢复为黑色画笔
    }
  },

  // 清除整个画布并重新加载背景图片
  clearCanvas() {
    const dpr = wx.getWindowInfo().pixelRatio;
    const width = this.canvas.width / dpr;  // 恢复原始逻辑宽度
    const height = this.canvas.height / dpr; // 恢复原始逻辑高度

    // 清除整个画布并重新加载背景图片
    this.ctx.clearRect(0, 0, width * dpr, height * dpr);
    const writeUrl = this.data.writeUrl
    if (writeUrl) {
      this.loadBackgroundImage(width, height, writeUrl);
    }
  },

  // 播放字母或单词音频
  playAudio(event) {
    // 获取 data-type 属性值来判断是字母还是单词
    const type = event.currentTarget.dataset.type;
    // 先定义一个变量 text 用来存储要播放的文本
    let text = '';
    // 根据 type 设置 text
    if (type === 'letter') {
      text = this.data.letter; // 播放字母
    } else if (type === 'word') {
      text = this.data.word; // 播放单词
    }
    console.log(text);

    //将text转换为语音...


  },

});
