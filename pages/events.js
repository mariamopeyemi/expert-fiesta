import Image from "next/image";
import { useRouter } from "next/router";
import Carousel from "@/components/cards/EventCarousel";
import Slider from "@/components/slides/EventSlider";
import EventCard from "@/components/cards/EventCard";
import BaseLayout from "@/components/layouts/BaseLayout";
import BaseContainer from "@/components/layouts/BaseContainer";
import EventCarouselCard from "@/components/cards/EventCarouselCard";
import SecondaryBtn from "@/components/form-elements/button/SecondaryBtn";


// const inter = Inter({ subsets: ["latin"] });

export default function Events() {
  const router = useRouter();
  function viewAllEvents() {
    router.push("/events");
  }
  function viewEvent() {
    router.push("/events01");
  }

  const slides = [ 
    '/img/Desktop - 8.png',
    '/img/bg-nude.png',
    '/img/event-mgt-maxi.svg',
    // '/img/event-cre-maxi.svg',
       
  ]
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
    <>
      <section className=" bg-black">
           {/* Popular Events Section */}
        <BaseContainer className=" flex flex-col gap-[2rem] py-20 mx-auto  ">
            {/* Upcoming events Section */}
             < Slider />
             
             <section className=" h-[auto]  my-[2rem] bg-cover bg-no-repeat bg-center">
          {/* <Carousel 
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
              </Carousel> */}
           </section>
          <section className="flex flex-col p-[2rem] md:p-0 2xl:py-[8rem]  md:h-[auto] ">
           
            <div className="flex flex-col md:flex-row justify-between items-center my-[2rem]">
              <p 
              data-aos="flip-right"
              data-aos-duration="1500" 
              className="display_3 ">Upcoming events</p>
            
              <SecondaryBtn text='All Events' onClick={viewAllEvents} />  
            </div>
            <div>
              <div className="my-[3rem] grid grid-cols-1 md:grid-cols-3 gap-[2rem]">
                <EventCard title='Drip Party' details='Nike Lake Resort, April 9, 2023' onClick={viewEvent} bg='bg-event1'  />
                <EventCard title='Champagne Party' details='Cabanna Lounge, July 9, 2023' onClick={viewEvent} bg='bg-event2' />
                <EventCard title='Drip Party' details='Nike Lake Resort, April 9, 2023' onClick={viewEvent} bg='bg-event1'  />
                <EventCard title='Champagne Party' details='Cabanna Lounge, July 9, 2023' onClick={viewEvent} bg='bg-event2' />
                <EventCard title='Drip Party' details='Nike Lake Resort, April 9, 2023' onClick={viewEvent} bg='bg-event1'  />
                <EventCard title='Champagne Party' details='Cabanna Lounge, July 9, 2023' onClick={viewEvent} bg='bg-event2' />
              </div>
            </div>
          </section>
        </BaseContainer>
      </section>
    </>
  );
}

Events.layout = BaseLayout;
