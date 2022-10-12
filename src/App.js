
import React from "react"
import {v4 as uuidv4} from 'uuid'
import {useState}  from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
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

    const addFeedBack=(newFeedBack)=>{
        newFeedBack.id = uuidv4()
        //console.log(newFeedBack);
        setFeedback([newFeedBack, ...feedback])
    }



    return (
        <>
            <Header  />
            <div className="container">
                <FeedbackForm handleAdd={addFeedBack}/>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback}
                handleDelete = {deleteFeedBack}
                />
            </div>
        </>
    )
}

export default App




