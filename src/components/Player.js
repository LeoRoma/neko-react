import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Player extends Component {
  render() {
    return (
      <ReactPlayer url='https://www.youtube.com/watch?v=EmRi0Z7tdTY' playing />
    )
  }
}

export default Player;