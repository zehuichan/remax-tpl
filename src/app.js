import * as React from 'react'
import dva from 'remax-dva'

// global css
import '@/assets/less/index.less'

const app = dva()

const App = app.start(({ children }) => {

  return children
})

export default App
