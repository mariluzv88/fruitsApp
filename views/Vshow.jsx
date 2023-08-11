import React from 'react'

function Vshow(props) {
    const veggi = props.veggi
  return (
    <div>
        <a href='/'>HOME</a><br/><br/>
        <h1>Show Page</h1>

        <h3>The {veggi.name} is {veggi.color}</h3>
        <h1 style={{color:'green'}}>{veggi.readyToEat ? "Its Ready to Eat":"Its isn't ready yet"}</h1>
    </div>
  )
}

export default Vshow