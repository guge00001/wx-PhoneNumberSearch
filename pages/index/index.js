//index.js
//获取应用实例 
var app = getApp()
var types = ['default', 'primary', 'warn', 'post']
var qss = {
  data: {
    motto: '请输入号码查归属:',
    userInfo: {},
    prov:"",
    city:"",
    name:"",
    // toasMsg:'　',
    inputValue:''
  },
  //输入内容后
  bindKeyInput:function(e) {
     this.setData({inputValue:e.detail.value})
  },
  //提交查询
  qsscheck:function(){ 
    var qvalue = this.data.inputValue
    console.log("提交的号码是："+qvalue) 
    var that = this
    var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/
    if (!reg.test(qvalue)) {
      console.log("手机号码为空或不正确 不能继续")
      this.setData({toasMsg: "手机号码为空或不正确 不能继续"}) 
     } else {
       console.log("号码不为空，继续！")
        //调用网络请求
      app.GetHttpData(qvalue, function (showapi_res_body) { 
        // that.setData({ toasMsg: "结果:" + showapi_res_body.prov + ' ' + showapi_res_body.city + ' ' +  showapi_res_body.name}) 
        that.setData({ prov: showapi_res_body.prov}) 
        that.setData({ city: showapi_res_body.city}) 
        that.setData({ name: showapi_res_body.name}) 
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