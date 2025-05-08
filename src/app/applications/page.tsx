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
import Navbar from '@/components/Navbar';

export default function Applications() {
  const data = [
    {
      name: "HJ Services Autos",
      type: "App",
      logo: "",
      description: "Application de gestion pour garage automobile",
      comp: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Fhj-comp.png?alt=media&token=db6408d2-9e61-4361-b712-ac36bc20dd1b",
      ipad: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Fhj-ipad.png?alt=media&token=7291cd47-fba9-4341-ac10-ff82bbb88d28",
      phone: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Fhj-phone.png?alt=media&token=05f5e6b4-cd0d-462c-bba7-1cc1528162d9"
    },
    {
      name: "Patisserie Artisanale",
      type: "App",
      logo: "",
      description: "Application de commande pour pâtisserie",
      comp: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Fpatissier-comp.png?alt=media&token=733829a6-5022-49dc-9818-222ac28ddf1c",
      ipad: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Fpatissier-ipad.png?alt=media&token=83b3a280-c761-44b0-a742-becf64996403",
      phone: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Fpatissier-phone.png?alt=media&token=811d9014-b647-4b18-859e-964174388077"
    },
    {
      name: "Drive Phone",
      type: "App",
      logo: "",
      description: "Application de réparation de smartphones",
      comp: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Fdp-comp.png?alt=media&token=d5e48d59-ef27-4b88-8bb0-1de5943d7537",
      ipad: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Fdp-ipad.png?alt=media&token=80f0d190-11a9-43b8-b828-0f74337450f5",
      phone: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Fdp-phone.png?alt=media&token=99dfcd94-13d8-4d75-90cf-620dd9c604e4"
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Video Background */}
      <section className="h-screen bg-gradient-to-b from-blue-50 content-center to-white  relative overflow-hidden">
        <div className="absolute inset-0 opacity-50 ">
          <div className="absolute z-1 inset-0 bg-[url(/image.png)] bg-cover"></div>
          <div className='absolute z-2 inset-0  bg-gradient-to-b from-transparent to-white'></div>
        </div>
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2 space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold text-[#3586FF]"
            >
              Applications Web & Mobile
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Transformez votre vision en réalité avec des applications sur mesure. Notre expertise en développement vous garantit des solutions performantes et innovantes.
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
              <img 
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Développement d'applications" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-semibold text-[#3586FF]">Applications innovantes</div>
                <div className="text-xs text-gray-600">Web & Mobile</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Applications Livrées", icon: "🚀" },
              { number: "99%", label: "Taux de Satisfaction", icon: "⭐" },
              { number: "15+", label: "Technologies Maîtrisées", icon: "💻" },
              { number: "24/7", label: "Support Technique", icon: "🛠️" }
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

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-[#3586FF] mb-12">
              Technologies & Expertise
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                icon: "🎨",
                techs: [
                  "React / Next.js",
                  "Vue.js / Nuxt",
                  "React Native",
                  "Flutter"
                ],
                description: "Interfaces modernes et réactives"
              },
              {
                title: "Backend",
                icon: "⚙️",
                techs: [
                  "Node.js",
                  "Python",
                  "PHP / Laravel",
                  "Java Spring"
                ],
                description: "APIs robustes et évolutives"
              },
              {
                title: "Base de données",
                icon: "🗄️",
                techs: [
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                  "Firebase"
                ],
                description: "Stockage optimisé et sécurisé"
              }
            ].map((tech, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                  <p className="text-gray-600 mb-4">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.techs.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-[#3586FF] mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-[#3586FF] mb-12">
              Nos Réalisations
            </h2>
          </AnimatedSection>
          
          {data.map((project, index) => (
            <AnimatedCard key={index} delay={index * 0.2}>
              <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-4 p-8 bg-gray-50">
                  <div className="relative">
                    <img 
                      src={project.comp} 
                      alt={`${project.name} Desktop`}
                      className="rounded-lg shadow-md"
                    />
                    <div className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded text-sm">Desktop</div>
                  </div>
                  <div className="relative">
                    <img 
                      src={project.ipad} 
                      alt={`${project.name} Tablet`}
                      className="rounded-lg shadow-md"
                    />
                    <div className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded text-sm">Tablet</div>
                  </div>
                  <div className="relative">
                    <img 
                      src={project.phone} 
                      alt={`${project.name} Mobile`}
                      className="rounded-lg shadow-md"
                    />
                    <div className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded text-sm">Mobile</div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-[#3586FF] mb-12">
              Nos Services
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Applications Web",
                description: "Solutions web performantes et évolutives",
                features: [
                  "Interface responsive",
                  "PWA disponible",
                  "Performance optimisée",
                  "Sécurité renforcée"
                ],
                image: "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                title: "Applications Mobile",
                description: "Apps natives et cross-platform",
                features: [
                  "iOS & Android",
                  "UX optimisée",
                  "Mode hors-ligne",
                  "Push notifications"
                ],
                image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                title: "Solutions Métier",
                description: "Applications sur mesure pour votre activité",
                features: [
                  "Analyse des besoins",
                  "Développement agile",
                  "Intégration SI",
                  "Support dédié"
                ],
                image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            ].map((service, index) => (
              <AnimatedCard key={index} delay={index * 0.2}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-[#3586FF] mr-2">✓</span>
                          {feature}
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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-[#3586FF] mb-12">
              Notre Méthodologie
            </h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            {[
              {
                title: "1. Analyse & Conception",
                description: "Définition détaillée du projet",
                details: [
                  "Analyse des besoins",
                  "Spécifications fonctionnelles",
                  "Architecture technique",
                  "Prototypage"
                ]
              },
              {
                title: "2. Développement",
                description: "Création de votre application",
                details: [
                  "Développement agile",
                  "Tests unitaires",
                  "Revue de code",
                  "Intégration continue"
                ]
              },
              {
                title: "3. Tests & Validation",
                description: "Assurance qualité complète",
                details: [
                  "Tests fonctionnels",
                  "Tests de performance",
                  "Tests de sécurité",
                  "Validation client"
                ]
              },
              {
                title: "4. Déploiement & Support",
                description: "Mise en production et maintenance",
                details: [
                  "Déploiement",
                  "Formation",
                  "Support technique",
                  "Maintenance évolutive"
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
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-[#3586FF] mb-12">
              Questions Fréquentes
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Quel est le délai de développement d'une application ?",
                  answer: "Le délai varie selon la complexité du projet, généralement entre 3 et 6 mois. Nous adoptons une approche agile permettant des livraisons régulières et une mise en production progressive des fonctionnalités."
                },
                {
                  question: "Comment assurez-vous la qualité du code ?",
                  answer: "Nous suivons les meilleures pratiques de développement : tests automatisés, revue de code, intégration continue, et monitoring des performances. Notre équipe utilise des outils modernes pour garantir un code maintenable et évolutif."
                },
                {
                  question: "Proposez-vous un support après le lancement ?",
                  answer: "Oui, nous offrons différentes formules de support et maintenance incluant : corrections de bugs, mises à jour de sécurité, évolutions fonctionnelles, et support utilisateur. Notre équipe reste disponible pour assurer le bon fonctionnement de votre application."
                },
                {
                  question: "Les applications sont-elles sécurisées ?",
                  answer: "La sécurité est une priorité. Nous implémentons les meilleures pratiques de sécurité : authentification forte, chiffrement des données, protection contre les attaques courantes, et audits réguliers. Nous assurons également la conformité RGPD."
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