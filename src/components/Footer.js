import React from "react";


import { IconButton } from "@material-ui/core";
import { GitHub, LinkedIn,Mail} from "@material-ui/icons";


const Footer = () => {
  
  return (
    <div className="contact__icons">
    <a
      href="https://www.linkedin.com/in/vinu-raj-387039176/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconButton>
        <LinkedIn />
      </IconButton>
    </a>
    <a
      href="https://github.com/vinu94-s"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconButton>
        <GitHub />
      </IconButton>
    </a>

    <a
                href="mailto:vinurajsv@gmail.com"
                className="btn"
                onClick={() =>
                  alert("Hi! Thank you for showing your interest.")
                }
                target="_blank"
                key="message"
                rel="noreferrer"
              >
                <IconButton>
                  <Mail/>
                </IconButton>
              </a>

   
   
  </div>
  );
};

export default Footer;
