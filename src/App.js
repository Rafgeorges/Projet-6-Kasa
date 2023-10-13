

import Main from './components/Main';
import	Footer from './components/Footer';
import PageLogement from './components/Logement';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';



function About(){
  return (
    <h1> Salut les potos</h1>
  )
}





function App() {
  return (


    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/logements/:id' element={<PageLogement/> } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
