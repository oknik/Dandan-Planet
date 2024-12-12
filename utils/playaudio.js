const apiBaseUrl = getApp().globalData.apiBaseUrl;
function audioPlayer(audioInput){
    console.log(audioInput)
    const audioQueue = Array.isArray(audioInput) ? audioInput : [audioInput];
    if (audioQueue.length === 0 || !audioQueue[0]) {
        console.warn('音频地址无效或为空');
        return;
    }
    let currentIndex = 0; // 当前播放的音频索引
    const audioContext = wx.createInnerAudioContext();
    const playNextAudio = () => {
      if (currentIndex >= audioQueue.length) {
          console.log('音频队列播放完成');
          audioContext.destroy();
          return;
      }
      const currentAudioUrl = audioQueue[currentIndex];
      if (!currentAudioUrl) {
          console.warn(`第 ${currentIndex + 1} 个音频地址无效`);
          currentIndex++;
          playNextAudio(); 
          return;
      }
      audioContext.src = `${apiBaseUrl}${currentAudioUrl}`;
      console.log(`正在播放第 ${currentIndex + 1} 个音频:`, audioContext.src);
      audioContext.play();
      currentIndex++; 
  };
  audioContext.onEnded(() => {
      console.log('当前音频播放完成');
      playNextAudio();
  });
  audioContext.onError((res) => {
      console.error('音频播放错误', res);
      audioContext.destroy();
  });
  playNextAudio();
}
module.exports = {
  audioPlayer
};