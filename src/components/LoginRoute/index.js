import {Link} from "react-router-dom"

import {Component} from "react"

class LoginRoute extends Component{

    login=(event)=>{
        event.preventDefault()
        console.log("login")
    }

    render(){
        return <div>
            <form onSubmit={this.login}><div>
                <img alt="logo" src="https://res.cloudinary.com/delrn2vxa/image/upload/v1711875446/Group_7146_k9oli0.png" />
                <p>Sign in with Oyebusy</p></div>
                <div>
                    <input placeholder="Username" type="text"/>
                    <input placeholder="Password" type="password"/>
                    <Link to="_">Forget password?</Link>
                    <button type="submit">Login</button>


                </div>
            </form>
        </div>
    }
}

export default LoginRoute