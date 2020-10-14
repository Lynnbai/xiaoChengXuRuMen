let utils = require('../../utils/util')
Page({
  data:{
    top250:{},
    in_theaters:{},
    coming_soon:{}
  },
  onLoad:function(){
    
    this.getMovieListData('http://t.talelin.com/v2/movie/top250',"top250","豆瓣Top250")
    this.getMovieListData('http://t.talelin.com/v2/movie/in_theaters',"in_theaters","正在热映")
    this.getMovieListData('http://t.talelin.com/v2/movie/coming_soon',"coming_soon","即将上映")

  },
  //请求电影数据
  getMovieListData(url,type,category){
    var that =this
    wx.request({
      url:url,
      method:'GET',
      success(res){
        let temp = []
        if(res.statusCode===200){
          temp =res.data.subjects.slice(0,3)
          temp.map(item=>{
            item.title=item.title.split(' ')[0], //去掉名字里面有英文
            item.stars=utils.starsToArray(item.rating.stars)
          })
          let readyData = {}
          readyData[type] = {
            moveList: temp,
            category:category,
          }
          that.setData(readyData)
          console.log(that.data)
        }
      },
      fail(err){
        console.log(err)
      }
    })
  },
  // 点击更多
  onMore(options){
    console.log(options)
    wx.navigateTo({
      url: `more-movie/more-movie?category=${options.target.dataset.category}`
    })
  }
})