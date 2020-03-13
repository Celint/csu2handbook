App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: "secondhandbook-1a2ce5",
        traceUser: true,
      })
    }

    this.globalData = {
      userInfo: null,
      _openid: null,
      _id: null,
      fileID: null,
      price: 0,
      active: 0,
      chatInfo: null,
      card: null
    }
  }
})
