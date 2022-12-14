import React from "react"
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from "react"
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from "../conext/FeedbackContext"

// it was imported to receive prop between components
//import PropTypes from "prop-types"


function FeedbackList() {

  const {feedback} = useContext(FeedbackContext)
  

  if (!feedback || feedback.length === 0) {
      return <p>No feedback jet</p>
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map ((item) => (
          <motion.div 
            key={item.id}
            initial = {{opacity:0}}
            animate = {{opacity:1}}
            exit    = {{opacity:0}}

          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className="feedback-list">
  //       {feedback.map ((item) => (
  //           <FeedbackItem key={item.id} item={item}
  //           handleDelete={handleDelete} />
  //       ))}
  //   </div>
  // )
}

/*
  This prototype is used when the component receives  
  the prop feedback, but if we load it from a context 
  is not necessary
  FeedbackList.protoType ={
    feedback : PropTypes.arrayOf(
      PropTypes.shape({
        id : PropTypes.number.isRequired,
        text : PropTypes.string.isRequired,
        rating : PropTypes.number.isRequired,
      })
    ),

  }
*/

export default FeedbackList


