import React from 'react';

import { Form, Button } from "react-bootstrap";

function Login1() {
  return (
<body style={{background:"#f0f8ff"}}>
    <div className="d-flex justify-content-center align-items-center vh-100" >
     
      <Form style={{width:'50%',height:'55%', background:"white", position:"initial"}}>
      <section><h1 className="text-center">Log In</h1><br></br>
     
      </section><br></br>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingLeft:"7px",paddingRight:"7px"}}>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" style={{paddingLeft:"7px",paddingRight:"7px"}}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{paddingLeft:"7px",paddingRight:"7px"}}>
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div className="text-center">
        <Button variant="secondary" type="submit" >
          Log In
        </Button>
        <h6>Don't have an account? <a href='SignUp.jsx'>sign up</a></h6>
        </div>
      </Form>
      
    </div>
    </body>
  );
}
 
export default Login1;