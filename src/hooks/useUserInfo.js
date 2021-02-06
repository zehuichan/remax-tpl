import React, {useState} from 'react'
import {getAuthCode, getAuthUserInfo} from 'remax/ali'

export default function useUserInfo() {
  const [userInfo, setUserInfo] = useState(null)

  async function login() {
    const authcode = await getAuthCode({
      scopes: ['auth_user']
    })
    console.log(authcode)
    const res = getAuthUserInfo()
    setUserInfo(res)
  }

  return [userInfo, login]
}