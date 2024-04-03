import {Component} from "react"
import Header from "../Header"
import Footer from "../Footer"
import BannerRoute from "../BannerRoute"
import Head from "../Head"

class EnvironmentRoute extends Component{
    render(){
        return <div>
           <div>
        <Header/><Head/></div>
            <BannerRoute name="Enironment"/>
            environment
            <Footer/>
        </div>
    }
}

export default EnvironmentRoute