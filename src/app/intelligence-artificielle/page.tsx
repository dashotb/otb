"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedCard } from '@/components/AnimatedCard';

export default function IntelligenceArtificielle() {
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
          Intelligence Artificielle
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto px-4"
        >
          Transformez votre entreprise avec la puissance de l'IA
        </motion.p>
      </section>

      {/* Description Section */}
      <AnimatedSection>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center text-[#3586FF]">L'IA pour votre Entreprise</h2>
            <p className="text-lg text-gray-700 mb-6">
              L'Intelligence Artificielle représente une révolution technologique qui permet d'automatiser des tâches complexes, d'analyser de grandes quantités de données et de prendre des décisions éclairées basées sur des algorithmes avancés.
            </p>
            <p className="text-lg text-gray-700">
              Intégrer l'IA dans votre entreprise peut significativement améliorer votre efficacité opérationnelle, votre service client et votre capacité à innover.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-semibold mb-12 text-center text-[#3586FF]">Solutions et Avantages</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation & Leadership",
                items: [
                  "Positionnement avant-gardiste",
                  "Leadership technologique",
                  "Avantage concurrentiel",
                  "Image d'entreprise innovante"
                ]
              },
              {
                title: "Expérience Client",
                items: [
                  "Service client 24/7",
                  "Personnalisation avancée",
                  "Réponses instantanées",
                  "Satisfaction accrue"
                ]
              },
              {
                title: "Efficacité Opérationnelle",
                items: [
                  "Automatisation intelligente",
                  "Réduction des erreurs",
                  "Optimisation des processus",
                  "Productivité augmentée"
                ]
              },
              {
                title: "Prise de Décision",
                items: [
                  "Analyses prédictives",
                  "Insights data-driven",
                  "Anticipation des tendances",
                  "Décisions éclairées"
                ]
              },
              {
                title: "Croissance Business",
                items: [
                  "Nouveaux marchés accessibles",
                  "Opportunités d'innovation",
                  "Scalabilité facilitée",
                  "ROI optimisé"
                ]
              },
              {
                title: "Évolution Continue",
                items: [
                  "Apprentissage constant",
                  "Adaptation au marché",
                  "Amélioration continue",
                  "Support expert"
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
                title: "Automatisation Avancée",
                items: [
                  "Traitement automatique des documents",
                  "Classification intelligente",
                  "Extraction de données",
                  "Workflows adaptatifs"
                ]
              },
              {
                title: "Outils IA Intégrés",
                items: [
                  "Assistants virtuels",
                  "Analyse prédictive",
                  "Reconnaissance d'images",
                  "Traitement du langage naturel"
                ]
              },
              {
                title: "Gain de Productivité",
                items: [
                  "Réduction des tâches manuelles",
                  "Accélération des processus",
                  "Diminution des erreurs",
                  "Optimisation du temps"
                ]
              },
              {
                title: "Support Intelligent",
                items: [
                  "Chatbots 24/7",
                  "Résolution automatique",
                  "Apprentissage continu",
                  "Assistance contextuelle"
                ]
              },
              {
                title: "Analyse & Insights",
                items: [
                  "Analyse en temps réel",
                  "Détection d'anomalies",
                  "Prévisions avancées",
                  "Recommandations intelligentes"
                ]
              },
              {
                title: "Personnalisation",
                items: [
                  "Adaptation aux besoins",
                  "Apprentissage des préférences",
                  "Évolution continue",
                  "Solutions sur mesure"
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
                <AccordionTrigger>Comment l'IA peut-elle bénéficier à mon entreprise ?</AccordionTrigger>
                <AccordionContent>
                  L'IA peut améliorer l'efficacité opérationnelle, automatiser les tâches répétitives, analyser les données clients et optimiser la prise de décision. Elle permet également de personnaliser l'expérience client et de prédire les tendances du marché.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Quelles données sont nécessaires pour l'IA ?</AccordionTrigger>
                <AccordionContent>
                  Le type de données dépend de vos objectifs, mais généralement, nous utilisons les données existantes de votre entreprise tout en respectant les normes de confidentialité. Plus les données sont nombreuses et de qualité, plus les résultats seront pertinents.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Combien de temps faut-il pour voir des résultats ?</AccordionTrigger>
                <AccordionContent>
                  Les premiers résultats sont généralement visibles après 2-3 mois d'implémentation, avec une amélioration continue au fil du temps. L'IA s'améliore constamment grâce à l'apprentissage automatique.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Comment assurez-vous la confidentialité des données ?</AccordionTrigger>
                <AccordionContent>
                  Nous appliquons des protocoles stricts de sécurité et de confidentialité : chiffrement des données, accès contrôlé, conformité RGPD, et audits réguliers. Vos données restent votre propriété et ne sont jamais partagées.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Quelle formation est nécessaire pour utiliser l'IA ?</AccordionTrigger>
                <AccordionContent>
                  Nous fournissons une formation complète à votre équipe et développons des interfaces utilisateur intuitives. Un support continu est assuré pour accompagner la prise en main et l'utilisation optimale des outils.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>L'IA peut-elle s'intégrer à nos systèmes existants ?</AccordionTrigger>
                <AccordionContent>
                  Oui, nos solutions d'IA sont conçues pour s'intégrer harmonieusement avec vos systèmes existants (CRM, ERP, etc.). Nous développons des connecteurs personnalisés pour assurer une intégration fluide et efficace.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>Comment mesurez-vous le ROI de l'IA ?</AccordionTrigger>
                <AccordionContent>
                  Nous définissons des KPIs spécifiques à votre activité et mettons en place des outils de suivi détaillés. Les métriques peuvent inclure : gain de temps, réduction des coûts, amélioration de la satisfaction client, augmentation des ventes, etc.
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
                <h3 className="text-xl font-semibold mb-4">Découverte</h3>
                <p className="text-3xl font-bold mb-4">À partir de 5000€</p>
                <ul className="space-y-2 mb-6">
                  <li>✓ Analyse des besoins</li>
                  <li>✓ Preuve de concept</li>
                  <li>✓ 1 cas d'usage</li>
                </ul>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 border rounded-lg bg-blue-50"
              >
                <h3 className="text-xl font-semibold mb-4">Business</h3>
                <p className="text-3xl font-bold mb-4">À partir de 15000€</p>
                <ul className="space-y-2 mb-6">
                  <li>✓ Solution complète</li>
                  <li>✓ 3 cas d'usage</li>
                  <li>✓ Formation incluse</li>
                  <li>✓ Support 6 mois</li>
                </ul>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 border rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                <p className="text-3xl font-bold mb-4">Sur devis</p>
                <ul className="space-y-2 mb-6">
                  <li>✓ Solution sur mesure</li>
                  <li>✓ Cas d'usage illimités</li>
                  <li>✓ Support dédié</li>
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