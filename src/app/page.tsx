"use client"

import React, { useRef, useEffect, useState, useCallback, Suspense } from 'react';

// Images
import {iMac, iPhone, iPad, bg, bg_mobile, clipboard, logo, avatar} from "@/img/images"
import { DP_logo, A2V_logo, Zidi_logo } from "@/img/images";
import {blockchainIcon, seoIcon, cyberrsecIcon, creatiiveIcon, magaeIcon, ecommerceIcon, emailIcon, robotIcon, searchIcon, chevronleft, chevronright} from "@/icons/icons"
import zidiComp from "@/img/clients/zidi-comp.png"
import zidiPhone from "@/img/clients/zidi-phone.png"
import zidiIpad from "@/img/clients/zidi-ipad.png"

import phone from "@/icons/phone.png"
import email from "@/icons/email2.png"
import insta from "@/icons/instagram.png"
import whatsapp from "@/icons/whatsapp.png"
import linkedin from "@/icons/linkedin.png"

//UI components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ContactForm } from '@/components/ContactForm';
import { url } from 'inspector';
import { motion } from 'framer-motion';


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
  const [isClient, setIsClient] = useState(false);

  const projects = [
    
      {
        name: "HJ Services Autos",
        type: "application",
        description: "Application de gestion complète pour garage automobile",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Fhj-comp.png?alt=media&token=db6408d2-9e61-4361-b712-ac36bc20dd1b",
          "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Fhj-ipad.png?alt=media&token=7291cd47-fba9-4341-ac10-ff82bbb88d28",
          "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Fhj-phone.png?alt=media&token=05f5e6b4-cd0d-462c-bba7-1cc1528162d9"
        ],
        technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
        launchDate: "2023-09-15",
        url: "https://hj-services-autos.fr",
        steps: {
          idea: {
            title: "De l'Idée à la Vision",
            description: "Création d'une solution de gestion complète pour faciliter le suivi des interventions et la relation client dans un garage automobile.",
            challenges: [
              "Gestion complexe des rendez-vous",
              "Suivi des interventions en temps réel",
              "Communication client inefficace"
            ],
            solutions: [
              "Système de réservation intelligent",
              "Dashboard en temps réel",
              "Notifications automatiques"
            ]
          },
          proposal: {
            title: "Architecture & Technologies",
            description: "Application web responsive avec dashboard administrateur et interface client. Stack MERN pour performances et scalabilité.",
            technicalStack: {
              frontend: ["React", "Redux", "Tailwind CSS"],
              backend: ["Node.js", "Express", "MongoDB"],
              devops: ["Docker", "CI/CD", "AWS"]
            },
            keyFeatures: [
              "Interface adaptative",
              "API RESTful",
              "Authentification sécurisée",
              "Base de données optimisée"
            ]
          },
          mvp: {
            title: "Prototype & Tests",
            description: "Premier prototype avec gestion des rendez-vous et suivi des interventions. Tests utilisateurs avec le personnel du garage.",
            phases: [
              {
                name: "Phase 1: Core Features",
                duration: "4 semaines",
                features: ["Gestion des rendez-vous", "Profils clients", "Suivi basique"]
              },
              {
                name: "Phase 2: Tests & Feedback",
                duration: "2 semaines",
                activities: ["Tests utilisateurs", "Ajustements UX", "Optimisations"]
              }
            ]
          },
          launch: {
            title: "Déploiement & Formation",
            description: "Déploiement progressif avec formation du personnel. Migration des données existantes.",
            steps: [
              {
                title: "Préparation",
                tasks: ["Configuration serveurs", "Tests de charge", "Plan de migration"]
              },
              {
                title: "Formation",
                tasks: ["Sessions utilisateurs", "Documentation", "Support initial"]
              },
              {
                title: "Go-Live",
                tasks: ["Déploiement", "Migration données", "Monitoring"]
              }
            ]
          },
          followUp: {
            title: "Évolution & Maintenance",
            description: "Support technique continu et ajout de nouvelles fonctionnalités selon les retours utilisateurs.",
            services: [
              "Maintenance préventive",
              "Support utilisateurs",
              "Mises à jour régulières",
              "Nouvelles fonctionnalités"
            ],
            metrics: {
              uptime: "99.9%",
              responseTime: "< 2h",
              satisfaction: "4.8/5"
            }
          }
        }
      },
    
    // Autres projets...
  ];
  const project: any = projects[0];


  useEffect(() => {
    // This code only runs on the client side
    setIsClient(true);
  }, []);

  // Page Sections
  const targetLanding = useRef(null);
  const targetProducts = useRef(null);
  const targetDetails = useRef(null);
  const targetClients = useRef(null);
  const targetContact = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  //  Products display
  const [productId, setProductId] = useState(0)
  const [productNameAnim, setProductNameAnim] = useState("")
  const [productVideoAnim, setProductVideoAnim] = useState("transform animate-slideout750_0px opacity-0")

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

   const TabVitrine = <div className={`${productNameAnim}`}>
    <Drawer>
              <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
                <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
                  - Maquette Offerte
                </p>
              </DrawerTrigger>
              <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-12 px-[20vw] 2xl:px-[30vw] bg-white">
                <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
                  Maquettes Offertes : Une Vision Claire Avant Développement
                </DrawerTitle>
                <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">
                <p className="text-lg text-gray-700 mb-6">
                  Chez <span className="font-semibold text-[#3586FF]">On The Board</span>, nous savons à quel point il est crucial pour nos clients de 
                  <span className="font-semibold"> visualiser leur projet avant son développement</span>. C'est pourquoi nous offrons systématiquement 
                  une <span className="font-semibold">maquette détaillée</span> de leur site web ou application, réalisée soit sur 
                  <span className="font-semibold"> Figma</span>, soit sous forme d'une <span className="font-semibold">page web interactive</span>. 
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Nos clients peuvent ainsi explorer chaque détail de leur futur site avant même que la première ligne de code ne soit écrite. 
                  Ils ont l'opportunité de <span className="font-semibold">valider le design, l'ergonomie et les fonctionnalités</span> tout en 
                  apportant d'éventuels ajustements en amont, garantissant ainsi un produit final qui correspond 
                  <span className="font-semibold"> exactement à leurs attentes</span>.
                </p>

                <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Pourquoi Offrons-Nous les Maquettes ?</h2>
                <p className="text-gray-700 mb-6">
                  Contrairement à d'autres agences qui facturent la conception des maquettes, nous avons choisi de l'offrir gratuitement. 
                  Nous voulons que nos clients sachent <span className="font-semibold">précisément ce pour quoi ils vont payer</span>, avant 
                  d'engager tout budget de développement. Cette transparence permet d'éviter les incompréhensions et de garantir un 
                  résultat final optimal.
                </p>

                <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Une Maquette Dynamique et Fidèle au Produit Final</h2>
                <p className="text-gray-700 mb-6">
                  Nous utilisons <span className="font-semibold">Figma</span> pour créer des maquettes interactives et détaillées. Pour aller encore plus loin, 
                  nous pouvons proposer une <span className="font-semibold">version web interactive</span> permettant au client de naviguer 
                  dans une pré-version de son site. 
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li><span className="font-semibold">L'apparence générale :</span> couleurs, typographie, mise en page.</li>
                  <li><span className="font-semibold">L'expérience utilisateur (UX) :</span> navigation intuitive et ergonomie.</li>
                  <li><span className="font-semibold">Les fonctionnalités essentielles :</span> CTA, formulaires, animations.</li>
                </ul>

                <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Un Processus Clair et Sécurisant</h2>
                <p className="text-gray-700 mb-6">
                  Notre approche repose sur un processus simple et efficace :
                </p>
                <ol className="list-decimal list-inside text-gray-700 mb-6">
                  <li><span className="font-semibold">Compréhension des besoins :</span> définition des objectifs du projet.</li>
                  <li><span className="font-semibold">Création de la maquette :</span> réalisation d'un premier jet visuel.</li>
                  <li><span className="font-semibold">Validation et ajustements :</span> modifications avant validation finale.</li>
                  <li><span className="font-semibold">Lancement du développement :</span> début du projet en toute sérénité.</li>
                </ol>
                </DrawerDescription>
              </DrawerContent>
            </Drawer>
            <Drawer>
              <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
                <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft2 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
                 - Design Sur-Mesure
                </p>
              </DrawerTrigger>
              <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-24 px-[20vw] 2xl:px-[30vw] bg-white">
              <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
                Offrez à votre entreprise une vitrine d'exception grace a notre expertise !
              </DrawerTitle>
              <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">

                <p className="text-lg text-gray-700 mb-8">
                  Chez <span className="font-semibold text-[#3586FF] text-[#3586FF]">On The Board</span>, nous sommes fiers de vous offrir bien plus qu'un simple site internet : 
                  nous concevons une véritable vitrine digitale qui sublime l'img de votre entreprise. Notre expertise en création de sites vitrines repose 
                  sur une approche personnalisée et innovante, où chaque détail compte pour refléter au mieux votre identité de marque.
                </p>
                
                <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Un design sur mesure, reflet de votre identité</h2>
                <p className="text-gray-700 mb-6">
                  Nous créons des designs sur mesure, pensés pour être en parfaite adéquation avec l'img de votre entreprise. Que vous souhaitiez 
                  un style sobre et élégant, moderne et audacieux, ou riche et complexe, nous adaptons chaque élément graphique à vos besoins et à 
                  votre vision. Votre site vitrine devient ainsi une extension digitale harmonieuse et cohérente de votre marque.
                </p>
                
                <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Une expérience visuelle immersive et engageante</h2>
                <p className="text-gray-700 mb-6">
                  Nous utilisons les dernières technologies pour donner vie à votre site, en intégrant des animations captivantes, des illustrations 3D dynamiques 
                  et des interactions fluides. Ces éléments visuels ne sont pas seulement esthétiques : ils renforcent l'engagement de vos visiteurs et les 
                  incitent à explorer davantage votre univers.
                </p>
                
                <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Simplicité ou complexité, selon vos besoins</h2>
                <p className="text-gray-700 mb-6">
                  Chaque entreprise est unique, tout comme les besoins en termes de design. Nous proposons une large gamme de styles, allant des designs 
                  minimalistes et épurés, parfaits pour une communication claire et concise, aux designs complexes et riches en détails, idéaux pour des 
                  expériences plus immersives. Peu importe votre choix, nous garantissons un résultat professionnel et impactant.
                </p>

                <p className="text-lg font-medium text-gray-800">
                  Avec <span className="font-semibold text-[#3586FF] text-[#3586FF]">On The Board</span>, faites le choix d'un site vitrine qui non seulement met en lumière votre 
                  établissement sous son plus beau jour, mais devient aussi un véritable outil pour captiver vos visiteurs et marquer les esprits. 
                  Transformez votre présence en ligne dès aujourd'hui avec notre équipe d'experts passionnés !
                </p>
              </DrawerDescription>
              </DrawerContent>
            </Drawer>
            <Drawer>
              <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
                <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft3 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
                 - Adaptation Mobile
                </p>
              </DrawerTrigger>
              <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar pb-8 px-[20vw] 2xl:px-[30vw] bg-white">
                <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
                  Un site vitrine responsive, adapté à tous les appareils
                </DrawerTitle>
                <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">
                  <p className="text-lg text-gray-700 mb-8">
                    Chez <span className="font-semibold text-[#3586FF]">On The Board</span>, nous comprenons l'importance d'une expérience utilisateur fluide et agréable, 
                    quel que soit l'appareil utilisé par vos visiteurs. C'est pourquoi chaque site vitrine que nous créons est conçu pour s'adapter parfaitement 
                    à tous les écrans, des smartphones aux ordinateurs de bureau, en passant par les tablettes.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Un design fluide et adaptable</h2>
                  <p className="text-gray-700 mb-6">
                    Nous utilisons les principes du responsive design pour garantir que votre site s'affiche de manière optimale sur tous les appareils. 
                    Les mises en page, les images et les contenus s'ajustent automatiquement à la taille de l'écran pour offrir une navigation claire et intuitive.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Une approche mobile-first selon votre public</h2>
                  <p className="text-gray-700 mb-6">
                    Si votre site est principalement destiné à un public mobile, nous adoptons une approche mobile-first, en développant et en optimisant chaque 
                    élément prioritairement pour les écrans de petite taille. En revanche, si vos utilisateurs se connectent majoritairement depuis des ordinateurs, 
                    nous adaptons le design en desktop-first tout en assurant une expérience fluide sur mobile.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Une compatibilité complète avec tous les navigateurs</h2>
                  <p className="text-gray-700 mb-6">
                    Votre site sera non seulement adapté aux différentes tailles d'écran, mais également testé pour garantir une compatibilité parfaite avec 
                    les navigateurs les plus populaires (Chrome, Safari, Firefox, Edge, etc.).
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Optimisation des performances sur mobile</h2>
                  <p className="text-gray-700 mb-6">
                    Avec une majorité des utilisateurs naviguant depuis un smartphone, nous optimisons chaque site pour une vitesse de chargement rapide et 
                    des interactions fluides sur mobile. Cela inclut des images optimisées, des polices légères et une navigation tactile intuitive.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Une expérience utilisateur sans compromis</h2>
                  <p className="text-gray-700 mb-6">
                    En adaptant chaque élément visuel et fonctionnel à l'appareil utilisé, nous assurons que vos visiteurs bénéficient d'une expérience utilisateur 
                    exceptionnelle, quel que soit leur support.
                  </p>

                  <p className="text-lg font-medium text-gray-800">
                    Avec <span className="font-semibold text-[#3586FF]">On The Board</span>, profitez d'un site vitrine moderne, performant et parfaitement responsive, prêt à captiver 
                    vos clients, où qu'ils soient !
                  </p>
                </DrawerDescription>
              </DrawerContent>
            </Drawer>
            <Drawer>
              <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
                <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft4 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
                 - Référencement
                </p>
              </DrawerTrigger>
              <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-24 px-[20vw] 2xl:px-[30vw] bg-white">
                <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
                  Boostez votre visibilité avec un site vitrine optimisé pour le référencement
                </DrawerTitle>

                <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">

                  <p className="text-lg text-gray-700 mb-8">
                    Chez <span className="font-semibold text-[#3586FF]">On The Board</span>, nous comprenons que la création d'un site vitrine ne s'arrête pas à son apparence. 
                    Pour maximiser votre impact en ligne, nous mettons un point d'honneur à optimiser chaque aspect de votre site pour les moteurs de recherche, 
                    notamment Google.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Une structure pensée pour le SEO</h2>
                  <p className="text-gray-700 mb-6">
                    Dès la conception, nous structurons votre site avec une hiérarchie claire et des balises bien définies, garantissant une indexation rapide et 
                    efficace par les moteurs de recherche. Votre contenu est organisé de manière à être compréhensible tant pour les visiteurs que pour les algorithmes.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Des mots-clés stratégiques</h2>
                  <p className="text-gray-700 mb-6">
                    Nous intégrons des mots-clés pertinents et adaptés à votre activité pour que votre site apparaisse dans les premiers résultats des recherches 
                    de vos clients potentiels. Chaque page est optimisée pour cibler les requêtes qui comptent le plus pour votre entreprise.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Vitesse et performance : des critères cruciaux</h2>
                  <p className="text-gray-700 mb-6">
                    Un site rapide, c'est un site mieux classé ! Nous veillons à réduire les temps de chargement en optimisant les images, le code et les ressources, 
                    offrant ainsi une expérience fluide à vos visiteurs tout en répondant aux exigences des moteurs de recherche.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Un contenu optimisé et engageant</h2>
                  <p className="text-gray-700 mb-6">
                    Avec des textes clairs, informatifs et engageants, nous créons une expérience utilisateur de qualité qui améliore votre taux de conversion 
                    tout en renforçant votre positionnement SEO.
                  </p>

                  <p className="text-lg font-medium text-gray-800">
                    Avec <span className="font-semibold text-[#3586FF]">On The Board</span>, transformez votre site vitrine en un véritable levier de visibilité et attirez 
                    davantage de clients grâce à un référencement naturel performant et durable.
                  </p>
                </DrawerDescription>
              </DrawerContent>
            </Drawer>
            <Drawer>
              <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
                <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft5 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
                 - Publicités
                </p>
              </DrawerTrigger>
              <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-24 px-[20vw] 2xl:px-[30vw] bg-white">
                <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
                  Boostez la visibilité de votre site vitrine grâce à une stratégie Ads performante
                </DrawerTitle>
                <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">

                  <p className="text-lg text-gray-700 mb-8">
                    Chez <span className="font-semibold text-[#3586FF]">On The Board</span>, nous savons que la réussite d'un site vitrine repose sur sa capacité à atteindre 
                    rapidement les bonnes audiences. C'est pourquoi nous proposons des campagnes publicitaires en ligne, conçues sur mesure pour attirer un trafic 
                    qualifié et augmenter votre retour sur investissement.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Des campagnes ciblées et efficaces</h2>
                  <p className="text-gray-700 mb-6">
                    Nous analysons vos besoins, votre secteur d'activité et votre public cible pour élaborer des campagnes Google Ads, Facebook Ads ou d'autres 
                    plateformes adaptées. Avec des annonces personnalisées et un ciblage précis, nous vous aidons à attirer des visiteurs réellement intéressés 
                    par vos produits ou services.
                  </p>

                  <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Optimisation pour maximiser votre ROI</h2>
                  <p className="text-gray-700 mb-6">
                    Chaque euro investi compte ! Nos experts optimisent en continu vos campagnes pour maximiser vos performances. Cela inclut le choix des bons 
                    mots-clés, des enchères ajustées en temps réel, et la création de visuels ou textes publicitaires engageants.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Suivi et analyse des performances</h2>
                  <p className="text-gray-700 mb-6">
                    Grâce à des outils d'analyse avancés, nous suivons l'impact de vos publicités en temps réel. Vous recevez des rapports clairs et détaillés sur 
                    les résultats obtenus : clics, impressions, conversions, et plus encore.
                  </p>
                  
                  <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Une approche complète et intégrée</h2>
                  <p className="text-gray-700 mb-6">
                    En combinant publicité en ligne et une conception optimisée de votre site vitrine, nous garantissons que chaque visiteur sera accueilli sur 
                    une plateforme moderne, rapide et adaptée pour convertir.
                  </p>

                  <p className="text-lg font-medium text-gray-800">
                    Avec <span className="font-semibold text-[#3586FF]">On The Board</span>, transformez votre site vitrine en un véritable aimant à clients grâce à une stratégie 
                    Ads personnalisée et performante.
                  </p>
                </DrawerDescription>
              </DrawerContent>
            </Drawer>  
  </div>

 const TabApp = <>
  </>;

 const TabIA = <>
  </>;

  const products = [
    {
      id : 0,
      name : "Site Vitrine",
      price: "799",
      tableau: TabVitrine,
      video: "empty"
      
    },
    {
      id : 1,
      name : "Application",
      price: "1499",
      tableau: TabApp,
      video: "empty"
      
    },
    {
      id : 2,
      name : "IA",
      price: "799",
      tableau: TabIA,
      video: "empty"
      
    }
  ]

  const vitrines = [
    {
      name: "Zidi Pizza",
      url: "https://www.zidi-pizza.fr",
      type: "Vitrine",
      logo: "",
      description: "",
      comp: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fzidi-comp.png?alt=media&token=017224cf-ba53-4200-89f2-dbc88a9ea422",
      ipad: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fzidi-ipad.png?alt=media&token=b7516ce0-629b-4fa4-91b2-a2f1583f69df",
      phone: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fzidi-phone.png?alt=media&token=629e89c8-5c16-4fe0-807d-af841eac5f0e"
    },
    {
      name: "HJ Services Autos",
      url: "",
      type: "App",
      logo: "",
      description: "",
      comp: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fhj-comp.png?alt=media&token=db6408d2-9e61-4361-b712-ac36bc20dd1b",
      ipad: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fhj-ipad.png?alt=media&token=7291cd47-fba9-4341-ac10-ff82bbb88d28",
      phone: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fhj-phone.png?alt=media&token=05f5e6b4-cd0d-462c-bba7-1cc1528162d9"
    },
    {
      name: "Vice Cars",
      type: "Vitrine",
      url: "https://vicecars.fr",
      logo: "",
      description: "",
      comp: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fvc-comp.png?alt=media&token=2a3ff9ea-f6bc-4f2e-9f42-eef98e2fe000",
      ipad: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fvc-ipad.png?alt=media&token=7514dd0f-f032-4e15-b206-3b48c77f3b12",
      phone: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fvc-phone.png?alt=media&token=d5669ddf-7650-4a98-b7b6-fd8630272334"
    },
    {
      name: "Stevan Stakic",
      type: "Vitrine",
      url: "https://www.stevan-stakic.fr",
      logo: "",
      description: "",
      comp: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fss-comp.png?alt=media&token=395c1a64-ea7b-498e-af24-55493e397d0a",
      ipad: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fss-ipad.png?alt=media&token=aff6cb14-929c-4fde-85ea-253441a44412",
      phone: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fss-phone.png?alt=media&token=2c10cdf5-dd7d-4cdf-8a6c-d0b1c2e72a6d"
    },
    {
      name: "Arka",
      type: "Vitrine",
      url: "https://www.arka-auto.fr",
      logo: "",
      description: "",
      comp: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Farka-comp.png?alt=media&token=683fd189-d764-418e-bbd3-b47a1e474fd4",
      ipad: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Farka-ipad.png?alt=media&token=14ba230a-c082-4e8b-bdca-c6367d6c4e91",
      phone: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Farka-phone.png?alt=media&token=07a26111-493d-433f-a897-889710b7df05"
    },
    {
      name: "Patisserie Artisanale",
      type: "App",
      logo: "",
      description: "",
      comp: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fpatissier-comp.png?alt=media&token=733829a6-5022-49dc-9818-222ac28ddf1c",
      ipad: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fpatissier-ipad.png?alt=media&token=83b3a280-c761-44b0-a742-becf64996403",
      phone: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fpatissier-phone.png?alt=media&token=811d9014-b647-4b18-859e-964174388077"
    },
    {
      name: "Drive Phone",
      type: "App",
      url: "https://www.drivephone.fr",
      logo: "",
      description: "",
      comp: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fdp-comp.png?alt=media&token=d5e48d59-ef27-4b88-8bb0-1de5943d7537",
      ipad: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fdp-ipad.png?alt=media&token=80f0d190-11a9-43b8-b828-0f74337450f5",
      phone: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fdp-phone.png?alt=media&token=99dfcd94-13d8-4d75-90cf-620dd9c604e4"
    },
  ]
 
  const [loaded, setLoaded] = useState(false)
  async function Load () {
    setLoaded(true)
  }

  useEffect(() => {
    setTimeout(Load, 3000)
  })

  const animationURL = "https://lottie.host/353ded5b-a00c-40d7-8c32-2989e88be4f5/KxbT5j9Gci.json";

  return (
    <div className='bg-[#f7f7f7]' id="main">

      {/* Main */}
      
      <main className={`${ loaded ? "scroller no-scrollbar min-h-[100dvh] bg-[#F4F4F4] opacity-100 bg-cover -z-1 overflow-hidden transition duration-500" : "hidden"}`}>
        
          {/* Overlay */}
          <a href="/">
            <img src={logo} alt="logo" className={`${useIsVisible(targetLanding) ? "hidden transform animate-disappear opacity-0 translate-y-[-200px]" : "absolute top-4 md:left-4 left-0 right-0 mx-auto md:mx-0 transform animate-slidelogo w-12 z-30 opacity-0"}`}/>
          </a>
          {/* Nav */}
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

          {/* Section Landing */}
          
          <section className={`scroller-section w-screen h-[100dvh] lg:h-[100vh] relative mb-0.5 ${useIsVisible(targetLanding) ? "landing-bg transform animate-appear500 opacity-0" : "transform animate-disappear opacity-1"} `} ref={targetLanding}>
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
          </section>

          {/* Section Produits */}

          <section className="scroller-section w-screen h-[100dvh] lg:h-[100vh] relative flex flex-row mb-0.5" id="products" ref={targetProducts}>
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
                  : <></>
              }

              <div className={` z-0 ${useIsVisible(targetProducts) ?` flex flex-row px-7 ${productId != 2 ? "mt-24" : "mt-0" }  md:mt-28 md:px-28 justify-between w-full text-[#3586FF] text-2xl font-semibold  transform animate-slideout500_0px opacity-0`: "opacity-0 -translate-X-full"}`}>
                <div className="">
                  <Dialog>
                    <DialogTrigger className="hidden md:block center btn border-none rounded-md group">
                        <svg width="280px" height="60px" viewBox="0 0 280 60" className="hidden md:block border-0">
                          <polyline points="279,1 279,59 1,59 1,1 279,1" className="bg-line" />
                          <polyline points="279,1 279,59 1,59 1,1 279,1" className="hl-line" />
                        </svg>
                        <span className={`text-[#3586FF] text-sm lg:text-xl 2xl:text-3xl transition duration-500 group-hover:hidden`}>A partir de <span className={`${productNameAnim} `}>{products.map(p => p.id == productId ? p.price : null)}</span>€</span>
                        <span className='text-white md:text-[#3586FF] text-base 2xl:text-2xl transition duration-500 group-hover:block hidden'>Demander un devis</span>
                    </DialogTrigger>
                    <DialogTrigger className="block md:hidden bg-[#3586FF] border border-2 border-[#3586FF] px-2 pb-1 w-fit group md:btn border-none rounded-md">
                        <svg width="280px" height="60px" viewBox="0 0 280 60" className="hidden md:block border-0">
                          <polyline points="279,1 279,59 1,59 1,1 279,1" className="bg-line" />
                          <polyline points="279,1 279,59 1,59 1,1 279,1" className="hl-line" />
                        </svg>
                        <span className={`text-white md:text-[#3586FF] text-base 2xl:text-3xl transition duration-500 group-hover:hidden`}>A partir de <span className={`${productNameAnim} `}>{products.map(p => p.id == productId ? p.price : null)}</span>€</span>
                        <span className='text-white md:text-[#3586FF] text-base 2xl:text-2xl transition duration-500 group-hover:block hidden'>Demander un devis</span>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className='text-[#3586FF]'>Parlez-nous de votre projet</DialogTitle>
                        <DialogDescription>
                          Merci de renseigner les informations relatives à votre projet, <br /> pour faciliter la prise en charge de votre demande.
                        </DialogDescription>
                      </DialogHeader>
                        <ContactForm/>
                    </DialogContent>
                  </Dialog>
                  
                </div>
                <a href={`${productId == 0 ? "/sites-vitrine" : productId == 1 ? "/applications" : productId == 2 ? "/intelligence-artificielle" : "/"}`} className='text-base flex lg:text-xl pt-2 md:pt-3 p-3 hover:underline transition duration-300'>En Savoir plus</a>
              </div>     
            </div>
            
            <div className={`${useIsVisible(targetProducts) ? "hidden md:flex transform animate-slidein300 opacity-0 absolute shadow-xl border-left -right-[10vw] top-1.5 w-[50vw] h-[100vh] flex transform skew-y-12 -rotate-12 bg-neutral-200 " : "hidden opacity-0 translate-y-[100px]"}`}>
                <img src={clipboard} alt="clipboard" className="transform -skew-y-12 rotate-12 w-[45vw] mx-auto my-auto pr-[5vw] self-center absolute"/>
                <div key={"clipboard"} className="transform -skew-y-12 rotate-12 relative w-[45vw] ml-[12vw] mt-[25vh] 2xl:mt-[22vh] content-center z-10 sroller text-[#3586FF] text-xl mx-32 pt-8 2xl:pt-24 h-fit ml-40 overflow-scroll no-scrollbar max-h-[70vh] space-y-6">
                {products.map(p => p.id == productId ? p.tableau : <></>)}
              </div>
            </div>
          </section>

          {/* Section  Details Competences*/}

          <section className="scroller-section h-[100dvh] lg:h-[100vh] px-4 lg:px-24 w-full flex flex-col relative mb-0.5" id="details" ref={targetDetails}>
            <div className="w-full h-[68dvh] lg:h-[68vh] mt-[5dvh] lg:mt-0 flex flex-col flex-col-reverse lg:flex-row justify-between relative">
              <div className="w-full lg:w-[40vw] grid grid-cols-4 2xl:gap-6 items-center self-center px-8 lg:px-0">
                <div className={`${useIsVisible(targetDetails) ? "group flex transform animate-slidedown1 opacity-0 w-20 h-20 lg:w-32  lg:h-32 2xl:w-52 2xl:h-52 rounded-lg mx-auto relative card transition ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
                  <img src={seoIcon} alt="-icon" className="p-5 lg:p-6 z-10 2xl:w-5/6 mx-auto self-center group-hover:blur-sm group-hover:opacity-25 transition duration-600"/>
                  <h3 className="hidden group-hover:block transform animate-appearText opacity-0 absolute top-0 bottom-0 left-0 right-0 w-full text-clip mx-auto m-auto z-0 text-center self-center text-[#46A6F7] font-semibold 2xl:text-2xl italic">Référen<span className="lg:hidden"><br />-</span>cement</h3>
                </div>
                <div className={`${useIsVisible(targetDetails) ? "group flex transform animate-slidedown2 opacity-0 w-20 h-20 lg:w-32  lg:h-32 2xl:w-52 2xl:h-52 rounded-lg mx-auto relative overflow-hidden card transition ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
                  <img src={magaeIcon} alt="-icon" className="p-5 lg:p-6 z-10 absolute top-0 bottom-0 2xl:w-5/6 mx-auto left-0 right-0 self-center group-hover:blur-sm group-hover:opacity-25 transition duration-600 "/>
                  <h3 className="hidden group-hover:block transform animate-appearText opacity-0 absolute top-0 bottom-0 left-0 right-0 w-full text-clip mx-auto m-auto z-0 text-center self-center text-[#46A6F7] font-semibold 2xl:text-2xl italic">Logiciel <br /> de Gestion</h3>
                </div>
                <div className={`${useIsVisible(targetDetails) ? "group flex transform animate-slidedown3 opacity-0 w-20 h-20 lg:w-32  lg:h-32 2xl:w-52 2xl:h-52 rounded-lg mx-auto card transition ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
                  <img src={emailIcon} alt="-icon" className="p-5 lg:p-6 z-10 2xl:w-5/6 mx-auto self-center group-hover:blur-sm group-hover:opacity-25 transition duration-600 "/>
                  <h3 className="hidden group-hover:block transform animate-appearText opacity-0 absolute top-0 bottom-0 left-0 right-0 w-full text-clip mx-auto m-auto z-0 text-center self-center text-[#46A6F7] font-semibold 2xl:text-2xl italic">Relation Client</h3>
                </div>
                <div className={`${useIsVisible(targetDetails) ? "group flex transform animate-slidedown4 opacity-0 w-20 h-20 lg:w-32  lg:h-32 2xl:w-52 2xl:h-52 rounded-lg mx-auto card transition ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
                  <img src={ecommerceIcon} alt="-icon" className="p-5 lg:p-6 z-10 2xl:w-5/6 mx-auto self-center group-hover:blur-sm group-hover:opacity-25 transition duration-600 "/>
                  <h3 className="hidden group-hover:block transform animate-appearText opacity-0 absolute top-0 bottom-0 left-0 right-0 w-full text-clip mx-auto m-auto z-0 text-center self-center text-[#46A6F7] font-semibold 2xl:text-2xl italic">E-Commerce</h3>
                </div> 
                <div className={`${useIsVisible(targetDetails) ? "group hover:z-50 flex transform animate-slideup1 opacity-0 w-20 h-20 lg:w-32  lg:h-32 2xl:w-52 2xl:h-52 rounded-lg mx-auto card transition ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
                  <img src={creatiiveIcon} alt="-icon" className="p-5 lg:p-6 z-10 2xl:w-5/6 mx-auto self-center group-hover:blur-sm group-hover:opacity-25 transition duration-600 "/>
                  <h3 className="hidden group-hover:block transform animate-appearText opacity-0 absolute top-0 bottom-0 left-0 right-0 w-full text-clip mx-auto m-auto z-0 text-center self-center text-[#46A6F7] font-semibold 2xl:text-2xl italic">Développ<span className="lg:hidden"><br />-</span>ement Créatif</h3>
                </div>
                <div className={`${useIsVisible(targetDetails) ? "group flex transform animate-slideup2 opacity-0 w-20 h-20 lg:w-32  lg:h-32 2xl:w-52 2xl:h-52 rounded-lg mx-auto card transition ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
                  <img src={blockchainIcon} alt="-icon" className="p-5 lg:p-6 z-10 2xl:w-5/6 mx-auto self-center group-hover:blur-sm group-hover:opacity-25 transition duration-600 "/>
                  <h3 className="hidden group-hover:block transform animate-appearText opacity-0 absolute top-0 bottom-0 left-0 right-0 w-full text-clip mx-auto m-auto z-0 text-center self-center text-[#46A6F7] font-semibold 2xl:text-2xl italic">Smart Contract</h3>
                </div>
                <div className={`${useIsVisible(targetDetails) ? "group flex transform animate-slideup3 opacity-0 w-20 h-20 lg:w-32  lg:h-32 2xl:w-52 2xl:h-52 rounded-lg mx-auto card transition ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
                  <img src={cyberrsecIcon} alt="-icon" className="p-5 lg:p-6 z-10 2xl:w-5/6 mx-auto self-center group-hover:blur-sm group-hover:opacity-25 transition duration-600 "/>
                  <h3 className="hidden group-hover:block transform animate-appearText opacity-0 absolute top-0 bottom-0 left-0 right-0 w-full text-clip mx-auto m-auto z-0 text-center self-center text-[#46A6F7] font-semibold 2xl:text-2xl italic">Cyber Sécurité</h3>
                </div>
                
                <div className={`${useIsVisible(targetDetails) ? "group flex transform animate-slideup4 opacity-0 w-20 h-20 lg:w-32  lg:h-32 2xl:w-52 2xl:h-52 rounded-lg mx-auto card transition ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
                  <img src={robotIcon} alt="-icon" className="p-5 lg:p-6 z-10 2xl:w-5/6 mx-auto self-center group-hover:blur-sm group-hover:opacity-25 transition duration-600"/>
                  <h3 className="hidden group-hover:block transform animate-appearText opacity-0 absolute top-0 bottom-0 left-0 right-0 w-full text-clip mx-auto m-auto z-0 text-center self-center text-[#46A6F7] font-semibold 2xl:text-2xl italic">Intégarion d'IA</h3>
                </div>
              </div>
              <div className={`${useIsVisible(targetDetails) ? "transform animate-slideright300 opacity-0 flex flex-col lg:flex-col w-full lg:w-[50vw] text-white relative pt-16 h-full": "hidden opacity-0 translate-y-[100px]"}`}>
                <div className="lg:ml-16 h-1/3 content-center">
                    <div className="lg:w-full pt-2 md:pt-0">
                        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-[#3586FF] text-center">Le process de création</h2>
                        <p className="pt-2 lg:pt-5 leading-5 text-[#3586FF] text-xs lg:text-base 2xl:text-xl text-center">Découvrez les différentes étapes pour créer votre application, <br /> de l'idée à la prise en main...</p>
                    </div>
                </div>
                <div className="h-2/3 relative ">
                  <div className="absolute hidden lg:flex flex-col h-[50vw] w-[20vw] right-32 -top-56 2xl:-top-72 overflow-hidden overflow-y-scroll no-scrollbar -rotate-90">
                      <div className="inline-block rotate-90 mt-12 2xl:mt-32">
                          <div className="bg-[#3586FF] relative  w-48 h-48 2xl:w-64 2xl:h-64 rounded-[5px]">
                              <p className="absolute text-[5rem] leading-5 font-bold mt-10 mr-5 text-[#fff] z-[0]">1</p>
                              <h2 className="text-xl 2xl:text-2xl font-bold ml-7 relative z-[1] px-5 pt-5">Screening telephonique</h2>
                              <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5">20 min</p>
                              <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 leading-5 px-5">1er échange pour comprendre vos besoins.</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[5.5rem] 2xl:ml-32 z-[2] "><div className="bg-[#3586FF] w-[58rem] 2xl:w-[75rem] h-[0.2rem] rounded-[100px] absolute mt-2 mr-12 z-[2]"></div></div>
                      </div>
                      <div className="inline-block rotate-90">
                          <div className="bg-[#3586FF] relative w-48 h-48 2xl:w-64 2xl:h-64  rounded-[5px]">
                              <p className="absolute text-[5rem] leading-5 font-bold mt-10 mr-5 text-[#fff] z-[0]">2</p>
                              <h2 className="text-xl 2xl:text-2xl font-bold ml-7 relative z-[1] px-5 pt-5">Maquette <br />& Devis</h2>
                              {/* <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5">90 min</p> */}
                              <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5 leading-5">Présentation de ce que nous sommes en mesure de vous proposer.</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[5.5rem] 2xl:ml-32 z-[2] "></div>
                      </div>
                      <div className="inline-block rotate-90">
                          <div className="bg-[#3586FF] relative w-48 h-48 2xl:w-64 2xl:h-64  rounded-[5px]">
                          <p className="absolute text-[5rem] leading-5 font-bold mt-10 mr-5 text-[#fff] z-[0]">3</p>
                              <h2 className="text-xl 2xl:text-2xl font-bold ml-7 relative z-[1] px-5 pt-5">Création du MVP</h2>
                              {/* <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5 relative z-[1]">2h à 3h</p> */}
                              <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5 leading-5">Développement de la version de base de votre application, qui pourra être améliorée par la suite...</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[5.5rem] 2xl:ml-32 z-[2] "></div>
                      </div>
                      <div className="inline-block rotate-90">
                          <div className="bg-[#3586FF] relative w-48 h-48 2xl:w-64 2xl:h-64  rounded-[5px]">
                          <p className="absolute text-[5rem] leading-5 font-bold mt-10 mr-5 text-[#fff] z-[0]">4</p>
                              <h2 className="text-xl 2xl:text-2xl font-bold ml-7 relative z-[1] px-5 pt-5">Entretien Final</h2>
                              <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5 relative z-[1]">1h</p>
                              <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5 leading-5">Rencontre avec un des fondateurs et Elodie notre Head of People.</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[5.5rem] 2xl:ml-32 z-[2] "></div>
                      </div>
                      <div className="inline-block rotate-90 mb-80">
                          <div className="bg-[#3586FF] relative w-48 h-48 2xl:w-64 2xl:h-64  rounded-[5px]">
                          <p className="absolute text-[5rem] leading-5 font-bold mr-5 mt-10 text-[#fff] z-[0]"></p>
                              <h2 className="text-xl 2xl:text-2xl font-bold ml-7 relative z-[1] px-5 pt-5">Welcome Aboard!</h2>
                              <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5">On ne te fait pas attendre !</p>
                              <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5 leading-5">Ta proposition est déjà prête, il ne te reste plus qu'à l'accepter!</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[5.5rem] 2xl:ml-32 z-[2] "></div>
                      </div>
                          
                  </div>
                  <div className="lg:hidden flex flex-row h-fit gap-x-6 w-full overflow-y-hidden overflow-x-scroll no-scrollbar my-6 mx-8">
                      <div className="inline-block">
                          <div className="bg-[#3586FF] relative  w-32 h-32 rounded-[5px]">
                              <p className="absolute text-[3.5rem] leading-5 font-bold -ml-1 mt-4 mr-2 text-[#fff] z-[0]">1</p>
                              <h2 className="text-base font-bold ml-5 relative leading-1 z-[1] px-0.5 pt-0.5">Screening telephonique</h2>
                              <p className="text-xs 2xl:text-lg 2xl:font-semibold pt-0.5 px-1">20 min</p>
                              <p className="text-xs 2xl:text-lg 2xl:font-semibold pt-0.5 leading-2 px-1">1er échange pour comprendre vos besoins.</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[3.5rem] 2xl:ml-32 z-[2] "><div className="bg-[#3586FF] w-[38rem] 2xl:w-[75rem] h-[0.2rem] rounded-[100px] absolute mt-2 mr-12 z-[2]"></div></div>
                      </div>
                      <div className="inline-block">
                          <div className="bg-[#3586FF] relative w-32 h-32 rounded-[5px]">
                              <p className="absolute text-[3.5rem] leading-5 font-bold -ml-1 mt-4 mr-2 text-[#fff] z-[0]">2</p>
                              <h2 className="text-base font-bold ml-7 relative leading-1 z-[1] px-0.5 pt-0.5">Maquette <br />& Devis</h2>
                              {/* <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5">90 min</p> */}
                              <p className="text-xs 2xl:text-lg 2xl:font-semibold pt-0.5 leading-2 px-1">Présentation de ce que nous sommes en mesure de vous proposer.</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[3.5rem] 2xl:ml-32 z-[2] "></div>
                      </div>
                      <div className="inline-block">
                          <div className="bg-[#3586FF] relative w-32 h-32 rounded-[5px]">
                          <p className="absolute text-[3.5rem] leading-5 font-bold -ml-1 mt-4 mr-2 text-[#fff] z-[0]">3</p>
                              <h2 className="text-base font-bold ml-7 relative leading-1 z-[1] px-0.5 pt-0.5">Création <br /> du MVP</h2>
                              {/* <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5 relative z-[1]">2h à 3h</p> */}
                              <p className="text-xs 2xl:text-lg 2xl:font-semibold pt-0.5 leading-2 px-1">Développement de la version de base de votre application, qui pourra être améliorée <span className="hidden">par la suite...</span></p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[3.5rem] 2xl:ml-32 z-[2] "></div>
                      </div>
                      <div className="inline-block">
                          <div className="bg-[#3586FF] relative w-32 h-32 rounded-[5px]">
                          <p className="absolute text-[3.5rem] leading-5 font-bold -ml-1 mt-4 mr-2 text-[#fff] z-[0]">4</p>
                              <h2 className="text-base font-bold ml-7 relative leading-1 z-[1] px-0.5 pt-0.5">Entretien Final</h2>
                              <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5 relative z-[1]">1h</p>
                              <p className="text-xs 2xl:text-lg 2xl:font-semibold pt-0.5 leading-2 px-1">Rencontre avec un des fondateurs et Elodie notre Head of People.</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[3.5rem] 2xl:ml-32 z-[2] "></div>
                      </div>
                      <div className="inline-block">
                          <div className="bg-[#3586FF] relative w-32 h-32 rounded-[5px]">
                          <p className="absolute text-[5rem] leading-5 font-bold mr-5 mt-10 text-[#fff] z-[0]"></p>
                              <h2 className="text-base font-bold ml-7 relative leading-1 z-[1] px-0.5 pt-0.5">Welcome Aboard!</h2>
                              <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5">On ne te fait pas attendre !</p>
                              <p className="text-xs 2xl:text-lg 2xl:font-semibold pt-0.5 leading-2 px-1">Ta proposition est déjà prête, il ne te reste plus qu'à l'accepter!</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[3.5rem] 2xl:ml-32 z-[2] "></div>
                      </div>
                          
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className={`${useIsVisible(targetDetails) ? "transform animate-slideout1500 opacity-0 text-[#3586FF] text-center text-xl lg:text-2xl 2xl:text-3xl absolute bottom-[12vh] lg:bottom-[22vh] 2xl:bottom-72 left-0 right-0 font-semibold": "hidden opacity-0 translate-y-[100px]"}`}>Ils nous font confiance</h3>
              <div className={`${useIsVisible(targetDetails) ? "transform animate-slideout1700 opacity-0 w-full 2xl:h-64 h-[10vh] lg:h-[20vh] bg-neutral-200 absolute bottom-0 left-0": "hidden opacity-0 translate-y-[100px]"}`}>

              </div>
            </div>
          </section>

          {/* Section Avis Clients/Associes */}

          <section className="scroller-section h-[100dvh] lg:h-[100vh] w-screen flex flex-row content-center relative z-10  mb-0.5" id="showcases" ref={targetClients}>
            <div className={`${useIsVisible(targetClients) ? "hidden lg:flex transform animate-slideleftskew  opacity-0 absolute shadow-xl border-left -left-[10vw] -top-3 w-[50vw] h-[100vh] transform skew-y-12 -rotate-12 bg-neutral-200 overflow-hidden flex flex-col" : "hidden opacity-0 translate-y-[100px]"}`}>
              <img src={DP_logo} alt="drive phone" className="transform -skew-y-12 rotate-12 self-center ml-64 2xl:ml-80 mt-20 2xl:mt-40 w-32 absolute"/>
              <div className="flex w-full items-center 2xl:pl-24 2xl:mt-20">
                <a href="https://www.drivephone.fr"  className="flex flex-row self-center ml-56 2xl:ml-64 italic mt-56  transform -skew-y-12 rotate-12 px-2 rounded-full w-fit bg-white">
                  <div className=" text-xl p-2 text-[#3586FF] pr-[10vw] 2xl:pr-64">https://www.drivephone.fr</div>
                  <img src={searchIcon} alt="search_icon" className="w-6 h-6 self-center mr-2"/>
                </a>
              </div>
              <div className="flex flex-row w-[40vw] items-center h-full 2xl:h-[40vh] pb-12 2xl:pt-24 mx-auto">
                <img src={iMac} alt="iMac" className="tansform -skew-y-12 rotate-12 w-64 2xl:w-96 h-64 2xl:h-96 ml-52 2xl:ml-72"/>
                <img src={iPhone} alt="iPhone" className="tansform -skew-y-12 rotate-12 w-12 2xl:w-16 h-24 2xl:h-32 ml-8 2xl:ml-12 mt-36 2xl:mt-60"/>
              </div>
            </div>
            <div className={`${useIsVisible(targetClients) ? "transform animate-slideright300 opacity-0 flex flex-col h-screen lg:w-[45vw] ml-[50vw]": "hidden opacity-0 translate-y-[100px]"}`}>
              <div className="no-scrollbar py-24 h-[80vh] overflow-y-scroll">
                

                <div className="space-y-16">
                  {/* Section 1: Idée du Projet */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-lg shadow-lg p-8"
                  >
                    <h2 className="text-2xl font-semibold text-[#3586FF] mb-6">
                      1. {project.steps.idea.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{project.steps.idea.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Défis</h3>
                        <ul className="space-y-2">
                          {project.steps.idea.challenges.map((challenge: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                            <li key={index} className="flex items-center text-gray-600">
                              <span className="text-red-500 mr-2">⚠</span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Solutions</h3>
                        <ul className="space-y-2">
                          {project.steps.idea.solutions.map((solution: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                            <li key={index} className="flex items-center text-gray-600">
                              <span className="text-green-500 mr-2">✓</span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.section>

                  {/* Section 2: Stack Technique */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-lg shadow-lg p-8"
                  >
                    <h2 className="text-2xl font-semibold text-[#3586FF] mb-6">
                      2. {project.steps.proposal.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{project.steps.proposal.description}</p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      {Object.entries(project.steps.proposal.technicalStack as Record<string, string[]>).map(([category, techs]) => (
                        <div key={category} className="bg-gray-50 rounded-lg p-4">
                          <h3 className="text-lg font-semibold mb-3 capitalize">{category}</h3>
                          <ul className="space-y-2">
                            {techs.map((tech: string, index: number) => (
                              <li key={index} className="flex items-center text-gray-600">
                                <span className="text-blue-500 mr-2">•</span>
                                {tech}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Fonctionnalités Clés</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.steps.proposal.keyFeatures.map((feature: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                          <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                            <span className="text-blue-500 mr-2">✓</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.section>

                  {/* Section 3: MVP & Tests */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-lg shadow-lg p-8"
                  >
                    <h2 className="text-2xl font-semibold text-[#3586FF] mb-6">
                      3. {project.steps.mvp.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{project.steps.mvp.description}</p>
                    
                    <div className="space-y-6">
                      {project.steps.mvp.phases.map((phase: { name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; duration: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; features: any; activities: any; }, index: React.Key | null | undefined) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4">
                          <h3 className="text-lg font-semibold mb-2">{phase.name}</h3>
                          <p className="text-gray-500 mb-3">Durée: {phase.duration}</p>
                          <ul className="space-y-2">
                            {(phase.features || phase.activities).map((item: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, i: React.Key | null | undefined) => (
                              <li key={i} className="flex items-center text-gray-600">
                                <span className="text-blue-500 mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.section>

                  {/* Section 4: Déploiement */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-white rounded-lg shadow-lg p-8"
                  >
                    <h2 className="text-2xl font-semibold text-[#3586FF] mb-6">
                      4. {project.steps.launch.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{project.steps.launch.description}</p>
                    
                    <div className="space-y-8">
                      {project.steps.launch.steps.map((step: { title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; tasks: any[]; }, index: React.Key | null | undefined) => (
                        <div key={index} className="relative pl-8">
                          <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                          <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-blue-200"></div>
                          <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                          <ul className="space-y-2">
                            {step.tasks.map((task: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, i: React.Key | null | undefined) => (
                              <li key={i} className="flex items-center text-gray-600">
                                <span className="text-green-500 mr-2">✓</span>
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.section>

                  {/* Section 5: Suivi */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="bg-white rounded-lg shadow-lg p-8"
                  >
                    <h2 className="text-2xl font-semibold text-[#3586FF] mb-6">
                      5. {project.steps.followUp.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{project.steps.followUp.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Services Inclus</h3>
                        <ul className="space-y-3">
                          {project.steps.followUp.services.map((service: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                            <li key={index} className="flex items-center text-gray-600">
                              <span className="text-blue-500 mr-2">✓</span>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Métriques de Performance</h3>
                        <div className="space-y-4">
                          {Object.entries(project.steps.followUp.metrics as Record<string, string>).map(([key, value]) => (
                            <div key={key} className="bg-gray-50 p-4 rounded-lg">
                              <div className="text-sm text-gray-500 capitalize">{key}</div>
                              <div className="text-xl font-semibold text-blue-600">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.section>
                </div>
              </div>
              <div className=" h-[20vh]">

              </div>

            </div>
          </section>

          {/* Section  Contact*/}

          <section className="scroller-section min-h-[100dvh] mb-1" id="contact" ref={targetContact}>
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
           
            {/* <div className='h-screen w-screen relative'>
              <div className={`${useIsVisible(targetContact) ? "absolute transform animate-slideout700_0px opacity-0 top-0 bottom-0 left-0 right-0 w-[70vw] h-[50vh] m-auto shadow-xl rounded-xl z-10 flex flex-row": "hidden transform-disappear"} `}>
                <img src={avatar} alt="avatar" className="w-1/3 h-fit p-12 2xl:p-24"/>
                <div className="w-2/3 h-full flex flex-col">
                  <div className='flex flex-row content-center pl-24'>
                    
                    
                  </div>
                </div>
              </div>
            </div>
            <div className='h-[30vh] bg-neutral-200 '></div> */}
          </section>
      </main> 

      {/* Section Loader */}

      <section className={`${loaded ? "hidden" : "main-container transform animate-disappearLoader"}`}>
        <div className="main">
          <div className="big-circle absolute md:relative md:top-0 md:left-0 top-[13%] left-[5%] max-w-[90dvw] max-h-[90dvw] md:max-w-[100%] md:max-h-[100%]">
            <div className="icon-block">
              <img src={seoIcon} alt="web design icon" />
            </div>
            <div className="icon-block">
              <img src={magaeIcon} alt="game design icon" />
            </div>
            <div className="icon-block">
              <img src={emailIcon} alt="game dev icon" />
            </div>
            <div className="icon-block">
              <img src={ecommerceIcon} alt="ui-ux icon" />
            </div>
          </div>
          <div className="circle  max-w-[65dvw] max-h-[65dvw]">
            <div className="icon-block">
              <img src={creatiiveIcon} alt="app icon" />
            </div>
            <div className="icon-block">
              <img src={blockchainIcon} alt="blockchain icon" />
            </div>
            <div className="icon-block">
              <img src={cyberrsecIcon} alt="ar-vr icon" />
            </div>
            <div className="icon-block">
              <img src={robotIcon} alt="artificial intelligence icon" />
            </div>
          </div>
          <div className="center-logo">
            <img src={logo} alt="logo" className='w-[40dvw] h-[40dvw] max-w-[200px] max-h-[200px]' />
          </div>
        </div>
      </section>
    </div>
  );
}