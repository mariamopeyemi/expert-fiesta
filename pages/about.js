import Image from "next/image";
import { useRouter } from "next/router";
import Typewriter from 'typewriter-effect';
import EventCard from "@/components/cards/EventCard";
import BaseLayout from "@/components/layouts/BaseLayout";
import BaseContainer from "@/components/layouts/BaseContainer";
import OutlinedBtn from "@/components/form-elements/button/OutlinedBtn";

// const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const router = useRouter();
  function viewAllEvents() {
    router.push("/events");
  }
  function viewEvent() {
    router.push("/events01");
  }

  return (
    <>
      <section className=" bg-black">
           {/* Vibe Meets Culture Section */}
        <BaseContainer className=" flex flex-col gap-[2rem] py-20 mx-auto  ">
          <section className="flex flex-col gap-[2rem] p-[4rem] items-center  rounded-[60px] h-[auto] bg-peach-bg bg-cover bg-no-repeat bg-center">
            <p 
              data-aos="zoom-out"
              data-aos-duration="1500"
              className="display_1  mx-[auto] flex flex-col md:flex-row text-center">Vibe Meets 
              <span className="!text-rust ml-[20px]">
              <Typewriter
                  options={{
                    strings: ['Culture', 'Culture'],
                    autoStart: true,
                    pauseFor: 4500, //after typing before delete
                    // delay: 500,
                    deleteSpeed: 500,
                    loop: true,
                }}
                />
                </span>
            </p>
            <p 
             data-aos="zoom-in"
             data-aos-duration="1500"
            className="sub_display_1 md:w-[50%] mx-[auto] !text-[#6B5B56] text-center">Native Play is an event creation company dedicated to creating unforgettable experiences for our clients and attendees. With a team of experienced professionals, we strive to exceed expectations and deliver memorable and impactful events. Whether you are looking to host a corporate event, product launch, or private celebration, we have the expertise and resources to bring your vision to life</p>
          </section>
             {/* Why trust us Section */}
          <section className="flex justify-between flex-col md:flex-row gap-[2rem] rounded-[60px] ">
           <div className="h-[auto] rounded-[60px]">
              <img src='/img/happy-ladies.png' alt='happy people' />
           </div>
           <div className=" flex flex-col gap-[1rem] bg-rust md:w-[60%] rounded-[60px] p-[4rem]">
              <p
              data-aos="flip-right"
              data-aos-duration="1500" 
              className="display_1 !text-peach-typo text-center md:text-left">Why trust us</p>
              <p 
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="sub_display_1 mx-[auto] !text-white">Our mission is to provide our clients with exceptional service and create events that leave a lasting impression. Every event should be unique, and we work closely with our clients to understand their goals, target audience, and brand identity to create events tailored to their specific needs. With a strong focus on quality and attention to detail, we aim to ensure every event is a success. Contact us today to learn more about our services and how we can help bring your next event to life.</p>
          </div>
          </section>
             {/* Live Video Section */}
          <section className="flex flex-col gap-[2rem] py-[2rem] items-center  rounded-[60px] md:h-[auto] ">
            <img src='/img/vid1.png' alt='live video' />
          </section>
             {/* Upcoming events Section */}
          <section className="flex flex-col rounded-[60px] p-[2rem] md:p-[5rem] 2xl:py-[8rem] bg-faint-bg md:h-[auto] relative  ">
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
                <EventCard title='Champagne Party' details='Cabanna Lounge, July 9, 2023' onClick={viewEvent} bg='bg-event2' />
              </div>
             <div className="flex mx-[auto] md:mb-0 mb-[2rem] justify-center items-center"> <OutlinedBtn text='Show All Events' onClick={viewAllEvents} /></div>
            </div>
          </section>
        </BaseContainer>
      </section>
    </>
  );
}

About.layout = BaseLayout;
