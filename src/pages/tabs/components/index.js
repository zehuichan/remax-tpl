import * as React from 'react'
import './index.less'
import {usePageEvent} from 'remax/macro'
import useUserInfo from '@/hooks/useUserInfo'
import {View} from 'remax/ali'
import RAuth from '@/components/RAuth'
import DemoCard from '@/components/DemoCard'
import DemoBlock from '@/components/DemoBlock'
import RBadge from '@/components/RBadge'

const Components = () => {
  const [user, login] = useUserInfo()

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

export default Components