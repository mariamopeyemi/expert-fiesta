import React from 'react';

const EventDescriptionCard = ({title, details, onClick, bg='bg-eventplan'}) => {
        return (
          <div className={`${bg} bg-no-repeat max-w-[700px] h-[auto] rounded-[60px] `} onClick={onClick}>
          {/* <div className={`${bg} bg-[url('/img/event-cre-maxi.svg')] bg-no-repeat bg-red-500 max-w-[700px] h-[auto] rounded-[60px] `} onClick={onClick}> */}
           <div className=' p-[6rem] md:py-[10rem] justify-center flex flex-col gap-[0.5rem]'>
                  <p 
                  data-aos="flip-left"
                  data-aos-duration="1500"
                  className='sub_display_3plain text-left'>{title}</p>
                  <p 
                   data-aos="zoom-in"
                   data-aos-duration="1500"
                  className='sub_display_2 text-left'>{details}</p>
              </div>
          </div>
  )
}

export default EventDescriptionCard