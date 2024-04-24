import * as React from 'react';
import Table from 'react-bootstrap/Table';


 const Cards=()=> {
  return (
    <>
    <div className='container' style={{display:"flex", justifyContent:"space-evenly", marginTop:"30px"}}>
    <div className='Allusers' style={{width:"238px", height:"138px", background:"#f0f8ff",display:"inline-block"}}>

    </div>
    <div className='Allcustomer' style={{width:"238px", height:"138px", background:"#f0f8ff" ,display:"inline-block"}}>


</div>
<div className='TodaysIncome'style={{width:"238px", height:"138px", background:"#f0f8ff",display:"inline-block"}}>

</div>
<div className='TotalIncome'style={{width:"238px", height:"138px", background:"#f0f8ff",display:"inline-block"}}>


</div>
</div>
<div id='tab' style={{marginTop:"40px"}}>
<Table striped="columns " style={{color:"white",background:"#f0f8ff"}}>
      <thead>
        <tr >
          <th>CustomerID</th>
          <th>TotalPrice</th>
          <th>Amount</th>
          <th>Change</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      
       
      </tbody>
    </Table>
    </div>
    </>
  );
}
export default Cards