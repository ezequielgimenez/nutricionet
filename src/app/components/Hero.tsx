"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import Image from "next/image";
// import Loading from "@/app/loading";
//hook
//

const content = {
  hero: {
    titulo: "Nutrición real, herramientas para tu vida diaria.",
    subtitulo:
      "Acompañamiento nutricional  para una vida más consciente y saludable.",
    imagenes: [
      "/carrusel/carrusel2.webp",
      "/carrusel/carrusel3.webp",
      "/carrusel/carrusel4.webp",
      "/carrusel/carrusel5.webp",
      "/carrusel/carrusel6.webp",
      "/carrusel/carrusel7.webp",
      "/carrusel/carrusel8.webp",
      "/carrusel/carrusel9.webp",
      "/carrusel/carrusel10.webp",
      "/carrusel/carrusel11.webp",
    ],
    imagenesMobile: [
      "/carrusel/carrusel-mobile1.webp",
      "/carrusel/carrusel-mobile2.webp",
      "/carrusel/carrusel-mobile3.webp",
      "/carrusel/carrusel-mobile4.webp",
      "/carrusel/carrusel-mobile5.webp",
      "/carrusel/carrusel-mobile6.webp",
      "/carrusel/carrusel-mobile7.webp",
      "/carrusel/carrusel-mobile8.webp",
      "/carrusel/carrusel-mobile9.webp",
      "/carrusel/carrusel-mobile10.webp",
    ],
  },
};

export default function HeroSectionComp() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  //   if (!content) return <Loading></Loading>;

  return (
    <div ref={emblaRef} className="relative overflow-hidden">
      <div className="flex">
        {content.hero.imagenes.map((_, index) => {
          const desktopImg = content.hero.imagenes[index];
          const mobileImg = content.hero.imagenesMobile[index];

          return (
            <div
              key={index}
              className="
              relative min-w-full
              h-[85vh]
              sm:h-[80vh]
              md:h-[90vh]
              xl:h-screen
            "
            >
              {/* Desktop */}
              <Image
                src={desktopImg}
                alt="carousel desktop"
                fill
                className="object-cover hidden lg:block"
                sizes="100vw"
                priority={index === 0}
              />

              {/* Mobile / Tablet */}
              <Image
                src={mobileImg}
                alt="carousel mobile"
                fill
                className="object-cover block lg:hidden"
                sizes="100vw"
                priority={index === 0}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/35" />
            </div>
          );
        })}
      </div>

      {/* Texto */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1
          className="
    font-mono font-semibold leading-tight
    text-white 
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-[65px]
    max-w-xs sm:max-w-md md:max-w-2xl
  "
        >
          {content.hero.titulo}
        </h1>

        <p
          className="
                  mt-4 sm:mt-6
                   sm:text-lg md:text-xl
                  text-[#FEFEFE]/80
                  font-sans font-thin
                  text-[20px]
                  max-w-xs sm:max-w-md
                "
        >
          {content.hero.subtitulo}
        </p>

        {/* Botones */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a href="#planes">
            <button
              className="
                    w-40
                    px-6 py-3
                    bg-[#EEB52F]
                    rounded-full
                    text-white
                    cursor-pointer
                    font-sans font-bold
                    transition-colors duration-500 ease-in-out
                    hover:bg-[#EEB52F]/50
                    transition
                  "
            >
              Ver planes
            </button>
          </a>
          <a
            href="https://walink.co/7500d4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="
                    w-41.25
                    px-6 py-3
                    border border-[#EEB52F]
                    rounded-full
                    text-white
                    font-sans font-medium
                    cursor-pointer
                    transition-colors duration-500 ease-in-out
                    hover:bg-[#EEB52F]/50
                    transition
                  "
            >
              Reservar turno
            </button>
          </a>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-0 pb-4 left-1/2 -translate-x-1/2  flex gap-3 z-30">
        {content.hero.imagenes.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "bg-white scale-110" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
