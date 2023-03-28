import React from 'react'

const PrimaryBtn = ({text, onClick}) => {
  return (
    <div>
        <button onClick={onClick} className="w-full md:w-[230px] btn-primary">{text}</button>
    </div>
  )
}

export default PrimaryBtn