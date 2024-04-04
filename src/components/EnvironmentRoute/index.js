import {Component} from "react"
import Header from "../Header"
import BannerRoute from "../BannerRoute"
import Head from "../Head"

class EnvironmentRoute extends Component{
    render(){
        return <div>
           <div>
        <Header/><Head/></div>
            <BannerRoute name="Enironment"/>
            environment
        </div>
    }
}

export default EnvironmentRoute