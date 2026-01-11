import { useState } from 'react' 
import Showing from './components/Showing'
import HeaderSection from './components/header/HeaderSection'
import LogInForm from './components/form/logInForm';
import { useSelector} from "react-redux";
function App() {
  const isAuth=useSelector((state)=>state.auth.isAuth);

  return (
    <>
    
    <HeaderSection/>
    {!isAuth && <LogInForm/>}
    <Showing/>
    
    
    </>
  )
}

export default App
