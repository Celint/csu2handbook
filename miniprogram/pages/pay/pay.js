// pages/pay/pay.js
const app = getApp()
const db = wx.cloud.database()
const myLocation = db.collection('myLocation')
const forSell = db.collection('forSell')
const myCart = db.collection('myCart')
const myOrders = db.collection('myOrders')
const userInfo = db.collection('userInfo')
const chatInfo = db.collection('chatInfo')
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location: {
      reciever: "新增收货地址"
    },
    books: [],
    show: false,
    save: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.data.books.push(app.globalData.card)
    var result = Array.prototype.concat.apply([], that.data.books)
    that.setData({
      books: result
    })
    that.setData({
      price: app.globalData.price
    })
    userInfo.where({
      _openid: app.globalData.card._openid
    }).get({
      success(res){
        that.setData({
          userInfo: res.data[0]
        })
      }
    })
  },

  pay(){
    var that = this
    that.setData({
      show: true
    })
  },

  onClose() {
    this.setData({
      show: false
    })
  },

  onClose1() {
    this.setData({
      save: false
    })
  },
  
  payed() {
    var that = this
    var myDate = new Date()
    if (that.data.location.reciever == "新增收货地址") {
      wx.showToast({
        title: '请填写收货地址',
        icon: 'none'
      })
    } else {
      wx.showModal({
        title: '完成支付',
        content: '我已完成支付',
        showCancel: true,
        confirmText: '是的',
        confirmColor: '#1296db',
        success: function (res) {
          if (res.confirm) {
            for (var i = 0; i < that.data.books.length; i++) {
              myOrders.add({
                data: {
                  _id: that.data.books[i]._id,
                  nickName: app.globalData.userInfo.nickName,
                  buyerAvatarUrl: app.globalData.userInfo.avatarUrl,
                  sellerid: that.data.books[i]._openid,
                  sellerName: that.data.books[i].sellerName,
                  avatarUrl: that.data.books[i].avatarUrl,
                  addr: that.data.books[i].addr,
                  author: that.data.books[i].author,
                  bookName: that.data.books[i].bookName,
                  imagePath: that.data.books[i].imagePath,
                  news: that.data.books[i].news,
                  notes: that.data.books[i].notes,
                  press: that.data.books[i].press,
                  price: that.data.books[i].price,
                  result: that.data.books[i].result,
                  tag1: that.data.books[i].tag1,
                  tag2: that.data.books[i].tag2,
                  status: "待发货",
                  pay: true,
                  location: that.data.location._id
                }, success(res) {                  
                  
                }
              })
            }
            wx.reLaunch({
              url: '../order/order'
            })
          }
          else if (res.cancel) { }
        }
      })
    } 
  },

  cod(){
    var myDate = new Date()
    var that = this
    if (that.data.location.reciever == "新增收货地址") {
      wx.showToast({
        title: '请填写收货地址',
        icon: 'none'
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '确认购买？',
        confirmColor: '',
        success: function (res) {
          if (res.confirm) {            
            for (var i = 0; i < that.data.books.length; i++) {
              myOrders.add({
                data: {
                  _id: that.data.books[i]._id,
                  nickName: app.globalData.userInfo.nickName,
                  buyerAvatarUrl: app.globalData.userInfo.avatarUrl,
                  sellerid: that.data.books[i]._openid,
                  sellerName: that.data.books[i].sellerName,
                  avatarUrl: that.data.books[i].avatarUrl,
                  addr: that.data.books[i].addr,
                  author: that.data.books[i].author,
                  bookName: that.data.books[i].bookName,
                  imagePath: that.data.books[i].imagePath,
                  news: that.data.books[i].news,
                  notes: that.data.books[i].notes,
                  press: that.data.books[i].press,
                  price: that.data.books[i].price,
                  result: that.data.books[i].result,
                  tag1: that.data.books[i].tag1,
                  tag2: that.data.books[i].tag2,
                  status: "待发货",
                  pay: false,
                  location: that.data.location._id
                }, success(res) {
                  chatInfo.where({
                    _openid: app.globalData._openid,
                    sellerid: that.data.books[idx]._openid
                  }).get({
                    success(res) {                      
                      
                    }
                  })
                }
              })
            }
            wx.reLaunch({
              url: '../order/order'
            })
          }
        }
      })
    }
  },

  onClickChat(e) {
    var that = this
    var idx = e.currentTarget.dataset.idx
    var myDate = new Date()
    chatInfo.where({
      _openid: app.globalData._openid,
      sellerid: that.data.books[idx]._openid
    }).get({
      success(res) {
        if (res.data.length == 0) {
          chatInfo.add({
            data: {
              nickName: app.globalData.userInfo.nickName,
              avatarUrl: app.globalData.userInfo.avatarUrl,
              sellerid: that.data.books[idx]._openid,
              sellerName: that.data.books[idx].sellerName,
              sellerAvatarUrl: that.data.books[idx].avatarUrl,
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
              sellerid: app.globalData.books[idx]._openid
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
    if(that.data.timeend - that.data.timestart > 300){
      that.setData({
        save: true
      })
    }
  },

  saveImage() {
    var that = this
    wx.cloud.downloadFile({
      fileID: that.data.userInfo.paymentCode,
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
    this.setData({
      location: app.globalData.location
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
  }
})