
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Bills: [{
      id: 1,
      title: '德国之旅',
      members: [{ name: 'http://www.emtech.in/wp-content/uploads/2017/03/pic.jpg' }, { name:'http://www.emtech.in/wp-content/uploads/2017/03/pic.jpg'}],
      image: 'http://www.emtech.in/wp-content/uploads/2017/03/pic.jpg'
    },
    {
      id: 2,
      title: '4月野炊',
      members: [{ name: 'TJY' }],
      image: 'http://www.emtech.in/wp-content/uploads/2017/03/pic.jpg'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '唤醒中...',
      icon:"loading",
      duration:1000
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
    
  }
})