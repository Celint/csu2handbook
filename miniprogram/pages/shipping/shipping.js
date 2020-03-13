const app = getApp()
const db = wx.cloud.database()
const forSell = db.collection('forSell')
const myOrders = db.collection('myOrders')
const myChat = db.collection('myChat')
const chatInfo = db.collection('chatInfo')
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

  agree(e) {
    var that = this
    var idx = e.currentTarget.dataset.idx
    var forReject = that.data.myOrders[idx]
    wx.showModal({
      title: '退货',
      content: '同意退货吗？',
      success: function(res) {
        if(res.confirm) {
          forSell.doc(forReject._id).update({
            data: {
              status: 2
            },success() {
              wx.showToast({
                title: '退货成功',
                icon: 'success',
                duration: 1500,
                complete(){
                  wx.showToast({
                    title: '等待买家更新信息',
                    icon: 'none',
                    duration: 1500,
                    complete(){
                      that.onShow()
                    }
                  })
                }
              })
            }
          })
        } else if(res.cancel) {

        }
      }
    })
  },

  toSend(e) {
    var idx = e.currentTarget.dataset.idx
    var that = this
    app.globalData.card = that.data.myOrders[idx]
    wx.navigateTo({
      url: '../send/send'
    })
  },

  steps(e) {
    var idx = e.currentTarget.dataset.idx
    app.globalData.card = this.data.myOrders[idx]
    wx.navigateTo({
      url: '../steps/steps'
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
        if(res.data.length == 0) {
          myChat.where({
            buyerid: result._openid,
            _openid: app.globalData._openid            
          }).get({
            success(re) {
              if(re.data.length == 0) {
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
    var that = this
    myOrders.where({
      sellerid: app.globalData._openid
    }).get({
      success(res) {
        that.setData({
          myOrders: res.data
        })
        var count = 0
        for(var i = 0; i < that.data.myOrders.length; i++) {
          if(that.data.myOrders[i].status == '待发货' || that.data.myOrders[i].status == '待收货') {
            count++
          }
        }
        that.setData({
          count: count
        })
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