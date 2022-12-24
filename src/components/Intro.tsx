import React from 'react';
import './components_css/Question.css';
import { AiOutlineInstagram, AiOutlineYoutube} from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa'

function Intro() {

  return (
    <div className="Question">
      <p className="Question-intro">
          Welcome to Ray Li CS!<br></br>
      </p>
      <p className="Question-intro">
          This is a simple proof of concept to see if people are interested to checkout
          the code implementation of a video C:<br></br>
      </p>
      <ul className="Question-intro">
        <li><a className="Question-link" href="https://www.tiktok.com/@raylics" target="_blank" rel="noopener noreferrer"><FaTiktok /> TikTok</a></li>
        <li><a className="Question-link" href="https://www.instagram.com/ray_li_cs/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /> Instagram</a></li>
        <li><a className="Question-link" href="https://www.youtube.com/channel/UCB-49JQpv7TgtVlC1Rtu-0A" target="_blank" rel="noopener noreferrer"><AiOutlineYoutube /> YouTube</a></li>
      </ul>
    </div>
  );
}

export default Intro;
