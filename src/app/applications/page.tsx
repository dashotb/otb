"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedCard } from '@/components/AnimatedCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function Applications() {
  const data = [
   
    {
      name: "HJ Services Autos",
      type: "App",
      logo: "",
      description: "",
      comp: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fhj-comp.png?alt=media&token=db6408d2-9e61-4361-b712-ac36bc20dd1b",
      ipad: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fhj-ipad.png?alt=media&token=7291cd47-fba9-4341-ac10-ff82bbb88d28",
      phone: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fhj-phone.png?alt=media&token=05f5e6b4-cd0d-462c-bba7-1cc1528162d9"
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
      logo: "",
      description: "",
      comp: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fdp-comp.png?alt=media&token=d5e48d59-ef27-4b88-8bb0-1de5943d7537",
      ipad: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fdp-ipad.png?alt=media&token=80f0d190-11a9-43b8-b828-0f74337450f5",
      phone: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fdp-phone.png?alt=media&token=99dfcd94-13d8-4d75-90cf-620dd9c604e4"
    },
  ]
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6 text-[#3586FF]"
        >
          Applications Web & Mobile
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto px-4"
        >
          Des solutions digitales innovantes pour votre entreprise
        </motion.p>
      </section>

      {/* Carousel Section */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-semibold text-center text-[#3586FF]">Nos Réalisations</h2>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              
              pagination={{ clickable: true }}
              className="overflow-hidden w-[80vw] h-[25vh] md:w-[60vw] md:h-[75vh] mx-auto  object-cover rounded-[0.5rem] "
            >
              <SwiperSlide>
                  <img
                    src={data[0].comp}
                    alt="Project 1"
                    
                    className="object-cover w-full h-full rounded-lg"
                  />
              </SwiperSlide>
              <SwiperSlide>

                  <img
                    src={data[1].comp}
                    alt="Project 2"
                    
                    className="object-cover w-full h-full  rounded-lg"
                  />
  
              </SwiperSlide>
              <SwiperSlide>

                  <img
                    src={data[2].comp}
                    alt="Project 3"
                    
                    className="object-cover w-full h-full rounded-lg"
                  />
                
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </AnimatedSection>

      {/* Description Section */}
      <AnimatedSection>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center text-[#3586FF]">Pourquoi une Application ?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Une application web ou mobile est une solution logicielle sur mesure qui répond aux besoins spécifiques de votre entreprise. Elle permet d'automatiser vos processus, d'améliorer la productivité et d'offrir une meilleure expérience à vos utilisateurs.
            </p>
            <p className="text-lg text-gray-700">
              Que ce soit pour la gestion interne, le service client ou la vente en ligne, une application personnalisée peut transformer votre façon de travailler.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-semibold mb-12 text-center text-[#3586FF]">Fonctionnalités et Avantages</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation & Modernité",
                items: [
                  "Image d'entreprise innovante",
                  "Solutions technologiques avancées",
                  "Différenciation concurrentielle",
                  "Adaptation aux tendances digitales"
                ]
              },
              {
                title: "Expérience Utilisateur",
                items: [
                  "Interface intuitive et moderne",
                  "Parcours utilisateur optimisé",
                  "Design adaptatif et élégant",
                  "Accessibilité maximale"
                ]
              },
              {
                title: "Engagement Client",
                items: [
                  "Interactions personnalisées",
                  "Fidélisation renforcée",
                  "Communication directe",
                  "Retours utilisateurs facilités"
                ]
              },
              {
                title: "Performance Business",
                items: [
                  "Automatisation des processus",
                  "Réduction des coûts opérationnels",
                  "Augmentation de la productivité",
                  "ROI mesurable"
                ]
              },
              {
                title: "Scalabilité",
                items: [
                  "Évolution selon vos besoins",
                  "Intégrations futures facilitées",
                  "Architecture extensible",
                  "Adaptation au marché"
                ]
              },
              {
                title: "Support & Maintenance",
                items: [
                  "Accompagnement personnalisé",
                  "Mises à jour régulières",
                  "Support technique réactif",
                  "Formation des utilisateurs"
                ]
              }
            ].map((card, index) => (
              <AnimatedCard key={card.title} delay={index * 0.1}>
                <div className="p-6 bg-gray-50 rounded-lg h-full">
                  <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                  <ul className="space-y-2 text-gray-600">
                    {card.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Benefits Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-semibold mb-12 text-center text-[#3586FF]">Avantages Opérationnels</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Optimisation du Temps",
                items: [
                  "Automatisation des tâches répétitives",
                  "Processus métier simplifiés",
                  "Réduction des saisies manuelles",
                  "Workflows optimisés"
                ]
              },
              {
                title: "Outils Professionnels",
                items: [
                  "Dashboard personnalisable",
                  "Gestion documentaire intégrée",
                  "Outils de reporting avancés",
                  "Interfaces métier dédiées"
                ]
              },
              {
                title: "Collaboration",
                items: [
                  "Travail d'équipe en temps réel",
                  "Partage de documents sécurisé",
                  "Communication intégrée",
                  "Gestion des accès granulaire"
                ]
              },
              {
                title: "Efficacité Quotidienne",
                items: [
                  "Accès mobile optimisé",
                  "Notifications intelligentes",
                  "Synchronisation temps réel",
                  "Mode hors ligne disponible"
                ]
              },
              {
                title: "Support Technique",
                items: [
                  "Assistance dédiée",
                  "Formation utilisateurs",
                  "Documentation complète",
                  "Mises à jour régulières"
                ]
              },
              {
                title: "Pilotage & Contrôle",
                items: [
                  "Tableaux de bord en temps réel",
                  "Indicateurs personnalisables",
                  "Suivi des performances",
                  "Rapports automatisés"
                ]
              }
            ].map((card, index) => (
              <AnimatedCard key={card.title} delay={index * 0.1}>
                <div className="p-6 bg-gray-50 rounded-lg h-full">
                  <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                  <ul className="space-y-2 text-gray-600">
                    {card.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <AnimatedSection>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center text-[#3586FF]">Questions Fréquentes</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Quel est le délai de développement d'une application ?</AccordionTrigger>
                <AccordionContent>
                  Le délai varie selon la complexité du projet, généralement entre 3 et 6 mois pour une première version fonctionnelle. Ce délai comprend l'analyse des besoins, le développement, les tests et le déploiement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>L'application sera-t-elle disponible sur iOS et Android ?</AccordionTrigger>
                <AccordionContent>
                  Oui, nous développons des applications multiplateformes qui fonctionnent sur iOS et Android avec une seule base de code. Cela garantit une expérience cohérente sur tous les appareils et réduit les coûts de développement et de maintenance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Proposez-vous un support après le lancement ?</AccordionTrigger>
                <AccordionContent>
                  Oui, nous offrons un support technique continu et des mises à jour régulières pour garantir le bon fonctionnement de votre application. Notre équipe reste disponible pour résoudre les problèmes et implémenter de nouvelles fonctionnalités.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Comment gérez-vous la sécurité des données ?</AccordionTrigger>
                <AccordionContent>
                  Nous implémentons les meilleures pratiques de sécurité : chiffrement des données, authentification sécurisée, protection contre les attaques courantes, et conformité RGPD. Des audits de sécurité réguliers sont effectués.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Peut-on intégrer des systèmes existants ?</AccordionTrigger>
                <AccordionContent>
                  Oui, nous pouvons intégrer votre application avec vos systèmes existants (CRM, ERP, etc.) via des API sécurisées. Nous assurons une synchronisation fluide des données et des processus métier.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Comment se déroule le processus de développement ?</AccordionTrigger>
                <AccordionContent>
                  Nous suivons une méthodologie agile avec des sprints de 2-3 semaines. Vous êtes impliqué à chaque étape et pouvez tester régulièrement les nouvelles fonctionnalités. Des réunions de suivi hebdomadaires permettent d'ajuster le développement selon vos retours.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>Quelle est la politique de mise à jour ?</AccordionTrigger>
                <AccordionContent>
                  Les mises à jour de sécurité sont automatiques et prioritaires. Pour les nouvelles fonctionnalités, nous planifions des cycles de mise à jour réguliers en fonction de vos besoins et des retours utilisateurs. Chaque mise à jour est testée rigoureusement avant déploiement.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center text-[#3586FF]">Tarifs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 border rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">MVP</h3>
                <p className="text-3xl font-bold mb-4">À partir de 1499€</p>
                <ul className="space-y-2 mb-6">
                  <li>✓ Fonctionnalités de base</li>
                  <li>✓ Une plateforme</li>
                  <li>✓ Support 3 mois</li>
                </ul>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 border rounded-lg bg-blue-50"
              >
                <h3 className="text-xl font-semibold mb-4">Standard</h3>
                <p className="text-3xl font-bold mb-4">À partir de 4999€</p>
                <ul className="space-y-2 mb-6">
                  <li>✓ Fonctionnalités avancées</li>
                  <li>✓ Multi-plateformes</li>
                  <li>✓ Support 6 mois</li>
                  <li>✓ Analytics intégrés</li>
                </ul>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 border rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                <p className="text-3xl font-bold mb-4">Sur devis</p>
                <ul className="space-y-2 mb-6">
                  <li>✓ Solution complète</li>
                  <li>✓ Intégrations sur mesure</li>
                  <li>✓ Support premium</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Form Section */}
      <AnimatedSection>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center text-[#3586FF]">Demander un Devis</h2>
            <ContactForm />
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}