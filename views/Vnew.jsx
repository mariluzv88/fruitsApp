import React from 'react'

function Vnew() {
  return (
    <div>
        Form
        <form action="/veggies" method="POST">
                 Name: <input type="text" name="name" /><br/>
                 Color: <input type="text" name="color" /><br/>
                 Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
                 <input type="submit" name="" value="Create Vegetable"/>
         </form>
    </div>
  )
}

export default Vnew