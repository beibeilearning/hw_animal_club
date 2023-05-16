// pages/Home/home.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
    /* 跳到小动物信息 */
  navigateToAnimal: function () {
    wx.navigateTo({
      url: '../Animal/animal',
    })
  },
  /* 跳到联系人信息 */
  navigateToContact: function () {
    wx.navigateTo({
      url: '../Contact/contact',
    })
  },

  /*跳到小动物舍的成员信息页面*/
  navigateToMember: function () {
    wx.navigateTo({
      url: '../Member/member',
    })
  },
  // 跳转到小动物舍游记页面
  navigateToTravelogue() {
    wx.navigateTo({
      url: '../Travelogue/travelogue',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})