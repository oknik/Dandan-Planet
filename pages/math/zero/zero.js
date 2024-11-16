const imageUrl = 'https://pic.imgdb.cn/item/67384037d29ded1a8c6fd15e.png';
const eggUrl = 'https://pic.imgdb.cn/item/6738a045d29ded1a8cc06daf.jpg';
const playUrl = 'https://pic.imgdb.cn/item/67389e2fd29ded1a8cbe6fc9.png';
const zeroUrl = 'https://pic.imgdb.cn/item/6738a71fd29ded1a8cc7bf2a.png';

Page({
  data: {
    imageUrl,
    eggUrl,
    playUrl,
  },
  canvas: null, // 保存 canvas 对象到类实例
  ctx: null,    // 保存绘图上下文到类实例
  isDrawing: false, // 绘图状态保存到类实例
  isErasing: false, // 橡皮擦状态
  startX: 0,    // 开始绘制的 X 坐标
  startY: 0,    // 开始绘制的 Y 坐标
  backgroundImage: null, // 保存背景图片对象

  onLoad() {
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
        this.loadBackgroundImage(width, height);

        // 设置画笔参数
        this.ctx.strokeStyle = '#000000'; // 黑色线条
        this.ctx.lineWidth = 2;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
      });
  },

  // 加载背景图片函数
  loadBackgroundImage(width, height) {
    const backgroundImage = this.canvas.createImage();
    backgroundImage.onload = () => {
      this.backgroundImage = backgroundImage; // 保存背景图片对象
      this.ctx.drawImage(backgroundImage, 0, 0, width, height);
    };
    backgroundImage.src = zeroUrl;
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
  erase(x, y) {
    const eraseSize = 20; // 橡皮擦逻辑大小
    const dpr = wx.getWindowInfo().pixelRatio;
    
    // 计算适应 DPR 的擦除区域
    const startX = (x - eraseSize / 2) * dpr;
    const startY = (y - eraseSize / 2) * dpr;
    const adjustedEraseSize = eraseSize * dpr;
  
    // 绘制背景图片的一部分覆盖当前擦除位置
    this.ctx.drawImage(
      this.backgroundImage,
      startX, startY, adjustedEraseSize, adjustedEraseSize, // 从背景图片中截取适应 DPR
      startX, startY, adjustedEraseSize, adjustedEraseSize  // 绘制到画布
    );
  },
  

  // 切换橡皮擦模式
  toggleEraser() {
    this.isErasing = !this.isErasing;
    if (this.isErasing) {
      this.ctx.strokeStyle = 'rgba(0,0,0,0)'; // 设置透明颜色，确保擦除
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
    this.loadBackgroundImage(width, height);
  }
});
