import * as React from 'react'
import './index.less'
import useUserInfo from '@/hooks/useUserInfo'
import {View} from 'remax/ali'
import RAuth from '@/components/RAuth'
import DemoCard from '@/components/DemoCard'
import DemoBlock from '@/components/DemoBlock'

import Container from 'mini-ali-ui/es/container'
import Badge from 'mini-ali-ui/es/badge'

const Components = () => {
  const [user, login] = useUserInfo()
  return (
    <View className="components">
      <Container
        title="带有 title 标题，可自定义设置"
      >
        <View slot="operation" style="color: red;">is slot</View>
      </Container>
      <Badge text={1}>
        <View slot="inner">Remax</View>
      </Badge>
    </View>
  )
}

export default Components