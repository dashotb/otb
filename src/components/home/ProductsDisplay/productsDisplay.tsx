"use client"
import { ContactForm } from "@/components/ui/ContactForm"
import { DialogHeader } from "@/components/ui/dialog"
import useIsVisible from "@/hooks/useIsVisible"
import { chevronleft, chevronright } from "@/icons/icons"
import { clipboard } from "@/img/images"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog"
import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { vitrines } from "@/lib/data"
import { TabVitrine } from "./Tabs"
import {productsList} from "@/lib/data"


export default function ProductDisplay(){
  const targetProducts = useRef(null);
  const [productId, setProductId] = useState(0)
  const [productNameAnim, setProductNameAnim] = useState("")
  const [productVideoAnim, setProductVideoAnim] = useState("transform animate-slideout750_0px opacity-0")
  const products = productsList(productNameAnim, useIsVisible(targetProducts))
  
  const appearProductName = () => {
  setProductNameAnim("transform animate-appearVideo opacity-0")
  setProductVideoAnim("transform animate-slideout750_0px opacity-0")
  }
  const NextProductName = () => {
  if (productId == 2) {
      setProductId(0)
  }
  else {
      setProductId(productId + 1)
  }
  }
  const PreviousProductName = () => {
  if (productId == 0) {
      setProductId(2)
  }
  else {
      setProductId(productId - 1)
  }
  }
  
  async function NextProduct (){
  setProductNameAnim("transform animate-disappear opacity-1")
  setProductVideoAnim("transform animate-disappear opacity-1")
  setTimeout( NextProductName,800)
  setTimeout(appearProductName, 500)
  
  }
  async function PreviousProduct (){
  setProductNameAnim("transform animate-disappear opacity-1")
  setProductVideoAnim("transform animate-disappear opacity-1")
  setTimeout(PreviousProductName,800)
  setTimeout(appearProductName, 500)
  }

  return(
      <div className="scroller-section w-screen h-[100dvh] lg:h-[100vh] relative flex flex-row mb-0.5" id="products" ref={targetProducts}>
      
          <div className="w-full md:w-[60vw] flex flex-col relative">
            <div className={`${useIsVisible(targetProducts) ?"w-[80vw] md:w-[33vw] 2xl:w-[30vw] justify-between mx-auto  pt-24 flex flex-row transform animate-slidein700_0px opacity-0 content-center" : "hidden opacity-0 translate-y-full"}`}>
              <img src={chevronleft} alt="chevronleft" className="mt-2 md:mt-0 w-6 md:w-10 h-6 md:h-10 lg:w-12 lg:h-12 cursor-pointer hover:bg-gray-300/30 rounded-full transition duration-500" onClick={() => {PreviousProduct()}}/>
              <h3 className={`${productNameAnim} text-[#3586FF] text-2xl md:text-4xl 2xl:text-5xl pt-1 2xl:pt-0 px-4 font-semibold transition duration-500`}>{products.map(p => p.id == productId ? p.name :null)}</h3>
              <img src={chevronright} alt="chevronright" className="mt-2 md:mt-0 w-6 md:w-10 h-6 md:h-10 lg:w-12 lg:h-12 cursor-pointer hover:bg-gray-300/30 rounded-full transition duration-500" onClick={() => {NextProduct()}}/>
            </div>
            
            {useIsVisible(targetProducts) ? 
              productId == 0 ? 
              <Swiper
              modules={[Navigation, Pagination, Autoplay]}
    
              pagination={{ clickable: false }}
              autoplay={{ delay: 10000 }}
              loop
              className={`${productVideoAnim} "overflow-hidden w-[80vw] h-[25vh] md:w-[40vw] md:h-[50vh] mx-auto mt-32 md:mt-7 2xl:mt-14 md:py-12 object-cover rounded-[0.5rem] "`}
              slidesPerView={1}

              >
                {vitrines.filter(i => i.type == "Vitrine").map((image, index) => (
                  <SwiperSlide key={index}>
                    <a href={image.url}>
                      <img src={image.comp} className='rounded-xl w-full h-full'/> 
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper> :
              productId == 1 ? 
              <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              
              pagination={{ clickable: false }}
              autoplay={{ delay: 10000 }}
              loop
              className={`${productVideoAnim} "overflow-hidden w-[80vw] h-[25vh] md:w-[40vw] md:h-[50vh] mx-auto mt-32 md:mt-7 2xl:mt-14 md:py-12 object-cover rounded-[0.5rem] "`}
              slidesPerView={1}

              >
              {vitrines.filter(i => i.type == "App").map((image, index) => (
                <SwiperSlide key={index}>
                  <a href={image.url}>
                    <img src={image.comp} className='rounded-xl w-full h-full'/>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper> :
            <iframe src="https://lottie.host/embed/70f4d6b3-c7b7-41e6-a48f-531dd9cee2d1/6dDDNt0cvs.lottie" className={`${productVideoAnim} 'w-[40vw] h-[46.3vh] md:w-[40vw] md:h-[50vh] mx-auto mt-24 mt-7 2xl:mt-14 md:py-12 '`}></iframe>
                : null
            }

            <div className={` z-0 ${useIsVisible(targetProducts) ?` flex flex-row px-7 ${productId != 2 ? "mt-24" : "mt-0" }  md:mt-28 md:px-28 justify-between w-full text-[#3586FF] text-2xl font-semibold  transform animate-slideout500_0px opacity-0`: "opacity-0 -translate-X-full"}`}>
              <div className="">
                  <a href="#contact" className="hidden md:block">
                    <button className="hidden md:block center btn border-none rounded-md group">
                        <svg width="280px" height="60px" viewBox="0 0 280 60" className="hidden md:block border-0">
                          <polyline points="279,1 279,59 1,59 1,1 279,1" className="bg-line" />
                          <polyline points="279,1 279,59 1,59 1,1 279,1" className="hl-line" />
                        </svg>
                        <span className={`text-[#3586FF] text-sm lg:text-xl 2xl:text-3xl transition duration-500 group-hover:hidden`}>A partir de <span className={`${productNameAnim} `}>{products.map(p => p.id == productId ? p.price : null)}</span>€</span>
                        <span className='text-white md:text-[#3586FF] text-base 2xl:text-2xl transition duration-500 group-hover:block hidden'>Demander un devis</span>
                    </button>
                  </a>
                  <a href="#contact" className="block md:hidden"></a>
                  <button className="block md:hidden bg-[#3586FF] border border-2 border-[#3586FF] px-2 pb-1 w-fit group md:btn border-none rounded-md">
                      <svg width="280px" height="60px" viewBox="0 0 280 60" className="hidden md:block border-0">
                        <polyline points="279,1 279,59 1,59 1,1 279,1" className="bg-line" />
                        <polyline points="279,1 279,59 1,59 1,1 279,1" className="hl-line" />
                      </svg>
                      <span className={`text-white md:text-[#3586FF] text-base 2xl:text-3xl transition duration-500 group-hover:hidden`}>A partir de <span className={`${productNameAnim} `}>{products.map(p => p.id == productId ? p.price : null)}</span>€</span>
                      <span className='text-white md:text-[#3586FF] text-base 2xl:text-2xl transition duration-500 group-hover:block hidden'>Demander un devis</span>
                  </button>
              </div>
              <a href={`${productId == 0 ? "/sites-vitrine" : productId == 1 ? "/applications" : productId == 2 ? "/intelligence-artificielle" : "/"}`} className='text-base flex lg:text-xl pt-2 md:pt-3 p-3 hover:underline transition duration-300'>En Savoir plus</a>
            </div>     
          </div>
          
          <div className={`${useIsVisible(targetProducts) ? "hidden md:flex transform animate-slidein300 opacity-0 absolute inner-shadow border-left -right-[10vw] top-1.5 w-[50vw] h-[100vh] flex transform skew-y-12 -rotate-12 bg-neutral-200 " : "hidden opacity-0 translate-y-[100px]"}`}>
              <img src={clipboard} alt="clipboard" className="transform -skew-y-12 rotate-12 w-[45vw] mx-auto my-auto pr-[5vw] self-center absolute"/>
              <div key={"clipboard"} className="transform -skew-y-12 rotate-12 relative w-[45vw] ml-[12vw] mt-[25vh] 2xl:mt-[22vh] content-center z-10 sroller text-[#3586FF] text-xl mx-32 pt-8 2xl:pt-24 h-fit ml-40 overflow-scroll no-scrollbar max-h-[70vh] space-y-6">
              {products.map(p => p.id == productId ? p.tableau : null)}
            </div>
          </div>
      </div>
  )
}