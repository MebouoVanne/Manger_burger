import { Routes,Route } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";

// function App(){
//   const [prenom, setPrenom] = useState("van")
//   const [count, setCount] = useState(1)
//   const handleClick = () =>{
//     setCount(count +1);
//   }

//   return 
//   <div>
//       <h1>Bonjour {prenom}</h1>
//       <p>{count}</p>
//       <button onClick={handleClick}>increment</button>
//   </div>
  
// }

function App(){

  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />   
      <Route path="/order" element={<OrderPage/>} />  
      <Route path="*" element={<ErrorPage/>} /> 
    </Routes>
  )
 
  
  
}

export default App;