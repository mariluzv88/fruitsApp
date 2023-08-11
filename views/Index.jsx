import React from 'react'

function Index(props) {
    const fruits = props.fruits
  return (
    <div>
      <nav>
        <a href='/fruits/new'>Creat A New Fruit</a>
      </nav>
        {fruits.map((fruit,i)=>{
            return(
                <div key={i}>
                <a href={`/fruits/${fruit._id}`}>
                <h2>{fruit.name}</h2> </a>
                </div>
            )
            
        })}
    </div>
  )
}

export default Index