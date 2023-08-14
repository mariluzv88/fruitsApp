import React from 'react'

function Edit(props) {
     const fruit = props.fruit
  return (
    <div>
          <form  action={`/fruits/${fruit._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={fruit.name}/><br/>
          Color: <input type="text" name="color"  defaultValue={fruit.color}/><br/>
          Is Ready To Eat:
              { fruit.readyToEat? <input type="checkbox" name="readyToEat" defaultChecked />: <input type="checkbox" name="readyToEat"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
    </div>
  )
}

export default Edit