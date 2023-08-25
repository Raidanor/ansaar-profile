import React from 'react';
const Contact = () => {
  let styleConfig = {padding: '10px', color:'rgba(170, 230, 240, 0.900)'};
    return(
      <div class = "nodal" style={styleConfig}>
        <center><h1 class="text-primary pad">Contact</h1>
          <a class = "bg-dark pad">Personal E-mail: ansaarkhadaroo@gmail.com</a><br /><br />
          <a class = "bg-dark pad">School E-mail: 160356k@acadiau.ca</a><br /><br />
          <a class = "bg-dark pad">LinkedIn: <a href="https://www.linkedin.com/in/ansaar-khadaroo-a4459121b/">Profile</a></a><br />
        </center>
      </div>
    )
  };
  
  export default Contact;