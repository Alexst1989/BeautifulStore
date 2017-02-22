import React from "react";

import {Header} from "./header/Header";

export class Root extends React.Component {

  render() {
    console.log("Children: ", this.props.children);
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Header />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    {this.props.children}
                </div>
            </div>
        </div>
    );

  }

}
