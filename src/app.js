import React from 'react'
import {useAppEvent} from 'remax/macro'
import dva from 'remax-dva'

// global css
import '@/assets/less/index.less'

const app = dva()

const App = app.start(({ children }) => {

  useAppEvent('onLaunch', () => {
    console.log('app onLaunch')
  })

  useAppEvent('onShow', () => {
    console.log('app onShow')
  })

  useAppEvent('onHide', () => {
    console.log('app onHide')
  })

  return children
})

export default App
