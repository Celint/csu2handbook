const app = getApp()
const db = wx.cloud.database()
const forSell = db.collection('forSell')
const myOrders = db.collection('myOrders')
const myLocation = db.collection('myLocation')
var expressId = null
var phone = true, expr = false, picker = false
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked1: false,
    checked2: false,
    flag: false,
    sf: false,
    senderPhone: "",
    receiverPhone: "",
    array: ["顺丰", "申通", "圆通", "韵达", "天天", "EMS", "中通", "汇通", "全峰", "德邦", "国通", "如风达", "京东快递", "宅急送", "EMS国际", "Fedex国际", "邮政国内（挂号信）", "UPS国际快递", "中铁快运", "佳吉快运", "速尔快递", "信丰物流", "优速快递", "中邮物流", "天地华宇", "安信达快递", "快捷速递", "AAE全球专递", "DHL", "DPEX国际快递", "D速物流", "FEDEX国内快递", "OCS", "TNT", "东方快递", "传喜物流", "城市100", "城市之星物流", "安捷快递", "百福东方", "程光快递", "递四方快递", "长通物流", "飞豹快递", "马来西亚（大包EMS）", "安能快递", "中通快运", "远成物流", "远成快运", "邮政快递", "百世快运", "苏宁快递", "安能物流", "九曳"],
    kuaidi: [{
        "com": "顺丰",
        "no": "sf"
      },
      {
        "com": "申通",
        "no": "sto"
      },
      {
        "com": "圆通",
        "no": "yt"
      },
      {
        "com": "韵达",
        "no": "yd"
      },
      {
        "com": "天天",
        "no": "tt"
      },
      {
        "com": "EMS",
        "no": "ems"
      },
      {
        "com": "中通",
        "no": "zto"
      },
      {
        "com": "汇通",
        "no": "ht"
      },
      {
        "com": "全峰",
        "no": "qf"
      },
      {
        "com": "德邦",
        "no": "db"
      },
      {
        "com": "国通",
        "no": "gt"
      },
      {
        "com": "如风达",
        "no": "rfd"
      },
      {
        "com": "京东快递",
        "no": "jd"
      },
      {
        "com": "宅急送",
        "no": "zjs"
      },
      {
        "com": "EMS国际",
        "no": "emsg"
      },
      {
        "com": "Fedex国际",
        "no": "fedex"
      },
      {
        "com": "邮政国内（挂号信）",
        "no": "yzgn"
      },
      {
        "com": "UPS国际快递",
        "no": "ups"
      },
      {
        "com": "中铁快运",
        "no": "ztky"
      },
      {
        "com": "佳吉快运",
        "no": "jiaji"
      },
      {
        "com": "速尔快递",
        "no": "suer"
      },
      {
        "com": "信丰物流",
        "no": "xfwl"
      },
      {
        "com": "优速快递",
        "no": "yousu"
      },
      {
        "com": "中邮物流",
        "no": "zhongyou"
      },
      {
        "com": "天地华宇",
        "no": "tdhy"
      },
      {
        "com": "安信达快递",
        "no": "axd"
      },
      {
        "com": "快捷速递",
        "no": "kuaijie"
      },
      {
        "com": "AAE全球专递",
        "no": "aae"
      },
      {
        "com": "DHL",
        "no": "dhl"
      },
      {
        "com": "DPEX国际快递",
        "no": "dpex"
      },
      {
        "com": "D速物流",
        "no": "ds"
      },
      {
        "com": "FEDEX国内快递",
        "no": "fedexcn"
      },
      {
        "com": "OCS",
        "no": "ocs"
      },
      {
        "com": "TNT",
        "no": "tnt"
      },
      {
        "com": "东方快递",
        "no": "coe"
      },
      {
        "com": "传喜物流",
        "no": "cxwl"
      },
      {
        "com": "城市100",
        "no": "cs"
      },
      {
        "com": "城市之星物流",
        "no": "cszx"
      },
      {
        "com": "安捷快递",
        "no": "aj"
      },
      {
        "com": "百福东方",
        "no": "bfdf"
      },
      {
        "com": "程光快递",
        "no": "chengguang"
      },
      {
        "com": "递四方快递",
        "no": "dsf"
      },
      {
        "com": "长通物流",
        "no": "ctwl"
      },
      {
        "com": "飞豹快递",
        "no": "feibao"
      },
      {
        "com": "马来西亚（大包EMS）",
        "no": "malaysiaems"
      },
      {
        "com": "安能快递",
        "no": "ane66"
      },
      {
        "com": "中通快运",
        "no": "ztoky"
      },
      {
        "com": "远成物流",
        "no": "ycgky"
      },
      {
        "com": "远成快运",
        "no": "ycky"
      },
      {
        "com": "邮政快递",
        "no": "youzheng"
      },
      {
        "com": "百世快运",
        "no": "bsky"
      },
      {
        "com": "苏宁快递",
        "no": "suning"
      },
      {
        "com": "安能物流",
        "no": "anneng"
      },
      {
        "com": "九曳",
        "no": "jiuye"
      }]
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
    myOrders.doc(app.globalData.card._id).get({
      success(res){
        that.setData({
          myOrders: res.data
        })
        myLocation.doc(that.data.myOrders.location).get({
          success(res) {
            that.setData({
              location: res.data
            })
          }
        })
      },
    })
  },

  bindPickerChange: function (e) {
    var idx = e.detail.value
    var kuaidi = this.data.kuaidi[idx].no
    this.setData({
      index: idx
    })
    this.setData({
      kd: kuaidi
    })
    picker = true
    if(kuaidi == "sf") {
      phone = false
      this.setData({
        sf: true
      })
    } else {
      phone = true
      this.setData({
        sf: false
      })
    }
    if (phone == true && expr == true && picker == true) {
      this.setData({
        flag: true
      })
    } else {
      this.setData({
        flag: false
      })
    }
  },

  sender(e) {
    var that = this
    if(e.detail.length == 4){
      that.setData({
        senderPhone: e.detail
      })
    } else {
      that.setData({
        senderPhone: ""
      })
    }    
  },
  receiver(e) {
    var that = this
    if (e.detail.length == 4) {
      phone = true
      that.setData({
        receiverPhone: e.detail
      })
    } else {
      phone = false
      that.setData({
        receiverPhone: ""
      })
    }  
    if (phone == true && expr == true && picker == true) {
      that.setData({
        flag: true
      })
    } else {
      that.setData({
        flag: false
      })
    }
  },

  notUse(e) {
    this.setData({
      checked1: true,
      checked2: false,
      flag: true
    })
  },
  use(e) {
    this.setData({
      checked1: false,
      checked2: true,
      flag: false
    })
  },

  detailAddInput(res) {
    expressId = res.detail
    if(expressId.length == 0) {
      expr = false
    } else {
      expr = true
    }    
    if (phone == true && expr == true && picker == true) {
      this.setData({
        flag: true
      })
    } else {
      this.setData({
        flag: false
      })
    }
  },

  ret() {
    var that = this
    var forReject = that.data.myOrders
    wx.showModal({
      title: '退货并退货',
      content: '我已完成退款，并退货',
      success: function (res) {
        if (res.confirm) {
          forSell.doc(res.data._id).update({
            data: {
              status: 2
            }, success() {
              wx.showToast({
                title: '退货成功',
                icon: 'success',
                duration: 1500,
                complete(res) {
                  wx.showToast({
                    title: '等待买家更新信息',
                    icon: 'none',
                    duration: 1500,
                    complete(){
                      wx.navigateBack({
                        delta: 1,
                      })
                    }
                  })
                }
              })
            }
          })
        } else if (res.cancel) {

        }
      }
    })
  },

  com() {
    var that = this
    if(that.data.checked1 == true) {
      wx.showModal({
        title: '发货',
        content: '确认发货吗？',
        success(res) {
          if (res.confirm) {
            forSell.doc(that.data.myOrders._id).update({
              data: {
                status: "待收货",
                kuaidi: false,
                com: null,
                expressId: null,
                senderPhone: null,
                receiverPhone: null,
              }, success(res) {
                wx.showToast({
                  title: '发货成功',
                  complete: function(res) {
                    wx.showToast({
                      title: '等待买家更新信息',
                      icon: 'none',
                      duration: 1500,
                      complete() {
                        wx.navigateBack({
                          delta: 1,
                        })
                      }
                    })
                  }
                })                
              }
            })
          } else if (res.cancel) { }
        }
      })  
    } else if(that.data.checked2) {
      wx.showModal({
        title: '发货',
        content: '确认发货吗？',
        success(res) {
          if (res.confirm) {
            forSell.doc(that.data.myOrders._id).update({
              data: {
                status: "待收货",
                com: that.data.kd,
                expressId: expressId,
                senderPhone: that.data.senderPhone,
                receiverPhone: that.data.receiverPhone,
                kuaidi: true
              },
              success(re) {
                wx.showToast({
                  title: '发货成功',
                  complete: function (res) {
                    wx.showToast({
                      title: '等待买家更新信息',
                      icon: 'none',
                      duration: 1500,
                      complete() {
                        wx.navigateBack({
                          delta: 1,
                        })
                      }
                    })
                  }
                }) 
              }
            })
          } else if (res.cancel) { }
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