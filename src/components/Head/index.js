import {Component} from "react"

import "./index.css"
import ReactPopUp from "../ReactPopUp";

class Head extends Component{
    
    render(){
        console.log("head")
        return <nav className="head">
                <ul>
                    <li>
                    <img alt="logo" src="https://res.cloudinary.com/delrn2vxa/image/upload/v1711875446/Group_7146_k9oli0.png" />

                    </li>
                    <li>
                     <ReactPopUp/>
                   
                    </li>
                </ul>
        </nav>
    }
}

export default Head