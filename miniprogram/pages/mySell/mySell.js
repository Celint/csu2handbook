// pages/my_sell/my_sell.js
const app = getApp()
const db = wx.cloud.database()
const for_sell = db.collection('forSell')
const myCart = db.collection('myCart')
const myOrders = db.collection('myOrders')
const myChat = db.collection('myChat')
const chatInfo = db.collection('chatInfo')
var sk = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    card: null,
    myOrders: null,
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var cardData
    for_sell.where({
      '_openid': app.globalData._openid
    }).get({
      success: res => {
        cardData = res.data
        if(res.data.length != 0){
          that.setData({
            card: cardData
          })
        }
      }
    })
    myOrders.where({
      sellerid: app.globalData._openid
    }).get({
      success: res => {
        that.setData({
          myOrders: res.data
        })
      }
    })
  },

  manage() {
    wx.redirectTo({
      url: '../shipping/shipping'
    })
  },
  steps(e) {
    var idx = e.currentTarget.dataset.idx
    app.globalData.card = this.data.myOrders[idx]
    wx.navigateTo({
      url: '../steps/steps'
    })
  },
  remind(e) {
    var idx = e.currentTarget.dataset.idx
    myOrders.doc(that.data.myOrders[idx]._id).get({
      success(res){
        console.log(res.data)
      }
    })
  },

  refresh(e){
    var idx = e.currentTarget.dataset.idx
    var that = this
    wx.showModal({
      title: '重新上传',
      content: '确定重新上传吗？',
      success: function(res) {
        for_sell.doc(that.data.card[idx]._id).update({
          data: {
            status: 0
          }, success(re) {
            wx.showToast({
              title: '上传成功',
              success(){
                that.onShow()
              }
            })
          }
        })
      }
    })
  },

  remove: function(e){
    var idx = e.currentTarget.dataset.idx
    var that = this
    wx.showModal({
      title: '删除此卖品',
      content: '确定删除吗？',
      success(res){
        if(res.confirm){
          app.globalData.card = null
          wx.cloud.deleteFile({
            fileList: [that.data.card[idx].imagePath],
            success: res => {
              console.log(res.fileList)
            },
            fail: err => {
              console.log(err)
            }
          })
          for_sell.doc(that.data.card[idx]._id).remove({
            success(res) {
              console.log(res.data)
              wx.showToast({
                title: '删除成功',
                icon: 'success',
                duration: 500,
                mask: true,
                success: function(res) {},
                fail: function(res) {},
                complete: function(res) {},
              })
            }
          })
          myCart.doc(that.data.card[idx]._id).remove({
            success(res) {}
          })
          if (that.data.card.length == 1) {
            that.setData({
              card: null
            })
          }
          that.onLoad()
        }else if(res.cancel){

        }
      }
    })
  },

  modify: function(e){
    var idx = e.currentTarget.dataset.idx
    app.globalData.card = this.data.card[idx]
    console.log(this.data.card[idx])
    wx.navigateTo({
      url: '../modify/modify',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  
  newsell: function(){
    wx.navigateTo({
      url: '../upload/upload',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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
          for_sell.doc(that.data.card[idx]._id).remove({
            success(res) {
              wx.showToast({
                title: '删除成功',
              })
              this.onLoad()
            }
          })
        }        
      }
    })
  },

  seeEval(e) {
    var that = this
    var idx = e.currentTarget.dataset.idx
    app.globalData._id = that.data.card[idx]._id
    wx.navigateTo({
      url: '../myComment/myComment'
    })
  },

  onClickChat(e) {
    var idx = e.currentTarget.dataset.idx
    var that = this
    var result = that.data.myOrders[idx]
    chatInfo.where({
      _openid: result._openid,
      sellerid: app.globalData._openid
    }).get({
      success(res) {
        if (res.data.length == 0) {
          myChat.where({
            buyerid: result._openid,
            _openid: app.globalData._openid
          }).get({
            success(re) {
              if (re.data.length == 0) {
                myChat.add({
                  data: {
                    sellerName: app.globalData.userInfo.nickName,
                    sellerAvatarUrl: app.globalData.userInfo.avatarUrl,
                    buyerid: result._openid,
                    nickName: result.nickName,
                    avatarUrl: result.buyerAvatarUrl,
                    chats: []
                  }, success() {
                    myChat.where({
                      _openid: app.globalData._openid,
                      buyerid: result._openid
                    }).get({
                      success(r) {
                        app.globalData._id = r.data[0]._id
                        wx.navigateTo({
                          url: '../myChat/myChat'
                        })
                      }
                    })
                  }
                })
              } else {
                app.globalData._id = re.data[0]._id
                wx.navigateTo({
                  url: '../myChat/myChat'
                })
              }
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
    this.onLoad()
    sk = 0    //初始化
    for_sell.where({
      _openid: app.globalData._openid
    }).get({
      success(res) {
        for (var i = 0; i < res.data.length; i++) {
          myOrders.doc(res.data[i]._id).get({
            success(re) {
              for_sell.doc(res.data[i]._id).update({
                data: {
                  _id: re.data._id,
                  author: re.data.author,
                  avatarUrl: re.data.avatarUrl,
                  bookName: re.data.bookName,
                  com: re.data.com,
                  expressId: re.data.expressId,
                  imagePath: re.data.imagePath,
                  kuaidi: re.data.kuaidi,
                  location: re.data.location,
                  news: re.data.news,
                  notes: re.data.notes,
                  receiver: re.data.receiver,
                  result: re.data.result,
                  sellerName: re.data.sellerName,
                  sellerid: re.data.sellerid,
                  senderPhone: re.data.senderPhone,
                  status: re.data.status,
                  tag1: re.data.tag1,
                  tag2: re.data.tag2,
                  value1: re.data.value1,
                  value2: re.data.value2,
                  value3: re.data.value3
                }, success() {
                  that.onLoad()
                }
              })
            }
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
    sk += 20
    var that = this
    for_sell.where({
      '_openid': app.globalData._openid
    }).skip(sk).get({
      success: res => {
        if (res.data.length != 0) {
          //往数组里面追加数据
          that.data.card.push(res.data)
          var result = Array.prototype.concat.apply([], that.data.card)
          that.setData({
            card: result
          })
        }
      }
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