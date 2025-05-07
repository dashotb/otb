// import { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
// import { useIsVisible } from "@/app/page.tsx";
// import React, { useRef, useEffect, useState, useCallback, Suspense } from 'react';

// const targetProducts = useRef(null);

// export const TabVitrine = <>
//     <Drawer>
//               <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//                 <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//                   - Maquette Offerte
//                 </p>
//               </DrawerTrigger>
//               <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-12 px-[20vw] 2xl:px-[30vw] bg-white">
//                 <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//                   Maquettes Offertes : Une Vision Claire Avant Développement
//                 </DrawerTitle>
//                 <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">
//                 <p className="text-lg text-gray-700 mb-6">
//                   Chez <span className="font-semibold text-[#3586FF]">On The Board</span>, nous savons à quel point il est crucial pour nos clients de 
//                   <span className="font-semibold"> visualiser leur projet avant son développement</span>. C'est pourquoi nous offrons systématiquement 
//                   une <span className="font-semibold">maquette détaillée</span> de leur site web ou application, réalisée soit sur 
//                   <span className="font-semibold"> Figma</span>, soit sous forme d'une <span className="font-semibold">page web interactive</span>. 
//                 </p>
//                 <p className="text-lg text-gray-700 mb-6">
//                   Nos clients peuvent ainsi explorer chaque détail de leur futur site avant même que la première ligne de code ne soit écrite. 
//                   Ils ont l'opportunité de <span className="font-semibold">valider le design, l'ergonomie et les fonctionnalités</span> tout en 
//                   apportant d'éventuels ajustements en amont, garantissant ainsi un produit final qui correspond 
//                   <span className="font-semibold"> exactement à leurs attentes</span>.
//                 </p>

//                 <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Pourquoi Offrons-Nous les Maquettes ?</h2>
//                 <p className="text-gray-700 mb-6">
//                   Contrairement à d'autres agences qui facturent la conception des maquettes, nous avons choisi de l'offrir gratuitement. 
//                   Nous voulons que nos clients sachent <span className="font-semibold">précisément ce pour quoi ils vont payer</span>, avant 
//                   d'engager tout budget de développement. Cette transparence permet d'éviter les incompréhensions et de garantir un 
//                   résultat final optimal.
//                 </p>

//                 <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Une Maquette Dynamique et Fidèle au Produit Final</h2>
//                 <p className="text-gray-700 mb-6">
//                   Nous utilisons <span className="font-semibold">Figma</span> pour créer des maquettes interactives et détaillées. Pour aller encore plus loin, 
//                   nous pouvons proposer une <span className="font-semibold">version web interactive</span> permettant au client de naviguer 
//                   dans une pré-version de son site. 
//                 </p>
//                 <ul className="list-disc list-inside text-gray-700 mb-6">
//                   <li><span className="font-semibold">L'apparence générale :</span> couleurs, typographie, mise en page.</li>
//                   <li><span className="font-semibold">L'expérience utilisateur (UX) :</span> navigation intuitive et ergonomie.</li>
//                   <li><span className="font-semibold">Les fonctionnalités essentielles :</span> CTA, formulaires, animations.</li>
//                 </ul>

//                 <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Un Processus Clair et Sécurisant</h2>
//                 <p className="text-gray-700 mb-6">
//                   Notre approche repose sur un processus simple et efficace :
//                 </p>
//                 <ol className="list-decimal list-inside text-gray-700 mb-6">
//                   <li><span className="font-semibold">Compréhension des besoins :</span> définition des objectifs du projet.</li>
//                   <li><span className="font-semibold">Création de la maquette :</span> réalisation d'un premier jet visuel.</li>
//                   <li><span className="font-semibold">Validation et ajustements :</span> modifications avant validation finale.</li>
//                   <li><span className="font-semibold">Lancement du développement :</span> début du projet en toute sérénité.</li>
//                 </ol>
//                 </DrawerDescription>
//               </DrawerContent>
//             </Drawer>
//             <Drawer>
//               <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//                 <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft2 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//                  - Design Sur-Mesure
//                 </p>
//               </DrawerTrigger>
//               <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-24 px-[20vw] 2xl:px-[30vw] bg-white">
//               <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//                 Offrez à votre entreprise une vitrine d'exception grace a notre expertise !
//               </DrawerTitle>
//               <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">

