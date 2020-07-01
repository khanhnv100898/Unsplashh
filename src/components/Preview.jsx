import React, { Component } from 'react'

export default class Preview extends Component {
  render() {
    return (
      <div style = {{
        width:"70%",
        height:"600px",
        backgroundRepeat:"no-repeate",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage:`url(${this.props.imageUrl})`,
      }}>
      </div>
    )
  }
}
