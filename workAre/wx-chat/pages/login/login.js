// pages/login/login.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
     user:app.data.userG,
     password:app.data.pwdG,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  user(e){
    // console.log(e.detail.value)
    this.setData({
      user: e.detail.value
    })
    app.data.userG=e.detail.value
   
  },
  passw(e){
    // console.log(e.detail.value)
    this.setData({
      password: e.detail.value
    })
    app.data.pwdG=e.detail.value
  },
  loginTo(){
    let that=this;
    // console.log(app.data)
    wx.request({
      data:{
        user:that.data.user,
        pwdSend:that.data.password
      },
      url: app.globalData.url + '/personalInfo/gateway',
      success(res) {
        // console.log(res.data)
        if(res.data.code==1){
          wx.showModal({
            title: '提示',
            content: '请输入正确的用户名或密码',
          })
        }
        else {
          let key="0"
          app.data.isLogin = true;
          wx.switchTab({
            url: '/pages/personalCenter/personalCenter?key='+key
            })
        }
       
      }
    })
  }
 
})