import React from 'react'
import Card from '../components/shared/Card'
import {Link} from "react-router-dom"

function AboutPage() {
  return (
      <Card>
          <div className='about'>
              <h1>About This Page</h1>
              <p>This is a React App to leave feedback for a product or Service</p>
          </div>
          <p>Version 1.0.0</p>
          <p>
              <Link to='/'>Back to home</Link>
          </p>
      </Card>
  )
}

export default AboutPage

