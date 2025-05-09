import useIsVisible from "@/hooks/useIsVisible";
import { bg, bg_mobile, logo, iPad, iMac, iPhone } from "@/img/images";
import { vitrines } from "@/lib/data";
import { useRef } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



export default function Hero(){
    const targetLanding = useRef(null);


    return(
        <div className={`scroller-section w-screen h-[100dvh] lg:h-[100vh] relative mb-0.5 ${useIsVisible(targetLanding) ? "landing-bg transform animate-appear500 opacity-0" : "transform animate-disappear opacity-1"} `} ref={targetLanding}>
          <img src={bg} alt="background" className={`${useIsVisible(targetLanding) ? "hidden lg:block transform animate-slideout500 opacity-0 h-[70vh] lg:h-screen  w-[200vw] lg:w-screen absolute top-0 left-0 z-0" : "hidden opacity-0 translate-y-[100px]"}`}/>
          <img src={bg_mobile} alt="background" className={`${useIsVisible(targetLanding) ? "block lg:hidden transform animate-slideout500 opacity-0 h-[65dvh] lg:h-screen  w-[200vw] lg:w-screen absolute top-0 left-0 z-0" : "hidden opacity-0 translate-y-[100px]"}`}/>
          <img src={logo} alt="logo" className={`${useIsVisible(targetLanding) ? "transform animate-slidein700_10px opacity-0 w-24 2xl:w-32 z-10 absolute left-0 right-0 mx-auto pt-24" : "hidden opacity-0 translate-y-[100px]"}`}/>
            <h1 className={`${useIsVisible(targetLanding) ? "transform animate-slideout500 " : "hidden opacity-0 translate-y-[100px]"}"hidden opacity-0 translate-y-[100px] text-2xl lg:text-3xl 2xl:text-5xl font-semibold text-[#3586FF] text-center relative pt-52 2xl:pt-60 z-10"`}>Agence Digitale</h1>
            <div className="flex flex-row z-10">
              <div className=''>
                <img src={iPad} alt="i" className={`${useIsVisible(targetLanding) ? "transform animate-slideleft500 opacity-0 -translate-y-full z-10 w-[12vw] lg:w-[9.2vw] h-[16.273vw] lg:h-[12.476vw] absolute bottom-[45dvh] lg:bottom-[15vh] left-0 right-[50vw] lg:right-[45vw] mx-auto" : "hidden opacity-0 translate-y-[100px]"}`}/>
                <div className={`${useIsVisible(targetLanding) ? "opacity-0 transition animate-appear1500 z-20 w-[12vw] h-[16.273vw] lg:w-[9.25vw] lg:h-[12.476vw] pb-0 absolute overflow-hidden bottom-[45dvh] lg:bottom-[15vh] left-0 right-[50vw] lg:right-[45vw] mx-auto" : "hidden opacity-0 translate-y-[100px]"}`}>
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    
                    
                    autoplay={{ delay: 7000 }}
                    loop
                    className="w-[12vw] lg:w-[9.25vw] relative transition duration-300"
                    slidesPerView={1}

                  >
                    {vitrines.map((image, index) => (
                      <SwiperSlide key={index}>
                        <a href={image.url}>
                          <img src={image.ipad} />
                        </a>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                </div>
              </div>
              <div className=''>
                <img src={iMac} alt="i" className={`${useIsVisible(targetLanding) ? "transform animate-slidein500 opacity-0 -translate-y-full z-10 w-[35vw] lg:w-[30vw] h-[33.774vw] lg:h-[28.95vw] absolute bottom-[45dvh] lg:bottom-[15vh] left-0 right-0 mx-auto" : "hidden opacity-0 translate-y-[100px]"}`}/> 
                <div className={`${useIsVisible(targetLanding) ? "opacity-0 transition animate-appear1500 z-20 w-[35vw] lg:w-[30vw] h-[33.774vw] lg:h-[28.95vw] overflow-hidden absolute bottom-[45dvh] lg:bottom-[15.2vh] left-0 right-0 mx-auto" : "hidden opacity-0 translate-y-[100px]"}`}>
                  <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 7000 }}
                    loop
                    className="w-[35vw] lg:w-[30.2vw] relative transition duration-300"
                    slidesPerView={1}

                  >
                    {vitrines.map((image, index) => (
                      <SwiperSlide key={index}>
                        <a href={image.url}>
                          <img src={image.comp} />
                        </a>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                </div>
              </div>
              <div>
                <img src={iPhone} alt="i" className={`${useIsVisible(targetLanding) ? "transform animate-slideright500 opacity-0 -translate-y-full z-10 w-[6vw] lg:w-[4.2vw] h-[12vw] lg:h-[8.512vw] absolute bottom-[45dvh] lg:bottom-[15vh] left-[45vw] lg:left-[40vw] right-0 mx-auto" : "hidden opacity-0 translate-y-[100px]"}`}/>
                <div className={`${useIsVisible(targetLanding) ? "opacity-0 overflow-hidden transition animate-appear1500 z-20 w-[6vw] lg:w-[4.2vw] pb-0 h-[11.9vw] lg:h-[8.512vw] absolute bottom-[45.1dvh] lg:bottom-[15vh]  left-[45vw] lg:left-[40vw] right-0 mx-auto" : "hidden opacity-0 translate-y-[100px]"}`}>
                  <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 7000 }}
                    loop
                    className="w-[6vw] lg:w-[4.2vw] relative transition duration-300"
                    slidesPerView={1}

                  >
                    {vitrines.map((image, index) => (
                      <SwiperSlide key={index}>
                        <a href={image.url}>
                          <img src={image.phone} />
                        </a>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                </div>
              </div>
            </div>
          </div>
    )
}