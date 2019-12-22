const devicesId = 575655106
const api_key = " 7sr1E5SqxtziBoToULAzCovYirM="
var config = require("../../appConfig.js")
var util = require('../../utils/util.js')
var app = getApp()
var _countDownIntervalId = -1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseFlag1:true,
    chooseFlag2: true,
    chooseFlag3: true,
    chooseFlag4: true,
    is:1000000,
  },

 
  Refresh:function(e)
  {

     var that = this;
    return new Promise((resolve, reject) => {
      wx.request({
        url: `https://api.heclouds.com/devices/${devicesId}/datapoints?datastream_id=HumanSensor&limit=1`,
        /**
         * 添加HTTP报文的请求头, 
         * 其中api-key为OneNet的api文档要求我们添加的鉴权秘钥
         * Content-Type的作用是标识请求体的格式, 从api文档中我们读到请求体是json格式的
         * 故content-type属性应设置为application/json
         */
        header: {
          'content-type': 'application/json',
          'api-key': api_key
        },
        success: (res) => {
          const status = res.statusCode
          const response = res.data
          if (status !== 200) { // 返回状态码不为200时将Promise置为reject状态
            reject(res.data)
            return;
          }
          if (response.errno !== 0) { //errno不为零说明可能参数有误, 将Promise置为reject
            reject(response.error)
            return;
          }
          if (response.data.datastreams.length === 0) {
            reject('当前设备无数据, 请先运行硬件实验')
          }
         
          //程序可以运行到这里说明请求成功, 将Promise置为resolve状态
          resolve({
            humansensor: response.data.datastreams[0].datapoints.reverse(),
          })
          // var app = getApp()

          app.globalData.humansensor = res.data.data.datastreams[0]
          console.log(app.globalData.humansensor)
          if (app.globalData.humansensor.datapoints[0].value == 1) {
            // console.log('haha')
            this.setData({ chooseFlag1: false })
          }
            
          

          else if (app.globalData.humansensor.datapoints[0].value == 0) {
            // console.log('haha')
            this.setData({ chooseFlag1: true })
            
          }
          // console.log('haha')
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
 
  
  }
})
