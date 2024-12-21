// pages/English/letter-detail/letter-detail.js
const eraserUrl = 'https://pic.imgdb.cn/item/673cc329d29ded1a8c322f63.png';
const audioBtUrl = 'https://pic.imgdb.cn/item/6757e7f3d0e0a243d4e0f927.png';
const apiBaseUrl=getApp().globalData.apiBaseUrl;
const {audioPlayer}=require('../../../utils/playaudio.js');
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
    word: "cat",
    letterUrl: 'https://pic.imgdb.cn/item/67580ca7d0e0a243d4e13125.png',
    wordUrl: 'https://pic.imgdb.cn/item/67580cddd0e0a243d4e131dc.png',
    writeUrl: 'https://pic.imgdb.cn/item/67580d0fd0e0a243d4e13285.png',
  },
  {
    letter: "D",
    word: "dog",
    letterUrl: 'https://pic.imgdb.cn/item/67582df5d0e0a243d4e17904.png',
    wordUrl: 'https://pic.imgdb.cn/item/67582e2ad0e0a243d4e17914.png',
    writeUrl: 'https://pic.imgdb.cn/item/67582e68d0e0a243d4e17918.png',
  },
  {
    letter: "E",
    word: "elephant",
    letterUrl: 'https://pic.imgdb.cn/item/67582fb3d0e0a243d4e17974.png',
    wordUrl: 'https://pic.imgdb.cn/item/67582ffed0e0a243d4e1798d.png',
    writeUrl: 'https://pic.imgdb.cn/item/6758303ed0e0a243d4e1799d.png',
  },
  {
    letter: "F",
    word: "frog",
    letterUrl: 'https://pic.imgdb.cn/item/675831add0e0a243d4e179e6.png',
    wordUrl: 'https://pic.imgdb.cn/item/675831e0d0e0a243d4e179f1.png',
    writeUrl: 'https://pic.imgdb.cn/item/67583210d0e0a243d4e179fc.png',
  },
  {
    letter: "G",
    word: "girl",
    letterUrl: 'https://pic.imgdb.cn/item/67583345d0e0a243d4e17a3e.png',
    wordUrl: 'https://pic.imgdb.cn/item/6758336dd0e0a243d4e17a42.png',
    writeUrl: 'https://pic.imgdb.cn/item/675833a9d0e0a243d4e17a50.png',
  },
  {
    letter: "H",
    word: "home",
    letterUrl: 'https://pic.imgdb.cn/item/67583523d0e0a243d4e17a93.png',
    wordUrl: 'https://pic.imgdb.cn/item/67583583d0e0a243d4e17aa8.png',
    writeUrl: 'https://pic.imgdb.cn/item/675835b1d0e0a243d4e17aae.png',
  },
  {
    letter: "I",
    word: "ice",
    letterUrl: 'https://pic.imgdb.cn/item/675836dfd0e0a243d4e17b30.png',
    wordUrl: 'https://pic.imgdb.cn/item/6758371dd0e0a243d4e17b37.png',
    writeUrl: 'https://pic.imgdb.cn/item/67583759d0e0a243d4e17b4c.png',
  },
  {
    letter: "J",
    word: "juice",
    letterUrl: 'https://pic.imgdb.cn/item/67583895d0e0a243d4e17b97.png',
    wordUrl: 'https://pic.imgdb.cn/item/675838bbd0e0a243d4e17b9f.png',
    writeUrl: 'https://pic.imgdb.cn/item/675838e0d0e0a243d4e17ba2.png',
  },
  {
    letter: "K",
    word: "kite",
    letterUrl: 'https://pic.imgdb.cn/item/67583a29d0e0a243d4e17bff.png',
    wordUrl: 'https://pic.imgdb.cn/item/67583a51d0e0a243d4e17c07.png',
    writeUrl: 'https://pic.imgdb.cn/item/67583a7fd0e0a243d4e17c17.png',
  },
  {
    letter: "L",
    word: "love",
    letterUrl: 'https://pic.imgdb.cn/item/67583bbcd0e0a243d4e17c71.png',
    wordUrl: 'https://pic.imgdb.cn/item/67583befd0e0a243d4e17c82.png',
    writeUrl: 'https://pic.imgdb.cn/item/67583dced0e0a243d4e17d17.png',
  },
  {
    letter: "M",
    word: "moon",
    letterUrl: 'https://pic.imgdb.cn/item/67583f91d0e0a243d4e17d8f.png',
    wordUrl: 'https://pic.imgdb.cn/item/67583fb3d0e0a243d4e17d96.png',
    writeUrl: 'https://pic.imgdb.cn/item/67583fdcd0e0a243d4e17da7.png',
  },
  {
    letter: "N",
    word: "nurse",
    letterUrl: 'https://pic.imgdb.cn/item/675844fcd0e0a243d4e17eb5.png',
    wordUrl: 'https://pic.imgdb.cn/item/6758454dd0e0a243d4e17ebf.png',
    writeUrl: 'https://pic.imgdb.cn/item/67584579d0e0a243d4e17ed1.png',
  },

  {
    letter: "O",
    word: "orange",
    letterUrl: 'https://pic.imgdb.cn/item/6758468ad0e0a243d4e17f27.png',
    wordUrl: 'https://pic.imgdb.cn/item/67584f65d0e0a243d4e1823a.png',
    writeUrl: 'https://pic.imgdb.cn/item/67584fa9d0e0a243d4e18244.png',
  },
  {
    letter: "P",
    word: "pig",
    letterUrl: 'https://pic.imgdb.cn/item/6758518fd0e0a243d4e1828c.png',
    wordUrl: 'https://pic.imgdb.cn/item/675851c9d0e0a243d4e18291.png',
    writeUrl: 'https://pic.imgdb.cn/item/67585220d0e0a243d4e182a4.png',
  },
  {
    letter: "Q",
    word: "question",
    letterUrl: 'https://pic.imgdb.cn/item/675853c9d0e0a243d4e182ff.png',
    wordUrl: 'https://pic.imgdb.cn/item/67585419d0e0a243d4e18315.png',
    writeUrl: 'https://pic.imgdb.cn/item/6758543ed0e0a243d4e18324.png',
  },
  {
    letter: "R",
    word: "rabbit",
    letterUrl: 'https://pic.imgdb.cn/item/67585878d0e0a243d4e1846a.png',
    wordUrl: 'https://pic.imgdb.cn/item/675858a6d0e0a243d4e18481.png',
    writeUrl: 'https://pic.imgdb.cn/item/6758591ed0e0a243d4e184a0.png',
  },
  {
    letter: "S",
    word: "snake",
    letterUrl: 'https://pic.imgdb.cn/item/67585e35d0e0a243d4e18582.png',
    wordUrl: 'https://pic.imgdb.cn/item/67585e5dd0e0a243d4e1858c.png',
    writeUrl: 'https://pic.imgdb.cn/item/67585eaad0e0a243d4e185a8.png',
  },
  {
    letter: "T",
    word: "tea",
    letterUrl: 'https://pic.imgdb.cn/item/67586056d0e0a243d4e185e4.png',
    wordUrl: 'https://pic.imgdb.cn/item/6758607dd0e0a243d4e185ea.png',
    writeUrl: 'https://pic.imgdb.cn/item/675860a5d0e0a243d4e185ee.png',
  },
  {
    letter: "U",
    word: "universe",
    letterUrl: 'https://pic.imgdb.cn/item/67586245d0e0a243d4e1861e.png',
    wordUrl: 'https://pic.imgdb.cn/item/67586266d0e0a243d4e18625.png',
    writeUrl: 'https://pic.imgdb.cn/item/675862b8d0e0a243d4e18637.png',
  },
  {
    letter: "V",
    word: "violin",
    letterUrl: 'https://pic.imgdb.cn/item/67586397d0e0a243d4e18671.png',
    wordUrl: 'https://pic.imgdb.cn/item/6758647cd0e0a243d4e186ad.png',
    writeUrl: 'https://pic.imgdb.cn/item/675864abd0e0a243d4e186b5.png',
  },
  {
    letter: "W",
    word: "wolf",
    letterUrl: 'https://pic.imgdb.cn/item/675865a0d0e0a243d4e186e9.png',
    wordUrl: 'https://pic.imgdb.cn/item/6758662fd0e0a243d4e18712.png',
    writeUrl: 'https://pic.imgdb.cn/item/6758668bd0e0a243d4e1874b.png',
  },
  {
    letter: "X",
    word: "x-ray",
    letterUrl: 'https://pic.imgdb.cn/item/67586827d0e0a243d4e187d3.png',
    wordUrl: 'https://pic.imgdb.cn/item/675869dcd0e0a243d4e18805.png',
    writeUrl: 'https://pic.imgdb.cn/item/675869f6d0e0a243d4e18806.png',
  },
  {
    letter: "Y",
    word: "yogurt",
    letterUrl: 'https://pic.imgdb.cn/item/67586adad0e0a243d4e18829.png',
    wordUrl: 'https://pic.imgdb.cn/item/67586af5d0e0a243d4e18832.png',
    writeUrl: 'https://pic.imgdb.cn/item/67586b1fd0e0a243d4e18834.png',
  },
  {
    letter: "Z",
    word: "zebra",
    letterUrl: 'https://pic.imgdb.cn/item/67586da2d0e0a243d4e188aa.png',
    wordUrl: 'https://pic.imgdb.cn/item/67586dd2d0e0a243d4e188b6.png',
    writeUrl: 'https://pic.imgdb.cn/item/67586e02d0e0a243d4e188c0.png',
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
    audioFilePath: '', 
    previousText: '',
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
    if (text === this.data.previousText && this.data.audioFilePath) {
      // 如果相同且有音频文件路径，直接播放之前的音频
      audioPlayer(`/audio/${this.data.audioFilePath}`)
      return;  // 直接返回，不重新请求
    }
      wx.request({
        url: `${apiBaseUrl}/tts/get-text`,
        method: 'POST',
        data: {
            text: text,
            voice_type: 3,
        },
        success: (res) => {
            const response = res.data.response;
            const filename = response.data;
            console.log(res.data.response)
            console.log(filename)
            audioPlayer(`/audio/${filename}`)
            this.setData({
              previousText: text,
              audioFilePath: filename,
            });
        },
        fail: (err) => {
            console.error('请求失败', err);
        }
      });


  },

});
