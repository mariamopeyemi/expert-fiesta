import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Carousel from "@/components/cards/Carousel";
// import CarouselMain from "@/components/cards/MainCarousel";
import EventCard from "@/components/cards/EventCard";
import BaseLayout from "@/components/layouts/BaseLayout";
import MyComponent from "@/components/cards/MainCarousel";
import BaseContainer from "@/components/layouts/BaseContainer";
import PrimaryBtn from "@/components/form-elements/button/PrimaryBtn";
import OutlinedBtn from "@/components/form-elements/button/OutlinedBtn";


export default function Home() {
  const card=[
    {
        bg:`bg-eventcreate`,
        title:'Event Creation',
        details:'Our team of creative experts is dedicated to creating unique and impactful events that leave a lasting impression. From conceptualization to execution, we work closely with our clients or partners to bring their ideas to life and create unforgettable experiences.'
    },
    {
        bg:'!bg-eventmgt',
        title:'Event Management',
        details:'Our team of creative experts is dedicated to creating unique and impactful events that leave a lasting impression. From conceptualization to execution, we work closely with our clients or partners to bring their ideas to life and create unforgettable experiences.'
    },
    {
        bg:`bg-eventplan`,
        title:'Event Planning',
        details:'Our team of creative experts is dedicated to creating unique and impactful events that leave a lasting impression. From conceptualization to execution, we work closely with our clients or partners to bring their ideas to life and create unforgettable experiences.'
    },
]
  const router = useRouter();
  function viewAllEvents() {
    router.push("/events");
  }
  function viewEvent() {
    router.push("/events01");
  }
  function viewCamEvent() {
    router.push("/events02");
  }
  return (
    <>
      <section className=" bg-black">
           {/* Explore Events Section */}
        <BaseContainer className=" py-20 mx-auto  ">
          <section className="flex flex-col gap-[2rem] p-[2rem] items-center  rounded-[60px] h-auto bg-nude-bg bg-cover bg-no-repeat bg-center">
            <p 
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="display_1  md:w-[55%] mx-[auto] text-center">Unleashing The Magic Of Events</p>
            <p 
            data-aos="flip-right"
            data-aos-duration="1500"
            className="sub_display_1 md:w-[35%] mx-[auto] text-center">Native Play is an event creation company dedicated to creating unforgettable experiences for our clients and attendees.</p>
           <PrimaryBtn text='Explore Events' onClick={viewAllEvents} />
          </section>
             {/* Live Video Section */}
          <section className="flex flex-col gap-[2rem] py-[2rem] items-center  rounded-[60px] md:h-[auto] ">
            <img src='/img/vid1.png' alt='live video' />
          </section>
             {/* Why we are awesome Section */}
          <section className="flex md:pr-[35%] flex-col md:flex-row justify-start items-start py-[5rem]  ">
            <p 
             data-aos="flip-left"
             data-aos-duration="1500"
             id="trigger-left"
            className="display_2">Why We Are Awesome</p>
            <p 
            data-aos="fade-right"
            data-aos-duration="2500"
            data-aos-anchor="#trigger-left"
            className="sub_display_2 mt-[2rem] md:w-[55%]">At native, we infuse culture and vibes to create a remarkable experience for you and your guest</p>
          </section>
              {/* Event Cards carosel Section */}
          
          
          <section className=" hidden md:block my-[2rem]">
            <MyComponent />
           </section>
          <section className="block md:hidden my-[2rem]">
            <Carousel />
          </section>
             {/* Upcoming events Section */}
          <section className="flex flex-col rounded-[60px] p-[2rem] md:p-[5rem] bg-faint-bg 2xl:py-[10rem] h-[auto] relative  ">
           <div className="hidden md:block">
            <Image src='/img/top.svg' className="absolute bottom-0 left-0" alt='fancy deco' width={150} height={100} />
            <Image src='/img/tbot.svg' className="absolute top-0 right-0" alt='fancy deco' width={150} height={100} />
           </div>
            <div>
              <div className="p-[2rem] md:p-0 text-center md:text-left">
                <p 
                data-aos="fade-up"
                data-aos-duration="1500"
                className="display_3 ">Upcoming events</p>
                <p 
                data-aos="fade-up"
                data-aos-duration="1500"
                className="sub_display_2 !text-black-brown mt-[2rem]">We have amazing events lined up for you</p>
              </div>
              <div className="my-[3rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
                <EventCard title='Drip Party' details='Nike Lake Resort, April 9, 2023' onClick={viewEvent} bg='bg-event1'  />
                <EventCard title='Champagne Party' details='Cabanna Lounge, July 9, 2023' onClick={viewCamEvent} bg='bg-event2' />
              </div>
             <div className="flex mx-[auto] md:mb-0 mb-[2rem] justify-center items-center"> <OutlinedBtn text='Show All Events' onClick={viewAllEvents}  /></div>
            </div>
          </section>
        </BaseContainer>
      </section>
    </>
  );
}

Home.layout = BaseLayout;


// import { useState } from 'react';

// function Carousel({ images }) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   function moveToNext() {
//     setActiveIndex((activeIndex + 1) % images.length);
//   }

//   return (
//     <div className="carousel-container" onMouseEnter={moveToNext}>
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`image ${index}`}
//           className={`carousel-image ${index === activeIndex ? 'active' : ''}`}
//         />
//       ))}
//       <div className="dots">
//         {images.map((_, index) => (
//           <span key={index} className={`dot ${index === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(index)}></span>
//         ))}
//       </div>
//       <button className="next-button"
