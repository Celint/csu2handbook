// pages/paymentCode/paymentCode.js
const app = getApp()
const db = wx.cloud.database()
const userInfo = db.collection('userInfo')
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
    var that = this
    that.setData({
      userInfo: app.globalData.userInfo
    })
  },

  qrcode(){
    var that = this
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })
        const filePath = res.tempFilePaths[0]
        // 上传图片
        const cloudPath = 'PaymentCode/' + app.globalData._openid + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传收款码] 成功：', res)
            userInfo.doc(that.data._id).update({
              data: {
                paymentCode: res.fileID
              },
              success(re) {
                userInfo.where({
                  _openid: app.globalData._openid
                }).get({
                  success(res) {
                    that.setData({
                      userInfo: res.data[0]
                    })
                    app.globalData.userInfo = res.data[0]
                  }
                })
              }
            })
          },
          fail: e => {
            console.error('[上传收款码] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

  deleteCode(){
    var that = this
    wx.showModal({
      title: '删除收款码',
      content: '确定删除吗？',
      showCancel: true,
      success: function(res) {
        if(res.confirm){
          wx.cloud.deleteFile({
            fileList: that.data.userInfo.fileID,
            success(res) {
              console.log(res.fileList)
            },
            fail(err) {
              console.log(err)
            }
          })
          userInfo.doc(that.data._id).update({
            data: {
              paymentCode: null
            },
            success(re) {
              userInfo.where({
                _openid: app.globalData._openid
              }).get({
                success(res) {
                  that.setData({
                    userInfo: res.data[0]
                  })
                  app.globalData.userInfo = res.data[0]
                  wx.showToast({
                    title: '删除成功',
                    icon: 'success'
                  })
                }
              })
            }
          })
        }
        else if(res.cancel) {
          console.log("用户点了取消")
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