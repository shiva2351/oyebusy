import {Route,Switch,Redirect} from "react-router-dom";


import Home from "./components/Home";
import LoginRoute from "./components/LoginRoute";
import NotFound from "./components/NotFound";
import './App.css';

const App=() =>{
console.log("app")  
return <div className="App">
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/login" component={LoginRoute} />
    <Route path="/notfound" component={NotFound}/>
    <Redirect to="/notfound" />
  </Switch>
     
    </div>
}

export default App;
