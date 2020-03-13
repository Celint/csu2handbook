// pages/scanCode/scanCode.js
const app = getApp()
const db = wx.cloud.database()
const for_sell = db.collection('forSell')
var input1 = false, input2 = false, input3 = false, input4 = false, input5 = false, photoed = false
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeNames1: ['1'],
    imagePath: '',
    forbid: true,
    uploaded: false,
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    addr: null,
    list: ['校本部', '南校区', '新校区', '湘雅旧校区', '湘雅新校区', '铁道校区'],
    result: null,
    form: [{
        tip: '书名',
        name: 'bookName',
        placeholder: '请输入书名',
        required: true,
        type: 'text',
        input: 'inputed1'
      },
      {
        tip: '价格',
        name: 'price',
        placeholder: '例：12.00',
        required: true,
        type: 'digit',
        input: 'inputed2'
      },
      {
        tip: '分类1',
        name: 'tag1',
        placeholder: '例：计算机',
        required: false,
        type: 'text',
      },
      {
        tip: '分类2',
        name: 'tag2',
        placeholder: '例：电子技术',
        required: false,
        type: 'text'
      },
      {
        tip: '几成新',
        name: 'news',
        placeholder: '例：7',
        required: true,
        type: 'number',
        maxlength: 1,
        input: 'inputed3'
      },
      {
        tip: '出版社',
        name: 'press',
        placeholder: '请输入出版社',
        required: true,
        type: 'text',
        input: 'inputed4'
      },
      {
        tip: '作者',
        name: 'author',
        placeholder: '请输入著作者',
        required: true,
        type: 'text',
        input: 'inputed5'
      },
      {
        tip: '描述信息',
        name: 'notes',
        placeholder: '请填写描述信息',
        required: false,
        type: 'textarea'
      }
    ]
  },

  onChangeCB(event) {
    this.setData({
      result: event.detail
    });
  },

  toggle(event) {
    const { name } = event.currentTarget.dataset;
    const checkbox = this.selectComponent(`.checkboxes-${name}`);
    checkbox.toggle();
  },

  noop() { },

  onChange1(event) {
    this.setData({
      activeNames1: event.detail
    });
  },

  onClick1: function (e) {
    this.setData({
      checked1: true,
      checked2: false
    })
  },
  onClick2: function (e) {
    this.setData({
      checked1: false,
      checked2: true
    })
  },
  onClick3: function (e) {
    this.setData({
      checked3: true,
      checked4: false
    })
  },
  onClick4: function (e) {
    this.setData({
      checked3: false,
      checked4: true,
      addr: ""
    })
  },

  inputed1: function(res){
    if(res.detail.length > 0){
      input1 = true
    }else{
      input1 = false
    }
    if (input1 == true && input2 == true && input3 == true && input4 == true && input5 == true && photoed == true){
      this.setData({
        forbid: false
      })
    }else{
      this.setData({
        forbid: true
      })
    }
  },
  inputed2: function (res) {
    if (res.detail.length > 0) {
      input2 = true
    } else {
      input2 = false
    }
    if (input1 == true && input2 == true && input3 == true && input4 == true && input5 == true && photoed == true) {
      this.setData({
        forbid: false
      })
    } else {
      this.setData({
        forbid: true
      })
    }
  },
  inputed3: function (res) {
    if (res.detail.length > 0) {
      input3 = true
    } else {
      input3 = false
    }
    if (input1 == true && input2 == true && input3 == true && input4 == true && input5 == true && photoed == true) {
      this.setData({
        forbid: false
      })
    } else {
      this.setData({
        forbid: true
      })
    }
  },
  inputed4: function (res) {
    if (res.detail.length > 0) {
      input4 = true
    } else {
      input4 = false
    }
    if (input1 == true && input2 == true && input3 == true && input4 == true && input5 == true && photoed == true) {
      this.setData({
        forbid: false
      })
    } else {
      this.setData({
        forbid: true
      })
    }
  },
  inputed5: function (res) {
    if (res.detail.length > 0) {
      input5 = true
    } else {
      input5 = false
    }
    if (input1 == true && input2 == true && input3 == true && input4 == true && input5 == true && photoed == true) {
      this.setData({
        forbid: false
      })
    } else {
      this.setData({
        forbid: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 

  },

  photo: function (event) {
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
            photoed = true
            if (input1 == true && input2 == true && input3 == true && input4 == true && input5 == true && photoed == true) {
              that.setData({
                forbid: false
              })
            } else {
              that.setData({
                forbid: true
              })
            }
            that.setData({
              imagePath: app.globalData.fileID = res.fileID,
              uploaded: true
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

  upphoto: function (event) {
    wx.cloud.deleteFile({       //先把原来的删除
      fileList: [app.globalData.fileID],
      success: res => {
        console.log(res.fileList)
      },
      fail: err => {
        console.log(err)
      }
    })
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
            photoed = true
            if (input1 == true && input2 == true && input3 == true && input4 == true && input5 == true && photoed == true) {
              that.setData({
                forbid: false
              })
            } else {
              that.setData({
                forbid: true
              })
            }
            that.setData({
              imagePath: app.globalData.fileID = res.fileID,
              uploaded: true
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

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var bookName = e.detail.value.bookName
    var price = Number(e.detail.value.price).toFixed(2)
    var tag1 = (e.detail.value.tag1 == "") ? null : e.detail.value.tag1 
    var tag2 = (e.detail.value.tag2 == "") ? null : e.detail.value.tag2
    var news = e.detail.value.news
    var press = e.detail.value.press
    var author = e.detail.value.author
    var notes = (e.detail.value.notes == "") ? null : e.detail.value.notes
    var imagePath = this.data.imagePath
    var result = (this.data.result == "") ? null : this.data.result
    var addr = (this.data.checked4 == true) ? null : ((e.detail.value.addr == "") ? null : e.detail.value.addr)
    var sellerName = app.globalData.userInfo.nickName
    var avatarUrl = app.globalData.userInfo.avatarUrl
    wx.showModal({
      title: '提示',
      content: '确定要提交吗？',
      success: function(com) {
        if(com.confirm){
          for_sell.add({
            data: {
              bookName: bookName,
              price: price,
              tag1: tag1,
              tag2: tag2,
              news: news,
              press: press,
              author: author,
              imagePath: imagePath,
              notes: notes,
              result: result,
              addr: addr,
              sellerName: sellerName,
              avatarUrl: avatarUrl,
              status: 0
            }
          }).then(res => {
            wx.showToast({
              title: '提交成功',
              icon: 'success',
              duration: 500,
              mask: true,
              success: function (res) { 
                wx.navigateBack({
                  delta: 1,
                })
              },
              fail: function (res) { },
              complete: function (res) { },
            })
          }).catch(err => {
            console.log(err)
          })
        }else if(com.cancel){
          console.log('用户点了取消')
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