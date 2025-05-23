"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import Navbar from '@/components/landingpage/navbar'
import Loader from "@/components/landingpage/loading";
import Link from 'next/link'
import Logo from '@/components/landingpage/logo'
import LetterPullup from "@/components/magicui/pullup";
import Image from 'next/image'
import GradualSpacing from "@/components/magicui/space";
import TextReveal from "@/components/landingpage/introcarousel";
import Revealai from "@/components/landingpage/revealai";
import How from "@/components/landingpage/how";
import Revealfinal from "@/components/landingpage/revealfinal";
export default function Home() {



  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3500);
  }, []);
  if (loading) {
    return <>
      <div className=" h-[100vh] flex items-center">
        <Loader />
      </div>
    </>;
  } else {
    return (
      <div className=" relative bg-gradient-to-br from-[#FFC98A] to-[#DC4F00] w-[100%] flex flex-col justify-start items-center p-0 ">



        <div className=" max-w-[1440px] min-h-[100vh]  w-[100%] flex flex-col items-center relative pb-20">

          <div className="flex absolute top-0 left-0 p-2 h-[100%]  items-center">
            <div className="flex flex-col gap-16">

              <div className=" seprate1 opacity-25 translate-y-[calc(8rem+100px)] ">
                <Logo width={50} />
              </div>
              <div className="seprate2 opacity-50 translate-y-[calc(4rem+50px)]  ">
                <Logo width={50} />
              </div>
              <div>
                <Logo width={50} />
              </div>
              <div className="seprate3 opacity-50 -translate-y-[calc(4rem+50px)] ">
                <Logo width={50} />
              </div>
              <div className="seprate4 opacity-25 -translate-y-[calc(8rem+100px)]">
                <Logo width={50} />
              </div>



            </div>

          </div>

          <div className="absolute flex  left-0  -translate-x-[32%] h-[100%]  items-center ">
            <div className="  uppercase text-[9rem] text-[#FDCC92] font-black -rotate-90 ">


              <GradualSpacing
                className="uppercase sm:text-[9rem] text-[6rem] transition-all duration-300 md:text-[#FDCC92] text-[#fdcd9268] font-black -rotate-90"
                text="EXPRESSO"
              />
            </div>

          </div>

          <div className=" w-[100%] uppercase  flex justify-end gap-5 p-5 h-min font-bold">
            <Link href="/signup">
              <div className=" enter7 bg-[rgb(253,204,146,0.3)] py-2 px-5 rounded-full flex items-center justify-center   ">Sign Up</div>
            </Link>
            <Link href="/login">
              <div className=" enter7  bg-[rgb(253,204,146,0.3)] py-2 px-5 rounded-full flex items-center justify-center   ">Login</div>
            </Link>
          </div>


          <div className="w-[100%]  xl:pl-[10rem] xl:gap-[6rem] md:pl-[4rem] md:gap-3rem] sm:pl-[2rem] sm:gap-[2rem]  relative flex justify-center md:items-center items-end md:flex-row flex-col   ">
            <div className=" enteremo md:w-[40rem] md:h-[40rem] w-[80vw] h-[80vw] transition-all duration-300   flex  items-center  ">
              <Image src="/data/logos/expressoai.png" layout="responsive" width={1000} height={1000} alt="expresso" />
            </div>

            <div className=" md:w-[16rem] h-[100%] flex flex-col justify-around p-2 w-[60%]">
              <div className=" flex flex-col gap-2">
                <div className=" font-bold">Don&#39;t let distances hold you back</div>
                <div className=" opacity-80 leading-5">

                  <div>Introducing <br />Expresso Intelligence</div>
                </div>
              </div>

              <div className=" opacity-80 leading-5">
                Connect with your friends and family. Expresso provides the best user-experience giving a seamless connection with lowest latency matched with power our all-new AI allowing you to express yourself easier than ever.

              </div>

            </div>

            <div className=" absolute bottom-0 md:translate-y-[15rem] translate-y-[5rem]">

              <LetterPullup words={"Connect"} delay={0.05} />


            </div>
          </div>


            




        </div>


        <div className="z-10 flex w-[100%] max-w-[1440px]">
      <TextReveal text="Introducing Expresso Ecosystem" />
    </div>

    <div className="z-10 flex w-[100%] max-w-[1440px]">
      <Revealai text="Expresso is designed to enhance your productivity " />
      </div>

      <div className="z-10 flex w-[100%] max-w-[1440px]">
      <How text="" />
      </div>

      <div className="z-10 flex w-[100%] max-w-[1440px] mb-[400px]">
      <Revealfinal text="Unleashing Expresso Intelligence" />
      </div>
        
       


        
      <div className="w-[100%] flex justify-center absolute bottom-10  ">
        
        <Image src="/data/logos/logo.png" width={500} height={300} alt="expresso" className=" w-[320px] brightness-0 invert object-contain" />
        
</div>





      <div className=" w-[100%] absolute bottom-0 h-[15px] bg-gradient-to-l from-[#FFC98A] to-[#DC4F00]">

      </div>

        
      <div className=" absolute top-[50%] right-[-50vw] opacity-40">
        <Logo width={1500} />

      </div>







      </div>
    );
  }
}
