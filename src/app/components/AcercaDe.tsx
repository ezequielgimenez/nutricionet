import Image from "next/image";

const estudios = [
  {
    icono: "/icons/icono1.png",
    titulo: "Posgrado en alimentación basada en plantas",
    descripcion: "",
  },
  {
    icono: "/icons/icono1.png",
    titulo: "Antropometrista ISAK I",
    descripcion: "Certificación Internacional",
  },
  {
    icono: "/icons/icono2.png",
    titulo: "Estrategias para modificar composición corporal",
    descripcion: "Curso de especialización",
  },
  {
    icono: "/icons/icono3.png",
    titulo: "Patologías digestivas funcionales",
    descripcion: "Curso de especialización",
  },
  {
    icono: "/icons/icono4.png",
    titulo: "Especialización en TCA",
    descripcion: "En curso",
  },
];

export default function SobreMiComp() {
  return (
    <div id="sobremi" className="w-full overflow-x-hidden bg-[#F8F7F6]">
      {/* SOBRE MI */}
      <div className="flex flex-col lg:flex-row justify-center pt-10 lg:pt-15 px-4 lg:px-0">
        {/* Imagen desktop */}
        <div data-aos="fade-up" className="hidden lg:block pt-20 pl-8">
          <Image
            src="/foto-nutricionista.webp"
            alt="Foto-nutricionista"
            width={548}
            height={642}
            priority
            unoptimized
          />
        </div>

        {/* Contenedor texto */}
        <div data-aos="fade-up" className="flex flex-col sm:pl-12 lg:pl-0">
          <p className="font-sans font-bold text-[14px] text-[#EEB52F]">
            SOBRE MÍ
          </p>

          <div className="w-full lg:w-160 space-y-6">
            <h3 className="font-sans font-extrabold text-[28px] lg:text-[36px] text-[#1B170D]">
              Hola, soy Eugenia Tolosa.
            </h3>

            <p className="font-sans text-[16px] lg:text-[18px] text-[#1B170D]/80 font-light">
              Licenciada en nutrición especializada en cambio de hábitos y
              educación alimentario nutricional con mirada integral.
            </p>

            <p className="font-sans text-[16px] lg:text-[18px] text-[#1B170D]/80 font-light">
              Nutricionista enfocada en el cambio de hábitos, el acompañamiento
              empático y la educación alimentario-nutricional. Trabajo con una
              mirada integrativa biopsicosocial. Cuento con formación en
              patologías digestivas funcionales y alimentaciones basadas en
              plantas, abordando cada proceso de manera personalizada y
              respetuosa.
            </p>
          </div>

          {/* Imagen mobile */}
          <div className="block lg:hidden pt-2 w-full max-w-[420px] mx-auto">
            <Image
              src="/foto-nutricionista.webp"
              alt="Foto-nutricionista"
              width={414}
              height={496}
              className="w-full h-auto object-contain"
              sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 420px"
              priority
            />
          </div>

          {/* Formación académica */}
          <div className="w-full lg:w-160 bg-white pt-6 rounded-xl xs:mt-1 lg:mt-6 pb-6">
            <div className="flex pl-6 gap-2 items-center">
              <Image
                src="/icons/icono-titulo.png"
                alt="Icono-titulo"
                width={24}
                height={28}
                priority
                unoptimized
              />
              <p className="font-sans font-bold text-[18px] text-[#1B170D]">
                Formación Académica
              </p>
            </div>

            <div>
              {estudios.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start pt-4 gap-3 pl-6 pr-4"
                >
                  <Image
                    src={item.icono}
                    alt={`Icono-${index}`}
                    width={48}
                    height={48}
                    priority
                    unoptimized
                  />
                  <div className="flex flex-col">
                    <p className="font-sans font-bold text-[15px] lg:text-[16px] text-[#1B170D]">
                      {item.titulo}
                    </p>
                    <p className="font-sans text-[14px] text-[#737373] font-light">
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CERTIFICADOS */}
      <section className="w-full overflow-x-hidden">
        <div className="w-full max-w-[1200px] mx-auto bg-white mt-10 lg:mt-17 py-6 rounded-xl mb-16 px-4">
          <h3 className="font-sans text-[#1B170D] font-bold text-[14px] text-center py-3">
            MIS CERTIFICACIONES
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-13">
            {/* Card 1 */}
            <div className="overflow-hidden w-full max-w-[460px]">
              <div className="flex flex-col items-center bg-[#F8F7F6] rounded-lg transition-transform duration-300 ease-out hover:scale-[1.02]">
                <Image
                  src="/certificados/certificado1.png"
                  alt="Certificado"
                  width={460}
                  height={374}
                  className="w-full h-auto"
                  priority
                  unoptimized
                />
                <p className="font-sans font-bold text-[12px] text-[#EEB732] pt-1">
                  CERTIFICADO
                </p>
                <p className="font-sans font-bold text-[14px] text-black py-2 text-center px-2">
                  Posgrado en alimentación basada en plantas
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="overflow-hidden w-full max-w-[460px]">
              <div className="flex flex-col items-center bg-[#F8F7F6] rounded-lg transition-transform duration-300 ease-out hover:scale-[1.02]">
                <Image
                  src="/certificados/certificado2.png"
                  alt="Certificado"
                  width={443}
                  height={374}
                  className="w-full h-auto"
                  priority
                  unoptimized
                />
                <p className="font-sans font-bold text-[12px] text-[#EEB732] pt-1">
                  CERTIFICADO
                </p>
                <p className="font-sans font-bold text-[14px] text-black py-2 text-center px-2">
                  Antropometrista ISAK I
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
