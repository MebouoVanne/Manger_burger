import React, { useState } from 'react'

export default function LoginForm() {

    const [inputValue, setInputValue] = useState("Bob")
 
    const   handleSubmit = (event) => { 
         event.preventDefault()
         alert(`bonjour ${inputValue}`)
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
             required/>
            <button> Accédez à votre espace</button>
    </form>
  )
}
