
import './App.css';
import{Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import City from './components/City';
import EditCity from './components/EditCity';




function App() {
  return (
    <div className="App">
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/add-city' element={<City/>}/>
      <Route path ='/edit-city/:id' element={<EditCity/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
