"use client"
import useIsVisible from "@/hooks/useIsVisible";
import { Badge } from "lucide-react";
import { useRef } from "react";


export default function PageNav(){
    const targetLanding = useRef(null);
    const targetProducts = useRef(null);
    const targetDetails = useRef(null);
    const targetClients = useRef(null);
    const targetContact = useRef(null);
    return(
        <div className={`${useIsVisible(targetLanding) ? "hidden opacity-0 translate-x-[-100px] transform animate-disappear" : "hidden lg:flex flex-col space-y-6 self-center absolute top-0 bottom-0 left-6 z-50"}`}>
            <a href="#products" className={`group ${useIsVisible(targetLanding) ? "hidden opacity-0 transform animate-disappear" : "transform animate-slideleftn1 opacity-0 w-3 h-3 rounded-full bg-white inner-shadow border flex relative"}`}>
              <div className={` ${useIsVisible(targetProducts) ? "transform animate-appear w-2 h-2 bg-[#3586FF] rounded-full self-center mx-auto opacity-0" : "hidden opacity-0 transform animate-disappear translate-x-[-100px]"}`}/>
              <Badge className="absolute left-6 -top-1.5 opacity-0 group-hover:transform group-hover:animate-appearQuick hover:bg-white bg-white text-[#3586FF] border border-[#3586FF]" >Produits</Badge>
            </a>
            <a href="#details" className={`group ${useIsVisible(targetLanding) ? "hidden opacity-0 transform animate-disappear" : "transform animate-slideleftn2 opacity-0 w-3 h-3 rounded-full bg-white inner-shadow border flex"}`}>
              <div className={`${useIsVisible(targetDetails) ?  "transform animate-appear opacity-0 w-2 h-2 bg-[#3586FF] rounded-full self-center mx-auto" : "hidden opacity-0 transform animate-disappear"}`}/>
              <Badge className="absolute left-6 -top-1.5 opacity-0 group-hover:transform group-hover:animate-appearQuick hover:bg-white bg-white text-[#3586FF] border border-[#3586FF]" >Details</Badge>
            </a>
            <a href="#showcases" className={`group ${useIsVisible(targetLanding) ? "hidden opacity-0 transform animate-disappear" : "transform animate-slideleftn3 opacity-0 w-3 h-3 rounded-full bg-white inner-shadow border flex"}`}>
              <div className={`${useIsVisible(targetClients) ? "transform animate-appear opacity-0 w-2 h-2 bg-[#3586FF] rounded-full self-center mx-auto" : "hidden opacity-0 transform animate-disappear"}`}/>
              <Badge className="absolute left-6 -top-1.5 opacity-0 group-hover:transform group-hover:animate-appearQuick hover:bg-white bg-white text-[#3586FF] border border-[#3586FF]" >Presentations</Badge>
            </a>
            <a href="#contact" className={`group ${useIsVisible(targetLanding) ? "hidden opacity-0 transform animate-disappear" : "transform animate-slideleftn4 opacity-0 w-3 h-3 rounded-full bg-white inner-shadow border flex"}`}>
              <div className={`${useIsVisible(targetContact) ? "transform animate-appear opacity-0 w-2 h-2 bg-[#3586FF] rounded-full self-center mx-auto" : "hidden opacity-0 transform animate-disappear"}`}/>
              <Badge className="absolute left-6 -top-1.5 opacity-0 group-hover:transform group-hover:animate-appearQuick hover:bg-white bg-white text-[#3586FF] border border-[#3586FF]" >Contact</Badge>
            </a>
          </div>
    )
}