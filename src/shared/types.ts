export enum SelectedPage {
    Inicio = "inicio",
    Beneficios = "beneficios",
    Aulas = "aulas",
    Contato = "contato"
  }

export interface BeneficioType {
  icon: JSX.Element
  title: string;
  description: string;
}

export interface AulaType {
  name: string;
  image: string;
}