const db = wx.cloud.database()
const myLocation = db.collection('myLocation')
const app = getApp()
var sk = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var mylocation
    myLocation.where({
      '_openid': app.globalData._openid
    }).get({
      success: res => {
        mylocation = res.data
        if (res.data.length != 0) {
          that.setData({
            location: mylocation
          })
        }
      }
    })
  },

  newaddr: function(){
    wx.navigateTo({
      url: '../newaddr/newaddr',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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
  // onReachBottom: function () {
  //   sk += 20
  //   var that = this
  //   var mylocation
  //   myLocation.where({
  //     '_openid': app.globalData._openid
  //   }).get({
  //     success: res => {
  //       mylocation = res.data
  //       if (res.data.length != 0) {
  //         //往数组里面追加数据
  //         that.data.location.push(res.data)
  //         var result = Array.prototype.concat.apply([], that.data.location)
  //         that.setData({
  //           location: result
  //         })
  //       }
  //     }
  //   })
  // },

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