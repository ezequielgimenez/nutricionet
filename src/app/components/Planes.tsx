import Image from "next/image";

const planes = [
  {
    imagen: "/planes/plan1.png",
    icono: "/planes/icono-plan1.png",
    titulo: "Encuentros presenciales / virtuales",
    descripcion:
      "Para aquellas personas que necesitan acompañamiento personalizado ya sea 1:1 o familiar, y ayuda para el cumplimiento de objetivos puntuales, medibles y alcanzables.",
    boton: "Reservar",
  },
  {
    imagen: "/planes/plan2.png",
    icono: "/planes/icono-plan2.png",
    titulo: "Venta de ebooks-guias alimentarias según objetivos",
    descripcion:
      "Para aquellos que prefieren información generalizada para temas particulares, guias para aumento de masa magra, reduccion de masa grasa, guia de acompañamiento para transitar eventos.",
    boton: "Reservar/Comprar",
  },
  {
    imagen: "/planes/plan3.png",
    icono: "/planes/icono-plan3.png",
    titulo: "Planes alimentarios personalizados",
    descripcion:
      "Requiere encuentro presencial o virtual previo para armar tu plan a medida.",
    boton: "Reservar",
  },
];

export default function PlanesComp() {
  return (
    <div id="planes" className="flex flex-col items-center pt-16 bg-white">
      {/* Titulo y subtitulo */}
      <div data-aos="fade-up" className="flex flex-col items-center px-4">
        <h3 className="font-sans font-bold text-[30px] text-black ">
          Planes actuales
        </h3>
        <div className="w-20 h-1 bg-[#EEB732] mt-2 mb-4 rounded-[20px]"></div>
        <p className="text-center font-sans text-[#BABCBB]">
          Elige la opción que mejor se adapte a tus objetivos.
        </p>
      </div>
      {/* Contenedor cards */}
      <div className="flex xs:flex-col lg:flex-row gap-8 pt-10 b-[#FCFBF8]">
        {planes.map((item, index) => (
          <div data-aos="fade-up" key={index}>
            <div
              className="
            flex flex-col items-center relative w-full h-127.5
            rounded-xl
            shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]
            transition-transform duration-300 ease-out hover:scale-[1.02]
            hover:shadow-[0px_14px_25px_-4px_rgba(0,0,0,0.12),0px_6px_10px_-6px_rgba(0,0,0,0.12)]
        "
            >
              <Image
                src={item.imagen}
                alt={"plan-" + index}
                quality={85}
                width={310}
                height={192}
                priority
                unoptimized
                className="rounded-t-lg"
              />
              {/* Ícono */}
              <div className="pt-2 absolute right-3 top-0">
                <Image
                  src={item.icono}
                  alt={"Icono-" + index}
                  width={44}
                  height={50}
                  priority
                  unoptimized
                />
              </div>
              <div className="pt-6">
                <h4 className="w-[261px] font-sans font-bold text-[18px] text-black">
                  {item.titulo}
                </h4>
                <p className="w-[247px] font-sans text-[14px] text-[#BABCBB] font-normal pt-[10px] pb-[46px]">
                  {item.descripcion}
                </p>
              </div>
              <div className="mt-auto pb-2">
                <a
                  href="https://walink.co/7500d4
              "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-[262px] h-[42px]  text-[#DCA21F] border border-[#EEB732]/20 bg-[#EEB732]/10 rounded-lg cursor-pointer hover:bg-[#EEB732]/30 transition-colors duration-500 ease-in-out">
                    {item.boton}
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
