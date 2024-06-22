import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='parent_container'> 
      <div className='main_container'>
        <div className='left_container'>
          <Link to="/" className='heading' >NewsNexus</Link>
        </div>
        <div className='right_container'>
          <Link to="/" className='sub_heading'>Home</Link>
          <span className='sub_heading'>Contact us</span>
          <span className='sub_heading'>About us</span>
          <span className='sub_heading'>Pricing</span>
        </div>
      </div>
    </div>
  )
}


export default Header


