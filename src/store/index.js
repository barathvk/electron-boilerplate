import { observable, action } from 'mobx'
export default class {
  @observable message = 'Hello MobX'
  @action
  load() {}
}
