import { observable, action, computed } from 'mobx'

class createStore {
  @observable
  state = {
    avatar: '',
    name: 'chenzehui',
    phone: '15800066380'
  }
}

export default new createStore()