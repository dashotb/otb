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

export default function SitesVitrine() {
  const data = [
    "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fzidi-comp.png?alt=media&token=017224cf-ba53-4200-89f2-dbc88a9ea422",
    "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fvc-comp.png?alt=media&token=2a3ff9ea-f6bc-4f2e-9f42-eef98e2fe000",
    "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Fss-comp.png?alt=media&token=395c1a64-ea7b-498e-af24-55493e397d0a",
    "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.firebasestorage.app/o/Otb%2Fimage%2Fclients%2Farka-comp.png?alt=media&token=683fd189-d764-418e-bbd3-b47a1e474fd4",
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
          Sites Vitrine
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto px-4"
        >
          Votre présence en ligne professionnelle et impactante
        </motion.p>
      </section>

      {/* Carousel Section */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl  font-semibold text-center text-[#3586FF]">Nos Réalisations</h2>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              
              pagination={{ clickable: true }}
              className="overflow-hidden w-[80vw] h-[25vh] md:w-[60vw] md:h-[75vh] mx-auto  object-cover rounded-[0.5rem] "
            >
              <SwiperSlide>
                  <img
                    src={data[0]}
                    alt="Project 1"
                    
                    className="object-cover w-full h-full rounded-lg"
                  />
              </SwiperSlide>
              <SwiperSlide>

                  <img
                    src={data[1]}
                    alt="Project 2"
                    
                    className="object-cover w-full h-full  rounded-lg"
                  />
  
              </SwiperSlide>
              <SwiperSlide>

                  <img
                    src={data[2]}
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
            <h2 className="text-3xl font-semibold mb-8 text-center text-[#3586FF]">Qu'est-ce qu'un Site Vitrine ?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Un site vitrine est votre carte de visite numérique, une plateforme dédiée à présenter votre entreprise, vos services et votre expertise de manière professionnelle et attractive. C'est le premier point de contact digital avec vos clients potentiels.
            </p>
            <p className="text-lg text-gray-700">
              Il permet de renforcer votre crédibilité, d'augmenter votre visibilité en ligne et de générer des leads qualifiés pour votre entreprise.
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
                title: "Image de Marque",
                items: [
                  "Renforcement de votre crédibilité professionnelle",
                  "Différenciation face à la concurrence",
                  "Cohérence visuelle avec votre identité",
                  "Valorisation de votre expertise"
                ]
              },
              {
                title: "Présentation Professionnelle",
                items: [
                  "Mise en valeur de vos produits/services",
                  "Navigation intuitive et ergonomique",
                  "Contenu structuré et persuasif",
                  "Design moderne et impactant"
                ]
              },
              {
                title: "Acquisition Client",
                items: [
                  "Élargissement de votre audience",
                  "Génération de leads qualifiés",
                  "Conversion des visiteurs en clients",
                  "Fidélisation de votre clientèle"
                ]
              },
              {
                title: "Visibilité Digitale",
                items: [
                  "Optimisation pour les moteurs de recherche",
                  "Présence 24/7 sur internet",
                  "Rayonnement géographique étendu",
                  "Analyse des performances"
                ]
              },
              {
                title: "Engagement Client",
                items: [
                  "Interactions personnalisées",
                  "Formulaires de contact optimisés",
                  "Intégration réseaux sociaux",
                  "Témoignages et avis clients"
                ]
              },
              {
                title: "Évolution Continue",
                items: [
                  "Mises à jour régulières",
                  "Adaptation aux tendances",
                  "Scalabilité du contenu",
                  "Support technique réactif"
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
                title: "Gain de Temps",
                items: [
                  "Mise à jour instantanée du contenu",
                  "Automatisation des publications",
                  "Gestion centralisée des médias",
                  "Planification simplifiée"
                ]
              },
              {
                title: "Outils Intégrés",
                items: [
                  "CMS intuitif pour les contenus",
                  "Tableau de bord analytics",
                  "Gestionnaire de médias",
                  "Éditeur visuel WYSIWYG"
                ]
              },
              {
                title: "Automatisation",
                items: [
                  "Sauvegarde automatique",
                  "Optimisation des images",
                  "Génération de sitemap",
                  "Mise en cache intelligente"
                ]
              },
              {
                title: "Productivité",
                items: [
                  "Workflows optimisés",
                  "Collaboration en temps réel",
                  "Gestion des versions",
                  "Templates réutilisables"
                ]
              },
              {
                title: "Maintenance Facilitée",
                items: [
                  "Mises à jour en 1 clic",
                  "Monitoring automatique",
                  "Sauvegardes régulières",
                  "Support technique réactif"
                ]
              },
              {
                title: "Analyse & Reporting",
                items: [
                  "Rapports automatisés",
                  "Suivi des performances",
                  "Analyse du trafic",
                  "KPIs personnalisables"
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
                <AccordionTrigger>Combien de temps faut-il pour créer un site vitrine ?</AccordionTrigger>
                <AccordionContent>
                  En général, la création d'un site vitrine prend entre 4 et 8 semaines, selon la complexité du projet et le nombre de pages nécessaires. Ce délai comprend la phase de conception, le développement, les révisions et les tests avant la mise en ligne.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Le site sera-t-il responsive ?</AccordionTrigger>
                <AccordionContent>
                  Oui, tous nos sites sont responsive par défaut et s'adaptent parfaitement à tous les appareils (ordinateurs, tablettes, smartphones). Nous testons rigoureusement chaque site sur différents appareils et navigateurs pour garantir une expérience utilisateur optimale.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Puis-je mettre à jour mon site moi-même ?</AccordionTrigger>
                <AccordionContent>
                  Oui, nous intégrons un système de gestion de contenu intuitif qui vous permet de mettre à jour votre contenu facilement. Une formation complète est fournie, et notre équipe reste disponible pour vous accompagner dans la gestion de votre site.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Comment le référencement (SEO) est-il géré ?</AccordionTrigger>
                <AccordionContent>
                  Nous intégrons les meilleures pratiques SEO dès la conception : structure optimisée, temps de chargement rapide, contenu de qualité, balises méta personnalisées, et compatibilité mobile. Un suivi régulier des performances est inclus dans nos forfaits maintenance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Quelles fonctionnalités sont incluses dans un site vitrine ?</AccordionTrigger>
                <AccordionContent>
                  Nos sites incluent par défaut : formulaire de contact, intégration réseaux sociaux, galerie d'images, carte interactive, statistiques de visites, et optimisation SEO. Des fonctionnalités supplémentaires peuvent être ajoutées selon vos besoins.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Proposez-vous un service de maintenance ?</AccordionTrigger>
                <AccordionContent>
                  Oui, nous proposons différentes formules de maintenance incluant : mises à jour de sécurité, sauvegardes régulières, modifications mineures du contenu, support technique, et monitoring des performances. Vous pouvez choisir la formule adaptée à vos besoins.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>Comment gérez-vous l'hébergement du site ?</AccordionTrigger>
                <AccordionContent>
                  Nous travaillons avec des hébergeurs de premier plan offrant d'excellentes performances et une sécurité optimale. L'hébergement inclut : certificat SSL, sauvegardes automatiques, protection DDoS, et support technique 24/7.
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
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Essentiel</h3>
                <p className="text-3xl font-bold mb-4">À partir de 799€</p>
                <ul className="space-y-2 mb-6">
                  <li>✓ 5 pages</li>
                  <li>✓ Design responsive</li>
                  <li>✓ SEO de base</li>
                </ul>
              </div>
              <div className="p-6 border rounded-lg bg-blue-50">
                <h3 className="text-xl font-semibold mb-4">Pro</h3>
                <p className="text-3xl font-bold mb-4">À partir de 1499€</p>
                <ul className="space-y-2 mb-6">
                  <li>✓ 10 pages</li>
                  <li>✓ Design responsive</li>
                  <li>✓ SEO avancé</li>
                  <li>✓ Blog intégré</li>
                </ul>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Sur Mesure</h3>
                <p className="text-3xl font-bold mb-4">Sur devis</p>
                <ul className="space-y-2 mb-6">
                  <li>✓ Pages illimitées</li>
                  <li>✓ Fonctionnalités personnalisées</li>
                  <li>✓ SEO premium</li>
                </ul>
              </div>
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