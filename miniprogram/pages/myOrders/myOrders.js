// pages/myOrders/myOrders.js
const app = getApp()
const db = wx.cloud.database()
const chatInfo = db.collection('chatInfo')
const forSell = db.collection('forSell')
const myOrders = db.collection('myOrders')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myOrders: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  goDetail(e) {
    app.globalData.card = this.data.myOrders[e.currentTarget.dataset.index]
    wx.navigateTo({
      url: '../order/order'
    })
  },
  steps(e) {
    var idx = e.currentTarget.dataset.idx
    app.globalData.card = this.data.myOrders[idx]
    wx.navigateTo({
      url: '../steps/steps'
    })
  },

  onChange(event) {
    wx.setNavigationBarTitle({
      title: event.detail.title
    })
    this.onShow()
  },

  rejected(e) {
    var that = this
    var idx = e.currentTarget.dataset.idx
    var forReject = that.data.myOrders[idx]
    if(forReject.pay == false) {
      myOrders.doc(forReject._id).update({
        data: {
          reject: "已申请退货"
        }
      })
      that.onLoad()
      wx.showToast({
        title: '已申请退货',
        icon: 'none'
      })
    } else {
      wx.showToast({
        title: '请先联系卖家退款',
        icon: 'none',
      })
    } 
  },

  retreat(e) {
    var that = this
    var idx = e.currentTarget.dataset.idx
    var forReject = that.data.myOrders[idx]
    myOrders.doc(forReject._id).update({
      data: {
        reject: ""
      }
    })
    that.onLoad()
    wx.showToast({
      title: '取消退货成功',
      icon: 'none'
    })
  },

  com(e) {
    var that = this
    var idx = e.currentTarget.dataset.idx
    wx.showModal({
      title: '确认收货',
      content: '确认收货？',
      success(res) {
        if(res.confirm) {
          myOrders.doc(that.data.myOrders[idx]._id).update({
            data: {
              status: "待评价"
            },
            success() {
              wx.showToast({
                title: '交易成功',
                complete() {
                  app.globalData.card = that.data.myOrders[idx]
                  wx.navigateTo({
                    url: '../comment/comment'
                  })
                }
              })              
            }
          }) 
        }
      },
    })
  },

  goComment(e) {
    var that = this
    var idx = e.currentTarget.dataset.idx
    app.globalData.card = that.data.myOrders[idx]
    wx.navigateTo({
      url: '../comment/comment'
    })
  },

  deleteIt(e) {
    var that = this
    var idx = e.currentTarget.dataset.idx
    wx.showModal({
      title: '删除订单',
      content: '确定删除吗？',
      success(res) {
        if(res.confirm) {
          myOrders.doc(that.data.myOrders[idx]._id).remove({
            success(res) {
              wx.showToast({
                title: '删除成功',
              })
              this.onShow()
            }
          })          
        }     
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
    var that = this
    that.setData({
      active: app.globalData.active
    })
    switch (that.data.active) {
      case 0:
        wx.setNavigationBarTitle({
          title: "全部订单"
        })
        break
      case 1:
        wx.setNavigationBarTitle({
          title: "待发货"
        })
        break
      case 2:
        wx.setNavigationBarTitle({
          title: "待收货"
        })
        break
      case 3:
        wx.setNavigationBarTitle({
          title: "待评价"
        })
        break
      default:
        break
    }
    myOrders.where({
      _openid: app.globalData._openid
    }).get({
      success(res) {
        for(var i = 0; i < res.data.length; i++) {
          forSell.doc(res.data[i]._id).get({
            success(re) {
              var status = res.data[i].status
              if(re.data.status == 2) {
                myOrders.doc(re.data._id).remove({
                  success() {
                    
                  }
                })
              } else if (re.data.status == "待收货" && status == "待发货") {
                myOrders.doc(re.data._id).update({
                  data: {
                    status: "待收货",
                    com: re.data.kd,
                    expressId: re.data.expressId,
                    senderPhone: re.data.senderPhone,
                    receiverPhone: re.data.receiverPhone,
                    kuaidi: re.data.kuaidi
                  }, success() {
                    
                  }
                })
              }
            }
          })
        }
        if (res.data.length != 0) {
          that.setData({
            myOrders: res.data
          })
          var toSend = 0, toRecieve = 0, toComment = 0
          for(var i = 0; i < res.data.length; i++) {
            if(res.data[i].status == "待发货") {
              toSend++
            } else if(res.data[i].status == "待收货") {
              toRecieve++
            } else if(res.data[i].status == "待评价") {
              toComment++
            }
          }
          that.setData({
            toSend: toSend,
            toRecieve: toRecieve,
            toComment: toComment
          })
        }
      }
    })
  },

  onClickChat(e) {
    var that = this
    var idx = e.currentTarget.dataset.idx
    var myDate = new Date()
    app.globalData.card = that.data.myOrders[idx]
    chatInfo.where({
      _openid: app.globalData._openid,
      sellerid: that.data.myOrders[idx]._openid
    }).get({
      success(res) {
        if (res.data.length == 0) {
          chatInfo.add({
            data: {
              nickName: app.globalData.userInfo.nickName,
              avatarUrl: app.globalData.userInfo.avatarUrl,
              sellerid: that.data.myOrders[idx]._openid,
              sellerName: that.data.myOrders[idx].sellerName,
              sellerAvatarUrl: that.data.myOrders[idx].avatarUrl,
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