import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./index.css"

const Footer =()=>{
    console.log("Footer")
    return <div className="Footer">
          <div>
          <img alt="logo" src="https://res.cloudinary.com/delrn2vxa/image/upload/v1711875446/Group_7146_k9oli0.png" />
          </div>
          <div className="footer-card">
                    <div>
                    <ul className="footer-ul">
                        <Link to="/">
                        <li>
                            Home
                        </li></Link><Link to="/home/blog/fashion">
                        <li>
                            Fashion
                        </li></Link><Link to="/home/blog/technology">
                        <li>
                            Technology
                        </li></Link><Link to="/home/blog/life-style">
                        <li>Life style</li></Link><Link to="/home/blog/environment">
                        <li>Environment</li></Link>
                    </ul>
                    </div>
                    <div className="so-logo">
 <img alt="fb" src="https://res.cloudinary.com/delrn2vxa/image/upload/v1711941983/Vector_1_vzwteq.png"/>
 <img alt="insta" src="https://res.cloudinary.com/delrn2vxa/image/upload/v1711941952/svg_ygixtz.png"/>
 <img alt="x" src="https://res.cloudinary.com/delrn2vxa/image/upload/v1711941918/svg_2_vczqem.png"/>
 <img alt="link" src="https://res.cloudinary.com/delrn2vxa/image/upload/v1711941891/svg_1_lytlck.png"/>
                    </div>
          <div>
            <p>copyright c 2023 Magazine - Powered by shiva Theme</p>
          </div></div>
          
    </div>
}

export default Footer