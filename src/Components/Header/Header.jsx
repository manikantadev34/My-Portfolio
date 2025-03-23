import React from 'react';
import './Header.css';
import resume from "./ManikantaResume.pdf"

export default function Header() {
  return (
    <div className='header'>
      <div className="content">
        <h1>Kunchanapalli Surya Sai Manikanta</h1>
        <p>Frontend Developer <span>|</span> React Enthusiast <span>|</span> Aspiring Full-Stack Developer</p>
        
        <div className='resume-socials'>
          <a href={resume} download='Manikanta Resume' className='download-btn'>
            📄 Download Resume
          </a>
          
          <div className='social-icons'>
            <a href='https://github.com/manikantadev34' target='_blank' rel='noopener noreferrer'>
              <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='GitHub' className='social-icon' />
            </a>
            <a href='https://www.linkedin.com/in/surya-sai-manikanta-kunchanapalli-2a8955267/' target='_blank' rel='noopener noreferrer'>
              <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='LinkedIn' className='social-icon' />
            </a>
            <a href='mailto:manikantakunchanapali@gmail.com' target='_blank' rel='noopener noreferrer'>
              <img src='https://cdn-icons-png.flaticon.com/512/732/732200.png' alt='E-Mail' className='social-icon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
