import React from "react"
import {FaTimes} from "react-icons/fa"
import { useContext } from "react"
import FeedbackContext from "../conext/FeedbackContext"
import PropTypes from "prop-types"
import Card from "./shared/Card"
//import {useState} from 'react'



function FeedbackItem({item}) {
    // Used for static data
    //const [rating, setRating] = useState(7)
    //const [text, setText] = useState('This is an example of a feddback item')

    const {deleteFeedback} = useContext(FeedbackContext)

    const handleClick=(id)=>{
        console.log(id)
    }

    return (
        <Card reverse={false} >
            <div className="num-display">{item.rating}</div>
            <button  onClick={()=>deleteFeedback(item.id)} className="close">
                <FaTimes color="purple" />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.protoType = {
    item : PropTypes.object.isRequired,
}

export default FeedbackItem
