import React, { Component } from 'react';
import { Link , withRouter} from 'react-router-dom';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name:'',
			email:'',
			password:'',
			confirmPassword:'',
			dob:'',
			linkedin:'',
			emailError:false,
			passwordError:false,
			confirmPasswordError:false,
			linkedinError:false,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const { name, email, password, confirmPassword, dob, linkedin} = this.state;
		const reg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
		console.log(reg.test(password),password)
		if(!reg.test(password)) {
			this.setState({passwordError:true})
		} else if(password !== confirmPassword) {
			this.setState({confirmPasswordError:true})
		} else {
			let user = { name, email, password, dob, linkedin };
			localStorage.setItem('user', JSON.stringify(user));
			this.props.history.push('/login');
		}
	}

	handleChange(e) {
		this.setState({[e.target.name]:e.target.value, [`${e.target.name}Error`]:false})
	}


  render() {
  	const { name, email, password, confirmPassword, dob, linkedin,
  	 emailError, passwordError, confirmPasswordError, linkedinError } = this.state;
    return (
      <div className="container">
        <h2 className="text-center">SignUp</h2>
        <form onSubmit={this.handleSubmit}  className="col-6 m-auto">
          <div className="form-group">
		    <label >Name:</label>
		    <input value={name} onChange={this.handleChange} required placeholder="name" type="text" className="form-control" name="name" />
		  </div>
		   <div className="form-group">
		    <label >Email address:</label>
		    <input value={email} onChange={this.handleChange} required placeholder="email" type="email" className="form-control" name="email" />
		    { emailError? <p>Enter valid Email</p> :''}
		  </div>
		   <div className="form-group">
		    <label htmlFor="pass">Password:</label>
		    <input value={password} onChange={this.handleChange} required placeholder="password" type="password" className="form-control" name="password" />
		   { passwordError ? <p className="text-danger">Password must be included at least one lowercase, one uppercase, one special character, one digit & must-have length range of 8 to 50</p> :''}
		  </div>
		   <div className="form-group">
		    <label >Confirm Passwrod:</label>
		    <input value={confirmPassword} onChange={this.handleChange} required placeholder="confirm password" type="password" className="form-control" name="confirmPassword" />
		    { confirmPasswordError  ? <p className="text-danger">Password's not matched.</p> :'' }
		  </div>
		   <div className="form-group">
		    <label >Date of Birth:</label>
		    <input value={dob} onChange={this.handleChange} required placeholder="date of birth" type="date" className="form-control" name="dob" />
		  </div>
		   <div className="form-group">
		    <label >LinkedIn:</label>
		    <input value={linkedin} onChange={this.handleChange} placeholder="linkedin url" type="text" className="form-control" name="linkedin"/>
		    { linkedinError? <p>Enter valid linkedin url</p> :''}
		  </div>
        	<button type="submit" className="btn btn-primary">Submit</button>&nbsp;
        	<span>Already have an account <Link to='/login'>Login</Link></span>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
