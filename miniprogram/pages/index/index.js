const app = getApp()
const db = wx.cloud.database()
const myOrders = db.collection('myOrders')
const myLocation = db.collection('myLocation')
const forSell = db.collection('forSell')
Page({
  data: {
    userInfo: {},
    mySell: 0,
    send: 0,
    myLocation: 0,
    toSend: 0, 
    recieve: 0, 
    comment: 0
  },

  onLoad: function() {
    
  }, 

  onShow(){
    var that = this
    that.setData({
      userInfo: app.globalData.userInfo
    })
    myOrders.where({
      _openid: app.globalData._openid
    }).get({
      success(res) {
        for (var i = 0; i < res.data.length; i++) {
          var status = res.data[i].status
          forSell.doc(res.data[i]._id).get({
            success(re) {
              if (re.data.status == 2) {
                myOrders.doc(re.data._id).remove({
                  success() {
                    that.onShow()
                  }
                })
              } else if (re.data.status == "待收货" && status == "待发货") {
                myOrders.doc(re.data._id).update({
                  data: {
                    status: "待收货",
                    com: re.data.com,
                    expressId: re.data.expressId,
                    senderPhone: re.data.senderPhone,
                    receiverPhone: re.data.receiverPhone,
                    kuaidi: re.data.kuaidi
                  }, success() {
                    that.onShow()
                  }
                })
              }
            }
          })
        }
        that.setData({
          myOrders: res.data
        })
        var toSend = 0, recieve = 0, comment = 0
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].status == "待发货") {
            toSend++
          } else if (res.data[i].status == "待收货") {
            recieve++
          } else if (res.data[i].status == "待评价") {
            comment++
          }
        }
        if (toSend < 20) {
          that.setData({
            toSend: toSend
          })
        } else {
          that.setData({
            toSend: "19+"
          })
        }        
        if (recieve < 20) {
          that.setData({
            recieve: recieve
          })
        } else {
          that.setData({
            recieve: "19+"
          })
        }
        if (comment < 20) {
          that.setData({
            comment: comment
          })
        } else {
          that.setData({
            comment: "19+"
          })
        }
      }
    })
    forSell.where({
      _openid: app.globalData._openid
    }).get({
      success(re) {
        if (re.data.length < 20) {
          that.setData({
            mySell: re.data.length
          })
        } else {
          that.setData({
            mySell: "19+"
          })
        }
        for(var i = 0; i < res.data.length; i++) {
          if (res.data[i].status == 2){
            myOrders.doc(res.data[i]._id).get({
              success(re){
                if(re.data == null) {
                  forSell.doc(res.data[i]._id).remove({
                    success(){
                      that.onShow()
                    }
                  })
                }
              }
            })
          }
        }        
      }
    })
    myOrders.where({
      sellerid: app.globalData._openid
    }).get({
      success(res) {
        var send = 0
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].status == "待发货" || res.data[i].status == "待收货") {
            send++
          } else if(res.data[i].status == "交易成功") {
            forSell.doc(res.data[i]._id).update({
              data: {
                status: "交易成功"
              }
            })
          }
        }
        if (send < 20) {
          that.setData({
            send: send
          })
        } else {
          that.setData({
            send: "19+"
          })
        }
      }
    })
    myLocation.where({
      _openid: app.globalData._openid
    }).get({
      success(res) {
        if (res.data.length < 20) {
          that.setData({
            myLocation: res.data.length
          })
        } else {
          that.setData({
            myLocation: "19+"
          })
        }
      }
    })
  },

  allOrders() {
    app.globalData.active = 0
    wx.navigateTo({
      url: '../myOrders/myOrders',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  toSend() {
    app.globalData.active = 1
    wx.navigateTo({
      url: '../myOrders/myOrders',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  toRecieve() {
    app.globalData.active = 2
    wx.navigateTo({
      url: '../myOrders/myOrders',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  toComment() {
    app.globalData.active = 3
    wx.navigateTo({
      url: '../myOrders/myOrders',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
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
  }
})