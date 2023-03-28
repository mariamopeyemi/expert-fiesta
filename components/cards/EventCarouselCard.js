import React from 'react';

const EventCarouselCard = ({title, details, onClick, bg='bg-eventplan'}) => {
        return (
          <div className={`${bg} bg-no-repeat !w-[full] h-[auto] rounded-[60px] `} onClick={onClick}>
          {/* <div className={`${bg} bg-[url('/img/event-cre-maxi.svg')] bg-no-repeat bg-red-500 max-w-[700px] h-[auto] rounded-[60px] `} onClick={onClick}> */}
           <div className='p-[6rem] md:py-[10rem]   flex flex-col gap-[0.5rem]'>
            <button className='rounded-[20px] !bg-[#AB350066] text-white w-[150px] p-[0.5rem] '>Popular Events</button>
                  <p className='sub_display_3plain text-left'>{title}</p>
                  <p className='sub_display_2 text-left '>{details}</p>
              </div>
          </div>
  )
}


export default EventCarouselCard;