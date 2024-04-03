import {Component} from "react"
import Header from "../Header"
import Footer from "../Footer"
import BannerRoute from "../BannerRoute"
import Head from "../Head"

class Fashion extends Component{
    render(){
        return <div>
            <div>
        <Header/><Head/></div>
            <BannerRoute name="Fashion"/>
            fashion
            <Footer/>
        </div>
    }
}

export default Fashion