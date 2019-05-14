//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    pageNo:1,
    pageSize:10,
    jobList:[],
    isPlay:app.data.isLogin,
    searchList:'',
    companyAndPosition:''

  },
  //事件处理函数
  // 跳转详情页面
  goToJobDetails(event){
    let companyid = event.target.dataset.companyid || event.currentTarget.dataset.companyid;

    wx.navigateTo({
      url: '/pages/jobDetails/jobDetails?companyid=' + companyid,
    })
  },
  onShow:function(){
    console.log(app.data.isLogin)
    console.log(this.isPlay)
    this.setData({
      isPlay:app.data.isLogin
    })
    // console.log(this.data.isPlay)
      var that=this;
      if(this.data.isPlay){
      wx.request({
        url: app.globalData.url +'/jobList/getaway',
        data:{
          pageNo:1,
          pageSize:10
        },
        success(res){
          // console.log(res.data)
          that.setData({
            searchList: res.data
          })
        }
      })
      }
  },

  //下拉刷新
  onReachBottom() {
    let that = this;
    let pageAdd = this.data.pageNo + 1;
    this.setData({
      pageNo: pageAdd,
    })
    if(this.data.isPlay){
    wx.showLoading({
      title: 'loading',
      "mask":true,
      success:function(){
        if(that.data.isPlay){
        wx.request({
          url: app.globalData.url + '/jobList/getaway',
          data: {
            pageNo: pageAdd,
            pageSize: 10
          },
          success(res) {
            // console.log(res.data)
            that.setData({
              searchList: res.data
            })
          }
        })
        }
      }
    })
    }
    wx.hideLoading()
  },
  changeIsPlay:function(e){
    // console.log(e.detail.val,'test')
    this.setData({
      'isPlay.isLogin': e.detail.val,
      searchList:e.detail.value
    })
    // app.data.isLogin=e.detail.value
  },
  //根据公司名称和职位名称搜索
  updataValue(event){
  //  console.log(event.detail.value)
  let that=this;
    let inputValue = event.detail.value;
    wx.request({
      data:{
        condition:inputValue
      },
      url: app.globalData.url + '/companyAndPosition/gateway',
      success(res){
        // console.log(res.data.companyAndPosition)
        that.setData({
          searchList: res.data.companyAndPosition
        })
      }
    })

  },

onReady(){
  this.component = this.selectComponent("#component")
}
})
