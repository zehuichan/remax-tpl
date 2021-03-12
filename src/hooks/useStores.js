import * as React from 'react'

export const storeContext = React.createContext(null)

const useStores = () => {
  return React.useContext(storeContext)
}

export default useStores
