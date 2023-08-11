import React from 'react'

function Vndex(props) {
    const veggies = props.veggies
  return (
    <div>
      <nav>
      <a href='/'>HOME</a><br/><br/>
        <a href='/veggies/new'>Create A New Vegetable</a>
      </nav>
        {veggies.map((veg,i)=>{
            return(
                <div key={i}>
                <a href={`/veggies/${veg._id}`}>
                <h2>{veg.name}</h2> </a>
                </div>
            )
            
        })}
    </div>
  )
}

export default Vndex