"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeaderComp() {
  const [showNav, setShowNav] = useState(false);

  const openNav = () => {
    setShowNav(!showNav);
  };
  return (
    <header>
      <div className="lg:hidden relative flex items-center bg-[#F8F7F6]/95 h-22 px-4">
        {/* Burger */}
        <button onClick={openNav} className="z-10">
          <Image
            src="/logo/burger-bar.png"
            alt="burger"
            width={35}
            height={35}
            priority
            unoptimized
          />
        </button>

        {/* Logo centrado real */}
        <div className="absolute left-1/2 -translate-x-1/2 pt-2 w-full flex justify-center pl-5">
          <Image
            src="/logo/logo-desktop.png"
            alt="Logo"
            width={326}
            height={76}
            priority
            unoptimized
          />
        </div>
      </div>

      <div
        className={`
    fixed top-0 left-0 w-screen h-126.5 bg-[#A48845]/94 z-50 rounded-b-4xl
    flex flex-col items-center
    transition-all duration-300 ease-out
    ${
      showNav
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-8 pointer-events-none"
    }
  `}
      >
        <div className="flex w-full justify-between px-4 py-4">
          <div onClick={openNav}>
            <Image
              src="/logo/close.png"
              alt="Logo"
              width={23}
              height={23}
            ></Image>
          </div>
        </div>

        <a
          className="py-8 text-[25px] font-mono font-semibold text-white"
          href="#planes"
          onClick={openNav}
        >
          PLANES
        </a>
        <a
          className="py-8 text-[25px] font-mono font-semibold text-white"
          href="#sobremi"
          onClick={openNav}
        >
          SOBRE MÍ
        </a>
        <a
          className="py-8 text-[25px] font-mono font-semibold text-white"
          href="#contacto"
          onClick={openNav}
        >
          CONTACTO
        </a>
      </div>

      <div className="hidden lg:flex justify-between bg-[#F8F7F6]/95 h-21.5">
        <div className="cursor-pointer">
          <Image
            src="/logo/logo-desktop.png"
            alt="Logo-nutricionet"
            width={326}
            height={76}
            priority
            unoptimized
          />
        </div>

        <nav className="flex px-10">
          <ul className="flex justify-center items-center gap-12">
            <li>
              <a
                className="font-sans font-normal text-black text-base cursor-pointer hover:text-[#EEB52F] transition-colors duration-500 ease-in-out"
                href="#planes"
              >
                Planes
              </a>
            </li>
            <li>
              <a
                className="font-sans font-normal text-black text-base cursor-pointer hover:text-[#EEB52F] transition-colors duration-500 ease-in-out"
                href="#sobremi"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                className="
                    inline-flex items-center justify-center
                    px-5 py-2
                    border border-[#EEB52F]
                    rounded-lg
                    font-sans font-medium text-black text-base cursor-pointer
                    transition-colors duration-300 ease-in-out 
                    hover:text-black hover:border-black
                     "
                href="#contacto"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
