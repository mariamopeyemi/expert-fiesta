import React from 'react'

const SecondayBtn = ({onClick, text}) => {
  return (
    <div>
        <button onClick={onClick} 
        className='border border-1 h-12 w-full md:w-[230px] rounded-[8px] p-3 border-faint-typo text-faint-typo hover:text-black text-base font-medium hover:bg-[#cf9a81]'
        
        >{text}</button>
      
    </div>
  )
}

export default SecondayBtn