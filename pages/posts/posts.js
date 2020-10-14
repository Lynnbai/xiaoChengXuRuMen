var postsData = require('../../data/posts-data.js')
Page({
  data:{
  },
  onLoad: function () {
    this.setData({
      postList:postsData.postList
    })
  },
  onToDetail(option){
    wx.navigateTo({
      url: '/pages/posts/post-detail/post-detail?id='+option.currentTarget.dataset.id
    })
  }
})