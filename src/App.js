import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    // intilialization  ---- we initialize state and props
    console.log('Constructor call')
    super()
    this.state = {
      isOn: false,
    }
  }
  componentWillMount() {
    console.log('Component Will Mount Call')
  }
  componentDidMount() {
    // we are calling the apis means fethcing data from server
    console.log('Component Did Mount')
  }
  render() {
    console.log('Render Call')
    return (
      <div>
        <h1>We are learning Life Cycle Methods in Class Component</h1>
      </div>
    )
  }
}

export default App
