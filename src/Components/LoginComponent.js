import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Config from "../config";
import axios from 'axios';

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            isLogin : false,
            userName :'',
            password :'',
            showError: false  
        }

    }
    
    submitLogin(){
        let apiURL = Config.authenticateBaseUrl + Config.peopleSearchUrl;
        axios.get(apiURL + this.state.userName).then(response => {
            let result = response.data.results.filter(res => res.name === this.state.userName && res.birth_year === this.state.password);
            if (result.length > 0)
            {
                localStorage.setItem('isLogin', true);
                localStorage.setItem('userName', this.state.userName);
                debugger
                this.props.history.push('/Home');
                this.setState({ showError : true})
            }
            else{
                this.setState({ showError : true})
            }
        });
}

 handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
 }
    render() {
        return (
          <div id="mainDiv"  className="main-div">
              <h2 className="text-center text-white pt-5">Login </h2>
                    <form>
                        <div className ="row">
                            <div className="col-lg-3 col-md-3">
                                <label htmlFor="username" className="text-info searchLabel">Username:</label>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <input type="text" className="form-control" name="userName" onChange={this.handleChange} value={this.state.userName} className="form-control"/><br/>
                            </div>
                        </div>
                        <div className ="row">
                            <div className="col-lg-3 col-md-3">
                                <label htmlFor="password" className="text-info searchLabel">Password:</label>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <input type="password" className="form-control" name="password" id="password" onChange={this.handleChange} value={this.state.password} className="form-control"/>
                            </div>
                        </div>
                        <div className ="row">
                            <div className="col-lg-8 col-md-8">
                                <p className="forgot searchLabel"><a href="#">Forgot Password?</a></p>
                            </div>
                        </div>
                        <div className ="row">
                            <div className="col-lg-8 col-md-8 searchLabel">
                                <button type="button" className="btn btn-primary  btn-info btn-md" onClick={this.submitLogin.bind(this)}>Login</button>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-6">
                                {this.state.showError && <span className="text-danger">Please Enter Correct Username/Password</span>}
                            </div>
                        </div>
                    </form>
          </div>
        )
    }
}

export default LoginComponent
