import React from 'react'

const EventCard = ({title, details, onClick, bg}) => {
  return (
    <div data-aos="zoom-in"
    className={`${bg} bg-no-repeat rounded-[60px] h-[350px] md:w-[auto] md:max-w-[full] flex flex-col`} onClick={onClick}>
    {/* <div className={`${bg} bg-no-repeat rounded-[60px] h-[350px] md:w-[520px] md:max-w-[full] flex flex-col`} onClick={onClick}> */}
        <div className='mt-auto p-[2rem] flex flex-col gap-[0.5rem]'>
            <p 
             data-aos="fade-up"
             data-aos-duration="1500"
            className='sub_display_3plain'>{title}</p>
            <p 
            data-aos="zoom-out"
            data-aos-duration="1500"
            className='sub_display_2 mx-[0.5rem]'>{details}</p>
        </div>
    </div>
  )
}

export default EventCard;