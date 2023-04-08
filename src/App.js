import './App.css';
import './Home.css';
import Header from './Header';
import { Home } from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
    < Header />
    <div className="App">
      <Switch>
      <Route path="/checkout"><Checkout/></Route>
      <Route path="/">< Home /></Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
