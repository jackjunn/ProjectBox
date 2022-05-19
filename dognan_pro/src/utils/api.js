const axios = require('axios')

const baseUrl = process.env.NODE_ENV === 'development' ? '/api' : 'http://localhost:3000'

const api = {}

const apiAxios = async (method, url, params) => {
  // 项目既定fapp
  let headers = { fapp: 'book', 'content-Type': 'application/json' }
  // 读取储存在seeionStorage中的Token
  if (sessionStorage.getItem('token')) {
    headers.token = sessionStorage.getItem('token')
  }
  return new Promise(resolve => {
    axios({
      // 如果缓存里有Token，则所有请求都包含它
      headers: headers,
      method: method,
      url: baseUrl + url,
      // 数据内容
      data: method === 'POST' ? params : null,
      params: method === 'GET' ? params : null
    }).then((res) => {
      console.log(res.data)
      resolve(res.data)
    }).catch(e => {
      console.log(e)
    })
  })
}

// get请求
api.get = async (url, params) => {
  return apiAxios('GET', url, params)
}
// post请求
api.post = async (url, params) => {
  return apiAxios('POST', url, params)
}

export default api