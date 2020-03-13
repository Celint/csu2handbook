// pages/newaddr/newaddr.js
import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';
const app = getApp()
const db = wx.cloud.database()
const myLocation = db.collection('myLocation')
var arr = null
var name = false, phone = false, detailAdd = false
Page({
  /**
   * 页面的初始数据
   */
  data: {
    forbid: true,
    checked1: false,
    checked2: false,
    array1: ["中南大学校本部", "中南大学南校区", "中南大学湘雅老校区", "中南大学湘雅新校区", "中南大学铁道校区"],
    region: ['全部', '全部', '全部'],
    customItem: '全部',
  },

  /**
* 生命周期函数--监听页面加载
*/
  onLoad: function (options) {
    
  },

  bindRegionChange(e) {
    this.setData({
      region: e.detail.value
    })
    arr = e.detail.value
    console.log(arr)
    if (arr[0] == "全部" || arr[1] == "全部" || arr[2] == "全部"){
      arr = null
    }
    if (arr != null && name == true && phone == true & detailAdd == true) {
      this.setData({
        forbid: false
      })
    } else {
      this.setData({
        forbid: true
      })
    }
  },

  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value,
    })
    arr = this.data.array1[e.detail.value]
    console.log(arr)
    if (arr != null && name == true && phone == true & detailAdd == true) {
      this.setData({
        forbid: false
      })
    } else {
      this.setData({
        forbid: true
      })
    }
  },

  isCsuer: function (e) {
    this.setData({
      checked1: true,
      checked2: false
    })
  },
  notCsuer: function (e) {
    this.setData({
      checked1: false,
      checked2: true
    })
  },

  recieverInput(res){
    if (res.detail.length > 0){
      name = true
    }else{
      name = false
    }
    if (arr != null && name == true && phone == true & detailAdd == true) {
      this.setData({
        forbid: false
      })
    } else {
      this.setData({
        forbid: true
      })
    }
  },

  phoneInput(res) {
    if (res.detail.length == 11) {
      phone = true
    } else {
      phone = false
    }
    if (arr != null && name == true && phone == true && detailAdd == true) {
      this.setData({
        forbid: false
      })
    } else {
      this.setData({
        forbid: true
      })
    }
  },

  detailAddInput(res) {
    if (res.detail.length > 0) {
      detailAdd = true
    } else {
      detailAdd = false
    }
    if (arr != null && name == true && phone == true && detailAdd == true) {
      this.setData({
        forbid: false
      })
    } else {
      this.setData({
        forbid: true
      })
    }
  },

  saveit(e){
    var that = this
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    myLocation.add({
      data: {
        reciever: e.detail.value.reciever,
        phone: Number(e.detail.value.phone),
        addr: arr,
        detailAddr: e.detail.value.detailAddr  
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
    arr = null
    name = false
    phone = false
    detailAdd = false
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