// axios 公共配置
// 基地址
axios.defaults.baseURL = 'http://geek.itheima.net'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token")
  token && (config.headers.Authorization = `Bearer ${token}`)
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

//添加响应拦截器
axios.interceptors.response.use(function (response) {

  return response.data;
}, function (error) {
  if (error?.response?.status === 401) {
    alert('登录状态过期，请重新登陆')
    localStorage.clear()
    location.href = '../login/index.html'
  }
  return Promise.reject(error)
})