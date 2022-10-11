
import React from "react"
import {useState}  from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
//import FeedbackItem from "./components/FeedbackItem"
import FeedbackData from "./data/FeedbackData"


function App() {

    

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedBack=(id) =>{
        //console.log('App', id)  

        if (window.confirm('Are you sure?')){
            setFeedback(feedback.filter((item) => item.id!== id))
        }

    }

    return (
        <>
            <Header  />
            <div className="container">
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback}
                handleDelete = {deleteFeedBack}
                />
            </div>
        </>
    )
}

export default App




