Page({
  data: {
    text: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //文字逐个显示
    var story = "作为一个可爱的有梦想的小可爱，一定要好好的养护您的身体哦！";
    var i = 0;
    var time = setInterval(function () {
      var text = story.substring(0, i);
      i++;
      that.setData({
        text: text
      });
      if (text.length == story.length) {
        //   console.log("定时器结束！");
        clearInterval(time);
      }
    }, 1000)

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

  },

  text: function () {
    var random = Math.floor(Math.random() * 10);
    var context = ["每天起床后喝一杯水能清洗肠胃。", "每天养成喝水的习惯，每天至少也有一升以上吧。", " 避免暴饮暴食，晚上九点之后也最好不要吃零食。", "多吃些纤维食物", " 吃方便面的时候，先用温水来洗净方便面，搅拌后倒掉有蜡涂层的水，重复后在用另一壶水煮面，因为方便面有一层蜡涂层，大量积累在体内会致癌。", "空腹的时候最好不要吃的九类水果：香蕉，桔子，黑枣，甘蔗，鲜荔枝，菠萝，山楂，西红柿，柿子。", "边走边吃对肠胃健康不利。", " 各种零食如雪饼、饼干、巧克力等当早餐不健康。", " 饭后不能喝茶。因为茶叶中含有鞣酸，会抑制胃液喝肠液的分泌，不利于某些蛋白质的消化，导致消化不良。", " 不要生吃鲜黄花菜、荸荠、白糖、鲜木耳、蜂蜜。"];
    this.setData({
     context: context[random]
    })
  },

  submitFunc: function (e) {
    this.setData({
      show_input: e.detail.value.input_word
    })
  }
})