//                 <p className="text-lg text-gray-700 mb-8">
//                   Chez <span className="font-semibold text-[#3586FF] text-[#3586FF]">On The Board</span>, nous sommes fiers de vous offrir bien plus qu'un simple site internet : 
//                   nous concevons une véritable vitrine digitale qui sublime l'img de votre entreprise. Notre expertise en création de sites vitrines repose 
//                   sur une approche personnalisée et innovante, où chaque détail compte pour refléter au mieux votre identité de marque.
//                 </p>
                
//                 <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Un design sur mesure, reflet de votre identité</h2>
//                 <p className="text-gray-700 mb-6">
//                   Nous créons des designs sur mesure, pensés pour être en parfaite adéquation avec l'img de votre entreprise. Que vous souhaitiez 
//                   un style sobre et élégant, moderne et audacieux, ou riche et complexe, nous adaptons chaque élément graphique à vos besoins et à 
//                   votre vision. Votre site vitrine devient ainsi une extension digitale harmonieuse et cohérente de votre marque.
//                 </p>
                
//                 <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Une expérience visuelle immersive et engageante</h2>
//                 <p className="text-gray-700 mb-6">
//                   Nous utilisons les dernières technologies pour donner vie à votre site, en intégrant des animations captivantes, des illustrations 3D dynamiques 
//                   et des interactions fluides. Ces éléments visuels ne sont pas seulement esthétiques : ils renforcent l'engagement de vos visiteurs et les 
//                   incitent à explorer davantage votre univers.
//                 </p>
                
//                 <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Simplicité ou complexité, selon vos besoins</h2>
//                 <p className="text-gray-700 mb-6">
//                   Chaque entreprise est unique, tout comme les besoins en termes de design. Nous proposons une large gamme de styles, allant des designs 
//                   minimalistes et épurés, parfaits pour une communication claire et concise, aux designs complexes et riches en détails, idéaux pour des 
//                   expériences plus immersives. Peu importe votre choix, nous garantissons un résultat professionnel et impactant.
//                 </p>

//                 <p className="text-lg font-medium text-gray-800">
//                   Avec <span className="font-semibold text-[#3586FF] text-[#3586FF]">On The Board</span>, faites le choix d'un site vitrine qui non seulement met en lumière votre 
//                   établissement sous son plus beau jour, mais devient aussi un véritable outil pour captiver vos visiteurs et marquer les esprits. 
//                   Transformez votre présence en ligne dès aujourd'hui avec notre équipe d'experts passionnés !
//                 </p>
//               </DrawerDescription>
//               </DrawerContent>
//             </Drawer>
//             <Drawer>
//               <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//                 <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft3 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//                  - Adaptation Mobile
//                 </p>
//               </DrawerTrigger>
//               <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar pb-8 px-[20vw] 2xl:px-[30vw] bg-white">
//                 <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//                   Un site vitrine responsive, adapté à tous les appareils
//                 </DrawerTitle>
//                 <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">
//                   <p className="text-lg text-gray-700 mb-8">
//                     Chez <span className="font-semibold text-[#3586FF]">On The Board</span>, nous comprenons l'importance d'une expérience utilisateur fluide et agréable, 
//                     quel que soit l'appareil utilisé par vos visiteurs. C'est pourquoi chaque site vitrine que nous créons est conçu pour s'adapter parfaitement 
//                     à tous les écrans, des smartphones aux ordinateurs de bureau, en passant par les tablettes.
//                   </p>
                  
//                   <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Un design fluide et adaptable</h2>
//                   <p className="text-gray-700 mb-6">
//                     Nous utilisons les principes du responsive design pour garantir que votre site s'affiche de manière optimale sur tous les appareils. 
//                     Les mises en page, les images et les contenus s'ajustent automatiquement à la taille de l'écran pour offrir une navigation claire et intuitive.
//                   </p>
                  
