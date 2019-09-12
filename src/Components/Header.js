import React, { Component } from 'react'
import './Components.css';
import Dropdown from 'react-bootstrap/Dropdown'

class Header extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userName :''
        }
    }

    sessionClear = () =>{
        debugger
        localStorage.clear();
        this.props.history.replace("/");
    }

    render() {
        return (
            <div className="header">
                <p>Welcome to the planet world.</p>                
                    <div className="userHeader">
                        <img src="img/user.png" alt="Avtar" width="50" height="50"/><i></i>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {localStorage.getItem('userName')}
                            </Dropdown.Toggle>
                             <Dropdown.Menu>
                                <Dropdown.Item onClick={this.sessionClear} href="/">LogOut</Dropdown.Item>
                             </Dropdown.Menu>
                        </Dropdown>
                </div>
            </div>
        )
    }
}

export default Header
