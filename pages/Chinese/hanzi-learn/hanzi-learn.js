// pages/Chinese/hanzi-learn/hanzi-learn.js
const createHanziWriterContext = require('hanzi-writer-miniprogram');
const {pinyin} = require('pinyin-pro');


Page({
  data: {
    character: '',
    bgUrl: 'https://pic.imgdb.cn/item/6749f836d0e0a243d4db504c.png',
    stkImg: 'https://pic.imgdb.cn/item/674b261ad0e0a243d4db7cc9.png',
    rdImg: 'https://pic.imgdb.cn/item/674b2646d0e0a243d4db7cd3.png',
    wtImg: 'https://pic.imgdb.cn/item/674b25eed0e0a243d4db7cbf.png',
    pinyinval:'',
    rewardImageVisible: false,  // 控制奖励图片是否显示
    rwdImg: 'https://pic.imgdb.cn/item/674c6bbfd0e0a243d4dba5f2.png',
  },

  onLoad(options) {
    const character = options.character;
    console.log("Character received:", character);
    if (!character) {
      console.error("Character is missing or invalid.");
      return; // 如果没有传递有效的字符，则停止加载
    }
    // 更新页面数据并绘制汉字
    this.setData({
      character: character,
    }, () => {
      this.drawCharacter(character);  // 页面数据更新后调用绘制函数
      const pinyinval = pinyin(character);  // 使用 pinyin-pro 获取拼音
      this.setData({
        pinyinval: pinyinval
      });
    });
  },

  // 绘制单个汉字
  drawCharacter(character) {
    // 初始化 Hanzi Writer 的上下文
    this.writerCtx = createHanziWriterContext({
      id: 'hz',  // 与 wxml 中的 id 匹配
      character: character,
      page: this,
    });
  },

  showStrokes(){
    this.writerCtx.loopCharacterAnimation();
  },

  playVoice(){

    

    
  },

  writeQuiz(){
    this.writerCtx.quiz({
      onMistake: function(strokeData) {
        console.log('Oh no! you made a mistake on stroke ' + strokeData.strokeNum);
        console.log("You've made " + strokeData.mistakesOnStroke + " mistakes on this stroke so far");
        console.log("You've made " + strokeData.totalMistakes + " total mistakes on this quiz");
        console.log("There are " + strokeData.strokesRemaining + " strokes remaining in this character");
      },
      onComplete: (summaryData) => {
        console.log('You did it! You finished drawing ' + summaryData.character);
        console.log('You made ' + summaryData.totalMistakes + ' total mistakes on this quiz');
        setTimeout(() => {
        }, 2000);

        // 如果用户没有错误，弹出奖励图片
        if (summaryData.totalMistakes === 0) {
          this.writerCtx.hideCharacter();
          this.writerCtx.hideOutline();
          this.setData({
            rewardImageVisible: true  // 显示奖励图片
          });

          // 5秒后自动隐藏奖励图片
          setTimeout(() => {
            this.writerCtx.showCharacter();
            this.writerCtx.showOutline();
            this.setData({
              rewardImageVisible: false
            });
          }, 5000);
        }
      }
    });
  },

  // 点击图片外区域，隐藏奖励图片
  hideRewardImage() {
    this.setData({
      rewardImageVisible: false
    });
  }

})