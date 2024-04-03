
import Footer from "../Footer"
import Header from "../Header"
import "./index.css"

const Home =()=>{
    console.log("home")
    return <div>
        <Header/>
        <div>
            <div className="image-fashion">
<h1>Fashion</h1>
            </div>
            <div>
<div  className="image-tech">
    <h1>Technology</h1>
</div>
<div  className="image-style">
    <h1>Life Style</h1>
</div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default Home