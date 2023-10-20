

import PageLogement from './components/PageLogement';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PageHome from './components/PageHome';
import PageAbout from './components/PageAbout';

function App() {
  return (


    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PageHome/>} />
      <Route path='/logements/:id' element={<PageLogement/> } />
      <Route path='/about' element={<PageAbout/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
