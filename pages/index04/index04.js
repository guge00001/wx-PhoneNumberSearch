//index.js
//获取应用实例 
var app = getApp()
var types = ['default', 'primary', 'warn', 'post']
var qss = {
  data: {
    motto: '请输入省份',
    userInfo: {},
    "ct":"",
    "p89":"",
    "p93":"",
    "prov":"",
    "p95":"",
    "p92":"",
    "p98":"",
    "p97":"",
    "p0":"",
    "p90":"",
    inputValue:''
  },
  //输入内容后
  bindKeyInput:function(e) {
     this.setData({inputValue:e.detail.value})
  },
  //提交查询
  qsscheck:function(){ 
    var qvalue = this.data.inputValue
    console.log("提交的省份是："+qvalue) 
    var that = this
    var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/
    if (false) {
      console.log("省份为空或不正确 不能继续")
      this.setData({toasMsg: "省份为空或不正确 不能继续"}) 
     } else {
       console.log("省份不为空，继续！")
        //调用网络请求
      app.GetHttpData04(qvalue, function (showapi_res_body) { 
        // that.setData({ toasMsg: "结果:" + showapi_res_body.prov + ' ' + showapi_res_body.city + ' ' +  showapi_res_body.name}) 
        that.setData({ ct: showapi_res_body.list[0].ct }) 
        that.setData({ p89: showapi_res_body.list[0].p89 }) 
        that.setData({ p93: showapi_res_body.list[0].p93 }) 
        that.setData({ prov: showapi_res_body.list[0].prov }) 
        that.setData({ p95: showapi_res_body.list[0].p95 }) 
        that.setData({ p92: showapi_res_body.list[0].p92 }) 
        that.setData({ p98: showapi_res_body.list[0].p98}) 
        that.setData({ p97: showapi_res_body.list[0].p97 }) 
        that.setData({ p0: showapi_res_body.list[0].p0 }) 
        that.setData({ p90: showapi_res_body.list[0].p90 }) 
       

        
       }) 
     }
  }, 
  //加载时
  onLoad: function () {  
    console.log("加载了了index的onLoad")  
    var that = this  
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
}
//执行上方配置
Page(qss)