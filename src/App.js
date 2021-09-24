import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Header from './components/Header';
import SearchnFilter from './components/SearchnFilter';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <Router>
      <header>
      <Route exact path="/" component={Header}/>
      <Route exact path="/" component={SearchnFilter}/>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </main>
    </Router>
    </div>
  );
}

export default App;
