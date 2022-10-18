import React from 'react'
import { FaQuestion } from "react-icons/fa";
import {Link} from "react-router-dom"


function AboutIconLink() {
  return (
      <div className='about-link'>
        <Link to='/about'>
          <FaQuestion size={30} />
        </Link>
      </div>
  )
}

export default AboutIconLink


{
  /********************************************************
  Notes:
  
  If you want to send extra information on the URL
  you need to use code like in the next example
  
  <Link 
    to={{
      pathname: "/about",
      search: "?sort=name",
      hash: "#hellow",
    }}>
    <FaQuestion size={30} />
  </Link> */
}