//                   <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Une approche mobile-first selon votre public</h2>
//                   <p className="text-gray-700 mb-6">
//                     Si votre site est principalement destiné à un public mobile, nous adoptons une approche mobile-first, en développant et en optimisant chaque 
//                     élément prioritairement pour les écrans de petite taille. En revanche, si vos utilisateurs se connectent majoritairement depuis des ordinateurs, 
//                     nous adaptons le design en desktop-first tout en assurant une expérience fluide sur mobile.
//                   </p>
                  
//                   <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Une compatibilité complète avec tous les navigateurs</h2>
//                   <p className="text-gray-700 mb-6">
//                     Votre site sera non seulement adapté aux différentes tailles d'écran, mais également testé pour garantir une compatibilité parfaite avec 
//                     les navigateurs les plus populaires (Chrome, Safari, Firefox, Edge, etc.).
//                   </p>
                  
//                   <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Optimisation des performances sur mobile</h2>
//                   <p className="text-gray-700 mb-6">
//                     Avec une majorité des utilisateurs naviguant depuis un smartphone, nous optimisons chaque site pour une vitesse de chargement rapide et 
//                     des interactions fluides sur mobile. Cela inclut des images optimisées, des polices légères et une navigation tactile intuitive.
//                   </p>
                  
//                   <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Une expérience utilisateur sans compromis</h2>
//                   <p className="text-gray-700 mb-6">
//                     En adaptant chaque élément visuel et fonctionnel à l'appareil utilisé, nous assurons que vos visiteurs bénéficient d'une expérience utilisateur 
//                     exceptionnelle, quel que soit leur support.
//                   </p>

//                   <p className="text-lg font-medium text-gray-800">
//                     Avec <span className="font-semibold text-[#3586FF]">On The Board</span>, profitez d'un site vitrine moderne, performant et parfaitement responsive, prêt à captiver 
//                     vos clients, où qu'ils soient !
//                   </p>
//                 </DrawerDescription>
//               </DrawerContent>
//             </Drawer>
//             <Drawer>
//               <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//                 <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft4 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//                  - Référencement
//                 </p>
//               </DrawerTrigger>
//               <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-24 px-[20vw] 2xl:px-[30vw] bg-white">
//                 <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//                   Boostez votre visibilité avec un site vitrine optimisé pour le référencement
//                 </DrawerTitle>

//                 <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">

//                   <p className="text-lg text-gray-700 mb-8">
//                     Chez <span className="font-semibold text-[#3586FF]">On The Board</span>, nous comprenons que la création d'un site vitrine ne s'arrête pas à son apparence. 
//                     Pour maximiser votre impact en ligne, nous mettons un point d'honneur à optimiser chaque aspect de votre site pour les moteurs de recherche, 
//                     notamment Google.
//                   </p>
                  
//                   <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Une structure pensée pour le SEO</h2>
//                   <p className="text-gray-700 mb-6">
//                     Dès la conception, nous structurons votre site avec une hiérarchie claire et des balises bien définies, garantissant une indexation rapide et 
//                     efficace par les moteurs de recherche. Votre contenu est organisé de manière à être compréhensible tant pour les visiteurs que pour les algorithmes.
//                   </p>
                  
//                   <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Des mots-clés stratégiques</h2>
//                   <p className="text-gray-700 mb-6">
//                     Nous intégrons des mots-clés pertinents et adaptés à votre activité pour que votre site apparaisse dans les premiers résultats des recherches 
//                     de vos clients potentiels. Chaque page est optimisée pour cibler les requêtes qui comptent le plus pour votre entreprise.
//                   </p>
                  
//                   <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Vitesse et performance : des critères cruciaux</h2>
//                   <p className="text-gray-700 mb-6">
//                     Un site rapide, c'est un site mieux classé ! Nous veillons à réduire les temps de chargement en optimisant les images, le code et les ressources, 
//                     offrant ainsi une expérience fluide à vos visiteurs tout en répondant aux exigences des moteurs de recherche.
//                   </p>
                  
//                   <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Un contenu optimisé et engageant</h2>
//                   <p className="text-gray-700 mb-6">
//                     Avec des textes clairs, informatifs et engageants, nous créons une expérience utilisateur de qualité qui améliore votre taux de conversion 
//                     tout en renforçant votre positionnement SEO.
//                   </p>

