
import React from "react"
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"
import Post from "./components/Post"

//import FeedbackItem from "./components/FeedbackItem"
import FeedbackData from "./data/FeedbackData"


function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedBack = (id) => {
    //console.log('App', id)  

    if (window.confirm('Are you sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedBack = (newFeedBack) => {
    newFeedBack.id = uuidv4()
    //console.log(newFeedBack);
    setFeedback([newFeedBack, ...feedback])
  }



  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route 
            exact path="/" 
            element={
              <>
                <FeedbackForm handleAdd={addFeedBack} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback}
                  handleDelete={deleteFeedBack} />
                <AboutIconLink />
              </>
            }>
          </Route>

          <Route path="/about" 
            element={
              <>
              <AboutPage/>
              </>
            }>
          </Route> 

          <Route path="/post/*" element={<Post />} />
          

        </Routes>
      </div>
      
    </Router>
  )
}

export default App


/* Notes:
If you want to use a specific path using exra data like
"mysite/1/jhon"
use the next code
<Route path="/post/:id/:name" 
  element={
    <>
    <Post />
    </>
  }>
</Route> 


And to capture from the url use this

import {useParams} from "react-router-dom"

function Post() {
  const params = useParams()

  return (
      <div>
          <h1>
              <h1>Post {params.id}</h1>
              <p>{params.name} </p>
          </h1>
      </div>
  )


*/

