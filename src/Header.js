import React, { Component } from 'react'

export class Header extends Component {
  componentWillUnmount() {
    alert('The component named Header is about to ne unmounted')
  }
  render() {
    return (
      <div>
        <h3> I am header</h3>
      </div>
    )
  }
}

export default Header
