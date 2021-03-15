import React from 'react'
import store from '@/store'

const useStores = () => {
  return React.useContext(store)
}

export default useStores
