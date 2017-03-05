import React from 'react';
import {httpRequest} from '../../js/AxiosWrapper';


export class Login extends React.Component {

    constructor(props){
      super();
      this.state = {
          login: "",
          password: "",
          loginInputClass: "form-control",
          passInputClass: "form-control"
      }
    }

    onLoginChange(event) {
        this.setState({
            login: event.target.value
        });
    }

    onPasswordChange(event) {
        this.setState({
            password: event.target.value
        })
    }

    authentificate() {
        var credentials = {
            login: this.state.login,
            password : this.state.password
        };
        console.log(credentials);
        httpRequest("/token", credentials);
    }

    render() {
        return(
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="login">Login (Email address):</label>
                <input
                    type="text"
                    className={this.state.loginInputClass}
                    id="login"
                    maxLength = {35}
                    onChange={(event) => this.onLoginChange(event)}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    className={this.state.passInputClass}
                    id="password"
                    onChange={(event) => this.onPasswordChange(event)}/>
              </div>
              <div className="checkbox">
                <label><input type="checkbox"/> Remember me</label>
              </div>
              <button type="button" onClick={this.authentificate.bind(this)} className="btn btn-primary">Submit</button>
            </div>

        );
    }

}
