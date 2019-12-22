// pages/user/bindUser.js
var util = require('../../utils/util.js')
var appConfig = require('../../appConfig.js')
var app = getApp()
var _countDownIntervalId = -1;

Page({

  /**
   * 页面的初始数据
   */
  
  

    data: {
      
    },
   



  /**
   * 生命周期函数--监听页面加载
   */
 

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

  },
  bindPickerChange: function (e) {
    
  },
 
 
  
  
 
  /**
   * 用户绑定（确定）按钮点击事件
   */
  sureTap: function (e) {
    wx.reLaunch({
      url: '../index/index'
    })
  },
})