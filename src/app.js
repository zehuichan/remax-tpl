import * as React from 'react'
import { useAppEvent } from 'remax/macro'
import { useLocalStore } from 'mobx-react'
import { storeContext } from './hooks/useStores'
import createUserStore from './store/modules/user'

// global css
import 'annar/dist/annar.css'
import '@/assets/less/index.less'

const App = ({ children }) => {
  const userStore = useLocalStore(createUserStore)

  useAppEvent('onLaunch', () => {
    console.log('app onLaunch')
  })

  useAppEvent('onShow', () => {
    console.log('app onShow')
  })

  useAppEvent('onHide', () => {
    console.log('app onHide')
  })

  return (
    <storeContext.Provider value={{ userStore }}>
      {children}
    </storeContext.Provider>
  )
}

export default App
