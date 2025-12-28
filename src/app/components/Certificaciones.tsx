import Image from "next/image";

export default function CertificadosComp() {
  return (
    <div>
      {/* CERTIFICADOS */}
      <section className="w-full overflow-x-hidden">
        <div className="w-full max-w-[1200px] mx-auto bg-white mt-10 lg:mt-17 py-6 rounded-xl mb-16 px-4">
          <div data-aos="fade-up">
            <h3 className="font-sans text-[#1B170D] font-bold text-[14px] text-center py-3">
              MIS CERTIFICACIONES
            </h3>
          </div>

          <div
            data-aos="fade-up"
            className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-13"
          >
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
            <div
              data-aos="fade-up"
              className="overflow-hidden w-full max-w-[460px]"
            >
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
