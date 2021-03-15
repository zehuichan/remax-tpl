import { observable, action } from 'mobx'

class createStore {
  @observable
  state = {
    avatar: '',
    name: 'chenzehui',
    phone: '15800066380',
    count: 0
  }

  @action
  add() {
    this.state.count++
  }
}

export default new createStore()