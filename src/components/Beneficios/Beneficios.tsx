import HText from "@/shared/HText";
import { BeneficioType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Beneficio from "./Beneficio";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const beneficios: Array<BeneficioType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Equipamentos de última geração",
    description: "Descubra nossa linha exclusiva de equipamentos de última geração, projetados para impulsionar sua produtividade e inovar seu treino."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Centenas de aulas diversas",
    description: "Dê um salto na sua rotina de exercícios com nosso amplo leque de aulas de academia. Temos centenas de opções para todos os gostos e níveis de habilidade."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Instrutores especialistas e profissionais",
    description: "Nossos instrutores especialistas e profissionais de academia são a espinha dorsal de nossa comunidade. Com uma rica experiência e conhecimentos certificados, eles estão aqui para orientá-lo, motivá-lo e impulsioná-lo além dos seus limites."
  }
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2}
  }
}

const Beneficios = ({ setSelectedPage }: Props) => {
  return (
    <section 
      id="beneficios"
      className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Beneficios)}
        >
            <motion.div 
              className="md:my-5 md:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
              hidden: { opacity: 0, x: -50},
              visible: { opacity: 1, x: 0},
              }}
            >
                <HText>MAIS DO QUE APENAS ACADEMIA.</HText>
                <p className="my-5 text-sm">
                  Fornecemos equipamentos, treinadores e aulas de musculação de
                  classe mundial para que você atinja seus objetivos de condicionamento
                  físico com facilidade. Oferecemos verdadeiro cuidado a cada músculo.
                </p>
            </motion.div>

            {/* BENEFICIOS */}
            <motion.div 
              className="mt-5 items-center justify-between gap-8 md:flex"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5}}
              variants={container}
              >
                {beneficios.map((beneficio: BeneficioType) =>(
                    <Beneficio
                      key={beneficio.title}
                      icon={beneficio.icon}
                      title={beneficio.title}
                      description={beneficio.description}
                      setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* IMAGEM E DESCRIÇÃO */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
              <img 
              className="mx-auto"
              src={BenefitsPageGraphic} alt="Imagem de Benefícios" />
            </div>

            <div>
              <div className="relative">
                  <motion.div 
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, amount: 0.5 }}
                   transition={{ duration: 0.5 }}
                   variants={{
                   hidden: { opacity: 0, x: 50},
                   visible: { opacity: 1, x: 0},
                   }}
                  className="before:absolute before:-top-20 
                  before:-left-20 before:z-[1] before:content-abstractwaves">
                    <div>
                        <HText>
                          MILHÕES DE MEMBROS FELIZES SECANDO{" "}
                          <span className="text-primary-500">FIT.</span>
                        </HText>
                    </div>
                  </motion.div>

                  <motion.div
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, amount: 0.5 }}
                   transition={{ delay: 0.2, duration: 0.5 }}
                   variants={{
                   hidden: { opacity: 0, x: -50},
                   visible: { opacity: 1, x: 0},
                   }}
                  >
                      <p className="my-5">
                      Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                      egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                      fames vitae vitae quis. Quis amet vulputate tincidunt at in
                      nulla nec. Consequat sed facilisis dui sit egestas ultrices
                      tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                      Felis orci diam odio.
                      </p>
                      <p className="mb-5">
                      Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                      tellus quam porttitor. Mauris velit euismod elementum arcu neque
                      facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                      enim mattis odio in risus nunc.
                      </p>
                  </motion.div>

                  <div className="relative mt-16">
                      <div className="before:absolute before:-bottom-20 before:right-40 
                      before:z-[-1] before:content-sparkles">
                          <ActionButton setSelectedPage={setSelectedPage}>
                            Comece Agora
                          </ActionButton>
                      </div>
                  </div>
              </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Beneficios