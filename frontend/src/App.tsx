
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpPage } from "./components/SignUpPage";
import { Landingpage } from "./components/Landingpage";
import { LoginPage } from "./components/LoginPage";
function App() {


  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Landingpage/>}/> 
    <Route path="/signuppage" element={<SignUpPage/>}/> 
    <Route path="/loginpage" element={<LoginPage/>}/> 

    </Routes>
    
  </BrowserRouter>
   
  )
}

export default App
