import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { GlobalProvider } from './Context/State'
import CountryInfo from './components/CountryInfo';



function App() {




  return (
    <GlobalProvider>
      <Router>

        <header>
          <Header />
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/info-about/:country" component={CountryInfo} />
          </Switch>
        </main>


      </Router>
    </GlobalProvider>
  );
}

export default App;
