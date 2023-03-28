import Image from "next/image";
import { useRouter } from "next/router";
import EventCard from "@/components/cards/EventCard";
import BaseLayout from "@/components/layouts/BaseLayout";
import BaseContainer from "@/components/layouts/BaseContainer";
import PrimaryBtn from "@/components/form-elements/button/PrimaryBtn";
import SecondaryBtn from "@/components/form-elements/button/SecondaryBtn";
import OutlinedBtn from "@/components/form-elements/button/OutlinedBtn";

// const inter = Inter({ subsets: ["latin"] });

export default function Events() {
  const router = useRouter();
  function viewAllEvents() {
    router.push("/events");
  }
  function goBack() {
    router.push("/events");
  }
  function goForward() {
    router.push("/events01");
  }

  return (
    <>
      <section className=" bg-black">
           {/* Popular Events Section */}
        <BaseContainer className=" flex flex-col gap-[2rem] py-20 mx-auto  ">
          <section className="flex flex-row justify-between  items-center rounded-[60px]">
            <p className="text-nude cursor-pointer" onClick={goBack}>Go Back to events</p>
            <div className="flex cursor-pointer items-center" onClick={goForward}>
              <p className="text-rust ">View next event</p>
              <img src='/img/forward-arrow.svg' alt='arrow' />
            </div>
          </section>
          <section className="flex flex-col gap-[2rem] p-[4rem] items-center  rounded-[60px] h-[60vh] bg-rand bg-cover bg-no-repeat bg-center">
           
           </section>
             {/* Why trust us Section */}
             <section className="flex gap-[1rem] flex-col md:flex-row justify-between">
              <div className="flex flex-col gap-[1rem]">
                <p className="display_4">Champagne Party</p>
                <p className="sub_display_2">Cabanna Lounge, July 9, 2023</p>
              </div>
              <div className="flex justify-between flex-row gap-[1rem] md:items-center">
                <button  className="h-12 border border-1 border-faint-typo px-[1.5rem] w-[50px] rounded-[8px] cursor-pointer"><img src='/img/share.svg' alt='share' /></button>
                <SecondaryBtn text='Become A Sponsor' onClick={viewAllEvents} />  
                <PrimaryBtn text='Buy Event Ticket'  onClick={viewAllEvents} />  
              </div>
             </section>
          <section className="text-white flex h-[auto] flex-col gap-[2rem] my-[2rem] items-start">
            
            <div>
              <p className="!text-peach-typo mb-[2rem] display_5">About Event</p>
              <p className="md:w-[50%]">
                Lorem ipsum dolor sit amet consectetur. Sit quisque netus pulvinar lectus mattis adipiscing. Dictum velit urna pharetra congue. 
                Mattis cursus enim viverra rhoncus. Malesuada id sed rhoncus mi euismod rhoncus erat. Purus at vitae at et turpis consequat vel. Netus enim sed sed tristique lacus morbi. Diam bibendum nam nunc ullamcorper arcu et suscipit. 
                Nec magna ante tellus imperdiet diam tincidunt condimentum amet convallis.
              </p>
            </div>
            <div className="text-white">
              <p className="!text-peach-typo mb-[2rem] display_5">When & Where</p>
              <div className="flex gap-[6rem] md:flex-row">
                <div className="flex flex-col md:flex-row gap-[2rem] md:items-center ">
                  <Image width={72} height={60} src='/img/calendar.svg' alt='Date & Time' />
                  <div>
                    <p className="font-extrabold">Date and Time</p>
                    <p className="sub_display_4">Sat, July 9, 2023</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-[2rem] md:items-cente ">
                  <Image width={72} height={60} src='/img/location.svg' alt='Location' />
                  <div>
                    <p className="font-extrabold">Location</p>
                    <p className="sub_display_4">Cabanna Lounge, Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
         
            
          {/* Upcoming events Section */}
          <section className="flex flex-col rounded-[60px] p-[2rem] md:p-[5rem] 2xl:py-[8rem] bg-faint-bg md:h-[auto] relative  ">
           <div className="hidden md:block">
            <Image src='/img/top.svg' className="absolute bottom-0 left-0" alt='fancy deco' width={150} height={100} />
            <Image src='/img/tbot.svg' className="absolute top-0 right-0" alt='fancy deco' width={150} height={100} />
           </div>
            <div className="p-[2rem]">
              <p className="display_3 ">Upcoming events</p>
              <p className="sub_display_2 !text-black-brown mt-[2rem]">We have amazing events lined up for you</p>
              
            </div>
            <div>
              <div className="my-[3rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
                <EventCard title='Drip Party' details='Nike Lake Resort, April 9, 2023' onClick='' bg='bg-event1'  />
                <EventCard title='Champagne Party' details='Cabanna Lounge, July 9, 2023' onClick='' bg='bg-event2' />
              </div>
             <div className="flex mx-[auto] md:mb-0 mb-[2rem] justify-center items-center"> <OutlinedBtn text='Show All Events' onClick={viewAllEvents} /></div>
            </div>
          </section>
        </BaseContainer>
      </section>
    </>
  );
}

Events.layout = BaseLayout;
