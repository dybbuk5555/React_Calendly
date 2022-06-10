import React, { useState } from "react";
import logo from "./assets/logo_skyview.svg";
import map from "./assets/map.png";
import cloud from "./assets/cloud.png";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";
import agenda from "./assets/agenda.png";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-mont text-general">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen &&
        <MobileMenu>
          {navLinks}
        </MobileMenu>}
      <main>
        <div className="absolute left-0 w-full h-4/5 bg-gradient-to-b from-home-1 to-home-2 -z-10"></div>
        <div id="home" className="container mx-auto">
          <div className="text-center mt-2 max-w-7xl px-4 sm:mt-2">
            <h1 className="text-2xl font-extrabold md:text-3xl text-title pt-8">
              EXPERIENCIA SKYVIEW
            </h1>
            <p className="text-base text-general">
              Skyview virtual es un espacio abierto para conocer en profundidad Agrosuper.
            </p>
            <p className="text-base">
              Porque somos la empresa productora de proteína más grande de Chile y tenemos mucho que contar.
            </p>
            <p className="text-base my-2">
              Agenda tu visita guiada con nuestras coordinadoras para conocer con más detalle todo lo que hacemos.
            </p>
            <p className="text-base">
              Te invitamos a este viaje para que conozcas lo que somos, cómo trabajamos, y qué nos mueve.
            </p>
            <p className="text-base">
              Porque “Alimentar lo bueno de la vida todos los días” está en nuestro ADN y queremos compartirlo contigo.
            </p>
          </div>
          <div className="relative left-20 top-28 space-x-2">
            <div className="rounded-md shadow inline-block">
              <a
                href="#"
                className="w-full flex items-center justify-center p-2 border-transparent uppercase text-base rounded-md text-button bg-button_color-1"
              >
                Zoom In
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 inline-block">
              <a
                href="#"
                className="w-full flex items-center justify-center p-2 border-transparent uppercase text-base rounded-md text-button bg-button_color-1"
              >
                Zoom Out
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 inline-block">
              <a
                href="#"
                className="w-full flex items-center justify-center p-2 border-transparent uppercase text-base rounded-md text-button bg-button_color-1"
              >
                Reset
              </a>
            </div>
          </div>
          <div className="container mx-auto px-14">
            <div className="overflow-hidden w-full h-96">
              <img className="max-w-screen-map" src={map} alt="map" />
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-5" id="mondo_as">
          <div className="text-center mt-2 max-w-7xl px-4">
            <hi className="text-xl font-extrabold md:text-2xl py-8">
              Descubre nuestros procesos navegando en nuestro mundo
            </hi>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-center gap-10 px-10 mt-5">
            <div>
              <img className="rounded-2xl" src={img1} alt="Historia" />
              <h1 className="text-base font-extrabold">Historia</h1>
            </div>
            <div>
              <img className="rounded-2xl" src={img2} alt="Oficina Central" />
              <h1 className="text-base font-extrabold">Oficina Central</h1>
            </div>
            <div>
              <img className="rounded-2xl" src={img3} alt="Nuestros Planteles" />
              <h1 className="text-base font-extrabold">Nuestros Planteles</h1>
            </div>
            <div>
              <img className="rounded-2xl" src={img4} alt="Plantas Industriales" />
              <h1 className="text-base font-extrabold">Plantas Industriales</h1>
            </div>
            <div>
              <img className="rounded-2xl" src={img5} alt="Producción Responsable" />
              <h1 className="text-base font-extrabold">Producción Responsable</h1>
            </div>
            <div>
              <img className="rounded-2xl" src={img6} alt="Comunidades" />
              <h1 className="text-base font-extrabold">Comunidades</h1>
            </div>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-20" id="agenda">
          <div className="text-left px-24 pt-32">
            <h1 className="text-2xl font-extrabold md:text-3xl text-title">
            AGENDA UNA VISITA 
            </h1>
            <h1 className="text-xl font-extrabold md:text-2xl text-general">
            GUIADA A NUESTRO MUNDO AGROSUPER
            </h1>
            <p className="text-base text-general">
            Disfruta la experiencia Skyview virtual.
            </p>
            <p className="text-base text-general">
            Agenda aquí tu visita y una coordinadora guía te conducirá en un recorrido personalizado, donde te acompañará y responderá todas tus preguntas.
            </p>
          </div>
          <div>
            <img src={agenda} className="w-5/6 h-auto" alt="agenda" />
          </div>
        </div>
      </main>
    </div>
  );
};

const pages = ['HOME', 'MUNDO AS', 'AGENDA'];
const navLinks = pages.map(page => <a key={page} className="no-underline text-menu" href={`#${page}`}>{page}</a>);

const Navbar = ({ menuOpen, setMenuOpen }) => (
  <div className="flex items-center justify-between px-16 pt-6 container mx-auto">
    <div className="flex items-center">
      <img className='h-16 w-64' src={logo} alt='logo' />
    </div>
    <nav className="hidden md:block space-x-12">
      {navLinks}
    </nav>
    <button type="button" aria-label="Toggle mobile menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"><MenuAlt4Svg menuOpen={menuOpen} /></button>
  </div>
);

const MobileMenu = ({ children }) => (
  <nav className="p-4 flex flex-col space-y-3 md:hidden">
    {children}
  </nav>
);

const MenuAlt4Svg = ({ menuOpen }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`transition duration-100 ease h-8 w-8 ${menuOpen ? 'transform rotate-90' : ''}`} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);