//                   <p className="text-lg font-medium text-gray-800">
//                     Avec <span className="font-semibold text-[#3586FF]">On The Board</span>, transformez votre site vitrine en un véritable levier de visibilité et attirez 
//                     davantage de clients grâce à un référencement naturel performant et durable.
//                   </p>
//                 </DrawerDescription>
//               </DrawerContent>
//             </Drawer>
//             <Drawer>
//               <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//                 <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft5 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//                  - Publicités
//                 </p>
//               </DrawerTrigger>
//               <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-24 px-[20vw] 2xl:px-[30vw] bg-white">
//                 <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//                   Boostez la visibilité de votre site vitrine grâce à une stratégie Ads performante
//                 </DrawerTitle>
//                 <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">

//                   <p className="text-lg text-gray-700 mb-8">
//                     Chez <span className="font-semibold text-[#3586FF]">On The Board</span>, nous savons que la réussite d'un site vitrine repose sur sa capacité à atteindre 
//                     rapidement les bonnes audiences. C'est pourquoi nous proposons des campagnes publicitaires en ligne, conçues sur mesure pour attirer un trafic 
//                     qualifié et augmenter votre retour sur investissement.
//                   </p>
                  
//                   <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Des campagnes ciblées et efficaces</h2>
//                   <p className="text-gray-700 mb-6">
//                     Nous analysons vos besoins, votre secteur d'activité et votre public cible pour élaborer des campagnes Google Ads, Facebook Ads ou d'autres 
//                     plateformes adaptées. Avec des annonces personnalisées et un ciblage précis, nous vous aidons à attirer des visiteurs réellement intéressés 
//                     par vos produits ou services.
//                   </p>

//                   <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Optimisation pour maximiser votre ROI</h2>
//                   <p className="text-gray-700 mb-6">
//                     Chaque euro investi compte ! Nos experts optimisent en continu vos campagnes pour maximiser vos performances. Cela inclut le choix des bons 
//                     mots-clés, des enchères ajustées en temps réel, et la création de visuels ou textes publicitaires engageants.
//                   </p>
                  
//                   <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Suivi et analyse des performances</h2>
//                   <p className="text-gray-700 mb-6">
//                     Grâce à des outils d'analyse avancés, nous suivons l'impact de vos publicités en temps réel. Vous recevez des rapports clairs et détaillés sur 
//                     les résultats obtenus : clics, impressions, conversions, et plus encore.
//                   </p>
                  
//                   <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Une approche complète et intégrée</h2>
//                   <p className="text-gray-700 mb-6">
//                     En combinant publicité en ligne et une conception optimisée de votre site vitrine, nous garantissons que chaque visiteur sera accueilli sur 
//                     une plateforme moderne, rapide et adaptée pour convertir.
//                   </p>

//                   <p className="text-lg font-medium text-gray-800">
//                     Avec <span className="font-semibold text-[#3586FF]">On The Board</span>, transformez votre site vitrine en un véritable aimant à clients grâce à une stratégie 
//                     Ads personnalisée et performante.
//                   </p>
//                 </DrawerDescription>
//               </DrawerContent>
//             </Drawer>  
//   </>

// export const TabApp = <>
//   <Drawer>
//     <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//       <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//         - Développement Sur-Mesure
//       </p>
//     </DrawerTrigger>
//     <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-12 px-[20vw] 2xl:px-[30vw] bg-white">
//       <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//         Des Applications Sur-Mesure pour Répondre à Vos Besoins Spécifiques
//       </DrawerTitle>
//       <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">
//         <p className="text-lg text-gray-700 mb-6">
//           Chez <span className="font-semibold text-[#3586FF]">On The Board</span>, nous développons des applications uniques qui répondent précisément à vos besoins métier. Notre approche sur-mesure garantit une solution parfaitement adaptée à vos processus et objectifs.
//         </p>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Une Méthodologie Éprouvée</h2>
//         <p className="text-gray-700 mb-6">
//           Notre processus de développement suit une méthodologie agile rigoureuse qui garantit des résultats optimaux :
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Analyse approfondie de vos besoins et processus actuels</li>
//           <li>Conception détaillée de l'architecture technique</li>
//           <li>Développement itératif avec feedback régulier</li>
//           <li>Tests approfondis à chaque étape</li>
//           <li>Déploiement progressif et formation des utilisateurs</li>
//         </ul>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Expertise Technique Approfondie</h2>
//         <p className="text-gray-700 mb-6">
//           Notre équipe maîtrise les dernières technologies et frameworks pour créer des applications performantes et évolutives :
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Développement natif et cross-platform</li>
//           <li>Architecture microservices</li>
//           <li>Intégration continue et déploiement automatisé</li>
//           <li>Sécurité renforcée et conformité RGPD</li>
//         </ul>
//       </DrawerDescription>
//     </DrawerContent>
//   </Drawer>

