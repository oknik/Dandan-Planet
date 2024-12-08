// app.js
const avatarUrlDefault = 'https://pic.imgdb.cn/item/6728b79dd29ded1a8cd25236.jpg';

class User {
    constructor(name, level, stars, avatarUrl = avatarUrlDefault) {
      this.userName = name;
      this.userLevel = level;
      this.userStars = stars;
      this.userAvatar = avatarUrl;
    }

    // 更新等级
    updateLevel(newLevel) {
        this.userLevel = newLevel;
    }
    
    // 增加星星数
    addStars(stars) {
        this.userStars += stars;
    }

    // 获取用户信息
    getUserInfo() {
        return {
          userName: this.userName,
          userLevel: this.userLevel,
          userStars: this.userStars,
          userAvatar: this.userAvatar
        };
    }
}

App({
    globalData: {
      // userInfo: new User("kk", 3, 257, avatarUrlDefault),
      userInfo:null,
      User: User, 
      apiBaseUrl:'https://www.ddxq.asia',
    },
    setUserInfo(userInfo) {
      this.globalData.userInfo = userInfo;
    },
});