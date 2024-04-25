
import React, { useState } from 'react';
import { Col, Form, Button, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';


const SignUp = () => {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      console.log('Registering user...');
        const userData={
        name:name,
        email:email,
        phoneNumber:phoneNumber,
        password:password
      };
      console.log('User data:',userData);
    }
    setValidated(true);
    
    
  };

  return (
    <div className="registration-container">
      <div className="form-container">
        <h2>Sign in</h2>
        <Form noValidate validated={validated} onSubmit={handleRegistration}>
        
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="FName LName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              pattern="[0-9]{10}"
              required
            />
            <Form.Control.Feedback type="invalid">Please enter a valid phone number (10 digits).</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="Role:">
          <Form.Label>Role:</Form.Label>
            <Form.Select defaultValue="" placeholder="Please select your role">
            <option disabled hidden>Please select your role</option>
            <option value="1">User</option>
            <option value="2">Staff</option>
            <option value="3">Mechanic</option>
         </Form.Select>
         </Form.Group>


          
          <Form.Group controlId="password">
            <Form.Label>Create Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              pattern="(?=.*\d)(?=.*[A-Z]).{8}"
              title="Password must be 8 characters long and include at least one uppercase letter and one numerical digit"
              required
            />
            <Form.Control.Feedback type="invalid">
              Password must be 8 characters long and include at least one uppercase letter and one numerical digit.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" style={{}}>
            <Button variant="primary"type="submit">
              Register
            </Button>
           
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;