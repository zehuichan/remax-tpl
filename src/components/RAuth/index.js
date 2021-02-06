import * as React from 'react'
import {Button} from 'remax/ali'
import './index.less'

const RAuth = ({login, children}) => {
  return (
    <Button className="r-auth" hoverClassName="none" onClick={login}>
      {children}
    </Button>
  )
}

export default RAuth
