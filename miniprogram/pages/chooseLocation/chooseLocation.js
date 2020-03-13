// pages/chooseLocation/chooseLocation.js
const app = getApp()
const db = wx.cloud.database()
const myLocation = db.collection('myLocation')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    myLocation.where({
      _openid: app.globalData._openid
    }).get({
      success(res) {
        that.setData({
          location: res.data
        })
        for (var i = 0; i < that.data.location.length; i++) {
          if (app.globalData.location._id.toString() == that.data.location[i]._id.toString()) {
            var index = 'location[' + i + '].checked'
            that.setData({
              [index]: true
            })
          }
        }
      }
    })
  },

  onChange(e){
    var that = this
    var idx = e.currentTarget.dataset.idx
    for (var i = 0; i < that.data.location.length; i++){
      var index = 'location[' + i + '].checked'
      that.setData({
        [index]: false
      })
    }
    var index = 'location[' + idx + '].checked'
    that.setData({
      [index]: e.detail
    })
    app.globalData.location = that.data.location[idx]
    wx.navigateBack();
  },

  newaddr: function () {
    wx.navigateTo({
      url: '../newaddr/newaddr',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  remove: function (e) {
    var idx = e.currentTarget.dataset.idx
    var that = this
    wx.showModal({
      title: '删除此地址',
      content: '确定删除吗？',
      success(res) {
        if (res.confirm) {
          myLocation.doc(that.data.location[idx]._id).remove({
            success(res) {
              console.log(res.data)
              wx.showToast({
                title: '删除成功',
                icon: 'success',
                duration: 500,
                mask: true,
                success: function (res) { },
                fail: function (res) { },
                complete: function (res) { },
              })
            }
          })
          if (that.data.location.length == 1) {
            that.setData({
              location: null
            })
          }
          that.onLoad()
        } else if (res.cancel) {

        }
      }
    })
  },

  modify: function (e) {
    var idx = e.currentTarget.dataset.idx
    app.globalData.location = this.data.location[idx]
    console.log(this.data.location[idx])
    wx.navigateTo({
      url: '../modifyAddr/modifyAddr',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
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