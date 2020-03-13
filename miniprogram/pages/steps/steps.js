const app = getApp()
const db = wx.cloud.database()
const myOrders = db.collection('myOrders')
const myLocation = db.collection('myLocation')
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
    that.setData({
      myOrders: app.globalData.card
    })
    console.log(that.data.myOrders)
    myLocation.doc(app.globalData.card.location).get({
      success(res) {
        that.setData({
          location: res.data
        })
      }
    })
    if (app.globalData.card.kuaidi == true) {
      wx.request({
        url: 'https://v.juhe.cn/exp/index',
        data: {
          key: 'c90220d1284c46f178f8185e9862d76b',
          com: that.data.myOrders.com,
          no: that.data.myOrders.expressId,
          senderPhone: that.data.myOrders.senderPhone,
          receiverPhone: that.data.myOrders.receiverPhone
        },
        method: 'GET',
        success: function (res) {
          console.log(res.data)
          var result = res.data.result.list.reverse()
          that.setData({
            steps: result
          })
        }
      }) 
    }    
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