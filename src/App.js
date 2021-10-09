import React, { Component } from 'react'
import MemeberCardList from './components/memeberCardList/MemeberCardList'

export class App extends Component {
  constructor(props) {
    // intilialization  ---- we initialize state and props
    console.log('Constructor call')
    super(props)
    this.state = {
      isOn: false,
      memeberData: [],
      favColor: 'skyblue',
    }
  }
  componentWillMount() {
    console.log('Component Will Mount Call')
  }
  componentDidMount() {
    // we are calling the apis means fethcing data from server
    this.fetchData()
    console.log('Component Did Mount')
  }

  async fetchData() {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        this.setState({ memeberData: data })
        console.log(data)
        console.log(this.state.memeberData)
      })
  }
  static getDerivedStateFromProps(props, state) {
    console.log('I am from getDerivedFromProps')
    return { favColor: props.color } // favColor = skyblue
  }
  render() {
    console.log('Render Call')
    return (
      <div>
        <h1>We are learning Life Cycle Methods in Class Component</h1>
        {/* <MemeberCardList data={this.state.memeberData} /> */}
        <h3>MY fav color is : {this.state.favColor}</h3>
      </div>
    )
  }
}

export default App
