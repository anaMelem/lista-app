import './App.css';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Alunos from './components/Alunos';
import Nav from 'react-bootstrap/Nav'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes, Link,Route, Router }from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Minha Aplicação React</h1>
      <BrowserRouter>
      <Nav variant='tabs'>
        <Nav.Item>
          <Nav.Link as={Link} to="/">Página Inicial</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/alunos">Cadastro de Alunos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
        </Nav.Item>
      </Nav>
      
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/alunos' element={<Alunos/>}></Route>
          <Route path="/sobre" element={<Sobre/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
