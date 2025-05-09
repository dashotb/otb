import useIsVisible from "@/hooks/useIsVisible";
import { seoIcon, magaeIcon, emailIcon, ecommerceIcon, creatiiveIcon, blockchainIcon, cyberrsecIcon, robotIcon } from "@/icons/icons";
import { useRef } from "react";


export default function Process(){
    const targetDetails = useRef(null);


    return(
        <div className="scroller-section h-[100dvh] lg:h-[100vh] px-4 lg:px-24 w-full flex flex-col relative mb-0.5" id="details" ref={targetDetails}>
            <div className="w-full h-[68dvh] lg:h-[68vh] mt-[5dvh] lg:mt-0 flex flex-col flex-col-reverse lg:flex-row justify-between relative">
              <div className="w-full lg:w-[40vw] grid grid-cols-4 2xl:gap-6 items-center self-center px-8 lg:px-0">
                <div className={`${useIsVisible(targetDetails) ? "group flex transform animate-slidedown1 opacity-0 w-20 h-20 lg:w-32  lg:h-32 2xl:w-52 2xl:h-52 rounded-lg mx-auto relative card transition ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
                  <img src={seoIcon} alt="-icon" className="p-5 lg:p-6 z-10 2xl:w-5/6 mx-auto self-center group-hover:blur-sm group-hover:opacity-25 transition duration-600"/>
                  <h3 className="hidden group-hover:block transform animate-appearText opacity-0 absolute top-0 bottom-0 left-0 right-0 w-full text-clip mx-auto m-auto z-0 text-center self-center text-[#46A6F7] font-semibold 2xl:text-2xl italic">Référen<span className="lg:hidden"><br />-</span>cement</h3>
                </div>
                <div className={`${useIsVisible(targetDetails) ? "group flex transform animate-slidedown2 opacity-0 w-20 h-20 lg:w-32  lg:h-32 2xl:w-52 2xl:h-52 rounded-lg mx-auto relative overflow-hidden card transition ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
                  <img src={magaeIcon} alt="-icon" className="p-5 lg:p-6 z-10 absolute top-0 bottom-0 2xl:w-5/6 mx-auto left-0 right-0 self-center group-hover:blur-sm group-hover:opacity-25 transition duration-600 "/>
                  <h3 className="hidden group-hover:block transform animate-appearText opacity-0 absolute top-0 bottom-0 left-0 right-0 w-full text-clip mx-auto m-auto z-0 text-center self-center text-[#46A6F7] font-semibold 2xl:text-2xl italic">Logiciel <br /> de Gestion</h3>
                </div>
                <div className={`${useIsVisible(targetDetails) ? "group flex transform animate-slidedown3 opacity-0 w-20 h-20 lg:w-32  lg:h-32 2xl:w-52 2xl:h-52 rounded-lg mx-auto card transition ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
                  <img src={emailIcon} alt="-icon" className="p-5 lg:p-6 z-10 2xl:w-5/6 mx-auto self-center group-hover:blur-sm group-hover:opacity-25 transition duration-600 "/>
                  <h3 className="hidden group-hover:block transform animate-appearText opacity-0 absolute top-0 bottom-0 left-0 right-0 w-full text-clip mx-auto m-auto z-0 text-center self-center text-[#46A6F7] font-semibold 2xl:text-2xl italic">Relation Client</h3>
                </div>
                <div className={`${useIsVisible(targetDetails) ? "group flex transform animate-slidedown4 opacity-0 w-20 h-20 lg:w-32  lg:h-32 2xl:w-52 2xl:h-52 rounded-lg mx-auto card transition ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
                  <img src={ecommerceIcon} alt="-icon" className="p-5 lg:p-6 z-10 2xl:w-5/6 mx-auto self-center group-hover:blur-sm group-hover:opacity-25 transition duration-600 "/>
                  <h3 className="hidden group-hover:block transform animate-appearText opacity-0 absolute top-0 bottom-0 left-0 right-0 w-full text-clip mx-auto m-auto z-0 text-center self-center text-[#46A6F7] font-semibold 2xl:text-2xl italic">E-Commerce</h3>
                </div> 
                <div className={`${useIsVisible(targetDetails) ? "group hover:z-50 flex transform animate-slideup1 opacity-0 w-20 h-20 lg:w-32  lg:h-32 2xl:w-52 2xl:h-52 rounded-lg mx-auto card transition ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
                  <img src={creatiiveIcon} alt="-icon" className="p-5 lg:p-6 z-10 2xl:w-5/6 mx-auto self-center group-hover:blur-sm group-hover:opacity-25 transition duration-600 "/>
                  <h3 className="hidden group-hover:block transform animate-appearText opacity-0 absolute top-0 bottom-0 left-0 right-0 w-full text-clip mx-auto m-auto z-0 text-center self-center text-[#46A6F7] font-semibold 2xl:text-2xl italic">Développ<span className="lg:hidden"><br />-</span>ement Créatif</h3>
                </div>
                <div className={`${useIsVisible(targetDetails) ? "group flex transform animate-slideup2 opacity-0 w-20 h-20 lg:w-32  lg:h-32 2xl:w-52 2xl:h-52 rounded-lg mx-auto card transition ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
                  <img src={blockchainIcon} alt="-icon" className="p-5 lg:p-6 z-10 2xl:w-5/6 mx-auto self-center group-hover:blur-sm group-hover:opacity-25 transition duration-600 "/>
                  <h3 className="hidden group-hover:block transform animate-appearText opacity-0 absolute top-0 bottom-0 left-0 right-0 w-full text-clip mx-auto m-auto z-0 text-center self-center text-[#46A6F7] font-semibold 2xl:text-2xl italic">Smart Contract</h3>
                </div>
                <div className={`${useIsVisible(targetDetails) ? "group flex transform animate-slideup3 opacity-0 w-20 h-20 lg:w-32  lg:h-32 2xl:w-52 2xl:h-52 rounded-lg mx-auto card transition ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
                  <img src={cyberrsecIcon} alt="-icon" className="p-5 lg:p-6 z-10 2xl:w-5/6 mx-auto self-center group-hover:blur-sm group-hover:opacity-25 transition duration-600 "/>
                  <h3 className="hidden group-hover:block transform animate-appearText opacity-0 absolute top-0 bottom-0 left-0 right-0 w-full text-clip mx-auto m-auto z-0 text-center self-center text-[#46A6F7] font-semibold 2xl:text-2xl italic">Cyber Sécurité</h3>
                </div>
                
                <div className={`${useIsVisible(targetDetails) ? "group flex transform animate-slideup4 opacity-0 w-20 h-20 lg:w-32  lg:h-32 2xl:w-52 2xl:h-52 rounded-lg mx-auto card transition ease-in-out duration-300": "hidden opacity-0 translate-y-[100px]"}`}>
                  <img src={robotIcon} alt="-icon" className="p-5 lg:p-6 z-10 2xl:w-5/6 mx-auto self-center group-hover:blur-sm group-hover:opacity-25 transition duration-600"/>
                  <h3 className="hidden group-hover:block transform animate-appearText opacity-0 absolute top-0 bottom-0 left-0 right-0 w-full text-clip mx-auto m-auto z-0 text-center self-center text-[#46A6F7] font-semibold 2xl:text-2xl italic">Intégarion d'IA</h3>
                </div>
              </div>
              <div className={`${useIsVisible(targetDetails) ? "transform animate-slideright300 opacity-0 flex flex-col lg:flex-col w-full lg:w-[50vw] text-white relative pt-16 h-full": "hidden opacity-0 translate-y-[100px]"}`}>
                <div className="lg:ml-16 h-1/3 content-center">
                    <div className="lg:w-full pt-2 md:pt-0">
                        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-[#3586FF] text-center">Le process de création</h2>
                        <p className="pt-2 lg:pt-5 leading-5 text-[#3586FF] text-xs lg:text-base 2xl:text-xl text-center">Découvrez les différentes étapes pour créer votre application, <br /> de l'idée à la prise en main...</p>
                    </div>
                </div>
                <div className="h-2/3 relative ">
                  <div className="absolute hidden lg:flex flex-col h-[50vw] w-[20vw] right-32 -top-56 2xl:-top-72 overflow-hidden overflow-y-scroll no-scrollbar -rotate-90">
                      <div className="inline-block rotate-90 mt-12 2xl:mt-32">
                          <div className="bg-[#3586FF] relative  w-48 h-48 2xl:w-64 2xl:h-64 rounded-[5px]">
                              <p className="absolute text-[5rem] leading-5 font-bold mt-10 mr-5 text-[#fff] z-[0]">1</p>
                              <h2 className="text-xl 2xl:text-2xl font-bold ml-7 relative z-[1] px-5 pt-5">Screening telephonique</h2>
                              <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5">20 min</p>
                              <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 leading-5 px-5">1er échange pour comprendre vos besoins.</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[5.5rem] 2xl:ml-32 z-[2] "><div className="bg-[#3586FF] w-[58rem] 2xl:w-[75rem] h-[0.2rem] rounded-[100px] absolute mt-2 mr-12 z-[2]"></div></div>
                      </div>
                      <div className="inline-block rotate-90">
                          <div className="bg-[#3586FF] relative w-48 h-48 2xl:w-64 2xl:h-64  rounded-[5px]">
                              <p className="absolute text-[5rem] leading-5 font-bold mt-10 mr-5 text-[#fff] z-[0]">2</p>
                              <h2 className="text-xl 2xl:text-2xl font-bold ml-7 relative z-[1] px-5 pt-5">Maquette <br />& Devis</h2>
                              {/* <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5">90 min</p> */}
                              <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5 leading-5">Présentation de ce que nous sommes en mesure de vous proposer.</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[5.5rem] 2xl:ml-32 z-[2] "></div>
                      </div>
                      <div className="inline-block rotate-90">
                          <div className="bg-[#3586FF] relative w-48 h-48 2xl:w-64 2xl:h-64  rounded-[5px]">
                          <p className="absolute text-[5rem] leading-5 font-bold mt-10 mr-5 text-[#fff] z-[0]">3</p>
                              <h2 className="text-xl 2xl:text-2xl font-bold ml-7 relative z-[1] px-5 pt-5">Création du MVP</h2>
                              {/* <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5 relative z-[1]">2h à 3h</p> */}
                              <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5 leading-5">Développement de la version de base de votre application.</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[5.5rem] 2xl:ml-32 z-[2] "></div>
                      </div>
                      <div className="inline-block rotate-90">
                          <div className="bg-[#3586FF] relative w-48 h-48 2xl:w-64 2xl:h-64  rounded-[5px]">
                          <p className="absolute text-[5rem] leading-5 font-bold mt-10 mr-5 text-[#fff] z-[0]">4</p>
                              <h2 className="text-xl 2xl:text-2xl font-bold ml-7 relative z-[1] px-5 pt-5">Mise en Ligne</h2>
                              {/* <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5 relative z-[1]">1h</p> */}
                              <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-10 px-5 leading-5">Déploiement et prise en main de votre application, une fois peaufinée.</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[5.5rem] 2xl:ml-32 z-[2] "></div>
                      </div>
                      <div className="inline-block rotate-90 mb-80">
                          <div className="bg-[#3586FF] relative w-48 h-48 2xl:w-64 2xl:h-64  rounded-[5px]">
                          <p className="absolute text-[5rem] leading-5 font-bold mr-5 mt-10 text-[#fff] z-[0]"></p>
                              <h2 className="text-xl 2xl:text-2xl font-bold ml-7 relative z-[1] px-5 pt-5">Suivi et Maintenance</h2>
                              <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5">Ca ne s'arrete pas là!</p>
                              <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5 leading-5">Accompagnement dans le maintien et les mises à jour de votre app.</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[5.5rem] 2xl:ml-32 z-[2] "></div>
                      </div>
                          
                  </div>
                  <div className="lg:hidden flex flex-row h-fit gap-x-6 w-full overflow-y-hidden overflow-x-scroll no-scrollbar my-6 mx-8">
                      <div className="inline-block">
                          <div className="bg-[#3586FF] relative  w-32 h-32 rounded-[5px]">
                              <p className="absolute text-[3.5rem] leading-5 font-bold -ml-1 mt-4 mr-2 text-[#fff] z-[0]">1</p>
                              <h2 className="text-base font-bold ml-5 relative leading-1 z-[1] px-0.5 pt-0.5">Screening telephonique</h2>
                              <p className="text-xs 2xl:text-lg 2xl:font-semibold pt-0.5 px-1">20 min</p>
                              <p className="text-xs 2xl:text-lg 2xl:font-semibold pt-0.5 leading-2 px-1">1er échange pour comprendre vos besoins.</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[3.5rem] 2xl:ml-32 z-[2] "><div className="bg-[#3586FF] w-[38rem] 2xl:w-[75rem] h-[0.2rem] rounded-[100px] absolute mt-2 mr-12 z-[2]"></div></div>
                      </div>
                      <div className="inline-block">
                          <div className="bg-[#3586FF] relative w-32 h-32 rounded-[5px]">
                              <p className="absolute text-[3.5rem] leading-5 font-bold -ml-1 mt-4 mr-2 text-[#fff] z-[0]">2</p>
                              <h2 className="text-base font-bold ml-7 relative leading-1 z-[1] px-0.5 pt-0.5">Maquette <br />& Devis</h2>
                              {/* <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5">90 min</p> */}
                              <p className="text-xs 2xl:text-lg 2xl:font-semibold pt-0.5 leading-2 px-1">Présentation de ce que nous sommes en mesure de vous proposer.</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[3.5rem] 2xl:ml-32 z-[2] "></div>
                      </div>
                      <div className="inline-block">
                          <div className="bg-[#3586FF] relative w-32 h-32 rounded-[5px]">
                          <p className="absolute text-[3.5rem] leading-5 font-bold -ml-1 mt-4 mr-2 text-[#fff] z-[0]">3</p>
                              <h2 className="text-base font-bold ml-7 relative leading-1 z-[1] px-0.5 pt-0.5">Création <br /> du MVP</h2>
                              {/* <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5 relative z-[1]">2h à 3h</p> */}
                              <p className="text-xs 2xl:text-lg 2xl:font-semibold pt-0.5 leading-2 px-1">Développement de la version de base de votre application.</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[3.5rem] 2xl:ml-32 z-[2] "></div>
                      </div>
                      <div className="inline-block">
                          <div className="bg-[#3586FF] relative w-32 h-32 rounded-[5px]">
                          <p className="absolute text-[3.5rem] leading-5 font-bold -ml-1 mt-4 mr-2 text-[#fff] z-[0]">4</p>
                              <h2 className="text-base font-bold ml-7 relative leading-1 z-[1] px-0.5 pt-0.5">Mise en Ligne</h2>
                              {/* <p className="text-sm 2xl:text-lg 2xl:font-semibold pt-2 px-5 relative z-[1]">1h</p> */}
                              <p className="text-xs 2xl:text-lg 2xl:font-semibold pt-0.5 leading-2 px-1">Déploiement et prise en main de votre application, une fois peaufinée.</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[3.5rem] 2xl:ml-32 z-[2] "></div>
                      </div>
                      <div className="inline-block mr-24">
                          <div className="bg-[#3586FF] relative w-32 h-32 rounded-[5px]">
                          <p className="absolute text-[5rem] leading-5 font-bold mr-5 mt-10 text-[#fff] z-[0]"></p>
                              <h2 className="text-base font-bold ml-2 relative leading-1 z-[1] px-0.5 pt-0.5">Suivi et Maintenance</h2>
                              <p className="text-xs 2xl:text-lg 2xl:font-semibold pt-0.5 leading-2 px-2">Accompagnement dans le maintien et les mises à jour de votre app.</p>
                          </div>
                          <div className="bg-[#3586FF] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-[3.5rem] 2xl:ml-32 z-[2] "></div>
                      </div>
                          
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className={`${useIsVisible(targetDetails) ? "transform animate-slideout1500 opacity-0 text-[#3586FF] text-center text-xl lg:text-2xl 2xl:text-3xl absolute bottom-[17vh] lg:bottom-[22vh] 2xl:bottom-72 left-0 right-0 font-semibold z-1": "hidden opacity-0 translate-y-[100px]"}`}>Ils nous font confiance</h3>
              <div className={`${useIsVisible(targetDetails) ? "transform animate-slideout1700 opacity-0 w-full 2xl:h-64 h-[15vh] lg:h-[20vh] bg-neutral-200 inner-shadow pt-24 absolute bottom-0 left-0": "hidden opacity-0 translate-y-[100px]"}`}>

              </div>
            </div>
        </div>
    )
}