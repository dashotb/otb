import {Drawer, DrawerTrigger, DrawerContent, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";



export const TabVitrine = (productNameAnim:any, targetProducts:any ) => {
    return(
        <div className={`${productNameAnim}`}>
        <Drawer>
        <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl font-semibold ${targetProducts ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
        <p className={`${targetProducts ?"scroller-section transform animate-slideleft1 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
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
        <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${targetProducts ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
            <p className={`${targetProducts ?"scroller-section transform animate-slideleft2 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
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
        <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${targetProducts ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
            <p className={`${targetProducts ?"scroller-section transform animate-slideleft3 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
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
        <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${targetProducts ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
            <p className={`${targetProducts ?"scroller-section transform animate-slideleft4 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
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
        <DrawerTrigger asChild className={`text-2xl 2xl:text-3xl 2xl:pt-5 font-semibold ${targetProducts ?"scroller-section transform animate-slideleft1 opacity-0": "opacity-0 -translate-X-full" }`}>
            <p className={`${targetProducts ?"scroller-section transform animate-slideleft5 opacity-0 w-fit": "opacity-0 -translate-X-full" } hover:cursor-pointer hover:underline decoration-solid`}>
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
    )
} 

const TabApp = <>
</>;

const TabIA = <>
</>;
