import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import EventCarouselCard from "../cards/EventCarouselCard";


const Slider = () => {
    const card=[
        {
            bg:`bg-rand`,
            title:'Drip Party',
            details:'Nike Lake Resort, April 9, 2023'},
        {
            bg:'bg-rand',
            title:'Champagne Party',
            details:'Breezzz Lounge, August 12, 2023'},
        {
            bg:`bg-rand`,
            title:'Masked Party',
            details:'Jackson Night Club, August 9, 2023'},
    ]
  return (
    <Carousel 
        autoPlay
        infiniteLoop
        showThumbs={false}
        className='bg-black rounded-[60px]'
        >
              {card?.map((item, i) => {
                return (
                  < EventCarouselCard key={i} 
                    bg={item.bg}
                    title={item.title}
                    details={item.details}
                  />
                );
              })}
            {/* <EventDescriptionCard
				bg='!bg-red-500'
				title='Event Creation'
				details='Our team of creative experts is dedicated to creating unique and impactful events that leave a lasting impression. From conceptualization to execution, we work closely with our clients or partners to bring their ideas to life and create unforgettable experiences.'
				 /> */}
           
        {/* <div className='h-[30vh] bg-green-400 m-[2rem]'>i am a girl</div>
        <div className='h-[30vh] bg-red-400 m-[2rem]'>i am a girl</div>
        <div className='h-[30vh] bg-yellow-400 m-[2rem]'>i am a girl</div>
        <div className='h-[30vh] bg-blue-400 m-[2rem]'>i am a girl</div> */}
      
    </Carousel>
  )
}

export default Slider