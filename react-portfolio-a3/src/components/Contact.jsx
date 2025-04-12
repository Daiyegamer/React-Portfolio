import { useState } from "react";


function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="contact-dropdown">
      <button onClick={() => setOpen(!open)} className="contact-btn">
        Contact
      </button>

      {open && (
        <div className="contact-menu">
          <a
            href="https://github.com/Daiyegamer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="GitHub" />
            
          </a>
          <a
            href="https://www.linkedin.com/in/adil-s-6b0702125/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="LinkedIn" />
            
          </a>
          <a href="mailto:asurve786@hotmail.com">
            📧 Email Me
          </a>
        </div>
      )}
    </div>
  );
}

export default Contact;
