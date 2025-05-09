import { TabVitrine } from "@/components/home/ProductsDisplay/Tabs";

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

const productsList = (productNameAnim:any, targetProducts: any) => [
        {
        id : 0,
        name : "Site Vitrine",
        price: "799",
        tableau: TabVitrine(productNameAnim, targetProducts),
        video: "empty"
        
        },
        {
        id : 1,
        name : "Application",
        price: "1499",
        tableau: "TabApp",
        video: "empty"
        
        },
        {
        id : 2,
        name : "IA",
        price: "799",
        tableau: "TabIA",
        video: "empty"
        
        }
]

export {projects, vitrines, productsList}