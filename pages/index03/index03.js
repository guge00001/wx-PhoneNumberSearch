//index.js
//获取应用实例 
var app = getApp()
var types = ['default', 'primary', 'warn', 'post']
var qss = {
  data: {
    motto: '请输入汉字',
    userInfo: {},
    "words": "",
    "wubi": "",
    "hanzi": "",
    "bushou": "",
    "detail_explain":"",
    "basic_explain": "",
    "bihua": "",
    "pinyin": " ",
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
    console.log("提交的汉字是："+qvalue) 
    var that = this
    var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/
    if (false) {
      console.log("汉字不能为空")
      this.setData({toasMsg: "汉字不能为空"}) 
     } else {
       console.log("汉字不为空，继续！")
        //调用网络请求
      app.GetHttpData03(qvalue, function (showapi_res_body) { 
        // that.setData({ toasMsg: "结果:" + showapi_res_body.prov + ' ' + showapi_res_body.city + ' ' +  showapi_res_body.name}) 
        that.setData({ words: showapi_res_body.words}) 
        that.setData({ wubi: showapi_res_body.wubi }) 
        that.setData({ hanzi: showapi_res_body.hanzi }) 
        that.setData({ bushou: showapi_res_body.bushou }) 
        that.setData({ detail_explain: showapi_res_body.detail_explain }) 
        that.setData({ basic_explain: showapi_res_body.basic_explain}) 
        that.setData({ bihua: showapi_res_body.bihua }) 
        that.setData({ pinyin: showapi_res_body.pinyin })
       

        
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