import { Routes, Route, Navigate  } from 'react-router-dom';
import Layout from './Pages/Home';
import SignIn from './Pages/SignIn';
import PopupNav from './Components/PopupNav'




const App = () => {
  return (
    <Routes >
      <Route path='/login' element={<SignIn/>} />
      <Route path='/' element={<Layout/>} />
      <Route path='/pop' element={<PopupNav/>} />
      
      
      
      
    
    </Routes>
  )
}

export default App

