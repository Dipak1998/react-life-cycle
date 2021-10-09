import React, { Component } from 'react'

class MemeberCardList extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      memebers: props.data, // [{}....{}]
    }
    console.log(this.state.memebers)
  }

  render() {
    return (
      <>
        <h1>Member List</h1>
        {this.state.memebers.map((memebr) => {
          return (
            <>
              <p>{memebr.id}</p>
              <h2>{memebr.name}</h2>
              <p>{memebr.email}</p>
            </>
          )
        })}
      </>
    )
  }
}

export default MemeberCardList
