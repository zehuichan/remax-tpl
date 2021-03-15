import React from 'react'
import './index.less'
import { usePageEvent } from 'remax/macro'
import { View, navigateTo } from 'remax/ali'
import { Button } from 'annar'

import { observer } from 'mobx-react'
import useStores from '@/hooks/useStores'

export default observer((props) => {
  const { userStore } = useStores()
  const handleAdd = () => {
    userStore.add()
  }
  const onAction = (type, row) => {
    console.log(type, row)
    navigateTo({ url: '/pages-a/testA/index' })
  }

  usePageEvent('onShow', () => {
    console.log('page onShow')
  })

  usePageEvent('onLoad', () => {
    console.log('page onLoad')
  })

  return (
    <View className="components">
      <View>陈泽辉</View>
      <Button onTap={handleAdd}>{userStore.state.count}</Button>
      <Button onTap={() => onAction('detail', 'jasonchenzehui')}>跳转</Button>
    </View>
  )
})