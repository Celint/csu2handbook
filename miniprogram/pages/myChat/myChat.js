// pages/chat/chat.js
const app = getApp()
const db = wx.cloud.database()
const chatInfo = db.collection('chatInfo')
const myChat = db.collection('myChat')
const _ = db.command
var imagePath
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chatInfo: [],
    show: false,
    focus: false
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
    myChat.doc(app.globalData._id).get({
      success(res) {
        that.setData({
          chatInfo: res.data
        })
        wx.setNavigationBarTitle({
          title: that.data.chatInfo.nickName.toString()
        })
      }
    })
    chatInfo.doc(app.globalData._id).get({
      success(res) {
        if(res.data.chats.length > that.data.chatInfo.chats.length){
          myChat.doc(app.globalData._id).update({
            data: {
              chats: res.data.chats
            },
            success(re) {
              that.setData({
                chatInfo: res.data
              })
            }
          })
        }        
      }
    })
  },

  fresh() {
    this.onShow()
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

  saveImg() {
    var that = this
    if (that.data.timeend - that.data.timestart > 300) {
      that.setData({
        show: true
      })
    }
  },

  onClose() {
    this.setData({ show: false });
  },

  saveIt() {
    var that = this
    wx.cloud.downloadFile({
      fileID: imagePath,
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
                    wx.showToast({
                      icon: 'loading'
                    })
                    that.onClose()
                  }
                })
              }
            })
          }
        })
      }
    })
  },

  input() {
    this.setData({
      focus: true
    })
  },
  notInput() {
    this.setData({
      focus: false
    })
  },

  formSubmit(e) {
    var myDate = new Date()
    var that = this
    if (e.detail.value.textarea != "") {
      var chat = {
        year: myDate.getFullYear(),
        month: myDate.getMonth() + 1,
        date: myDate.getDate(),
        hour: myDate.getHours(),
        minute: myDate.getMinutes(),
        user: 0,
        chatInfo: e.detail.value.textarea,
        imagePath: null
      }
      myChat.doc(that.data.chatInfo._id).update({
        data: {
          chats: _.push(chat)
        },
        success() {
          myChat.doc(that.data.chatInfo._id).get({
            success(res) {
              that.setData({
                chatInfo: res.data
              })
            }
          })
          that.setData({
            chat: ""
          })
        }
      })
    }
  },

  photo: function () {
    // 选择图片
    var that = this
    wx.chooseImage({
      sizeType: ['compressed'],
      sourceType: ['camera', 'album'],
      success: function (res) {
        const filePath = res.tempFilePaths[0]
        // 上传图片
        var openid = app.globalData._openid
        var mytime = new Date().valueOf();
        const cloudPath = 'book_picture/' + openid + '/' + mytime + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            var myDate = new Date()
            var chat = {
              year: myDate.getFullYear(),
              month: myDate.getMonth() + 1,
              date: myDate.getDate(),
              hour: myDate.getHours(),
              minute: myDate.getMinutes(),
              user: 0,
              imagePath: res.fileID
            }
            myChat.doc(that.data.chatInfo._id).update({
              data: {
                chats: _.push(chat)
              },
              success() {
                myChat.doc(that.data.chatInfo._id).get({
                  success(res) {
                    that.setData({
                      chatInfo: res.data
                    })
                  }
                })
              }
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })
        wx.showLoading({
          title: '上传中',
        })
      },
      fail: e => {
        console.error(e)
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