//app.js
App( {
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync( 'logs' ) || []
    logs.unshift( Date.now() )
    wx.setStorageSync( 'logs', logs )
  },
  //获取远程数据，通过API GET方式 数据格式为json
  GetHttpData(PhoneNum,callback) { 
    console.log("向服务器提交号码："+PhoneNum) 
    wx.request( { 
      dataType: 'json',
      url: 'https://route.showapi.com/6-1', 
      data: {
        "showapi_appid": '102192', 
        "showapi_sign": '636e4074231c4ccd89793f8213d97b69',  
        "num": PhoneNum
      },
      //json格式的的header头
      header: {
        'Content-Type': 'application/json'
      },
      success: function( res ) {
        console.log("成功" + ""+res.data.showapi_res_body.city )
        var qresult = res.data.showapi_res_body //获取json数组 
        callback(qresult)
      }
      ,fail: function( res ) {
        console.log( "失败"+res.data )
      }
      ,complete: function( res ) {
        console.log("完成" + ""+res.data.showapi_res_body.city )
      } 
    })
  },

  GetHttpData01(inforNum, callback) {
    console.log("向服务器提交号码：" + inforNum)
    wx.request({
      dataType: 'json',
      url: 'https://route.showapi.com/25-3',
      data: {
        "showapi_appid": '102192', //appid
        "showapi_sign": '636e4074231c4ccd89793f8213d97b69',  //应用的密钥secret
        "id": inforNum
      },
      //json格式的的header头
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("成功" + "" + res.data.showapi_res_body.retData)
        var qresult = res.data.showapi_res_body//获取json数组 
        callback(qresult)
      }
      , fail: function (res) {
        console.log("失败" + res.data)
      }
      , complete: function (res) {
        console.log("完成" + "" + res.data.showapi_res_body.retData)
      }
    })
  },

  GetHttpData02(word, callback) {
    console.log("向服务器提交号码：" + word)
    wx.request({
      dataType: 'json',
      url: 'https://route.showapi.com/1196-2',
      data: {
        "showapi_appid": '102192', 
        "showapi_sign": '636e4074231c4ccd89793f8213d97b69',  
        "keyword": word
      },
      //json格式的的header头
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("成功" + "" + res.data.showapi_res_body.data)
        var qresult = res.data.showapi_res_body//获取json数组 
        callback(qresult)
      }
      , fail: function (res) {
        console.log("失败" + res.data)
      }
      , complete: function (res) {
        console.log("完成" + "" + res.data.showapi_res_body.data)
      }
    })
  },

  GetHttpData03(word, callback) {
    console.log("向服务器提交号码：" + word)
    wx.request({
      dataType: 'json',
      url: 'https://route.showapi.com/1524-5',
      data: {
        "showapi_appid": '102192', 
        "showapi_sign": '636e4074231c4ccd89793f8213d97b69', 
        "hanzi": word
      },
      //json格式的的header头
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("成功" + "" + res.data.showapi_res_body.data)
        var qresult = res.data.showapi_res_body//获取json数组 
        callback(qresult)
      }
      , fail: function (res) {
        console.log("失败" + res.data)
      }
      , complete: function (res) {
        console.log("完成" + "" + res.data.showapi_res_body.data)
      }
    })
  },

  GetHttpData04(shengfen, callback) {
    console.log("向服务器提交省份：" + shengfen)
    wx.request({
      dataType: 'json',
      url: 'https://route.showapi.com/138-46',
      data: {
        "showapi_appid": '102192', 
        "showapi_sign": '636e4074231c4ccd89793f8213d97b69',  
        "prov": shengfen
      },
      //json格式的的header头
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("成功" + " " + res.data.showapi_res_body)
        var qresult = res.data.showapi_res_body//获取json数组 
        callback(qresult)
      }
      , fail: function (res) {
        console.log("失败" + res.data)
      }
      , complete: function (res) {
        console.log("完成" + "" + res.data.showapi_res_body.data)
      }
    })
  },

  
  getUserInfo: function( cb ) {
    var that = this
    if( this.globalData.userInfo ) {
      typeof cb == "function" && cb( this.globalData.userInfo )
    } else {
      //调用登录接口
      wx.login( {
        success: function() {
          wx.getUserInfo( {
            success: function( res ) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb( that.globalData.userInfo )
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})