//   <Drawer>
//     <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//       <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft2 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//         - Technologies Innovantes
//       </p>
//     </DrawerTrigger>
//     <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-24 px-[20vw] 2xl:px-[30vw] bg-white">
//       <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//         Les Dernières Technologies au Service de Votre Projet
//       </DrawerTitle>
//       <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">
//         <p className="text-lg text-gray-700 mb-6">
//           Nous utilisons les technologies les plus récentes et performantes pour garantir des applications robustes, évolutives et pérennes.
//         </p>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Stack Technique Moderne</h2>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>React Native pour les applications mobiles</li>
//           <li>Next.js pour les applications web</li>
//           <li>Node.js pour les backends performants</li>
//           <li>Cloud Computing pour une scalabilité optimale</li>
//         </ul>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Infrastructure Cloud Native</h2>
//         <p className="text-gray-700 mb-6">
//           Notre approche cloud-native garantit une scalabilité et une disponibilité optimales :
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Déploiement automatisé sur les principales plateformes cloud</li>
//           <li>Monitoring en temps réel</li>
//           <li>Backup automatique et plan de reprise d'activité</li>
//           <li>Optimisation continue des performances</li>
//         </ul>
//       </DrawerDescription>
//     </DrawerContent>
//   </Drawer>

//   <Drawer>
//     <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//       <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft3 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//         - Sécurité Renforcée
//       </p>
//     </DrawerTrigger>
//     <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-24 px-[20vw] 2xl:px-[30vw] bg-white">
//       <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//         Une Sécurité Sans Compromis pour Vos Applications
//       </DrawerTitle>
//       <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">
//         <p className="text-lg text-gray-700 mb-6">
//           La sécurité est au cœur de notre processus de développement. Nous implémentons les meilleures pratiques pour protéger vos données et vos utilisateurs.
//         </p>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Protection des Données</h2>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Chiffrement des données sensibles</li>
//           <li>Authentification multi-facteurs</li>
//           <li>Gestion sécurisée des sessions</li>
//           <li>Conformité RGPD et autres réglementations</li>
//         </ul>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Tests de Sécurité</h2>
//         <p className="text-gray-700 mb-6">
//           Nous effectuons des tests rigoureux pour garantir la sécurité de votre application :
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Tests de pénétration réguliers</li>
//           <li>Analyse statique du code</li>
//           <li>Monitoring des vulnérabilités</li>
//           <li>Mises à jour de sécurité proactives</li>
//         </ul>
//       </DrawerDescription>
//     </DrawerContent>
//   </Drawer>

//   <Drawer>
//     <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//       <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft4 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//         - Performance Optimale
//       </p>
//     </DrawerTrigger>
//     <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-24 px-[20vw] 2xl:px-[30vw] bg-white">
//       <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//         Des Applications Rapides et Performantes
//       </DrawerTitle>
//       <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">
//         <p className="text-lg text-gray-700 mb-6">
//           La performance est cruciale pour le succès de votre application. Nous optimisons chaque aspect pour garantir une expérience utilisateur fluide.
//         </p>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Optimisation Frontend</h2>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Chargement optimisé des ressources</li>
//           <li>Mise en cache intelligente</li>
//           <li>Compression des assets</li>
//           <li>Code splitting et lazy loading</li>
//         </ul>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Performance Backend</h2>
//         <p className="text-gray-700 mb-6">
//           Notre architecture backend est conçue pour la performance :
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Optimisation des requêtes database</li>
//           <li>Mise en cache distribuée</li>
//           <li>Load balancing automatique</li>
//           <li>Monitoring des performances en temps réel</li>
//         </ul>
//       </DrawerDescription>
//     </DrawerContent>
//   </Drawer>

