import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar/Navbar"
import { SelectedPage } from "@/shared/types";
import Inicio from "@/components/Inicio/Inicio";
import Beneficios from "./components/Beneficios/Beneficios";
import Aulas from "./components/Aulas/Aulas";
import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Inicio
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Inicio);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage} 
          setSelectedPage={setSelectedPage}
        />
        <Inicio setSelectedPage={setSelectedPage}/>
        <Beneficios setSelectedPage={setSelectedPage}/>
        <Aulas setSelectedPage={setSelectedPage}/>
        <Contato setSelectedPage={setSelectedPage}/>
        <Footer />
      </div>
    </>
  )
}

export default App

