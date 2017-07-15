import React from 'react'
import { observer, inject } from 'mobx-react'
@inject('store')
@observer
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        {this.props.store.message}
      </div>
    )
  }
}
