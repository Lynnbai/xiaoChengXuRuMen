var postsData = require('../../../data/posts-data.js')
Page({
  data:{
    isCollection:false
  },
  onLoad:function(option){
    this.setData({
      postData:postsData.postList[option.id]
    })
    var localStorage = wx.getStorageSync('isCollection')
    if(localStorage && localStorage===true){
      this.setData({
        isCollection:true
      })
    }else{
      wx.setStorageSync('isCollection', false)
    }
  },
  onColletionTap(){
    this.setData({
      isCollection:!this.data.isCollection
    })
    if(this.data.isCollection){
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
      })
    }else{
      wx.showToast({
        title: '取消收藏',
        icon: 'none',
      })
    }
    
  },
  onShare(){
    wx.showActionSheet({
      itemList: ['分享給微信好友', '分享到朋友圈', '分享到QQ','分享到微博'],
      itemColor:"#405f80",
      success (res) {
        console.log(res.tapIndex)
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  }
})