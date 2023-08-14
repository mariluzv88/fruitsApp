import React from 'react'
// import Default from'./layouts/Default'
function Index(props) {
    const fruits = props.fruits
  return (
    <div>
      {/* <Default title={"Fruits Index Page"}> */}
      <nav>
      <a href='/'>HOME</a><br/><br/>
        <a href='/fruits/new'>Create A New Fruit</a>
      </nav>
        {fruits.map((fruit,i)=>{
            return(
                <div key={i}>
                <a href={`/fruits/${fruit._id}`}>
                <h2>{fruit.name}</h2> </a>
                <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a>
  

                <form action={`/fruits/${fruit._id}?_method=DELETE`}method="POST">
                <input type="submit" value="DELETE"/>
               </form>
                </div>
            )
            
        })}
        {/* </Default> */}
    </div>
  )
}

export default Index