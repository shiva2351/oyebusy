import {Route,Switch,Redirect} from "react-router-dom";


import Home from "./components/Home";
import LoginRoute from "./components/LoginRoute";
import NotFound from "./components/NotFound";
import './App.css';
import Fashion from "./components/Fashion";
import TechnologyRoute from "./components/TechnologyRoute";
import LifeStyleRoute from "./components/LifeStyleRoute";
import EnvironmentRoute from "./components/EnvironmentRoute";
import Footer from "./components/Footer";

const App=() =>{
console.log("app")  
return <>
<div className="App">
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/home/blog/fashion" component={Fashion}/>
    <Route exact path="/home/blog/technology" component={TechnologyRoute}/>
    <Route exact path="/home/blog/life-style" component={LifeStyleRoute}/>
    <Route exact path="/home/blog/environment" component={EnvironmentRoute}/>

    <Route exact path="/login" component={LoginRoute} />
    <Route path="/notfound" component={NotFound}/>
    <Redirect to="/notfound" />
  </Switch>
     
    </div><Footer/></>
}

export default App;
