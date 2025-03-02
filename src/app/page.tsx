"use client"

import Image from "next/image";
import bg from "@/img/bg.png"
import screen_dp from "@/img/Screenshot_DP.png"
import iMac from "@/img/iMac.png"
import iPhone from "@/img/iPhone.png"
import iPad from "@/img/iPad.png"
import logo from "@/img/logo.png"

//Icons

import blockchainIcon from "@/icons/blockchain.png"
import seoIcon from "@/icons/seo.png"
import cyberrsecIcon from "@/icons/cyber-security.png"
import creatiiveIcon from "@/icons/creative-dev.png"
import magaeIcon from "@/icons/management.png"
import ecommerceIcon from "@/icons/ecommerce.png"
import emailIcon from "@/icons/email.png"
import searchIcon from "@/icons/search.png"

//Logos
import DP_logo from "@/logos/DP.png"


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useInView } from "motion/react"


function useIsVisible(ref: any) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    // Create an IntersectionObserver to observe the ref's visibility
    const observer = new IntersectionObserver(([entry]) => 
      setIntersecting(entry.isIntersecting)

    );

    // Start observing the element

    observer.observe(ref.current);

    // Cleanup the observer when the component unmounts or ref changes
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

export default function Home() {
  const targetLanding = useRef(null);
  const targetProducts = useRef(null);
  const targetDetails = useRef(null);
  const targetClients = useRef(null);
  const targetContact = useRef(null);
  
  return (
    <main className="scroller no-scrollbar min-h-screen bg-neutral-100 overflow-hidden" id="main">

      {/* Section Landing */}

      <section className="scroller-section w-screen h-[100.5vh] relative mb-24" ref={targetLanding}>
        <Image src={bg} alt="background" className={`${useIsVisible(targetLanding) ? "transform animate-slideout500 opacity-0 h-screen w-screen absolute top-0 left-0 z-0" : "hidden opacity-0 translate-y-[100px]"}`}/>
        <Image src={logo} alt="" className={`${useIsVisible(targetLanding) ? "transform animate-slidein700_10px opacity-0 w-24 z-10 absolute left-0 right-0 mx-auto pt-24" : "hidden opacity-0 translate-y-[100px]"}`}/>
        <h2 className={`${useIsVisible(targetLanding) ? "transform animate-slideout500 " : "hidden opacity-0 translate-y-[100px]"}"hidden opacity-0 translate-y-[100px] text-3xl font-semibold text-blue-600 text-center relative pt-52 z-10"`}>Applications Web & Mobile</h2>
        <div className="flex flex-row z-10">
          <Image src={iPad} alt="i" className={`${useIsVisible(targetLanding) ? "transform animate-slideleft500 opacity-0 -translate-y-full z-10 w-44 absolute bottom-[15vh] left-0 right-[45vw] mx-auto" : "hidden opacity-0 translate-y-[100px]"}`}/>
          <Image src={iMac} alt="i" className={`${useIsVisible(targetLanding) ? "transform animate-slidein500 opacity-0 -translate-y-full z-10 w-[30vw] absolute bottom-[15vh] left-0 right-0 mx-auto" : "hidden opacity-0 translate-y-[100px]"}`}/>
          <Image src={iPhone} alt="i" className={`${useIsVisible(targetLanding) ? "transform animate-slideright500 opacity-0 -translate-y-full z-10 w-20 absolute bottom-[15vh] left-[40vw] right-0 mx-auto" : "hidden opacity-0 translate-y-[100px]"}`}/>
        </div>
      </section>

      {/* Section Produits */}

      <section className="scroller-section w-screen h-[100.5vh] relative flex flex-row " ref={targetProducts}>
        <div className="w-[60vw] flex flex-col">
          <div className="w-fit mx-auto pr-24 pt-24">
            <h3 className={`${useIsVisible(targetProducts) ?"text-blue-600 text-4xl font-semibold transform animate-slidein700_0px opacity-0": "opacity-0 -translate-y-full" }`}>Site Vitrine</h3>
          </div>
          <Accordion type="single" collapsible className="sroller text-blue-500 text-xl mx-32 pt-24 h-[65vh] ml-40 overflow-scroll no-scrollbar">
            <AccordionItem value="item-1" className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
              <AccordionTrigger className="text-2xl font-semibold">Maquette Offerte</AccordionTrigger>
              <AccordionContent className="overflow-scroll h-[48vh] no-scrollbar mt-4 mb-24">
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft2 opacity-0": "opacity-0 -translate-X-full" }`}>
              <AccordionTrigger className="text-2xl font-semibold">Design Sur Mesure</AccordionTrigger>
              <AccordionContent className="overflow-scroll h-[48vh] no-scrollbar mt-4 mb-24">
              <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
                Votre site vitrine, une vitrine d’excellence grâce à notre expertise
              </h1>

              <p className="text-lg text-gray-700 mb-8">
                Chez <span className="font-semibold">On The Board</span>, nous sommes fiers de vous offrir bien plus qu’un simple site internet : 
                nous concevons une véritable vitrine digitale qui sublime l’image de votre entreprise. Notre expertise en création de sites vitrines repose 
                sur une approche personnalisée et innovante, où chaque détail compte pour refléter au mieux votre identité de marque.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Un design sur mesure, reflet de votre identité</h2>
              <p className="text-gray-700 mb-6">
                Nous créons des designs sur mesure, pensés pour être en parfaite adéquation avec l’image de votre entreprise. Que vous souhaitiez 
                un style sobre et élégant, moderne et audacieux, ou riche et complexe, nous adaptons chaque élément graphique à vos besoins et à 
                votre vision. Votre site vitrine devient ainsi une extension digitale harmonieuse et cohérente de votre marque.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Une expérience visuelle immersive et engageante</h2>
              <p className="text-gray-700 mb-6">
                Nous utilisons les dernières technologies pour donner vie à votre site, en intégrant des animations captivantes, des illustrations 3D dynamiques 
                et des interactions fluides. Ces éléments visuels ne sont pas seulement esthétiques : ils renforcent l’engagement de vos visiteurs et les 
                incitent à explorer davantage votre univers.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Simplicité ou complexité, selon vos besoins</h2>
              <p className="text-gray-700 mb-6">
                Chaque entreprise est unique, tout comme les besoins en termes de design. Nous proposons une large gamme de styles, allant des designs 
                minimalistes et épurés, parfaits pour une communication claire et concise, aux designs complexes et riches en détails, idéaux pour des 
                expériences plus immersives. Peu importe votre choix, nous garantissons un résultat professionnel et impactant.
              </p>

              <p className="text-lg font-medium text-gray-800">
                Avec <span className="font-semibold">On The Board</span>, faites le choix d’un site vitrine qui non seulement met en lumière votre 
                établissement sous son plus beau jour, mais devient aussi un véritable outil pour captiver vos visiteurs et marquer les esprits. 
                Transformez votre présence en ligne dès aujourd’hui avec notre équipe d’experts passionnés !
              </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft3 opacity-0": "opacity-0 -translate-X-full" }`}>
              <AccordionTrigger className="text-2xl font-semibold">Referencement & Performances</AccordionTrigger>
              <AccordionContent className="overflow-scroll h-[48vh] no-scrollbar mt-4 mb-24">
              <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
                Boostez votre visibilité avec un site vitrine optimisé pour le référencement
              </h1>

              <p className="text-lg text-gray-700 mb-8">
                Chez <span className="font-semibold">On The Board</span>, nous comprenons que la création d’un site vitrine ne s’arrête pas à son apparence. 
                Pour maximiser votre impact en ligne, nous mettons un point d’honneur à optimiser chaque aspect de votre site pour les moteurs de recherche, 
                notamment Google.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Une structure pensée pour le SEO</h2>
              <p className="text-gray-700 mb-6">
                Dès la conception, nous structurons votre site avec une hiérarchie claire et des balises bien définies, garantissant une indexation rapide et 
                efficace par les moteurs de recherche. Votre contenu est organisé de manière à être compréhensible tant pour les visiteurs que pour les algorithmes.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Des mots-clés stratégiques</h2>
              <p className="text-gray-700 mb-6">
                Nous intégrons des mots-clés pertinents et adaptés à votre activité pour que votre site apparaisse dans les premiers résultats des recherches 
                de vos clients potentiels. Chaque page est optimisée pour cibler les requêtes qui comptent le plus pour votre entreprise.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vitesse et performance : des critères cruciaux</h2>
              <p className="text-gray-700 mb-6">
                Un site rapide, c’est un site mieux classé ! Nous veillons à réduire les temps de chargement en optimisant les images, le code et les ressources, 
                offrant ainsi une expérience fluide à vos visiteurs tout en répondant aux exigences des moteurs de recherche.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Un contenu optimisé et engageant</h2>
              <p className="text-gray-700 mb-6">
                Avec des textes clairs, informatifs et engageants, nous créons une expérience utilisateur de qualité qui améliore votre taux de conversion 
                tout en renforçant votre positionnement SEO.
              </p>

              <p className="text-lg font-medium text-gray-800">
                Avec <span className="font-semibold">On The Board</span>, transformez votre site vitrine en un véritable levier de visibilité et attirez 
                davantage de clients grâce à un référencement naturel performant et durable.
              </p>
                        components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft4 opacity-0": "opacity-0 -translate-X-full" }`}>
              <AccordionTrigger className="text-2xl font-semibold">Adaptation Mobile</AccordionTrigger>
              <AccordionContent className="overflow-scroll h-[48vh] no-scrollbar mt-4 mb-24">
              <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
                Un site vitrine responsive, adapté à tous les appareils
              </h1>

              <p className="text-lg text-gray-700 mb-8">
                Chez <span className="font-semibold">On The Board</span>, nous comprenons l'importance d'une expérience utilisateur fluide et agréable, 
                quel que soit l'appareil utilisé par vos visiteurs. C’est pourquoi chaque site vitrine que nous créons est conçu pour s’adapter parfaitement 
                à tous les écrans, des smartphones aux ordinateurs de bureau, en passant par les tablettes.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Un design fluide et adaptable</h2>
              <p className="text-gray-700 mb-6">
                Nous utilisons les principes du responsive design pour garantir que votre site s’affiche de manière optimale sur tous les appareils. 
                Les mises en page, les images et les contenus s’ajustent automatiquement à la taille de l’écran pour offrir une navigation claire et intuitive.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Une approche mobile-first selon votre public</h2>
              <p className="text-gray-700 mb-6">
                Si votre site est principalement destiné à un public mobile, nous adoptons une approche mobile-first, en développant et en optimisant chaque 
                élément prioritairement pour les écrans de petite taille. En revanche, si vos utilisateurs se connectent majoritairement depuis des ordinateurs, 
                nous adaptons le design en desktop-first tout en assurant une expérience fluide sur mobile.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Une compatibilité complète avec tous les navigateurs</h2>
              <p className="text-gray-700 mb-6">
                Votre site sera non seulement adapté aux différentes tailles d’écran, mais également testé pour garantir une compatibilité parfaite avec 
                les navigateurs les plus populaires (Chrome, Safari, Firefox, Edge, etc.).
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Optimisation des performances sur mobile</h2>
              <p className="text-gray-700 mb-6">
                Avec une majorité des utilisateurs naviguant depuis un smartphone, nous optimisons chaque site pour une vitesse de chargement rapide et 
                des interactions fluides sur mobile. Cela inclut des images optimisées, des polices légères et une navigation tactile intuitive.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Une expérience utilisateur sans compromis</h2>
              <p className="text-gray-700 mb-6">
                En adaptant chaque élément visuel et fonctionnel à l’appareil utilisé, nous assurons que vos visiteurs bénéficient d’une expérience utilisateur 
                exceptionnelle, quel que soit leur support.
              </p>

              <p className="text-lg font-medium text-gray-800">
                Avec <span className="font-semibold">On The Board</span>, profitez d’un site vitrine moderne, performant et parfaitement responsive, prêt à captiver 
                vos clients, où qu’ils soient !
              </p>
                      </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft5 opacity-0": "opacity-0 -translate-X-full" }`}>
              <AccordionTrigger className="text-2xl font-semibold">Publicites</AccordionTrigger>
              <AccordionContent className="overflow-scroll h-[48vh] no-scrollbar mt-4 mb-24">
              <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
                Boostez la visibilité de votre site vitrine grâce à une stratégie Ads performante
              </h1>

              <p className="text-lg text-gray-700 mb-8">
                Chez <span className="font-semibold">On The Board</span>, nous savons que la réussite d’un site vitrine repose sur sa capacité à atteindre 
                rapidement les bonnes audiences. C’est pourquoi nous proposons des campagnes publicitaires en ligne, conçues sur mesure pour attirer un trafic 
                qualifié et augmenter votre retour sur investissement.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Des campagnes ciblées et efficaces</h2>
              <p className="text-gray-700 mb-6">
                Nous analysons vos besoins, votre secteur d’activité et votre public cible pour élaborer des campagnes Google Ads, Facebook Ads ou d'autres 
                plateformes adaptées. Avec des annonces personnalisées et un ciblage précis, nous vous aidons à attirer des visiteurs réellement intéressés 
                par vos produits ou services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Optimisation pour maximiser votre ROI</h2>
              <p className="text-gray-700 mb-6">
                Chaque euro investi compte ! Nos experts optimisent en continu vos campagnes pour maximiser vos performances. Cela inclut le choix des bons 
                mots-clés, des enchères ajustées en temps réel, et la création de visuels ou textes publicitaires engageants.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Suivi et analyse des performances</h2>
              <p className="text-gray-700 mb-6">
                Grâce à des outils d’analyse avancés, nous suivons l’impact de vos publicités en temps réel. Vous recevez des rapports clairs et détaillés sur 
                les résultats obtenus : clics, impressions, conversions, et plus encore.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Une approche complète et intégrée</h2>
              <p className="text-gray-700 mb-6">
                En combinant publicité en ligne et une conception optimisée de votre site vitrine, nous garantissons que chaque visiteur sera accueilli sur 
                une plateforme moderne, rapide et adaptée pour convertir.
              </p>

              <p className="text-lg font-medium text-gray-800">
                Avec <span className="font-semibold">On The Board</span>, transformez votre site vitrine en un véritable aimant à clients grâce à une stratégie 
                Ads personnalisée et performante.
              </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className={`${useIsVisible(targetProducts) ?"container text-blue-600 text-2xl font-semibold absolute -bottom-20 left-32 transform animate-slideout700_0px opacity-0": "opacity-0 -translate-X-full"}`}>
            <div className="center">
              <button className="btn border-none">
                <svg width="280px" height="60px" viewBox="0 0 280 60" className="border-0">
                  <polyline points="279,1 279,59 1,59 1,1 279,1" className="bg-line" />
                  <polyline points="279,1 279,59 1,59 1,1 279,1" className="hl-line" />
                </svg>
                <span className="text-blue-600">A partir de 499€</span>
              </button>
            </div>
          </div>
          {/* <h4 className="text-blue-600 text-2xl font-semibold absolute bottom-24 left-32"><button className="-on-hover ">A partir de 499$</button></h4> */}
     
          
        </div>
        <div className={`${useIsVisible(targetProducts) ? "transform animate-slidein300 opacity-0 absolute shadow-xl border-left -right-[10vw] -top-3 w-[50vw] h-[100vh] transform skew-y-12 -rotate-12 bg-neutral-200 " : "hidden opacity-0 translate-y-[100px]"}`}>

        </div>
      </section>

      {/* Section  Details Competences*/}

      <section className="scroller-section h-[100.5vh] px-24 w-full flex flex-col pt-20 lg:pt-32 relative" ref={targetDetails}>
        <div className="w-full flex flex-row justify-between">
          <div className="w-[40vw] grid grid-cols-4 items-center ">
            <div className={`${useIsVisible(targetDetails) ? "transform animate-slidedown1 opacity-0 -32 h-32 border border-[#3586FF] rounded-lg mx-auto relative card hover:scale-105 ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
              <Image src={seoIcon} alt="-icon" className="p-6 z-10 "/>
            </div>
            <div className={`${useIsVisible(targetDetails) ? "transform animate-slidedown2 opacity-0 w-32 h-32 border border-[#3586FF] rounded-lg mx-auto relative overflow-hidden card hover:scale-105 ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
              <Image src={magaeIcon} alt="-icon" className="p-6 z-10 absolute top-0 bottom-0 "/>
            </div>
            <div className={`${useIsVisible(targetDetails) ? "transform animate-slidedown3 opacity-0 w-32 h-32 border border-[#3586FF] rounded-lg mx-auto card hover:scale-105 ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
              <Image src={emailIcon} alt="-icon" className="p-6 "/>
            </div>
            <div className={`${useIsVisible(targetDetails) ? "transform animate-slidedown4 opacity-0 w-32 h-32 border border-[#3586FF] rounded-lg mx-auto card hover:scale-105 ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
              <Image src={ecommerceIcon} alt="-icon" className="p-6 "/>
            </div>
            <div className={`${useIsVisible(targetDetails) ? "transform animate-slideup1 opacity-0 w-32 h-32 border border-[#3586FF] rounded-lg mx-auto card hover:scale-105 ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
              <Image src={creatiiveIcon} alt="-icon" className="p-6 "/>
            </div>
            <div className={`${useIsVisible(targetDetails) ? "transform animate-slideup2 opacity-0 w-32 h-32 border border-[#3586FF] rounded-lg mx-auto card hover:scale-105 ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
              <Image src={blockchainIcon} alt="-icon" className="p-6 "/>
            </div>
            <div className={`${useIsVisible(targetDetails) ? "transform animate-slideup3 opacity-0 w-32 h-32 border border-[#3586FF] rounded-lg mx-auto card hover:scale-105 ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
              <Image src={cyberrsecIcon} alt="-icon" className="p-6 "/>
            </div>
            
            <div className={`${useIsVisible(targetDetails) ? "transform animate-slideup4 opacity-0 w-32 h-32 border border-[#3586FF] shadow-lg rounded-lg mx-auto card hover:scale-105 ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
              <div className=""></div>
            </div>
          </div>
          <div className={`${useIsVisible(targetDetails) ? "transform animate-slideright300 opacity-0 flex flex-col lg:flex-row w-[50vw] text-white relative": "hidden opacity-0 translate-y-[100px]"}`}>
            <div className="mx-12 h-full content-center pb-28">
                <div className="lg:w-80">
                    <h2 className="font-bold text-2xl lg:text-3xl text-blue-600">Le process de recrutement</h2>
                    <p className="pt-5 leading-5 text-blue-600">On veut mieux te connaitre ! Et pour cela, rien de tel qu'un process de recrutement transparent. Ce sera l'occasion pour toi de découvrir un peu plus Pictarine et de pouvoir mieux te projeter dans ta future équipe.</p>
                </div>
            </div>
            <div className="absolute flex flex-col h-[50vw] w-[20vw] -top-[335px] -right-32  overflow-hidden overflow-y-scroll no-scrollbar -rotate-90">
                <div className="inline-block rotate-90 mt-12">
                    <div className="bg-[#3586FF] relative  w-64 h-64 rounded-[5px]">
                        <p className="absolute text-[5rem] leading-5 font-bold mt-10 mr-5 text-[#fff] z-[0]">1</p>
                        <h2 className="text-2xl font-bold ml-5 relative z-[1] px-5 pt-5">Screening telephonique</h2>
                        <p className="pt-2 px-5">20 min</p>
                        <p className="pt-2 leading-5 px-5">1er échange pour apprendre à se connaître avec le manager de l’équipe que tu souhaites rejoindre.</p>
                    </div>
                    <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-28 z-[2] "><div className="bg-[#3586FF] w-[83rem] h-[0.2rem] rounded-[100px] absolute mt-2 mr-12 z-[2]"></div></div>
                    <p className="flex justify-center italic font-bold mt-2 mr-32 text-blue-600">Day 1</p>
                </div>
                <div className="inline-block rotate-90">
                    <div className="bg-[#3586FF] relative w-64 h-64  rounded-[5px]">
                        <p className="absolute text-[5rem] leading-5 font-bold mt-10 mr-5 text-[#fff] z-[0]">2</p>
                        <h2 className="text-2xl font-bold ml-5 relative z-[1] px-5 pt-5">Entretien d’équipe</h2>
                        <p className="pt-2 px-5">90 min</p>
                        <p className="pt-2 px-5 leading-5">Entretien avec le manager et une personne de l’équipe que tu souhaites rejoindre.</p>
                    </div>
                    <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-28 z-[2] "></div>
                    <p className="flex justify-center italic font-bold mt-2 mr-32 text-blue-600">Day 7</p>
                </div>
                <div className="inline-block rotate-90">
                    <div className="bg-[#3586FF] relative w-64 h-64  rounded-[5px]">
                    <p className="absolute text-[5rem] leading-5 font-bold mt-10 mr-5 text-[#fff] z-[0]">3</p>
                        <h2 className="text-2xl font-bold ml-5 relative z-[1] px-5 pt-5">Test immersif</h2>
                        <p className="pt-2 px-5 relative z-[1]">2h à 3h</p>
                        <p className="pt-2 px-5 leading-5">Test adapté au poste, préparé par le manager. Ensuite, tu présentes ton rendu au manager.</p>
                    </div>
                    <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-28 z-[2] "></div>
                    <p className="flex justify-center italic font-bold mt-2 mr-32 text-blue-600">Day 14</p>
                </div>
                <div className="inline-block rotate-90">
                    <div className="bg-[#3586FF] relative w-64 h-64  rounded-[5px]">
                    <p className="absolute text-[5rem] leading-5 font-bold mt-10 mr-5 text-[#fff] z-[0]">4</p>
                        <h2 className="text-2xl font-bold ml-5 relative z-[1] px-5 pt-5">Entretien Final</h2>
                        <p className="pt-2 px-5 relative z-[1]">1h</p>
                        <p className="pt-2 px-5 leading-5">Rencontre avec un des fondateurs et Elodie notre Head of People.</p>
                    </div>
                    <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-28 z-[2] "></div>
                    <p className="flex justify-center italic font-bold mt-2 mr-32 text-blue-600">Day 18</p>
                </div>
                <div className="inline-block rotate-90 mb-80">
                    <div className="bg-[#3586FF] relative w-64 h-64  rounded-[5px]">
                    <p className="absolute text-[5rem] leading-5 font-bold mr-5 mt-10 text-[#fff] z-[0]"></p>
                        <h2 className="text-2xl font-bold ml-5 relative z-[1] px-5 pt-5">Welcome Aboard!</h2>
                        <p className="pt-2 px-5">On ne te fait pas attendre !</p>
                        <p className="pt-2 px-5 leading-5">Ta proposition est déjà prête, il ne te reste plus qu’à l’accepter!</p>
                    </div>
                    <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-28 z-[2] "></div>
                    <p className="flex justify-center italic font-bold mt-2 mr-32 text-blue-600">Day 19</p>
                </div>
                    
            </div>
          </div>
        </div>
        <div>
          <h3 className={`${useIsVisible(targetDetails) ? "transform animate-slideout1500 opacity-0 text-blue-600 text-center text-2xl absolute bottom-72 left-0 right-0 font-semibold": "hidden opacity-0 translate-y-[100px]"}`}>Ils nous font confiance</h3>
          <div className={`${useIsVisible(targetDetails) ? "transform animate-slideout1700 opacity-0 w-full h-64 bg-neutral-200 absolute bottom-0 left-0": "hidden opacity-0 translate-y-[100px]"}`}>

          </div>
        </div>
      </section>

      {/* Section Avis Clients/Associes */}

      <section className="scroller-section h-[100.5vh] w-screen flex flex-row content-center relative z-10 bg-neutral-100" ref={targetClients}>
        <div className={`${useIsVisible(targetClients) ? "transform animate-slideleftskew opacity-0 absolute shadow-xl border-left -left-[10vw] -top-3 w-[50vw] h-[100vh] transform skew-y-12 -rotate-12 bg-neutral-200 overflow-hidden flex flex-col" : "hidden opacity-0 translate-y-[100px]"}`}>
          <Image src={DP_logo} alt="drive phone" className="transform -skew-y-12 rotate-12 self-center ml-72 mt-20 w-32 absolute"/>
          <a href="https://www.drivephone.fr"  className="flex flex-row self-center ml-64 italic mt-56 absolute transform -skew-y-12 rotate-12 px-2 rounded-full w-fit bg-white">
            <div className=" text-xl p-2 text-blue-600 pr-64">https://www.drivephone.fr</div>
            <Image src={searchIcon} alt="search_icon" className="w-6 h-6 self-center mr-2"/>
          </a>
          <div className="flex flex-row w-[40vw] items-center h-full mx-auto">
            <Image src={iMac} alt="iMac" className="tansform -skew-y-12 rotate-12 w-96 h-96 ml-72"/>
            <Image src={iPhone} alt="iPhone" className="tansform -skew-y-12 rotate-12 w-20 h-36 ml-12 mt-60"/>
          </div>
        </div>
        <div className="w-[66vw] h-screen border border-red-600 ml-auto">

        </div>
      </section>

      {/* Section  Contact*/}

      <section className="scroller-section min-h-[100.5vh]" ref={targetContact}>
        <div className='h-screen w-screen relative'>
          <div className='absolute top-0 left-0 w-full h-full rounded-lg z-10'>
          </div>
        </div>
        <div className='h-[30vh] bg-neutral-200 '></div>
      </section>
    </main>
  );
}


