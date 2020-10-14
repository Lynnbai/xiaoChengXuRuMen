const utils = require('../../../utils/util')
Page({
  data: {
    moveMoviesList: [],
    type: '',
    start: 0
  },
  onLoad(options) {
    this.setData({
      type: options.category
    })
    let type = ''
    switch (options.category) {
      case '豆瓣Top250':
        type = 'top250'
        break;
      case '正在热映':
        type = 'in_theaters'
        break;
      case '即将上映':
        type = 'coming_soon'
        break;
    }
    // this.getDataList('http://t.talelin.com/v2/movie/'+type)
    let url = 'http://t.talelin.com/v2/movie/' + type
    utils.http(url + '?count=20&start=' + this.data.start, this.getDataList)

  },
  onReady(e) {
    wx.setNavigationBarTitle({
      title: this.data.type
    })
  },
  //请求数据
  getDataList(res) {
    // let that = this
    // wx.request({
    //   url: url+'?count=20&start='+this.data.start,
    //   method:'GET',
    //   success(res){
    //     if(res.statusCode===200){
    //       res.data.subjects.map(item=>{
    //         item.title = item.title.split(' ')[0]
    //         item.stars=utils.starsToArray(item.rating.stars)
    //       })
    //       let oldArr =[]
    //       oldArr  = that.data.moveMoviesList
    //      res.data.subjects.map(item=>{
    //         oldArr.push(item)
    //       })
    //       that.setData({
    //         start:++res.data.start,
    //         moveMoviesList:oldArr
    //       })
    //     }
    //   },
    //   fail(){
    //   }
    // })
    let that =this
    res.subjects.map(item => {
      item.title = item.title.split(' ')[0]
      item.stars = utils.starsToArray(item.rating.stars)
    })
    let oldArr = []
    oldArr = that.data.moveMoviesList
    res.subjects.map(item => {
      oldArr.push(item)
    })
    that.setData({
      start: ++res.start,
      moveMoviesList: oldArr
    })

  },
  //上拉加载更多
  onReachBottom() {
    console.log(223)
  }
})