//   <Drawer>
//     <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//       <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft5 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//         - Intégration Continue
//       </p>
//     </DrawerTrigger>
//     <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-24 px-[20vw] 2xl:px-[30vw] bg-white">
//       <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//         Déploiement et Maintenance Automatisés
//       </DrawerTitle>
//       <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">
//         <p className="text-lg text-gray-700 mb-6">
//           Notre processus d'intégration continue garantit des déploiements rapides et fiables de votre application.
//         </p>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Pipeline CI/CD</h2>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Tests automatisés à chaque commit</li>
//           <li>Déploiement automatique après validation</li>
//           <li>Rollback automatique en cas de problème</li>
//           <li>Environnements de test isolés</li>
//         </ul>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Maintenance Proactive</h2>
//         <p className="text-gray-700 mb-6">
//           Nous assurons une maintenance continue de votre application :
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Mises à jour régulières des dépendances</li>
//           <li>Monitoring proactif des erreurs</li>
//           <li>Optimisation continue des performances</li>
//           <li>Support technique réactif</li>
//         </ul>
//       </DrawerDescription>
//     </DrawerContent>
//   </Drawer>

//   <Drawer>
//     <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//       <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft6 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//         - Support et Formation
//       </p>
//     </DrawerTrigger>
//     <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-24 px-[20vw] 2xl:px-[30vw] bg-white">
//       <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//         Accompagnement Complet des Utilisateurs
//       </DrawerTitle>
//       <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">
//         <p className="text-lg text-gray-700 mb-6">
//           Nous vous accompagnons dans la prise en main et l'utilisation optimale de votre application.
//         </p>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Formation Utilisateurs</h2>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Sessions de formation personnalisées</li>
//           <li>Documentation détaillée</li>
//           <li>Guides utilisateurs interactifs</li>
//           <li>Vidéos tutorielles</li>
//         </ul>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Support Technique</h2>
//         <p className="text-gray-700 mb-6">
//           Notre équipe de support est là pour vous aider :
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Support technique réactif</li>
//           <li>Assistance par email et téléphone</li>
//           <li>Base de connaissances en ligne</li>
//           <li>Maintenance évolutive</li>
//         </ul>
//       </DrawerDescription>
//     </DrawerContent>
//   </Drawer>

//   <Drawer>
//     <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//       <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft7 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//         - Évolution Continue
//       </p>
//     </DrawerTrigger>
//     <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-24 px-[20vw] 2xl:px-[30vw] bg-white">
//       <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//         Une Application qui Évolue avec Vos Besoins
//       </DrawerTitle>
//       <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">
//         <p className="text-lg text-gray-700 mb-6">
//           Votre application évolue en permanence pour répondre à vos nouveaux besoins et aux évolutions du marché.
//         </p>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Amélioration Continue</h2>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Analyse des retours utilisateurs</li>
//           <li>Développement de nouvelles fonctionnalités</li>
//           <li>Optimisation des processus existants</li>
//           <li>Veille technologique active</li>
//         </ul>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Roadmap Évolutive</h2>
//         <p className="text-gray-700 mb-6">
//           Nous planifions l'évolution de votre application :
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Planification stratégique des évolutions</li>
//           <li>Priorisation des développements</li>
//           <li>Tests utilisateurs réguliers</li>
//           <li>Adaptation aux nouvelles technologies</li>
//         </ul>
//       </DrawerDescription>
//     </DrawerContent>
//   </Drawer>
// </>;

