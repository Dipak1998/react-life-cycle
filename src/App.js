import React, { Component } from 'react'
import MemeberCardList from './components/memeberCardList/MemeberCardList'
import Header from './Header'

export class App extends Component {
  constructor(props) {
    // intilialization  ---- we initialize state and props
    console.log('Constructor call')
    super(props)
    this.state = {
      isOn: false,
      memeberData: [],
      favColor: 'skyblue',
      show: true,
    }
  }
  componentWillMount() {
    console.log('Component Will Mount Call')
  }
  componentDidMount() {
    // we are calling the apis means fethcing data from server
    // this.fetchData()
    console.log('Component Did Mount')
    setTimeout(() => {
      this.setState({ favColor: 'red' })
    }, 1000)
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
  // static getDerivedStateFromProps(props, state) {
  //   console.log('I am from getDerivedFromProps')
  //   // return { favColor: props.color } // favColor = skyblue
  // }
  //change the color using button click
  changeColor = () => {
    this.setState({
      favColor: 'green',
    })
  }
  shouldComponentUpdate() {
    // return false
    return true
  }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log(prevState.favColor)
  //   document.getElementById('elem1').innerHTML = `

  //   Before the update , the  favourite color was ${prevState.favColor}`
  // }
  // componentDidUpdate() {
  //   console.log('DOM is updated...')
  //   document.getElementById(
  //     'elem2'
  //   ).innerHTML = `The updated favourite color is : ${this.state.favColor}`
  // }

  delHeader = () => {
    this.setState({
      show: false,
    })
  }
  render() {
    console.log('Render Call')
    return (
      <div>
        <h1>We are learning Life Cycle Methods in Class Component</h1>
        {/* <MemeberCardList data={this.state.memeberData} /> */}
        {/* <h3>MY fav color is : {this.state.favColor}</h3>
        <button onClick={this.changeColor}>Update the color</button>
        <div id='elem1'></div>
        <div id='elem2'></div> */}
        {this.state.show ? (
          <>
            <Header />
            <button onClick={this.delHeader}>Delete Header</button>
          </>
        ) : (
          'Header is not available'
        )}
      </div>
    )
  }
}

export default App

// initiliazation  -> mounting - updation -> unmount
