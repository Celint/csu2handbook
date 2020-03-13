const app = getApp()
const db = wx.cloud.database()
const myLocation = db.collection('myLocation')
const myOrders = db.collection('myOrders')
const chatInfo = db.collection('chatInfo')
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    var result = []
    if (app.globalData.card.length >= 0) {
      for (var i = 0; i < app.globalData.card.length; i++) {
        myOrders.doc(app.globalData.card[i]._id).get({
          success(res) {
            result.push(res.data)
            that.setData({
              card: result
            })
            that.datas()
          }
        })
      }  
    } else {
      myOrders.doc(app.globalData.card._id).get({
        success(res) {
          result.push(res.data)
          that.setData({
            card: result
          })
          that.datas()
        }
      })     
    }
  },

  onClickChat() {
    var that = this
    var myDate = new Date()
    chatInfo.where({
      _openid: app.globalData._openid,
      sellerid: that.data.card._openid
    }).get({
      success(res) {
        if (res.data.length == 0) {
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
              success(res) {
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

  datas(){
    var that = this
    that.setData({
      location: app.globalData.location
    })
    if (app.globalData.location._id != that.data.card[0].location) {  
      for (var i = 0; i < that.data.card.length; i++) {
        myOrders.doc(that.data.card[i]._id).update({
          data: {
            location: that.data.location._id
          }, success(res) {
            console.log(res.data)
          }
        })
      }   
    }   
    var price = 0
    for (var i = 0; i < that.data.card.length; i++) {
      price = parseFloat(price) + parseFloat(that.data.card[i].price)
    }
    that.setData({
      price: Number(price).toFixed(2)
    })
    that.setData({
      status: that.data.card[0].status
    })
  },

  onClickLeft() {
    wx.reLaunch({
      url: '../message/message'
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

  }
})