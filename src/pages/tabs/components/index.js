import * as React from 'react'
import useUserInfo from '@/hooks/useUserInfo'
import {View, Image, Text} from 'remax/ali'
import LoginButton from '@/components/LoginButton'

const Components = () => {
  const [user, login] = useUserInfo()

  return (
    <View className="user">
      <LoginButton login={login}>
        <Image
          className="avatar"
          src={user?.avatar}
          background-size="cover"
        />
      </LoginButton>
      <View className="nickname">
        {user ? user.nickName + '\'s' : 'My'} Todo List
        {!user && <Text className="login-tip">(Tap to login ↑)</Text>}
      </View>
    </View>
  )

}
export default Components