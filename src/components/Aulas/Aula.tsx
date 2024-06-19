type Props = {
    name: string;
    image: string;
}

const Aula = ({ name, image }: Props) => {

    const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col 
    items-center justify-center whistepace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
        <div className={overlayStyles}>
            <p className="text-2xl flex mb-20">{name}</p>
        </div>
        <img src={image} alt={`${image}`} />
    </li>
  )
}

export default Aula