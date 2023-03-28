import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import BaseContainer from "./BaseContainer";

import { Menu } from "react-feather"

const BaseLayout = ({ children }) => {
  const router = useRouter();
  const mainPage = [
    { name: "ABOUT", link: `/about`, },
    { name: "EVENTS", link: `/events`,  },
    { name: "PARTNER WITH US", link: `/partners`,  },
]
  const footerPage = [
    { name: "ABOUT", link: `/about`, },
    { name: "EVENTS", link: `/events`,  },
    { name: "PARTNER WITH US", link: `/partners`,  },
    { name: "PRIVACY POLICY", link: `/privacy`,  },
    { name: "TERMS OF SERVICE", link: `/terms`,  },
]
  const mobilepage = [
    { name: "ABOUT", link: `/about`, },
    { name: "EVENTS", link: `/events`,  },
    { name: "PARTNER WITH US", link: `/partners`,  },
]
function home() {
  router.push('/')
}

const [activeLink, setActiveLink] = useState();

  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <header className=" bg-[#000] h-20 flex items-center">
        <BaseContainer className=" flex items-center justify-between mx-auto">
          <img src="/img/logo-brown.svg" onClick={home}></img>
          <nav className="hidden md:block">
            <ul className="flex items-center">
              {mainPage?.map((page, i) => {
                return (
                  <li key={i} className=" mb-16 md:mb-0 md:mr-16 ">
                    <a 
                    onClick={() => setActiveLink(router.push(page.link))}
                    className={`cursor-pointer hover:text-active 
                    ${router.pathname.includes(page.link) ? 'text-active underline':'text-white'}
                   `}>{page.name}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* Mobile Nav */}
          <nav className={`w-screen h-[50vh] bg-black pt-[4rem] z-40 fixed top-0 left-0 block md:hidden transition-all duration-300 ${showNav ? " translate-x-0" : " -translate-x-full"}`}>
          {/* <nav className={`w-screen h-[50vh] bg-black z-40 fixed top-0 left-0 block md:hidden transition-all duration-300 ${showNav ? " translate-x-0" : " -translate-x-full"}`}> */}
            <ul className="flex flex-col items-center">
              {mobilepage?.map((page, i) => {
                return (
                  <li key={i} className=" mb-16">
                    <a onClick={()=>{
                      router.push(page.link) 
                      setShowNav(!showNav)}}  className="link-primary text-4xl font-semibold">{page.name}</a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            className=" z-50  md:hidden"
            
            onClick={() => {
              setShowNav(!showNav);
            }}
          >
            <Menu color="#D34D18" />
          </button>
        </BaseContainer>
      </header>
      <main className="min-h-[80vh]">{children}</main>
      <footer >
        <BaseContainer className="pb-[5rem] bg-black mx-[auto]">
            <div className="flex flex-col justify-between p-[2rem] md:p-[5rem] rounded-[60px] bg-[#5D1900]"> 
              <div className=" flex flex-col md:flex-row items-center justify-between ">
                  <div className=""><img src="/img/logo-light.svg" onClick={home}></img></div>
                  <div className="">
                    <ul className="flex flex-col md:flex-row gap-[1rem] items-center">
                      {footerPage?.map((page, i) => {
                        return (
                          <li key={i} className=" ">
                            <a onClick={()=>{router.push(page.link)}}  className="cursor-pointer link-display_3_light text-white hover:text-active hover:underline">{page.name}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="md:hidden flex flex-row justify-between w-[50%] mt-[1rem]">
                    <Link href='https://www.linkedin.com/company/yebox/' target='_blank' passHref><Image src="/img/sm-ig.svg" alt='Instagram' width={24} height={24} /></Link>
                    <Link href='https://twitter.com/yebox_io?s=21&t=oicDoAvJ1y-PLb1Lnq4xwg' target='_blank' passHref><Image src="/img/sm-twitter.svg" alt='Twitter' width={24} height={24} /></Link>
                    <Link href='https://instagram.com/yebox_io?igshid=YmMyMTA2M2Y=' target='_blank' passHref><Image src="/img/sm-fb.svg" alt='Facebook' width={24} height={24} /></Link>
                  </div>
              </div>
              <hr className="bg-rust my-[2rem] h-[1px] w-[100%] border-0" />
              <div className="flex flex-col md:flex-row justify-between w-[full]">
             
                <p className="text-footer-typo text-center">&copy; {new Date().getFullYear()}  Native Play. All Right Reserved </p>
                <div className="hidden md:flex flex-row justify-between  md:w-[10%]">
                  <Link href='https://www.linkedin.com/company/yebox/' target='_blank' passHref><Image src="/img/sm-ig.svg" alt='Instagram' width={24} height={24} /></Link>
                  <Link href='https://twitter.com/yebox_io?s=21&t=oicDoAvJ1y-PLb1Lnq4xwg' target='_blank' passHref><Image src="/img/sm-twitter.svg" alt='Twitter' width={24} height={24} /></Link>
                  <Link href='https://instagram.com/yebox_io?igshid=YmMyMTA2M2Y=' target='_blank' passHref><Image src="/img/sm-fb.svg" alt='Facebook' width={24} height={24} /></Link>
                </div>
              </div>
            </div>
        </BaseContainer>
      </footer>
    </div>
  );
};

export default BaseLayout;
