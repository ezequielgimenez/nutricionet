import Image from "next/image";

export default function ContactForm() {
  return (
    <div id="contacto" className="w-full flex justify-center pt-16">
      <div className="flex flex-col bg-[#363C48] rounded-t-[40px] pt-14 items-center w-full">
        <h3 className="font-sans text-center font-extrabold text-[36px] lg:text-[47px] text-white mb-10 lg:mb-13">
          Contacto
        </h3>

        {/* Grid de contactos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 pb-10">
          {/* WhatsApp */}
          <div className="grid grid-cols-[48px_1fr] gap-3 items-start">
            <Image
              src="/icons/whatsapp.png"
              alt="whatsapp-icon"
              width={48}
              height={48}
              priority
              unoptimized
            />
            <div>
              <p className="font-sans text-[14px] text-[#A6A6A6] font-thin">
                WHATSAPP
              </p>
              <p className="font-sans text-[18px] text-white font-medium">
                +54 9 3476 40-0587
              </p>
            </div>
          </div>

          {/* Instagram */}
          <div className="grid grid-cols-[48px_1fr] gap-3 items-start">
            <Image
              src="/icons/instagram.png"
              alt="instagram-icon"
              width={48}
              height={48}
              priority
              unoptimized
            />
            <div>
              <p className="font-sans text-[14px] text-[#A6A6A6] font-thin">
                INSTAGRAM
              </p>
              <p className="font-sans text-[18px] text-white font-medium">
                nutricionet
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="grid grid-cols-[48px_1fr] gap-3 items-start">
            <Image
              src="/icons/email.png"
              alt="email-icon"
              width={48}
              height={48}
              priority
              unoptimized
            />
            <div>
              <p className="font-sans text-[14px] text-[#A6A6A6] font-thin">
                EMAIL
              </p>
              <p className="font-sans text-[18px] text-white font-medium break-all">
                nutricionet.22@gmail.com
              </p>
            </div>
          </div>

          {/* TikTok */}
          <div className="grid grid-cols-[48px_1fr] gap-3 items-start">
            <Image
              src="/icons/tiktok.png"
              alt="tiktok-icon"
              width={48}
              height={48}
              priority
              unoptimized
            />
            <div>
              <p className="font-sans text-[14px] text-[#A6A6A6] font-thin">
                TIKTOK
              </p>
              <p className="font-sans text-[18px] text-white font-medium">
                @_nutricionet
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-300 h-px bg-white/10 mt-15"></div>
        <p className="font-sans font-thin text-[14px] text-[#737373] text-center mt-8 mb-8">
          © 2026 Nutricionet - Lic. Eugenia Tolosa. <br /> Todos los derechos
          reservados.
        </p>
      </div>
    </div>
  );
}
