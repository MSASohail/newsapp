//Props and usestate is 2 different things
// Props means if we pass some values to it it gets rendered in the component

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// export default class Navbar extends Component { this is class based components
//   render() {
const Navbar=()=> {    //this is functional based components


    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top  navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsMonkey</Link >
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link >
                </li>
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link ></li>


              
                  
                    <li className="nav-item"><Link className="nav-link"  to="/business">Business</Link ></li>
                    <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link ></li>
                    {/* <li><hr className="dropdown-divider"/></li> */}
                    <li className="nav-item"><Link className="nav-link" to="/general">General</Link ></li>
                    <li className="nav-item"><Link className="nav-link" to="/health">Health</Link ></li>
                    <li className="nav-item"><Link className="nav-link" to="/science">Science</Link ></li>
                    <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link ></li>
                 
                

              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
  export default Navbar;
//   }
// }

