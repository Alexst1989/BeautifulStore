import React from 'react';
import {Link} from "react-router";

export class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            activeButton: 1
        };
    }

    onHeaderButtonClick(number) {
        this.setState({
            activeButton : number
        });
    }

    render() {
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                          <li><a href="/#">Home</a></li>
                          <li><a href="/#">Profile</a></li>
                          <li><a href="/#">Messages</a></li>
                          <li><Link to="/login" activeClassName={"active"}>Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}
