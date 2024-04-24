
import './App.css';
import Cards from './Componets/Cards';
import Navbar from './Componets/Navbar';
import Login from './Componets/Login1';
import AddUsers from './Componets/AddUsers'
function App() {
  return (
    <div className="App">
   <Login/>
    <Navbar/>
    <Cards/>
    <AddUsers/>
   
    </div>
  );
}

export default App;
