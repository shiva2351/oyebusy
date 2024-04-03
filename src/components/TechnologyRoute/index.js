import {Component} from "react"
import Header from "../Header"
import Footer from "../Footer"
import BannerRoute from "../BannerRoute"
import Head from "../Head"

class TechnologyRoute extends Component{
    render(){
        return <div>
           <div>
        <Header/><Head/></div>
            <BannerRoute name="Technology"/>
           technology
            <Footer/>
        </div>
    }
}

export default TechnologyRoute