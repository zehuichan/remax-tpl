import {setStorageSync, getStorageSync, removeStorageSync} from 'remax/ali'

class Cache {
  setItem(key, data) {
    try {
      setStorageSync({ key, data })
    } catch (e) {
      console.log(e)
    }
  }

  getItem(key) {
    return getStorageSync({ key })
  }

  removeItem(key) {
    return removeStorageSync({ key })
  }
}

export default new Cache()
