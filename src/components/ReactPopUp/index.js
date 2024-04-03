import Popup from 'reactjs-popup'
import { IoMdMenu } from "react-icons/io";

import 'reactjs-popup/dist/index.css'
import "./index.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ReactPopUp = () => (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <IoMdMenu />
          </button>
        }
      >
        {close => (
          <>
            <div>
            <ul className="react-ul">
                        <Link to="/">
                        <li>
                            Home
                        </li></Link>                        
                        <Link to="/home/blog/fashion">
                        <li>
                            Fashion
                        </li>
                        </Link>
                        <Link to="/home/blog/technology">
                        <li>
                            Technology
                        </li></Link>                        
                    <Link to="/home/blog/life-style">

                        <li>Life style</li> </Link>                       
                        <Link to="/home/blog/environment">
                        <li>Environment</li></Link>
                    </ul>
            </div>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              Close
            </button>
          </>
        )}
      </Popup>
    </div>
   )
   export default ReactPopUp