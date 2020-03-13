// pages/home/home.js
const app = getApp()
const db = wx.cloud.database()
const userInfo = db.collection('userInfo')
const for_sell = db.collection('forSell')
const myLocation = db.collection('myLocation')
const myOrders = db.collection("myOrders")
const _ = db.command
var search = null
var sk = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: false,
    books: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var cardData
    if(search == null){
      for_sell.get({
        success: res => {
          cardData = res.data
          if (res.data.length != 0) {
            that.setData({
              data: true,
              books: cardData
            })
          }
        }
      })
    }else{
      for_sell.where(_.or([{
          bookName: {
            $regex: '.*' + search,
            $options: 'i'
        }
      }, {
          author: {
            $regex: '.*' + search,
            $options: 'i'
          }
        }, {
          press: {
            $regex: '.*' + search,
            $options: 'i'
          }
        }, {
          sellerName: {
            $regex: '.*' + search,
            $options: 'i'
          }
        }, {
          tag1: {
            $regex: '.*' + search,
            $options: 'i'
          }
        }, {
          tag2: {
            $regex: '.*' + search,
            $options: 'i'
          }
        }
      ])
      ).get({
        success: res => {
          cardData = res.data
          if (res.data.length != 0) {
            that.setData({
              data: true
            })
            that.setData({
              books: cardData
            })
          }
        }
      })
    }
  },

  goDetail(e){
    app.globalData.card = this.data.books[e.currentTarget.dataset.index]
    wx.navigateTo({
      url: '../detail/detail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },  

  onChange(e){
    search = e.detail
    this.onLoad()
  },
  onSearch(e){
    search = e.detail
    this.onLoad()
  },
  onClear(){
    this.onLoad()
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
    wx.cloud.callFunction({
      name: 'login',
      success: res => {
        app.globalData._openid = res.result.openid
        myLocation.where({
          _openid: app.globalData._openid
        }).get({
          success(res) {
            app.globalData.location = res.data[0]
          }
        })
        userInfo.where({
          _openid: res.result.openid
        }).get({
          success(res) {
            if (res.data.length == 0) {
              wx.navigateTo({
                url: '../login/login'
              })
            }
            else {
              app.globalData.userInfo = res.data[0]
            }
          }
        })
      }
    })
    for_sell.where({
      _openid: app.globalData._openid
    }).get({
      success(res){
        for (var i = 0; i < res.data.length; i++) {
          myOrders.doc(res.data[i]._id).get({
            success(re) {
              for_sell.doc(re.data._id).update({
                data: {
                  status: 1
                }, success() {
                  
                }
              })
            }
          })
        }
      }
    })
    this.onLoad()
    sk = 0    //初始化
    this.onReachBottom()
    wx.showTabBar({
      aniamtion: false,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
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
    if (search == null) {
      for_sell.where({
        _id: {
          $regex: '.*'
        }
      }).skip(sk).get({
        success: res => {
          //往数组里面追加数据
          that.data.books.push(res.data)
          var result = Array.prototype.concat.apply([], that.data.books)
          if (res.data.length != 0) {
            that.setData({
              data: true
            })
            that.setData({
              books: result
            })
          }
        }
      })
    } else {
      for_sell.where(_.or([{
        bookName: {
          $regex: '.*' + search,
          $options: 'i'
        }
      }, {
        author: {
          $regex: '.*' + search,
          $options: 'i'
        }
      }, {
        press: {
          $regex: '.*' + search,
          $options: 'i'
        }
      }, {
        tag1: {
          $regex: '.*' + search,
          $options: 'i'
        }
      }, {
        tag2: {
          $regex: '.*' + search,
          $options: 'i'
        }
      }
      ])
      ).skip(sk).get({
        success: res => {
          //往数组里面追加数据
          that.data.books.push(res.data)
          var result = Array.prototype.concat.apply([], that.data.books)
          if (res.data.length != 0) {
            that.setData({
              data: true
            })
            that.setData({
              books: result
            })
          }
        }
      })
    }
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