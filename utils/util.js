const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const starsToArray = stars =>{
  let num = stars.substr(0,1)
  let arr = []
  for(let i =0 ;i<5;i++){
     if(i<=num){
      arr.push(1)
     }
     else{
       arr.push(0)
     }
  }
  console.log(arr)
  return arr
}

const  http = (url,callback)=>{
  wx.request({
    url: url,
    method:'GET',
    success(res){
      if(res.statusCode===200){
        return callback(res.data)
      }else{
      console.log(res)
      }
    },
    fail(err){
      console.log(err)
    }
  })
}

module.exports = {
  formatTime: formatTime,
  starsToArray:starsToArray,
  http:http
}
