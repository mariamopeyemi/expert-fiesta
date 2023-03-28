import Image from "next/image";
import { useRouter } from "next/router";
import BaseLayout from "@/components/layouts/BaseLayout";
import BaseContainer from "@/components/layouts/BaseContainer";

// const inter = Inter({ subsets: ["latin"] });

export default function Partners() {
  const router = useRouter();
  function viewAllEvents() {
    router.push("/events");
  }

  return (
    <>
      <section className=" bg-black">
           {/* Let’s partner and make magic Section */}
        <BaseContainer className=" flex flex-col gap-[2rem] py-20 mx-auto  ">
          <section className="flex flex-col gap-[1rem] p-[4rem] items-center  rounded-[60px]   ">
            <p 
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="display_1 !text-peach2-typo text-center">Let’s Partner <br /> And Make Magic</p>
            <p className="sub_display_2 !text-black-brown md:w-[55%] text-center">We are glad you decided to make this move. Partner with us today and turn your events into unforgettable experiences.</p>
          </section>
             {/* Call and Chat Section */}
          <section className="p-[2rem] md:px-[5rem] h-[auto] relative  ">
           <div className=" grid grid-cols-1 md:grid-cols-2 gap-[4rem]">
                <div data-aos="flip-up"
                className="bg-rust p-[4rem] md:h-[400px] rounded-[60px]">
                  <Image
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                   src='/img/call-calling.svg' alt='fancy deco' width={100} height={100} />
                  <p className="display_5">Schedule a call</p>
                  <p className="sub_display_2">Schedule a call to speak to someone from Sales at your convenience.</p>
                </div>
                <div data-aos="flip-up"
                className="bg-light-nude p-[4rem] md:h-[400px] rounded-[60px]">
                  <Image
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                   src='/img/messages.svg' alt='fancy deco' width={100} height={100} />
                  <p 
                  data-aos="slide-up"
                  data-aos-duration="1500"
                  className="display_5 !text-black">Start an instant chat</p>
                  <p 
                  data-aos="slide-up" 
                  data-aos-duration="1500"
                  className="sub_display_2 !text-black-brown">Chat with someone from our Support team; get prompt assistance.</p>
                </div>
            </div>
           
          </section>
        </BaseContainer>
      </section>
    </>
  );
}

Partners.layout = BaseLayout;
