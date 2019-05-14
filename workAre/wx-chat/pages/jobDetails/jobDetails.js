// pages/jobDetails/jobDetails.js
let app=getApp()
Page({
  data: {
    companyid:"",
    jobDetails:""
  },

  onLoad: function (options) {
    let that=this;
    // console.log(options.companyid)
    this.setData({
      companyid: options.companyid
    })
    wx.request({
      data:{
        condition: this.data.companyid
      },
      url: app.globalData.url + '/jobDetails/gateway',
      success(res){
        // console.log(res.data)
that.setData({
  jobDetails: res.data.resultData
})
      }
    })
  },

  

})