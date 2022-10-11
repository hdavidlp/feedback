import React from "react"
import PropTypes  from "prop-types"

function Card({children, reverse}) {

// Conditional Class implementation
//   return (
//     // Conditional Class
//     <div className= {`card ${reverse && 'reverse'}`}>
//         {children}
//     </div>
//   )


    // Conditional Style
    return(
        <div className="card" style={{
            backgroundColor : reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            textColor : reverse ? '#fff' : '#000',}}>
            {children}
        </div>
)
}

Card.defaultProps = {
    reverse : true,
}

Card.propTypes = {
    children : PropTypes.node.isRequired,
    reverse  : PropTypes.bool,
}

export default Card