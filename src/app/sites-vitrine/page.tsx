"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactForm } from "@/components/ui/ContactForm";
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function SitesVitrine() {
  const data = [
    "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Fzidi-comp.png?alt=media&token=017224cf-ba53-4200-89f2-dbc88a9ea422",
    "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Fvc-comp.png?alt=media&token=2a3ff9ea-f6bc-4f2e-9f42-eef98e2fe000",
    "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Fss-comp.png?alt=media&token=395c1a64-ea7b-498e-af24-55493e397d0a",
    "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Farka-comp.png?alt=media&token=683fd189-d764-418e-bbd3-b47a1e474fd4",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Video Background */}
      <section className="h-screen content-center relative overflow-hidden ">
        <div className="absolute inset-0 opacity-50 ">
          <div className="absolute z-1 inset-0 bg-[url(/image.png)] bg-cover"></div>
          <div className='absolute z-2 inset-0  bg-gradient-to-b from-transparent to-white'></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 mt-32 md:mt-0 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center content-center gap-y-8 md:justify-between h-full">
          <div className="md:w-1/2 space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold text-[#3586FF]"
            >
              Sites Vitrine Professionnels
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Créez une présence en ligne impactante avec un site vitrine sur mesure. Notre expertise en développement web vous garantit un site professionnel, optimisé pour le référencement et parfaitement adapté à vos besoins.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4"
            >
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#3586FF] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Demander un devis
              </button>
              <button className="border border-[#3586FF] text-[#3586FF] px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Voir nos réalisations
              </button>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-1/2 mt-0 md:mt-0"
          >
            <img 
              src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Site vitrine exemple" 
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Sites Réalisés" },
              { number: "98%", label: "Clients Satisfaits" },
              { number: "12+", label: "Années d'Expérience" },
              { number: "24/7", label: "Support Client" }
            ].map((stat, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-[#3586FF] mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Interactive Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-[#3586FF] mb-12">
              Fonctionnalités Clés
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Design Moderne",
                description: "Des designs contemporains et personnalisés qui reflètent votre identité",
                features: [
                  "Responsive design",
                  "Animations fluides",
                  "Interface intuitive",
                  "Expérience utilisateur optimisée"
                ],
                image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                title: "Performance Optimale",
                description: "Des sites rapides et optimisés pour une expérience utilisateur exceptionnelle",
                features: [
                  "Temps de chargement rapide",
                  "Optimisation mobile",
                  "SEO avancé",
                  "Analytics intégrés"
                ],
                image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                title: "Sécurité Maximale",
                description: "Protection complète de votre site et des données de vos visiteurs",
                features: [
                  "Certificat SSL",
                  "Protection DDoS",
                  "Sauvegardes automatiques",
                  "Mises à jour régulières"
                ],
                image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            ].map((feature, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-[#3586FF] mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section with Case Studies */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-[#3586FF] mb-12">
              Nos Réalisations
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Restaurant Le Gourmet",
                description: "Site vitrine moderne avec réservation en ligne",
                results: [
                  "Augmentation des réservations de 150%",
                  "Temps de chargement < 2 secondes",
                  "1ère page Google pour les mots-clés ciblés"
                ],
                image: data[0]
              },
              {
                title: "Cabinet d'Architecte",
                description: "Portfolio interactif avec galerie de projets",
                results: [
                  "Trafic multiplié par 3",
                  "Taux de conversion de 15%",
                  "Interface primée pour son design"
                ],
                image: data[1]
              }
            ].map((project, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="space-y-2">
                      {project.results.map((result, i) => (
                        <div key={i} className="flex items-center text-green-600">
                          <span className="mr-2">✓</span>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-[#3586FF] text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Voir plus de projets
            </button>
          </div>
        </div>
      </section>

      {/* Process Section with Timeline */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-[#3586FF] mb-12">
              Notre Processus
            </h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            {[
              {
                title: "1. Analyse & Stratégie",
                description: "Compréhension approfondie de vos besoins et objectifs",
                details: [
                  "Analyse de marché",
                  "Définition des objectifs",
                  "Stratégie digitale",
                  "Planning détaillé"
                ]
              },
              {
                title: "2. Design & UX",
                description: "Création d'une expérience utilisateur optimale",
                details: [
                  "Wireframes",
                  "Design sur mesure",
                  "Responsive design",
                  "Validation client"
                ]
              },
              {
                title: "3. Développement",
                description: "Intégration et développement technique",
                details: [
                  "Développement front-end",
                  "Optimisation SEO",
                  "Tests de performance",
                  "Contrôle qualité"
                ]
              },
              {
                title: "4. Lancement & Suivi",
                description: "Mise en ligne et optimisation continue",
                details: [
                  "Déploiement",
                  "Formation",
                  "Support technique",
                  "Analyse des performances"
                ]
              }
            ].map((step, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <div className={`relative min-w-md max-w-md mx-auto flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  <div className="flex-1">
                    <div className={`bg-white p-6 rounded-lg shadow-lg ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center">
                            <span className="text-[#3586FF] mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section with Comparison */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-[#3586FF] mb-12">
              Nos Offres
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Essentiel",
                price: "À partir de 799€",
                description: "Idéal pour les petites entreprises",
                features: [
                  "5 pages personnalisées",
                  "Design responsive",
                  "Optimisation SEO de base",
                  "Formulaire de contact",
                  "Certificat SSL",
                  "Support 3 mois"
                ],
                recommended: false
              },
              {
                title: "Pro",
                price: "À partir de 1499€",
                description: "Pour une présence professionnelle complète",
                features: [
                  "10 pages personnalisées",
                  "Design premium responsive",
                  "SEO avancé",
                  "Blog intégré",
                  "Analytics avancés",
                  "Support 6 mois",
                  "Formation incluse",
                  "Multilingue"
                ],
                recommended: true
              },
              {
                title: "Enterprise",
                price: "Sur devis",
                description: "Solutions sur mesure pour grandes entreprises",
                features: [
                  "Pages illimitées",
                  "Design sur mesure",
                  "SEO premium",
                  "Fonctionnalités avancées",
                  "Intégrations personnalisées",
                  "Support prioritaire",
                  "Formation complète",
                  "Maintenance incluse"
                ],
                recommended: false
              }
            ].map((plan, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <div className={`bg-white rounded-lg shadow-lg p-8 relative ${
                  plan.recommended ? "border-2 border-[#3586FF]" : ""
                }`}>
                  {plan.recommended && (
                    <div className="absolute top-0 right-0 bg-[#3586FF] text-white px-4 py-1 rounded-bl-lg rounded-tr-lg">
                      Recommandé
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                  <p className="text-3xl font-bold mb-2">{plan.price}</p>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg transition-colors ${
                    plan.recommended
                      ? "bg-[#3586FF] text-white hover:bg-blue-600"
                      : "border border-[#3586FF] text-[#3586FF] hover:bg-blue-50"
                  }`}>
                    Choisir cette offre
                  </button>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Improved Accordion */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-[#3586FF] mb-12">
              Questions Fréquentes
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Combien de temps faut-il pour créer un site vitrine ?",
                  answer: "Le délai moyen est de 4 à 8 semaines, selon la complexité du projet. Nous suivons un processus structuré qui comprend la conception, le développement, les tests et la mise en ligne. Des délais plus courts sont possibles pour les projets urgents."
                },
                {
                  question: "Le site sera-t-il optimisé pour les moteurs de recherche ?",
                  answer: "Oui, tous nos sites sont optimisés SEO dès leur création. Nous intégrons les meilleures pratiques : structure optimisée, temps de chargement rapide, méta-données personnalisées, et compatibilité mobile. Un suivi des performances est inclus."
                },
                {
                  question: "Proposez-vous un service de maintenance ?",
                  answer: "Oui, nous proposons plusieurs formules de maintenance incluant : mises à jour de sécurité, sauvegardes régulières, modifications mineures du contenu, support technique, et monitoring des performances."
                },
                {
                  question: "Puis-je mettre à jour le contenu moi-même ?",
                  answer: "Absolument ! Nous intégrons un système de gestion de contenu intuitif qui vous permet de modifier facilement vos textes, images et autres contenus. Une formation complète est fournie à la livraison du site."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg">
                  <AccordionTrigger className="px-6">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-6">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section with Enhanced Form */}
      <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-[#3586FF] mb-12">
              Démarrez Votre Projet
            </h2>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}