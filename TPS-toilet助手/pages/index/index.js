//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

      menuitems: [
        // text标题，hint介绍，url跳转页面，icon图标，tips备注，tap点击事件(与url二选一)
        // { text: 'Toilet capacity', hint: '能帮您查看卫生间是否空余！', url: '', icon: '../../images/icon-xmb-app.png', tips: '', tap: 'showConcatModal' },
        { text: 'Toilet usage inquiry', hint: '卫生间使用情况查询', url: '../base/base', icon: '../../images/223.png', tips: '', tap: '' },
        { text: 'Toilet learning', hint: '随时随地学习', url: '../error/update', icon: '../../images/223.png', tips: '', tap: '' },
      
        { text: 'Health tips', hint: '健康小贴士', url: '../health/index', icon: '../../images/223.png', tips: '', tap: '' },
        { text: 'Emergency service', hint: '一键送纸', url: '../error/update', icon: '../../images/223.png', tips: '', tap: '' }
      ],
      showConcatModal: false
  },
  onLoad: function () {
    
    
  },
  showConcatModal: function(e) {
    this.setData({
      showConcatModal: true,
    }) 
  },
  dismissConcatModal: function (e) {
    this.setData({
      showConcatModal: false,
    })
  }
})
