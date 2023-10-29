const { useState } = require("react");

function App(){
  const [prenom, setPrenom] = useState("van")
  const [count, setCount] = useState(1)
  const handleClick = () =>{
    setCount(count +1);
  }

  return <div>
      <h1>Bonjour {prenom}</h1>
      <p>{count}</p>
      <button onClick={handleClick}>increment</button>
  </div>
  
}

export default App;