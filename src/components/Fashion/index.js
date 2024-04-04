import {Component} from "react"
import Header from "../Header"
import BannerRoute from "../BannerRoute"
import Head from "../Head"

class Fashion extends Component{
    render(){
        return <div>
            <div>
        <Header/><Head/></div>
            <BannerRoute name="Fashion"/>
            fashion
        </div>
    }
}

export default Fashion