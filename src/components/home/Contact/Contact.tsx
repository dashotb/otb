import { ContactForm } from "@/components/ui/ContactForm";
import useIsVisible from "@/hooks/useIsVisible";
import { useRef } from "react";
import Image from "next/image";

//icons
import phone from "@/icons/phone.png"
import email from "@/icons/email2.png"
import insta from "@/icons/instagram.png"
import whatsapp from "@/icons/whatsapp.png"
import linkedin from "@/icons/linkedin.png"


export default function Contact(){
    const targetContact = useRef(null);

    return(
        <div className="scroller-section min-h-[100dvh] mb-1" id="contact" ref={targetContact}>
            <h3 className={`${useIsVisible(targetContact) ? " transform animate-slideout700_0px opacity-0 text-center text-[#3586FF] text-2xl 2xl:text-4xl font-semibold py-auto pt-24 pb-6 lg:h-[25vh] lg:content-center italic w-full": "hidden transform-disappear"} `}>Contactez-nous !</h3>
            <div className='h-[40dvh] content-center flex flex-col'>
              <div className={`${useIsVisible(targetContact) ? " transform animate-slideout700_0px opacity-0 my-auto relative bg-white shadow-lg w-[90vw] lg:w-[40vw] mx-auto  p-10 rounded-lg": "hidden transform-disappear"} `}>
                <ContactForm/>
                <div className='flex flex-col w-full justify-between mt-12 gap-12'>
                    <div className='flex flex-col mx-auto gap-y-6 justify-between w-full xl:px-[10vw]'>
                      <a href="tel:+33760786636" className='text-base lg:text-xl text-[#3586ff] flex flex-row items-center'><Image src={phone} alt='phone-icon' className='w-5 h-5 mr-2'/>+33 7 60 78 66 36</a>
                      <a href="tel:+33760786636" className='text-base lg:text-xl text-[#3586ff] flex flex-row items-center'><Image src={email} alt='phone-icon' className='w-5 h-5 mr-2'/>digitaldashotb@gmail.com</a>
                    </div>
                    <div className='flex flex-row gap-y-8 justify-between w-full px-[10vw]'>
                      <a href="tel:+33760786636" className='text-xl text-[#3586ff] flex flex-row items-center '><Image src={whatsapp} alt='phone-icon' className='w-8 lg:w-10  lg:h-10 mr-2'/></a>
                      <a href="https://www.linkedin.com/company/on-the-board-tech/" className='text-xl text-[#3586ff] flex flex-row items-center '><Image src={linkedin} alt='phone-icon' className='w-8 lg:w-10  lg:h-10 mr-2'/></a>
                      <a href="tel:+33760786636" className='text-xl text-[#3586ff] flex flex-row items-center '><Image src={insta} alt='phone-icon' className='w-8 lg:w-10  lg:h-10 mr-2'/></a>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
}