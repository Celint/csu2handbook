const app = getApp()
const db = wx.cloud.database()
const myOrders = db.collection('myOrders')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: 5,
    value2: 5,
    value3: 5
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
    
  },
  onChange1(event) {
    this.setData({
      value1: event.detail
    })
  }, 
  onChange2(event) {
    this.setData({
      value2: event.detail
    })
  }, 
  onChange3(event) {
    this.setData({
      value3: event.detail
    })
  },

  comments(e) {
    this.setData({
      value: e.detail.value
    })    
  },

  commit() {
    var that = this
    wx.showModal({
      title: '提交评价',
      content: '确定提交吗？',
      success(res) {
        if(res.confirm) {
          myOrders.doc(app.globalData.card._id).update({
            data: {
              status: "交易成功",
              value: that.data.value,
              value1: that.data.value1,
              value2: that.data.value2,
              value3: that.data.value3
            }, success(re) {
              wx.showToast({
                title: '评价成功',
                success() { },
                complete() {
                  wx.navigateBack({
                    delta: 1,
                  })
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