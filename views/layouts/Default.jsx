import React from 'react'


function Default(props) {
    const fruits = this.props.fruits
  return (
    <html>
        <head><title>{this.props.title}</title></head>
        <body>
        <h1>{this.props.title}</h1>
        {this.props.children}
        </body>
      </html>
  )
}

export default Default