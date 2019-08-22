//index.js
//获取应用实例 
var app = getApp()
var types = ['default', 'primary', 'warn', 'post']
var qss = {
  data: {
    motto: '请输入身份证号码查归属',
    userInfo: {},
    toasMsg: '　',
    birthday:"",
    address:"",
    sex:"",
    inputValue: ''
  },
  //输入内容后
  bindKeyInput: function (e) {
    this.setData({ inputValue: e.detail.value })
  },
  //提交查询
  qsscheck: function () {
    var qvalue = this.data.inputValue
    console.log("提交的身份证号码是：" + qvalue)
    var that = this
    var reg = /^[1-9][0-7]\d{4}((19\d{2}(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(19\d{2}(0[13578]|1[02])31)|(19\d{2}02(0[1-9]|1\d|2[0-8]))|(19([13579][26]|[2468][048]|0[48])0229))\d{3}(\d|X|x)?$/
    if (!reg.test(qvalue)) {
      console.log("身份证号码为空或不正确 不能继续")
      this.setData({ toasMsg: "身份证号码为空或不正确 不能继续" })
    } else {
      console.log("身份证号码不为空，继续！")
      //调用网络请求
      app.GetHttpData01(qvalue, function (showapi_res_body) {
        that.setData({ birthday: showapi_res_body.retData.birthday})
        that.setData({ address: showapi_res_body.retData.address})
        that.setData({ sex: showapi_res_body.retData.sex})
         
      })
    }
  },

 

  //加载时
  onLoad: function () {
    console.log("加载了了index的onLoad")
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
}
//执行上方配置
Page(qss)