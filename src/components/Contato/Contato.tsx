import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contato = ({ setSelectedPage }: Props) => {
    const inputStyles = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

  return (
    <section id="contato" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contato)}
        >
          <motion.div
              className="md:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
              hidden: { opacity: 0, x: -50},
              visible: { opacity: 1, x: 0},
              }}
          >
            <HText>
                <span className="text-primary-500">MATRICULE-SE.</span> ENTRE EM CONTATO
            </HText>
            <p className="my-5">
                Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
            </p>
          </motion.div>

          {/* FORMULÁRIO */}
          <div className="mt-10 justify-between gap-8 md:flex">
              <motion.div
                className="mt-10 basis-3/5 md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: 50},
                visible: { opacity: 1, x: 0},
                }}
              >
                <form
                    target="_blank"
                    onSubmit={onSubmit}
                    action="https://formsubmit.co/vitorlucasdev@gmail.com"
                    method="POST"
                >
                    <input 
                        className={inputStyles}
                        type="text" 
                        placeholder="NOME"
                        {...register("name", {
                            required: true,
                            maxLength: 100,
                        })}
                    />
                    {errors.name && (
                        <p className="mt-1 text-primary-500">
                            {errors.name.type === "required" && "Esse campo é obrigatório."}
                            {errors.name.type === "maxLength" && "O máximo de letras é 100."}
                        </p>
                    )}

                    <input 
                        className={inputStyles}
                        type="text" 
                        placeholder="EMAIL"
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                    />
                    {errors.email && (
                        <p className="mt-1 text-primary-500">
                            {errors.email.type === "required" && "Esse campo é obrigatório."}
                            {errors.email.type === "pattern" && "Endereço de email inválido."}
                        </p>
                    )}

                    <textarea 
                        className={inputStyles}
                        placeholder="MENSAGEM"
                        rows={4}
                        cols={50}
                        {...register("message", {
                            required: true,
                            maxLength: 2000,
                        })}
                    />
                    {errors.name && (
                        <p className="mt-1 text-primary-500">
                            {errors.name.type === "required" && "Esse campo é obrigatório."}
                            {errors.name.type === "maxLength" && "O máximo de letras é 2000."}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition 
                        duration-500 hover:text-white"
                    >
                        ENVIAR
                    </button>
                </form>
              </motion.div>

              <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
              hidden: { opacity: 0, x: 50},
              visible: { opacity: 1, x: 0},
              }}
              className="relative mt-16 basis-2/5 md:mt-0"
              >
                <div className="md:before:content-evolvetext w-full before:absolute
                 before:-bottom-20 before:-right-10 before-z-[-1]">
                    <img 
                    className="w-full"
                    src={ContactUsPageGraphic} alt="Entre em Contato" />
                </div>
              </motion.div>
          </div>
        </motion.div>
    </section>
  )
}

export default Contato