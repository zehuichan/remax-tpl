import * as React from 'react'
import './index.less'
import {View} from 'remax/ali'

const DemoCard = ({title, children}) => {
  return (
    <View className="card">
      {title ? <View className="h3">{title}</View> : null}
      {children}
    </View>
  )
}

export default DemoCard