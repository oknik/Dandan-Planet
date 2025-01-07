const titleUrl = 'https://pic.imgdb.cn/item/67485f57d0e0a243d4da600c.jpg'
const pencilUrl = 'https://pic.imgdb.cn/item/674ada3ed0e0a243d4db705f.jpg'
const rubberUrl = 'https://pic.imgdb.cn/item/673cc329d29ded1a8c322f63.png'
const clearUrl = 'https://pic.imgdb.cn/item/674ada21d0e0a243d4db7059.jpg'
const submitUrl = 'https://pic.imgdb.cn/item/674ada6dd0e0a243d4db7066.jpg'
const questionUrl = 'https://pic.imgdb.cn/item/674af70dd0e0a243d4db74bc.jpg'
const characterUrl = 'https://pic.imgdb.cn/item/674afc97d0e0a243d4db757e.jpg'

const apiBaseUrl = getApp().globalData.apiBaseUrl;

Page({
  data: {
    titleUrl,
    drawUrl: rubberUrl,
    clearUrl,
    submitUrl,
    questionUrl,
    characterUrl,
    chineseContent: '是什么呢？',
    englishContent: 'What is it?'
  },
  canvas: null,
  ctx: null,
  isDrawing: false,
  isErasing: false,
  startX: 0,
  startY: 0,
  tag: null,

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

        // 设置画笔参数
        this.ctx.strokeStyle = '#000000'; // 黑色线条
        this.ctx.lineWidth = 8;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';

        this.ctx.fillStyle = '#FFFFFF'; // 白色
        this.ctx.fillRect(0, 0, width, height);
      });
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
    const eraseSize = 20;
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fillRect(x - eraseSize / 2, y - eraseSize / 2, eraseSize, eraseSize);
  },

  // 切换橡皮擦模式
  toggleEraser() {
    this.isErasing = !this.isErasing;
    if (this.isErasing) {
      this.ctx.strokeStyle = '#FFFFFF';
      this.setData({
        drawUrl: pencilUrl
      });
    } else {
      this.ctx.strokeStyle = '#000000';
      this.setData({
        drawUrl: rubberUrl
      });
    }
  },

  // 清除整个画布并重新加载背景图片
  clearCanvas() {
    const dpr = wx.getWindowInfo().pixelRatio;
    const width = this.canvas.width / dpr;  // 恢复原始逻辑宽度
    const height = this.canvas.height / dpr; // 恢复原始逻辑高度

    // 使用白色填充整个画布
    this.ctx.fillStyle = '#FFFFFF'; // 设置为白色
    this.ctx.fillRect(0, 0, width, height);
  },

  // 提交绘画的草图
  submit() {
    wx.canvasToTempFilePath({
      canvas: this.canvas,
      success: (res) => {
        const tempFilePath = res.tempFilePath;
        wx.uploadFile({
          filePath: tempFilePath,
          name: 'file',
          url:`${apiBaseUrl}/sketch/upload_image`,
          success: (uploadRes) => {
            console.log('Upload success:', uploadRes);
            const data = JSON.parse(uploadRes.data);
            if (data.image_url) {
              // 获取到图片 URL 后，更新界面
              this.setData({
                questionUrl: data.image_url,
                englishContent: data.entag,
                chineseContent:data.chtag,
              });
            } else {
              console.error("Error: No image URL in response");
            }
          },
          fail: (error) => {
            console.log('Upload failed:', error);
            console.log(url)
          }
        })
      },
      fail: (error) => {
        console.error('Canvas to temp file failed', error);
      }
    })
  }
});
