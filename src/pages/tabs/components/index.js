import * as React from 'react'
import './index.less'
import { usePageEvent } from 'remax/macro'
import { View } from 'remax/ali'
import RBadge from '@/components/RBadge'

import { inject, observer } from 'mobx-react'

const Components = (props) => {
  console.log(props)

  usePageEvent('onShow', () => {
    console.log('page onShow')
  })

  usePageEvent('onLoad', () => {
    console.log('page onLoad')
  })

  return (
    <View className="components">
      <View>陈泽辉</View>
      <RBadge>123</RBadge>
    </View>
  )
}

export default inject('userStore')(observer(Components))