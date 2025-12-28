import Image from "next/image";

const planes = [
  {
    imagen: "/planes/planproximo1.png",
    titulo: "Retos grupales online",
    descripcion: "Divididos por nicho y objetivos puntuales.",
    descripcion2: "",
  },
  {
    imagen: "/planes/planproximo2.png",

    titulo: "Talleres",
    descripcion: "Presenciales y on demand.",
    descripcion2: "Sobre alimentación y nutrición, aspectos generales.",
  },
  {
    imagen: "/planes/planproximo3.png",
    titulo: "Recetarios",
    descripcion: "Gratuitos y pagos.",
    descripcion2: "",
  },
];

export default function PlanesProximosComp() {
  return (
    <div className="bg-white pt-12 rounded-b-[30px]">
      <div className="flex justify-center">
        <div className="w-300 h-px bg-[#BABCBB]/34"></div>
      </div>
      <div
        data-aos="fade-up"
        className="flex items-center xs:pl-4 lg:pl-26.5 gap-2.5 pt-10"
      >
        <div className="w-3 h-3 bg-[#EEB52F] rounded-full"></div>
        <h2 className="font-sans font-bold text-[24px] text-[#1B170D]">
          Proximamente
        </h2>
      </div>
      {/* Contenedor de cards */}
      <div className="flex xs:flex-col lg:flex-row justify-center items-center px-4 gap-8 pt-8">
        {/* Card */}
        {planes?.map((item, index) => (
          <div data-aos="fade-up" key={index}>
            <div className="xs:h-auto md:h-[417px] transition-transform duration-300 ease-out hover:scale-[1.02]">
              <Image
                src={item.imagen}
                alt={"plan-" + index}
                width={388}
                height={275}
                priority
                unoptimized
              />

              <div className="pl- pt-6.75 pb-1.75">
                <h4 className="font-sans font-bold text-[#1B170D]">
                  {item.titulo}
                </h4>
                <div className="space-y-2">
                  <p className="font-sans text-[12px] text-[#1B170D]/60">
                    {item.descripcion}
                  </p>
                  <p className="font-sans text-[12px] text-[#1B170D]/60">
                    {item.descripcion2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
