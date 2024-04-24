import React from 'react';
import Nav from 'react-bootstrap/Nav';



function Navbar() {
  return (
    <>
     <div className="nav-container d-flex mt-4" style={{ marginLeft:'-15px' , background:"#f0f8ff"}}>
    <div className='dashimg'>
        
    </div>
        <h5 style={{color:'black', marginLeft:'60px'}}>Inventory Management Portal</h5>
        <div style={{marginLeftleft:'100px'}}>
        <Nav className="justify-content-end" activeKey="/Dashboard">
        
        <Nav.Item>
          <Nav.Link eventKey="link-2" style={{ color: 'black',marginLeft:"300px"}}>Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" style={{ color: 'black' }}>Add Users</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" style={{ color: 'black' }}>Add Catagories</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5" style={{ color: 'black' }}>Add Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-6" style={{ color: 'black' }}>Customers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
         
        </Nav.Item>
        </Nav>
        </div>
      </div>
      {/* <div>
      <span className='Text' style={{ display: 'block', textAlign: 'center' }}>© 2035 by Inventory Management.</span>
    </div> */}
    </>
  )
}
export default Navbar