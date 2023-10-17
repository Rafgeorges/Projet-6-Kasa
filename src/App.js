

import PageLogement from './components/PageLogement';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PageHome from './components/PageHome';



function About(){
  return (
    <h1> Salut les potos</h1>
  )
}





function App() {
  return (


    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PageHome/>} />
      <Route path='/logements/:id' element={<PageLogement/> } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
