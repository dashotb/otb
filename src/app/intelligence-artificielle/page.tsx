"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactForm } from "@/components/ui/ContactForm";
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { AnimatedCard } from '@/components/ui/AnimatedCard';
import Navbar from '@/components/Navbar';

export default function IntelligenceArtificielle() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Interactive Animation */}
      <section className="h-screen content-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-50 ">
          <div className="absolute z-1 inset-0 bg-[url(/image.png)] bg-cover"></div>
          <div className='absolute z-2 inset-0  bg-gradient-to-b from-transparent to-white'></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2 space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold text-[#3586FF]"
            >
              Intelligence Artificielle pour Entreprises
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Transformez votre entreprise avec des solutions d'IA innovantes et sur mesure. Notre expertise vous permet d'automatiser vos processus, d'optimiser vos décisions et d'améliorer votre compétitivité.
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
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <div className="relative">
              <iframe src="https://lottie.host/embed/70f4d6b3-c7b7-41e6-a48f-531dd9cee2d1/6dDDNt0cvs.lottie" className={`'w-[40vw] h-[30vh] md:w-[40vw] md:h-[50vh] mx-auto mt-24 mt-7 2xl:mt-14 md:py-12 '`}></iframe>
              <div className="absolute bottom-0 md:bottom-8 -right-6 md:right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-semibold text-[#3586FF]">IA de dernière génération</div>
                <div className="text-xs text-gray-600">Optimisée pour votre business</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "95%", label: "Précision IA", icon: "🎯" },
              { number: "60%", label: "Gain de Productivité", icon: "📈" },
              { number: "24/7", label: "Disponibilité", icon: "⚡" },
              { number: "100+", label: "Projets IA", icon: "🚀" }
            ].map((stat, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-bold text-[#3586FF] mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-[#3586FF] mb-12">
              Cas d'Utilisation
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Service Client Intelligent",
                description: "Chatbots et assistants virtuels disponibles 24/7",
                image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                benefits: [
                  "Réponses instantanées",
                  "Personnalisation avancée",
                  "Réduction des coûts",
                  "Satisfaction client accrue"
                ]
              },
              {
                title: "Analyse Prédictive",
                description: "Anticipez les tendances et optimisez vos décisions",
                image: "https://images.pexels.com/photos/7567473/pexels-photo-7567473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                benefits: [
                  "Prévisions précises",
                  "Optimisation des stocks",
                  "Réduction des risques",
                  "ROI amélioré"
                ]
              },
              {
                title: "Automatisation Intelligente",
                description: "Automatisez vos processus métier complexes",
                image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                benefits: [
                  "Gain de temps",
                  "Réduction des erreurs",
                  "Productivité accrue",
                  "Scalabilité facilitée"
                ]
              }
            ].map((useCase, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-gray-600 mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <span className="text-[#3586FF] mr-2">✓</span>
                          {benefit}
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

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-[#3586FF] mb-12">
              Technologies IA
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Machine Learning",
                icon: "🤖",
                features: [
                  "Apprentissage supervisé",
                  "Deep Learning",
                  "Réseaux de neurones",
                  "Classification"
                ]
              },
              {
                title: "NLP",
                icon: "💬",
                features: [
                  "Analyse de texte",
                  "Sentiment analysis",
                  "Chatbots avancés",
                  "Traduction automatique"
                ]
              },
              {
                title: "Computer Vision",
                icon: "👁️",
                features: [
                  "Reconnaissance d'images",
                  "Détection d'objets",
                  "OCR avancé",
                  "Analyse vidéo"
                ]
              },
              {
                title: "Data Science",
                icon: "📊",
                features: [
                  "Big Data",
                  "Analyse prédictive",
                  "Visualisation",
                  "Data Mining"
                ]
              }
            ].map((tech, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{tech.title}</h3>
                  <ul className="text-left space-y-2">
                    {tech.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <span className="text-[#3586FF] mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
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
                title: "1. Analyse & Découverte",
                description: "Compréhension approfondie de vos besoins et objectifs",
                details: [
                  "Audit de l'existant",
                  "Analyse des besoins",
                  "Définition des objectifs",
                  "Étude de faisabilité"
                ]
              },
              {
                title: "2. Conception Solution",
                description: "Élaboration de la solution IA adaptée",
                details: [
                  "Architecture technique",
                  "Choix des technologies",
                  "Prototypage",
                  "Planning détaillé"
                ]
              },
              {
                title: "3. Développement & Tests",
                description: "Implémentation et validation de la solution",
                details: [
                  "Développement itératif",
                  "Tests continus",
                  "Optimisation",
                  "Validation client"
                ]
              },
              {
                title: "4. Déploiement & Support",
                description: "Mise en production et accompagnement",
                details: [
                  "Déploiement progressif",
                  "Formation utilisateurs",
                  "Monitoring",
                  "Support continu"
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

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-[#3586FF] mb-12">
              Questions Fréquentes
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Comment l'IA peut-elle bénéficier à mon entreprise ?",
                  answer: "L'IA peut améliorer l'efficacité opérationnelle, automatiser les tâches répétitives, analyser les données clients, optimiser la prise de décision et personnaliser l'expérience client. Elle permet de réduire les coûts tout en augmentant la productivité et la satisfaction client."
                },
                {
                  question: "Quel est le délai de mise en place d'une solution IA ?",
                  answer: "Le délai varie selon la complexité du projet, généralement entre 2 et 6 mois pour une première version fonctionnelle. Nous adoptons une approche progressive pour assurer une intégration réussie et des résultats rapides."
                },
                {
                  question: "Comment assurez-vous la sécurité des données ?",
                  answer: "Nous appliquons les meilleures pratiques de sécurité : chiffrement des données, accès contrôlé, conformité RGPD, et audits réguliers. Vos données restent confidentielles et sécurisées tout au long du processus."
                },
                {
                  question: "Quelle formation est nécessaire pour utiliser l'IA ?",
                  answer: "Nous fournissons une formation complète adaptée à vos équipes. Les solutions sont conçues pour être intuitives et faciles à utiliser. Un support continu est assuré pour garantir une adoption réussie."
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-[#3586FF] mb-12">
              Démarrez Votre Projet d'IA
            </h2>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}