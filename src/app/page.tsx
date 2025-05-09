"use client"

import React, { useRef, useEffect, useState, useCallback, Suspense } from 'react';
import {logo} from "@/img/images"
import { Badge } from "@/components/ui/badge"
import useIsVisible from '@/hooks/useIsVisible';
import ProductDisplay from '@/components/home/ProductsDisplay/productsDisplay';
import Hero from '@/components/home/Hero/Hero';
import Process from '@/components/home/Process/Process';
import Portfolio from '@/components/home/Portfolio/Portfolio';
import Contact from '@/components/home/Contact/Contact';
import Loader from '@/components/home/Loader/Loader';


export default function Home() {
 
  // Page Sections
  const targetLanding = useRef(null);
  const targetProducts = useRef(null);
  const targetDetails = useRef(null);
  const targetClients = useRef(null);
  const targetContact = useRef(null);
 
  const [loaded, setLoaded] = useState(false)
  async function Load () {
    setLoaded(true)
  }

  useEffect(() => {
    setTimeout(Load, 2000)
  })

  return (
    <main className='bg-[#f7f7f7]' id="main">

      {/* Main */}
      <div className={`${ loaded ? "scroller no-scrollbar min-h-[100dvh] bg-[#F4F4F4] opacity-100 bg-cover -z-1 overflow-hidden transition duration-500" : "hidden"}`}>
        
        {/* Overlay */}
        <a href="/">
          <img src={logo} alt="logo" className={`${useIsVisible(targetLanding) ? "hidden transform animate-disappear opacity-0 translate-y-[-200px]" : "absolute top-4 md:left-4 left-0 right-0 mx-auto md:mx-0 transform animate-slidelogo w-12 z-30 opacity-0"}`}/>
        </a>

        {/* Page Nav */}
        <div className={`${useIsVisible(targetLanding) ? "hidden opacity-0 translate-x-[-100px] transform animate-disappear" : "hidden lg:flex flex-col space-y-6 self-center absolute top-0 bottom-0 left-6 z-50"}`}>
          <a href="#products" className={`group ${useIsVisible(targetLanding) ? "hidden opacity-0 transform animate-disappear" : "transform animate-slideleftn1 opacity-0 w-3 h-3 rounded-full bg-white inner-shadow border flex relative"}`}>
            <div className={` ${useIsVisible(targetProducts) ? "transform animate-appear w-2 h-2 bg-[#3586FF] rounded-full self-center mx-auto opacity-0" : "hidden opacity-0 transform animate-disappear translate-x-[-100px]"}`}/>
            <Badge className="absolute left-6 -top-1.5 opacity-0 group-hover:transform group-hover:animate-appearQuick hover:bg-white bg-white text-[#3586FF] border border-[#3586FF]" >Produits</Badge>
          </a>
          <a href="#details" className={`group ${useIsVisible(targetLanding) ? "hidden opacity-0 transform animate-disappear" : "transform animate-slideleftn2 opacity-0 w-3 h-3 rounded-full bg-white inner-shadow border flex"}`}>
            <div className={`${useIsVisible(targetDetails) ?  "transform animate-appear opacity-0 w-2 h-2 bg-[#3586FF] rounded-full self-center mx-auto" : "hidden opacity-0 transform animate-disappear"}`}/>
            <Badge className="absolute left-6 -top-1.5 opacity-0 group-hover:transform group-hover:animate-appearQuick hover:bg-white bg-white text-[#3586FF] border border-[#3586FF]" >Processus</Badge>
          </a>
          <a href="#showcases" className={`group ${useIsVisible(targetLanding) ? "hidden opacity-0 transform animate-disappear" : "transform animate-slideleftn3 opacity-0 w-3 h-3 rounded-full bg-white inner-shadow border flex"}`}>
            <div className={`${useIsVisible(targetClients) ? "transform animate-appear opacity-0 w-2 h-2 bg-[#3586FF] rounded-full self-center mx-auto" : "hidden opacity-0 transform animate-disappear"}`}/>
            <Badge className="absolute left-6 -top-1.5 opacity-0 group-hover:transform group-hover:animate-appearQuick hover:bg-white bg-white text-[#3586FF] border border-[#3586FF]" >Réalisations</Badge>
          </a>
          <a href="#contact" className={`group ${useIsVisible(targetLanding) ? "hidden opacity-0 transform animate-disappear" : "transform animate-slideleftn4 opacity-0 w-3 h-3 rounded-full bg-white inner-shadow border flex"}`}>
            <div className={`${useIsVisible(targetContact) ? "transform animate-appear opacity-0 w-2 h-2 bg-[#3586FF] rounded-full self-center mx-auto" : "hidden opacity-0 transform animate-disappear"}`}/>
            <Badge className="absolute left-6 -top-1.5 opacity-0 group-hover:transform group-hover:animate-appearQuick hover:bg-white bg-white text-[#3586FF] border border-[#3586FF]" >Contact</Badge>
          </a>
        </div>
        
        <section ref={targetLanding}>
          <Hero/>
        </section>
        
        <section ref={targetProducts}>
          <ProductDisplay/>
        </section>

        <section ref={targetDetails}>
          <Process/>
        </section>

        <section ref={targetClients}>
          <Portfolio/>
        </section>

        <section ref={targetContact}>
          <Contact/>
        </section>
      </div> 

      {/* Section Loader */}
      <section className={`${loaded ? "hidden" : "main-container transform animate-disappearLoader"}`}>
        <Loader/>
      </section>
      
    </main>
  );
}