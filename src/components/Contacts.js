import React from "react";
import emailjs from "emailjs-com";
import "./Contacts.css"
import Navbar from "./Navbar";

const Mailer = () => {
function sendEmail(e){
  e.preventDefault();
  emailjs.sendForm('service_vsr16bd',
  'template_p9f4nl8',
  e.target,
  "user_6FPugZqUYcKxgOHXn3pSu"
  ).then(res => {
    console.log(res);
  }).catch(err => console.log(err));
}
  return (
    <div className="container" style={{background: "#233", height: "200vh",}}>
     <Navbar/>
     <form align="center" className="row" onSubmit={sendEmail}style={{margin:'50px'}}>
              <div className="fieldset">
                  <label style={{color:"white"}}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    
                    placeholder="John Smith"
                    name="name"
                    
                  />
                </div>
                <div className="fieldset">
                  <label style={{color:"white"}}>
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    
                    placeholder="vinurajsv@gmail.com"
                    name="email"
                   
                 />
                </div>
                <div className="fieldset">
                  <label style={{color:"white"}}>
                    Your Message
                  </label>
                  <textarea
                   style={{color:"white"}}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    name="message"
                    
                  ></textarea>
                </div>
                <div className="wrapper">
                
                
                <button  type="send">Send</button>
                </div>
              </form>
    

    </div>
  );
};

export default Mailer;
