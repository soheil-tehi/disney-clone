import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Details from "./Components/Home Components/Details";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/home" component={Home} />
          <Route path="/detail/:id" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
