import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
    <h1>Welcome to product manager app</h1>
    <Routes>
    <Route element={<Main />} path='/'/>
    <Route element={<UpdateProduct />} path='/edit/:id'/>
    </Routes>
    </div>
  );
}

export default App;
