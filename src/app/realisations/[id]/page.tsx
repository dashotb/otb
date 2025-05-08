"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from '@/components/Navbar';

const projects: Record<string, {
  name: string;
  type: string;
  description: string;
  images: string[];
  technologies: string[];
  launchDate: string;
  url: string;
  steps: {
    idea: { title: string; description: string; challenges: string[]; solutions: string[] };
    proposal: { title: string; description: string; technicalStack: Record<string, string[]>; keyFeatures: string[] };
    mvp: { title: string; description: string; phases: Array<{ name: string; duration: string; features?: string[]; activities?: string[] }> };
    launch: { title: string; description: string; steps: Array<{ title: string; tasks: string[] }> };
    followUp: { title: string; description: string; services: string[]; metrics: Record<string, string> };
  };
}> = {
  "hj-services-autos": {
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
};

export default function ProjectDetail() {
  const params = useParams();
  const id = params.id as string;
  const project = projects[id];

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  pagination={{ clickable: true }}
                  className="mb-6"
                >
                  {project.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`${project.name} - Vue ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Technologies</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Date de mise en ligne</h3>
                    <p className="mt-1">{new Date(project.launchDate).toLocaleDateString()}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">URL du projet</h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline mt-1 block"
                    >
                      {project.url}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-2/3">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-[#3586FF] mb-6"
              >
                {project.name}
              </motion.h1>

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
                        {project.steps.idea.challenges.map((challenge, index) => (
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
                        {project.steps.idea.solutions.map((solution, index) => (
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
                    {Object.entries(project.steps.proposal.technicalStack).map(([category, techs]) => (
                      <div key={category} className="bg-gray-50 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-3 capitalize">{category}</h3>
                        <ul className="space-y-2">
                          {techs.map((tech, index) => (
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
                      {project.steps.proposal.keyFeatures.map((feature, index) => (
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
                    {project.steps.mvp.phases.map((phase, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <h3 className="text-lg font-semibold mb-2">{phase.name}</h3>
                        <p className="text-gray-500 mb-3">Durée: {phase.duration}</p>
                        <ul className="space-y-2">
                          {(phase.features ?? phase.activities ?? []).map((item, i) => (
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
                    {project.steps.launch.steps.map((step, index) => (
                      <div key={index} className="relative pl-8">
                        <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                        <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-blue-200"></div>
                        <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                        <ul className="space-y-2">
                          {step.tasks.map((task, i) => (
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
                        {project.steps.followUp.services.map((service, index) => (
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
                        {Object.entries(project.steps.followUp.metrics).map(([key, value]) => (
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
          </div>
        </div>
      </div>
    </main>
  );
}