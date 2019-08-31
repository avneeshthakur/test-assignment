import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = (props) => (
     <div className="container">
     <h4>Oop's This Page Could Not Be Found!</h4>
       <h3 className="page-text">Unfortunately you did find an elusive 404 error page, 
                    which means the page you were looking for is no longer here.</h3>
      <button> <Link to="/">Go To Home Page</Link></button>
      </div>
);





export default PageNotFound;
