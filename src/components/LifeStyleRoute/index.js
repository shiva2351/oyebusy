import {Component} from "react"
import Header from "../Header"
import Footer from "../Footer"
import BannerRoute from "../BannerRoute"

class LifeStyleRoute extends Component{
    render(){
        return <div>
            <Header/>
            <BannerRoute name="Life-style"/>
            Lifestyleroute
            <Footer/>
        </div>
    }
}

export default LifeStyleRoute