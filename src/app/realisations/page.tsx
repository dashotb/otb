"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const projects = [
  {
    id: "hj-services-autos",
    name: "HJ Services Autos",
    type: "application",
    description: "Application de gestion pour garage automobile",
    image: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Fhj-comp.png?alt=media&token=db6408d2-9e61-4361-b712-ac36bc20dd1b",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: "patisserie-artisanale",
    name: "Patisserie Artisanale",
    type: "application",
    description: "Application de commande pour pâtisserie",
    image: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Fpatissier-comp.png?alt=media&token=733829a6-5022-49dc-9818-222ac28ddf1c",
    technologies: ["Next.js", "Supabase", "Stripe"]
  },
  {
    id: "drive-phone",
    name: "Drive Phone",
    type: "site-vitrine",
    description: "Site vitrine pour réparation de smartphones",
    image: "https://firebasestorage.googleapis.com/v0/b/ontheboard-e3f0f.appspot.com/o/Otb%2Fimage%2Fclients%2Fdp-comp.png?alt=media&token=d5e48d59-ef27-4b88-8bb0-1de5943d7537",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"]
  }
];

export default function Portfolio() {
  const [filter, setFilter] = React.useState('tous');
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  React.useEffect(() => {
    if (filter === 'tous') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.type === filter));
    }
  }, [filter]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-[#3586FF] mb-8"
          >
            Nos Réalisations
          </motion.h1>

          <div className="flex justify-center gap-4 mb-12">
            {['tous', 'site-vitrine', 'application', 'ia'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === type 
                    ? 'bg-[#3586FF] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Link href={`/realisations/${project.id}`}>
                  <div className="relative h-48">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm">
                      {project.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
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
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}