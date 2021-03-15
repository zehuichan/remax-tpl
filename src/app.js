import React from 'react'
import { useAppEvent } from 'remax/macro'

// global css
import 'annar/dist/annar.css'
import '@/assets/less/index.less'

const App = ({ children }) => {
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
}

export default App
