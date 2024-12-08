const apiBaseUrl = getApp().globalData.apiBaseUrl;
function audioPlayer(audioUrl){
    if (!audioUrl) return;
    const audioContext = wx.createInnerAudioContext();
    audioContext.src = `${apiBaseUrl}${audioUrl}`;
    console.log(audioContext.src)
    audioContext.onCanplay(() => {
      audioContext.play();
    });
    audioContext.onEnded(() => {
      audioContext.destroy();
    });
    audioContext.onError((res) => {
      console.error('音频播放错误', res);
      audioContext.destroy();
    }); 
}
module.exports = {
  audioPlayer
};