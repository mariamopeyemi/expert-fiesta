import React from 'react'

const OutlinedBtn = ({text, onClick}) => {
  return (
    <div>
        <button onClick={onClick} className="btn-outlined">{text}</button>
    </div>
  )
}

export default OutlinedBtn