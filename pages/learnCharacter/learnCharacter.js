// pages/learnCharacter/learnCharacter.js
import HanziWriter from "hanzi-writer";
import cnchar from "cnchar";
import "cnchar-voice";

Page({
  data: {
    character: ""
  },

  onLoad(options) {
    const char = options.character;
    this.setData({ character: char });

    // 初始化汉字动画
    const writer = HanziWriter.create("hanzi-container", char, {
      width: 300,
      height: 300,
      padding: 10,
      showOutline: true,
      showCharacter: true,
      delayBetweenStrokes: 300,
      strokeAnimationSpeed: 1
    });

    // 自动播放写法动画
    writer.animateCharacter();
    this.writer = writer;
  },

  playVoice() {
    const char = this.data.character;
    cnchar.voice.play(char, {
      speed: 1,
      local: true
    });
  },

  testWriting() {
    this.writer.quiz();
  }
});
