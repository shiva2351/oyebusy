
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import Footer from "../Footer"
import Header from "../Header"

import "./index.css"
import Head from "../Head"

const Home =()=>{
    console.log("home")
    return <div>
        <div>
        <Header/><Head/></div>
        <div className="home-cards">
            <Link to="/home/blog/fashion">
            <div className="image-fashion">
<h1>Fashion</h1>
            </div>
            </Link>
            <div className="home-card2">
            <Link to="/home/blog/technology">
<div  className="image-tech">
    <h1>Technology</h1>
</div></Link>
<Link to="/home/blog/life-style">
<div  className="image-style">
    <h1>Life Style</h1>
</div></Link>
            </div>
        </div>
        <Footer/>
    </div>
}

export default Home