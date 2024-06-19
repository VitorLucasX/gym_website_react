import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Inicio = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section 
      id="inicio" 
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      <motion.div 
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Inicio)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50},
                visible: { opacity: 1, x: 0},
              }}
              className="md:-mt-20"
            >
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20
                     before:z-[-1] md:before:content-evolvetext">
                        <img src={HomePageText} alt="Texto da Home Page"/>
                    </div>
                </div>

                <p className="mt-8 text-sm md:text-start">
                   Academia incomparável. Aulas fitness de treinamento incomparáveis.
                   Estúdios de classe mundial para obter o shape que você sonha. 
                   Obtenha o corpo dos seus sonhos agora!
                </p>
            </motion.div>

            {/* ACTIONS */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
              hidden: { opacity: 0, x: -50},
              visible: { opacity: 1, x: 0},
              }}
              className="mt-8 flex items-center gap-8 md:justify-start"
            >
                <ActionButton setSelectedPage={setSelectedPage}>
                  Comece Agora
                </ActionButton>
                <AnchorLink
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.Contato)}
                href={`${SelectedPage.Contato}`}
                >
                  <p>Saber Mais</p>
                </AnchorLink>
            </motion.div>
        </div>

        {/* IMAGEM DA DIREITA CHAMATIVA */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
            <img src={HomePageGraphic} alt="Imagem Chamativa" />
        </div>
      </motion.div>
        
        {/* PATROCINADORES */}
        {isAboveMediumScreens && (
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between gap-8">
                        <img src={SponsorRedBull} alt="RedBull" />
                        <img src={SponsorForbes} alt="Forbes" />
                        <img src={SponsorFortune} alt="Fortune" />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Inicio