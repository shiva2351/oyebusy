import {Component} from "react"
import Header from "../Header"
import BannerRoute from "../BannerRoute"
import Head from "../Head"

class LifeStyleRoute extends Component{
    render(){
        return <div>
            <div>
        <Header/><Head/>
        </div>
            <BannerRoute name="Life-style"/>
            Lifestyleroute
        </div>
    }
}

export default LifeStyleRoute