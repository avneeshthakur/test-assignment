import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
class Home extends Component {
	handleLogout() {
		localStorage.removeItem('auth_token');
		this.props.history.push('/login');
	}
  render() {
  	let user = JSON.parse(localStorage.getItem('user'));

    return (
      <div className="container">
      <div  className="col-6 m-auto">
        <h2 className="text-center"> User Details</h2>
        <h4>Name :{user.name}</h4>
        <h4>Email: {user.email}</h4>
         <h4>{getAge(user.dob) > 18 ? 'You are an adult' : "You are not an adult" }</h4>
        {user.LinkedIn ? <h4>LinkedIn: {user.LinkedIn} </h4> : '' }
        <button onClick={() => this.handleLogout()} type="button" className="btn btn-primary">Logout</button>
       </div>
      </div> 
    );
  }
}

export default withRouter(Home);
