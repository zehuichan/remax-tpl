import { useLocalStore } from 'mobx-react'

import userStore from './modules/user'

const stores = {
  userStore: useLocalStore(userStore)
}

export default stores