// export const TabIA = <>
//   <Drawer>
//     <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//       <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//         - Solutions IA Personnalisées
//       </p>
//     </DrawerTrigger>
//     <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-12 px-[20vw] 2xl:px-[30vw] bg-white">
//       <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//         Intelligence Artificielle Sur-Mesure pour Votre Entreprise
//       </DrawerTitle>
//       <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">
//         <p className="text-lg text-gray-700 mb-6">
//           Chez <span className="font-semibold text-[#3586FF]">On The Board</span>, nous développons des solutions d'IA adaptées à vos besoins spécifiques, transformant vos données en insights actionnables.
//         </p>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Nos Domaines d'Expertise</h2>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Machine Learning pour l'analyse prédictive</li>
//           <li>Traitement du langage naturel</li>
//           <li>Vision par ordinateur</li>
//           <li>Systèmes de recommandation</li>
//         </ul>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Approche Personnalisée</h2>
//         <p className="text-gray-700 mb-6">
//           Notre méthodologie garantit des solutions adaptées à vos enjeux :
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Analyse approfondie de vos besoins</li>
//           <li>Développement de modèles sur mesure</li>
//           <li>Intégration seamless avec vos systèmes</li>
//           <li>Formation et accompagnement</li>
//         </ul>
//       </DrawerDescription>
//     </DrawerContent>
//   </Drawer>

//   <Drawer>
//     <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//       <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft2 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//         - Automatisation Intelligente
//       </p>
//     </DrawerTrigger>
//     <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-24 px-[20vw] 2xl:px-[30vw] bg-white">
//       <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//         Optimisez vos Processus avec l'Automatisation IA
//       </DrawerTitle>
//       <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">
//         <p className="text-lg text-gray-700 mb-6">
//           Transformez vos opérations grâce à l'automatisation intelligente, réduisant les tâches répétitives et augmentant la productivité.
//         </p>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Avantages de l'Automatisation IA</h2>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Réduction des erreurs humaines</li>
//           <li>Traitement 24/7 des tâches</li>
//           <li>Analyse en temps réel</li>
//           <li>Adaptation dynamique aux changements</li>
//         </ul>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Applications Pratiques</h2>
//         <p className="text-gray-700 mb-6">
//           Des solutions concrètes pour votre entreprise :
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Automatisation des processus métier</li>
//           <li>Traitement intelligent des documents</li>
//           <li>Chatbots et assistants virtuels</li>
//           <li>Optimisation des workflows</li>
//         </ul>
//       </DrawerDescription>
//     </DrawerContent>
//   </Drawer>

//   <Drawer>
//     <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//       <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft3 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//         - Analyse Prédictive
//       </p>
//     </DrawerTrigger>
//     <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-24 px-[20vw] 2xl:px-[30vw] bg-white">
//       <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//         Anticipez les Tendances avec l'Analyse Prédictive
//       </DrawerTitle>
//       <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">
//         <p className="text-lg text-gray-700 mb-6">
//           Exploitez la puissance des données pour prendre des décisions éclairées et anticiper les évolutions de votre marché.
//         </p>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Capacités Prédictives</h2>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Prévision des tendances</li>
//           <li>Analyse des comportements clients</li>
//           <li>Optimisation des stocks</li>
//           <li>Détection des anomalies</li>
//         </ul>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Bénéfices Business</h2>
//         <p className="text-gray-700 mb-6">
//           Des avantages concrets pour votre activité :
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Réduction des coûts opérationnels</li>
//           <li>Optimisation des ressources</li>
//           <li>Amélioration de la satisfaction client</li>
//           <li>Avantage concurrentiel</li>
//         </ul>
//       </DrawerDescription>
//     </DrawerContent>
//   </Drawer>

//   <Drawer>
//     <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//       <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft4 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//         - Traitement du Langage
//       </p>
//     </DrawerTrigger>
//     <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-24 px-[20vw] 2xl:px-[30vw] bg-white">
//       <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//         Solutions Avancées de Traitement du Langage Naturel
//       </DrawerTitle>
//       <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">
//         <p className="text-lg text-gray-700 mb-6">
//           Exploitez la puissance du traitement du langage naturel pour améliorer vos interactions clients et l'analyse de données textuelles.
//         </p>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Applications NLP</h2>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Analyse de sentiment</li>
//           <li>Classification automatique de documents</li>
//           <li>Extraction d'informations</li>
//           <li>Génération de texte</li>
//         </ul>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Cas d'Usage</h2>
//         <p className="text-gray-700 mb-6">
//           Des applications concrètes pour votre entreprise :
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Chatbots intelligents</li>
//           <li>Analyse des retours clients</li>
//           <li>Automatisation du support</li>
//           <li>Résumé automatique de documents</li>
//         </ul>
//       </DrawerDescription>
//     </DrawerContent>
//   </Drawer>

