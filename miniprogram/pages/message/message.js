const app = getApp()
const db = wx.cloud.database()
const chatInfo = db.collection('chatInfo')
const myChat = db.collection('myChat')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chat: null,
    myChat: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    var that = this
    wx.showTabBar()
    myChat.where({
      _openid: app.globalData._openid
    }).get({
      success(res) {
        that.setData({
          myChat: res.data.reverse()
        })
      }        
    })
    chatInfo.where({
      _openid: app.globalData._openid
    }).get({
      success(res) {
        that.setData({
          chat: res.data.reverse()
        })
      }
    })
    myChat.where({
      buyerid: app.globalData._openid
    }).get({
      success(res){
        for (var i = 0; i < res.data.length; i++) {
          chatInfo.add({
            data: {
              _id: res.data[i]._id,
              nickName: res.data[i].nickName,
              avatarUrl: res.data[i].avatarUrl,
              sellerid: res.data[i]._openid,
              sellerName: res.data[i].sellerName,
              sellerAvatarUrl: res.data[i].sellerAvatarUrl,
              chats: res.data[i].chats
            }, success() {
              that.onShow()
            }
          })    
        }     
      }
    })
    chatInfo.where({
      sellerid: app.globalData._openid
    }).get({
      success(res) {
        for(var i = 0; i < res.data.length; i++){
          myChat.add({
            data: {
              _id: res.data[i]._id,
              nickName: res.data[i].nickName,
              avatarUrl: res.data[i].avatarUrl,
              buyerid: res.data[i]._openid,
              sellerName: res.data[i].sellerName,
              sellerAvatarUrl: res.data[i].sellerAvatarUrl,
              chats: res.data[i].chats
            }, success() {
              that.onShow()
            }
          })      
        }   
      }
    })
  },

  myChat(e) {
    var idx = e.currentTarget.dataset.idx
    app.globalData._id = this.data.myChat[idx]._id
    wx.navigateTo({
      url: '../myChat/myChat'
    })
  },

  chat(e) {
    var idx = e.currentTarget.dataset.idx
    app.globalData._id = this.data.chat[idx]._id
    wx.navigateTo({
      url: '../chat/chat'
    })
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
  onShareAppMessage: function () {
    var that = this
    return {
      title: "CSU二手书交易平台——一家专属于CSUer的二手书交易平台",
      path: 'pages/home/home',
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
  },

})