// pages/cart/cart.js
const app = getApp()
const db = wx.cloud.database()
const forSell = db.collection('forSell')
const myCart = db.collection('myCart')
const myOrders = db.collection('myOrders')
var card = []
var sk = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price: 0,
    count: 0,
    books: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  goDetail(e) {
    app.globalData.card = this.data.books[e.currentTarget.dataset.index]
    wx.navigateTo({
      url: '../detail/detail',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },  
  onChange(event) {
    var that = this
    var idx = event.currentTarget.dataset.idx
    var index = 'books[' + idx + '].checked'
    that.setData({
      [index]: event.detail
    })
    if(that.data.books[idx].checked == true){
      that.setData({
        count: that.data.count + 1,
        price: that.data.price + Number(that.data.books[idx].price) * 100
      })
    } else{
      that.setData({
        count: that.data.count - 1,
        price: that.data.price - Number(that.data.books[idx].price) * 100
      })
    }
    if(that.data.count == 0){
      that.setData({
        checked: false,
        all: false
      })
    } else if(that.data.count == that.data.books.length){
      that.setData({
        all: true,
        checked: true
      })
    }else {
      that.setData({
        all: false,
        checked: true
      })
    }
  },
  allChange(eve){
    var that = this
    that.setData({
      all: eve.detail
    })
    var index
    for (var i = 0; i < that.data.books.length; i++) {
      index = 'books[' + i + '].checked'
      that.setData({
        [index]: false,
        price: 0
      })
    }
    for(var i = 0; i < that.data.books.length; i++){
      index = 'books[' + i + '].checked'
      that.setData({
        [index]: eve.detail,
        price: that.data.price + Number(that.data.books[i].price) * 100
      })
    }
    if(eve.detail){
      that.setData({
        count: that.data.books.length,
        checked: eve.detail
      })
    } else {
      that.setData({
        count: 0,
        price: 0,
        checked: eve.detail
      })
    }
  },
 
  remove(){
    var that = this
    wx.showModal({
      title: '移除购物车',
      content: '确定删除吗？',
      success(res){
        if(res.confirm){
          that.setData({
            price: 0,
            checked: false,
            all: false
          })
          for (var i = 0; i < that.data.books.length; i++) {
            if (that.data.books[i].checked == true) {
              that.setData({
                count: that.data.count - 1
              })
              myCart.doc(that.data.books[i]._id).remove({
                success(res) { }
              })
            }
          }
          that.onShow()
        } else if (res.cancel) {

        }
      }
    })
    
  },

  onClickButton(e){
    var that = this
    var card = []
    for(var i = 0; i < that.data.books.length; i++){
      if (that.data.books[i].checked == true){
        card.push(that.data.books[i])
        card = Array.prototype.concat.apply([], card)
      }
    }
    app.globalData.price = Number(that.data.price / 100).toFixed(2)
    if (app.globalData.price != 0.00) {
      app.globalData.card = card
      wx.navigateTo({
        url: '../pay/pay',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
    else{
      wx.showToast({
        title: '您没有选择商品',
        icon: "none",
      })
    }
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
      checked: false,
      all: false,
      price: 0
    })    
    wx.showTabBar()
    sk = 0
    myCart.where({
      _openid: app.globalData._openid
    }).get({
      success(res) {
        if(res.data.length == 20){
          this.onReachBottom()
        }        
        that.setData({
          books: res.data
        })       
      }
    })     
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // this.onLoad()
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
    // sk += 20
    // var that = this
    // myCart.where({
    //   _openid: app.globalData._openid
    // }).skip(sk).get({
    //   success(res) {
    //     that.data.books.push(res.data)
    //     var result = Array.prototype.concat.apply([], that.data.books)
    //     if (res.data.length != 0) {
    //       that.setData({
    //         books: result
    //       })
    //     }
    //   }
    // })
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