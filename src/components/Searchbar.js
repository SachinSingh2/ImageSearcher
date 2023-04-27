import React, { useState } from 'react'
import '../components/Searchbar.css'

export default function Searchbar({Searching}) {
  const [term , setTerm] = useState('')


  // Here we have created a clickevent in which we have added the props function whose name is onSubmit and we have added a value to the onSubmit and passing the value from child to parent.
const handleSubmitApp = (event)=>{
event.preventDefault()  // To disable the default behaviour of form submit
Searching(term)
};


// Creating a handlechange function which will run whenever there is an change in the input.
const handlechange = (event)=>{
console.log(event.target.value)
setTerm(event.target.value)
};

  return (
    <div className='SearchBar'>

<form  onSubmit={handleSubmitApp} >
<input placeholder='Search for Images..' value={term} onChange={handlechange} />
</form>

    </div>
  )
}
