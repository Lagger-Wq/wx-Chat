// pages/component/component.js
const app = getApp();
Component({
options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  data: {
     job:[
       "Java", "PHP", "Android", "IOS", "前端", "测试", "产品经理", "设计师", "运维", "市场","销售经理"
     ],
     jobName:'',
     active:'',
     searchResult:'',
     isShow:true,
     checkPositionName:'',
     active:'',
     notactive:"",
     item1:''
  },
  methods:{
  active1(event){
    // console.log(event.target.dataset.jobname)
    this.setData({
      jobName: event.target.dataset.jobname,
      active:'active',
      item1: event.target.dataset.jobname
})


  },
  goToSearch(){
      let that=this;
      wx.request({
        url: app.globalData.url + '/jobListSearch/gateway',
        data:{
          search:that.data.jobName,
        },
        success(res){
          // console.log(res)
          that.setData({
            searchResult:res.data
          })
          // console.log(that.data.searchResult, 'value');
          that.triggerEvent('onChangePlay', { val: true, value: that.data.searchResult })
        }
      })
      
  },
  }

})