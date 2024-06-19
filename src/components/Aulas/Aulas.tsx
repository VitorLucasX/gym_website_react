import { AulaType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Aula from "./Aula";

const aulas: Array<AulaType> = [
    {
      name: "Aulas de musculação",
      image: image1,
    },
    {
      name: "Aulas de Yoga",
      image: image2,
    },
    {
      name: "Aulas de Abdominal",
      image: image3,
    },
    {
      name: "Aulas de Aventura",
      image: image4,
    },
    {
      name: "Aulas Fitness",
      image: image5,
    },
    {
      name: "Aulas de Luta",
      image: image6,
    },
  ];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Aulas = ({ setSelectedPage }: Props) => {
  return (
    <section id="aulas" className="w-full bg-primary-100 py-40">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Aulas)}
        >
          <motion.div
              className="mx-auto w-5/6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
              hidden: { opacity: 0, x: -50},
              visible: { opacity: 1, x: 0},
              }}
          >
            <div className="md:w-3/5">
                <HText>NOSSAS AULAS</HText>
                <p className="py-5">
                    Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                    tellus quam porttitor. Mauris velit euismod elementum arcu neque
                    facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                    enim mattis odio in risus nunc.
                </p>
            </div>
          </motion.div>
          <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2800px] whitespace-nowrap">
                {aulas.map((item: AulaType, index) => (
                    <Aula 
                        key={`${item.name}-${index}`}
                        name={item.name}
                        image={item.image}
                    />
                ))}
            </ul>
          </div>
        </motion.div>
    </section>
  )
}

export default Aulas