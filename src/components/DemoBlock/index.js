import * as React from 'react'
import './index.less'
import {View} from 'remax/ali'

const DemoBlock = ({title, card, children}) => {
  return (
    <View className="v-doc-demo-block">
      {title ? <View className="v-doc-demo-block__title">{title}</View> : null}
      {card ? <View className="v-doc-demo-block__card">{children}</View> : children}
    </View>
  )
}

export default DemoBlock