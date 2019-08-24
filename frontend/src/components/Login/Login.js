import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          messageError: null,
          redirect: false
        };
    }

    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.email === 'test@email.com' && this.state.password === '123456') {
            localStorage.setItem('islogged', true);
            this.setState({
                redirect: true
            });
        } else {
            this.setState({messageError: 'Email ou senha inválidos'});
        }
    }

  render() {
    return (
      <div className="Admin">
            { (this.state.redirect) && <Redirect to="/admin" /> }
            <form onSubmit={this.add} noValidate>
                <div className="form-group">
                    <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                { (this.state.messageError) && <p>{this.state.messageError}</p> }
            </form>
      </div>
    );
  }
}

export default Login;
