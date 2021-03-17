import {request, showToast, showAlert} from 'remax/ali'
// utils
import Cache from './cache'

function http({ url, headers = {}, method, data, timeout = 6000, dataType }) {
  if (Cache.getItem('token')) {
    headers['Authorization'] = 'Bearer ' + Cache.getItem('token')
  }
  return new Promise(async (resolve, reject) => {
    request({
      url: process.env.REMAX_APP_BASE_URL + url,
      headers: headers,
      method: method,
      data: data,
      timeout,
      dataType
    }).then((response) => {
      const res = response.data
      if (res.code !== 200) {
        if (res.code === 2002) {

        }
        reject(res)
      }
      resolve(res)
    }).catch((err) => {
      const status = ~[400, 401, 500].indexOf(err.status) ? err.status : err.error
      switch (status) {
        case 400:
          showToast({ title: `错误 - 请求无效！`, icon: 'none', duration: 1500 })
          break
        case 401:
          showToast({ title: `错误 - 请求无效！`, icon: 'none', duration: 1500 })
          break
        case 500:
          showToast({ title: `错误 - 请求无效！`, icon: 'none', duration: 1500 })
          break
        case 23:
          showToast({ title: `错误 - 请求无效！`, icon: 'none', duration: 1500 })
          break
        case 20:
          showToast({ title: `错误 - 请求无效！`, icon: 'none', duration: 1500 })
          break
        case 14:
          showToast({ title: `错误 - 请求无效！`, icon: 'none', duration: 1500 })
          break
        case 13:
          showToast({ title: `错误 - 请求无效！`, icon: 'none', duration: 1500 })
          break
        case 12:
          showToast({ title: `错误 - 请求无效！`, icon: 'none', duration: 1500 })
          break
        case 11:
          showToast({ title: `错误 - 请求无效！`, icon: 'none', duration: 1500 })
          break
        case 2:
          showToast({ title: `错误 - 请求无效！`, icon: 'none', duration: 1500 })
          break
        default:
          showToast({ title: `错误 - 请求无效！`, icon: 'none', duration: 1500 })
          break
      }
      reject(err)
    })
  })
}

export default http