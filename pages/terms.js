import Image from "next/image";
import { useRouter } from "next/router";
import EventCard from "@/components/cards/EventCard";
import BaseLayout from "@/components/layouts/BaseLayout";
import BaseContainer from "@/components/layouts/BaseContainer";
import OutlinedBtn from "@/components/form-elements/button/OutlinedBtn";

// const inter = Inter({ subsets: ["latin"] });

export default function Terms() {
  const router = useRouter();
  function viewAllEvents() {
    router.push("/events");
  }

  return (
    <>
      <section className=" bg-black">
           {/* Popular Events Section */}
        <BaseContainer className=" flex flex-col gap-[2rem] py-20 mx-auto  ">
          <section className="flex flex-col gap-[2rem] p-[4rem] items-center  rounded-[60px] h-[60vh] bg-peach-bg bg-cover bg-no-repeat bg-center">
            <p className="display_1  mx-[auto] text-center">Terms and<span className="!text-rust">Conditions</span></p>
            <p className="sub_display_1 md:w-[50%] mx-[auto] !text-[#6B5B56] text-center">Native Play is an event creation company dedicated to creating unforgettable experiences for our clients and attendees. With a team of experienced professionals, we strive to exceed expectations and deliver memorable and impactful events. Whether you are looking to host a corporate event, product launch, or private celebration, we have the expertise and resources to bring your vision to life</p>
           </section>
            
        </BaseContainer>
      </section>
    </>
  );
}

Terms.layout = BaseLayout;
