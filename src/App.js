import './App.css';
//import components 
import Navbar from './components/Navbar';
import Products from './components/Products';


//Router
import { Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch >
      <Route exact path ="/products" component={Products} >
      </Route>
      </Switch>
      <Route exact path ="/cart" component={Cart} />   
    </div>
  );
}

export default App;
