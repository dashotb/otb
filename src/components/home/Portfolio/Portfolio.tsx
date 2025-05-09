import useIsVisible from "@/hooks/useIsVisible";
import { searchIcon } from "@/icons/icons";
import { DP_logo, iMac, iPhone } from "@/img/images";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { useRef } from "react";


export default function Portfolio(){
    const targetClients = useRef(null);
    const project: any = projects[0];

    return(
        <div className="scroller-section h-[100dvh] lg:h-[100vh] w-screen flex flex-row content-center relative z-10  mb-0.5" id="showcases" ref={targetClients}>
            <div className={`${useIsVisible(targetClients) ? "hidden lg:flex transform animate-slideleftskew  opacity-0 absolute inner-shadow-reverse border-left -left-[10vw] -top-3 w-[50vw] h-[100vh] transform skew-y-12 -rotate-12 bg-neutral-200 overflow-hidden flex flex-col" : "hidden opacity-0 translate-y-[100px]"}`}>
              <img src={DP_logo} alt="drive phone" className="transform -skew-y-12 rotate-12 self-center ml-64 2xl:ml-80 mt-20 2xl:mt-40 w-32 absolute"/>
              <div className="flex w-full items-center 2xl:pl-24 2xl:mt-20">
                <a href="https://www.drivephone.fr"  className="flex flex-row self-center ml-56 2xl:ml-64 italic mt-56  transform -skew-y-12 rotate-12 px-2 rounded-full w-fit bg-white">
                  <div className=" text-xl p-2 text-[#3586FF] pr-[10vw] 2xl:pr-64">https://www.drivephone.fr</div>
                  <img src={searchIcon} alt="search_icon" className="w-6 h-6 self-center mr-2"/>
                </a>
              </div>
              <div className="flex flex-row w-[40vw] items-center h-full 2xl:h-[40vh] pb-12 2xl:pt-24 mx-auto">
                <img src={iMac} alt="iMac" className="tansform -skew-y-12 rotate-12 w-64 2xl:w-96 h-64 2xl:h-96 ml-52 2xl:ml-72"/>
                <img src={iPhone} alt="iPhone" className="tansform -skew-y-12 rotate-12 w-12 2xl:w-16 h-24 2xl:h-32 ml-8 2xl:ml-12 mt-36 2xl:mt-60"/>
              </div>
            </div>
            <div className={`${useIsVisible(targetClients) ? "transform animate-slideright300 opacity-0 flex flex-col mx-auto px-5 lg:px-0 mt-auto mb-16 h-[50dvh] lg:h-screen lg:w-[45vw] lg:ml-[50vw]": "hidden opacity-0 translate-y-[100px]"}`}>
              <div className="no-scrollbar hidden lg:block lg:py-24 h-[80vh] overflow-y-scroll">
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
                          {project.steps.idea.challenges.map((challenge: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
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
                          {project.steps.idea.solutions.map((solution: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
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
                      {Object.entries(project.steps.proposal.technicalStack as Record<string, string[]>).map(([category, techs]) => (
                        <div key={category} className="bg-gray-50 rounded-lg p-4">
                          <h3 className="text-lg font-semibold mb-3 capitalize">{category}</h3>
                          <ul className="space-y-2">
                            {techs.map((tech: string, index: number) => (
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
                        {project.steps.proposal.keyFeatures.map((feature: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
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
                      {project.steps.mvp.phases.map((phase: { name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; duration: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; features: any; activities: any; }, index: React.Key | null | undefined) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4">
                          <h3 className="text-lg font-semibold mb-2">{phase.name}</h3>
                          <p className="text-gray-500 mb-3">Durée: {phase.duration}</p>
                          <ul className="space-y-2">
                            {(phase.features || phase.activities).map((item: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, i: React.Key | null | undefined) => (
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
                      {project.steps.launch.steps.map((step: { title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; tasks: any[]; }, index: React.Key | null | undefined) => (
                        <div key={index} className="relative pl-8">
                          <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                          <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-blue-200"></div>
                          <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                          <ul className="space-y-2">
                            {step.tasks.map((task: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, i: React.Key | null | undefined) => (
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
                          {project.steps.followUp.services.map((service: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
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
                          {Object.entries(project.steps.followUp.metrics as Record<string, string>).map(([key, value]) => (
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
              <div className="lg:hidden h-full w-full rounded-lg bg-white shadow-lg flex mx-auto p-3">
                <div className="flex flex-col">
                    <h3 className="text-[#3586FF] text-lg font-semibold ">Description:</h3>
                    <p className="text-gray-600">{project.steps.idea.description}</p>
                    <h3 className="text-[#3586FF] text-lg font-semibold mt-5">Fonctionnalités:</h3>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                    {project.steps.proposal.keyFeatures.map((feature: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: React.Key | null | undefined) => (
                        <div key={index} className="flex items-center bg-blue-50 p-1 rounded-lg">
                        <span className="text-blue-500 mr-2">✓</span>
                        {feature}
                        </div>
                    ))}
                    </div>
                </div>
              </div>
              <div className="gap-5 flex h-[20vh] items-center">
                <a href="">
                    <button className="p-2 px-3 text-white rounded-md bg-[#3586FF] hover:bg-blue-700 h-fit">Plus d'informations</button>
                </a>
                <a href="/realisations">
                    <button className="p-2 px-3 text-[#3586FF] rounded-md hover:underline transition duration-300 h-fit">Tous les Projets</button>
                </a>
              </div>

            </div>
        </div>
    )
}