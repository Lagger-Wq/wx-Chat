// pages/personalCenter/personalCenter.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
   isPlay:app.data.isLogin,
  //  personaleReturnData:'',
   personalData:'',
   loginState:'点击登录',
   title:'登录后查看消息',
   active:'active',
    logoImg:'../../img/logoImg.png',
  },
  onLoad(){
    
  },
  onShow: function (options){
    console.log(options)
    console.log(app.data.isLogin)
    console.log(this.data.isPlay)
    if (app.data.isLogin) {
      this.setData({
        loginState: '小小酥',
        title: '完善信息',
        active: '',
        logoImg: '../../img/logoImg.jpg'
      })
    }
},
// 事件处理
  infomation() {
    let that = this;
    if (app.data.isLogin) {
      //登录状态
      wx.navigateTo({
        url: '/pages/infomation/infomation?we=1',
      })

    } else {
      //未登录状态
      wx.showModal({
        title: '提示',
        content: '请登录',
        success(res) {
          if (res.confirm) {
            // console.log('用户点击确定')
            //路由至登录页面
            wx.navigateTo({
              url: '/pages/login/login',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },
  jianli(){
    let that = this;
    if (app.data.isLogin) {
      //登录状态
      wx.navigateTo({
        url: '/pages/jianli/jianli',
      })
          
    }else{
      //未登录状态
      wx.showModal({
        title: '提示',
        content: '请登录',
        success(res) {
          if (res.confirm) {
            // console.log('用户点击确定')
             //路由至登录页面
            wx.navigateTo({
              url: '/pages/login/login',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },
  logout(){
   
    this.setData({
      isPlay:false,
      loginState: '点击登录',
      title: '登录后查看消息',
      active: 'active',
      logoImg: '../../img/logoImg.png',
    })
    app.data.isLogin=false;
  }
})