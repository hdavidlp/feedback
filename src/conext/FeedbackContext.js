import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from Context 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This item is from Context 2',
      rating: 9,
    },
    {
      id: 3,
      text: 'This item is from Context 3',
      rating: 8,
    },
  ])

  const addFeedback = (newFeedBack) => {
    newFeedBack.id = uuidv4()
    //console.log(newFeedBack);
    setFeedback([newFeedBack, ...feedback])
  }

  const deleteFeedback = (id) => {
    //console.log('App', id)  

    if (window.confirm('Are you sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext



