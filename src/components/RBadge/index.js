import * as React from 'react'
import './index.less'
import {View} from 'remax/ali'

const RBadge = ({ children }) => {
  return (
    <View className="r-badge">
      {children}
    </View>
  )
}

export default RBadge