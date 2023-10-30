import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LoginForm() {

    const [inputValue, setInputValue] = useState("Bob")
 
    const   handleSubmit = (event) => { 
         event.preventDefault()
         setInputValue('')
         
     }
    const handleChange = (event) => { 
        setInputValue(event.target.value)
     }
  return (
    <form  onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous </h1>
        <br/>
        <h2>Connectez-vous</h2>
            <input 
            value={inputValue}
            onChange={handleChange}
            type='text'
             placeholder='Entrer votre prenom..' 
             required
             />
           <Link to="/order">
              <button> Accédez à votre espace</button>
           </Link> 
    </form>
  )
}
