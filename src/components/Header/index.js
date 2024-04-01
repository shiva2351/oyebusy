import {Component} from "react"
import { IoIosSearch } from "react-icons/io";

import "./index.css"

class Header extends Component{
    render(){
        return <nav>
            <img alt="logo" src="https://res.cloudinary.com/delrn2vxa/image/upload/v1711875446/Group_7146_k9oli0.png" />
                <ul className="header-ul">
                    <li className="so-logo">
 <img alt="fb" src="https://res.cloudinary.com/delrn2vxa/image/upload/v1711941983/Vector_1_vzwteq.png"/>
 <img alt="insta" src="https://res.cloudinary.com/delrn2vxa/image/upload/v1711941952/svg_ygixtz.png"/>
 <img alt="x" src="https://res.cloudinary.com/delrn2vxa/image/upload/v1711941918/svg_2_vczqem.png"/>
 <img alt="link" src="https://res.cloudinary.com/delrn2vxa/image/upload/v1711941891/svg_1_lytlck.png"/>
                    </li>
                    <li>
                    <ul className="header-ul-2">
                        <li>
                            Home
                        </li>
                        <li>
                            Fashion
                        </li>
                        <li>
                            Technology
                        </li>
                        <li>Life style</li>
                        <li>Environment</li>
                    </ul>
                    </li>
                    <li>
                      <div>
                        <IoIosSearch />
                      </div>
                    </li>
                </ul>
        </nav>
    }
}

export default Header