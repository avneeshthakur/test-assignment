import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      error:false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    let user = JSON.parse(localStorage.getItem('user'));
    if(user) {
      if(email === user.email && password === user.password) {
        let token = email+password;
        localStorage.setItem('auth_token',JSON.stringify(token));
        this.props.history.push('/');
      } else {
        this.setState({error:true})
      }
    } else {
      this.setState({error:true})
    }

  }
    
  handleChange(e) {
    this.setState({[e.target.name]:e.target.value, error:false})
  }

  render() {
    const { email, password, error} = this.state;

    return (
      <div className="container">
        <h2 className="text-center">Login</h2>
        <form onSubmit={this.handleSubmit} className="col-6 m-auto">
           <div className="form-group">
            <label >Email address:</label>
            <input  onChange={this.handleChange} value={email} required placeholder="email" type="email" className="form-control" name="email" />
          </div>
           <div className="form-group">
            <label >Password:</label>
            <input  onChange={this.handleChange} value={password} required placeholder="password" type="password" className="form-control" name="password" />
          </div>
          {error ? <div className="text-danger">Authentication Failed</div> : ''}
          <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
          <span>Don't have an Account <Link to='/sign-up'>Sign-up</Link> </span>
        </form>
        
      </div>
    );
  }
}

export default Login;
