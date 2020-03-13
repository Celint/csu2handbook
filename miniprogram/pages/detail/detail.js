// pages/detail/detail.js
const app = getApp()
const db = wx.cloud.database()
const forSell = db.collection('forSell')
const myCart = db.collection('myCart')
const chatInfo = db.collection('chatInfo')
const userInfo = db.collection("userInfo")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    card: {},
    save: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      card: app.globalData.card
    })
  },
  onClickChat() {
    var that = this
    var myDate = new Date()
    chatInfo.where({
      _openid: app.globalData._openid,
      sellerid: that.data.card._openid
    }).get({
      success(res){
        if(res.data.length == 0){
          chatInfo.add({
            data: {
              nickName: app.globalData.userInfo.nickName,
              avatarUrl: app.globalData.userInfo.avatarUrl,
              sellerid: that.data.card._openid,
              sellerName: that.data.card.sellerName,
              sellerAvatarUrl: that.data.card.avatarUrl,
              chats: [{
                  year: myDate.getFullYear(),
                  month: myDate.getMonth() + 1,
                  date: myDate.getDate(),
                  hour: myDate.getHours(),
                  minute: myDate.getMinutes(),
                  user: 0, 
                  chatInfo: "您好！请问您需要什么帮助吗？[自动回复]",
                  imagePath: null
                }]
            }
          }).then(re => {
            chatInfo.where({
              _openid: app.globalData._openid,
              sellerid: app.globalData.card._openid
            }).get({
              success(res){
                app.globalData._id = res.data[0]._id
                wx.navigateTo({
                  url: '../chat/chat'
                })
              }
            })
          })
        } else {    
          app.globalData._id = res.data[0]._id      
          wx.navigateTo({
            url: '../chat/chat'
          })
        }
      }
    })
  },

  onClickCart() {
    wx.switchTab({
      url: '../cart/cart',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onClickAddCard(){
    var that = this 
    myCart.add({
      data: {
        _id: that.data.card._id,
        price: that.data.card.price,
        bookName: that.data.card.bookName,
        author: that.data.card.author,
        press: that.data.card.press,
        imagePath: that.data.card.imagePath,
        news: that.data.card.news,
        result: that.data.card.result,
        addr: that.data.card.addr,
        tag1: that.data.card.tag1,
        tag2: that.data.card.tag2,
        sellerName: that.data.card.sellerName,
        avatarUrl: that.data.card.avatarUrl
      }, success(res) {
        wx.showToast({
          title: '加入购物车成功',
          icon: 'success',
          duration: 500,
          mask: true,
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      }
    })       
  },
  onClickBuyItNow(){
    var that = this
    app.globalData.price = that.data.card.price
    wx.navigateTo({
      url: '../pay/pay',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  //点击开始的时间  
  timestart: function (e) {
    var that = this;
    that.setData({ timestart: e.timeStamp });
  },
  //点击结束的时间
  timeend: function (e) {
    var that = this;
    that.setData({ timeend: e.timeStamp });
  },

  //保存图片
  saveImg: function (e) {
    var that = this
    if (that.data.timeend - that.data.timestart > 300) {
      that.setData({
        save: true
      })
    }
  },

  onClose() {
    this.setData({
      save: false
    })
  },

  saveImage() {
    var that = this
    wx.cloud.downloadFile({
      fileID: that.data.card.imagePath,
      success(res) {
        var imgUrl = res.tempFilePath;
        wx.getSetting({
          success: function (res) {
            wx.authorize({
              scope: 'scope.writePhotosAlbum',
              success: function (res) {
                console.log("授权成功");
                wx.saveImageToPhotosAlbum({
                  filePath: imgUrl,//返回的临时文件路径，下载后的文件会存储到一个临时文件
                  success: function (res) {
                    that.setData({
                      show: false,
                      save: false
                    })
                  }
                })
              }
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(){
    var that = this
    return {
      title: "CSU二手书交易平台: " + app.globalData.card.bookName,
      path: 'pages/home/home',
      imageUrl: app.globalData.card.imageUrl,
      success: function (res) {
        console.log(res.shareTickets[0]) 
        wx.getShareInfo({ 
          shareTicket: res.shareTickets[0], 
          success: function (res) { 
            console.log(res) 
          }, 
          fail: function (res) { 
            console.log(res) 
          }, 
          complete: function (res) { 
            console.log(res) 
          } 
        }) 
      }, 
      fail: function (res) { // 分享失败 
        console.log(res) 
      }
    }
  }
})