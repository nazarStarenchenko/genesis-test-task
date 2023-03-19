import React from 'react';
import { FaLinkedinIn, FaTwitter, FaPinterestP } from "react-icons/fa";
import { ImFacebook } from 'react-icons/im';
import { Link } from "react-router-dom";

import { StyledHeader } from './styles/StyledHeader';

export default function Header() {
  
  return (
    <StyledHeader>
      <Link to="/" className="logo">
        <h1>Courses Display Application</h1>
      </Link>

      <ul>
        <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="socials"><FaLinkedinIn /></a></li>
        <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="socials"><FaTwitter /></a></li>
        <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="socials"><ImFacebook /></a></li>
        <li><a href="https://pinterest.com" target="_blank" rel="noreferrer" className="socials"><FaPinterestP /></a></li>
      </ul>
    </StyledHeader>
  )
};