//   <Drawer>
//     <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//       <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft5 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//         - Vision par Ordinateur
//       </p>
//     </DrawerTrigger>
//     <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-24 px-[20vw] 2xl:px-[30vw] bg-white">
//       <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//         Solutions de Vision par Ordinateur
//       </DrawerTitle>
//       <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">
//         <p className="text-lg text-gray-700 mb-6">
//           Donnez à vos systèmes la capacité de voir et d'interpréter le monde visuel avec nos solutions de vision par ordinateur.
//         </p>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Capacités Techniques</h2>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Reconnaissance d'objets</li>
//           <li>Analyse de scènes</li>
//           <li>Détection de défauts</li>
//           <li>Reconnaissance faciale</li>
//         </ul>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Applications Industrielles</h2>
//         <p className="text-gray-700 mb-6">
//           Des solutions adaptées à différents secteurs :
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Contrôle qualité automatisé</li>
//           <li>Surveillance de sécurité</li>
//           <li>Analyse de flux vidéo</li>
//           <li>Reconnaissance de documents</li>
//         </ul>
//       </DrawerDescription>
//     </DrawerContent>
//   </Drawer>

//   <Drawer>
//     <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//       <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft6 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//         - Systèmes de Recommandation
//       </p>
//     </DrawerTrigger>
//     <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-24 px-[20vw] 2xl:px-[30vw] bg-white">
//       <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//         Personnalisez l'Expérience Utilisateur avec l'IA
//       </DrawerTitle>
//       <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">
//         <p className="text-lg text-gray-700 mb-6">
//           Optimisez l'engagement utilisateur et les conversions grâce à des recommandations personnalisées basées sur l'IA.
//         </p>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Types de Recommandations</h2>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Recommandations de produits</li>
//           <li>Suggestions de contenu</li>
//           <li>Personnalisation du parcours utilisateur</li>
//           <li>Cross-selling intelligent</li>
//         </ul>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Avantages Business</h2>
//         <p className="text-gray-700 mb-6">
//           Des bénéfices mesurables pour votre activité :
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Augmentation des ventes</li>
//           <li>Amélioration de la rétention</li>
//           <li>Personnalisation accrue</li>
//           <li>Optimisation de l'expérience client</li>
//         </ul>
//       </DrawerDescription>
//     </DrawerContent>
//   </Drawer>

//   <Drawer>
//     <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
//       <p className={`${useIsVisible(targetProducts) ?"scroller-section transform animate-slideleft7 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
//         - Maintenance Prédictive
//       </p>
//     </DrawerTrigger>
//     <DrawerContent className="overflow-scroll lg:overflow-hidden no-scrollbar mt-4 pb-24 px-[20vw] 2xl:px-[30vw] bg-white">
//       <DrawerTitle className="text-3xl font-extrabold text-center text-[#3586FF] mb-6">
//         Optimisez la Maintenance avec l'IA
//       </DrawerTitle>
//       <DrawerDescription className="overflow-scroll no-scrollbar max-h-[70vh]">
//         <p className="text-lg text-gray-700 mb-6">
//           Anticipez les besoins de maintenance et optimisez la durée de vie de vos équipements grâce à l'IA.
//         </p>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Capacités Prédictives</h2>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Détection précoce des anomalies</li>
//           <li>Prévision des pannes</li>
//           <li>Optimisation des interventions</li>
//           <li>Analyse des performances</li>
//         </ul>

//         <h2 className="text-2xl font-bold text-[#3586FF] mb-4">Bénéfices Opérationnels</h2>
//         <p className="text-gray-700 mb-6">
//           Des avantages concrets pour votre maintenance :
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           <li>Réduction des temps d'arrêt</li>
//           <li>Optimisation des coûts</li>
//           <li>Prolongation de la durée de vie</li>
//           <li>Planification optimisée</li>
//         </ul>
//       </DrawerDescription>
//     </DrawerContent>
//   </Drawer>
// </>;