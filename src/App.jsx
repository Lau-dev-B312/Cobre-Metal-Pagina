import { useState } from 'react'
import './App.css'


import imgCobre from './Images/Cobre.jpeg'
import imgBronce from './Images/Bronce.jpeg'
import imgAluminio from './Images/Aluminio.jpeg'
import imgAcero from './Images/Acero inoxidable.jpeg'
import imgPlomo from './Images/plomo.jpeg'
import imgBaterias from './Images/Baterias.jpeg'
import imgMotores from './Images/Motores.jpeg'
import imgTransformadores from './Images/Transformadores.jpeg'
import imgTitanio from './Images/Titanio.jpeg'
import imgWidias from './Images/Widias.jpeg'
import imgChatarra from './Images/chatarra electronica.jpeg'
import imgPaladio from './Images/paladio.jpeg'
import imgLogo from './Images/metalesreciclaje.jpg'
import imgReciclajeIcon from './Images/icono-reciclaje.png'

import imgCotizacion from './Images/cotizacion personalizada.jpg'
import imgRetiroDomicilio from './Images/retiro de materiales a domicilio.jpg'
import imgGrandesVolumenes from './Images/operaciones con grandes volumenes.jpg'
import imgRetiroFabricas from './Images/retiro integral en fabricas.jpg'


function GenericPhotoIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  )
}


function WhatsAppIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

const MATERIALS_LIST = [
  {
    id: 'cobre',
    title: 'Cobre',
    desc: 'Cables, caños, virutas y recortes.',
    image: imgCobre,
  },
  {
    id: 'bronce',
    title: 'Bronce',
    desc: 'Piezas, virutas y recortes industriales.',
    image: imgBronce,
  },
  {
    id: 'aluminio',
    title: 'Aluminio',
    desc: 'Chapa, perfil, virutas y piezas de aluminio.',
    image: imgAluminio,
  },
  {
    id: 'acero',
    title: 'Acero Inoxidable',
    desc: 'Chapas, cañerías, tanques y recortes.',
    image: imgAcero,
  },
  {
    id: 'plomo',
    title: 'Plomo',
    desc: 'Lingotes, caños, placas y contrapesos.',
    image: imgPlomo,
  },
  {
    id: 'baterias',
    title: 'Baterías',
    desc: 'Baterías automotrices y de tracción en desuso.',
    image: imgBaterias,
  },
  {
    id: 'motores',
    title: 'Motores',
    desc: 'Motores eléctricos, compresores y estatores.',
    image: imgMotores,
  },
  {
    id: 'transformadores',
    title: 'Transformadores',
    desc: 'Transformadores industriales, cobre y bobinados.',
    image: imgTransformadores,
  },
  {
    id: 'titanio',
    title: 'Titanio',
    desc: 'Ánodos, tuberías, planchas y piezas especiales.',
    image: imgTitanio,
  },
  {
    id: 'widias',
    title: 'Widias y Carburo',
    desc: 'Insertos, fresas, mechas y herramientas.',
    image: imgWidias,
  },
  {
    id: 'chatarra',
    title: 'Chatarra Electrónica',
    desc: 'Plaquetas, componentes y rezagos informáticos.',
    image: imgChatarra,
  },
  {
    id: 'especiales',
    title: 'Metales Especiales',
    desc: 'Paladio, platino, rodio y catalizadores.',
    image: imgPaladio,
  },
];

const SERVICES_LIST = [
  {
    id: 'cotizacion',
    title: 'Cotización personalizada',
    desc: 'Evaluamos el tipo, estado, volumen y ubicación del material para ofrecer una cotización adecuada.',
    image: imgCotizacion,
  },
  {
    id: 'retiro-domicilio',
    title: 'Retiro de materiales a domicilio',
    desc: 'Coordinamos el retiro de materiales en fábricas, depósitos, comercios e industrias.',
    image: imgRetiroDomicilio,
  },
  {
    id: 'grandes-volumenes',
    title: 'Operaciones con grandes volúmenes',
    desc: 'Gestionamos grandes cantidades de rezagos y materiales industriales con coordinación logística.',
    image: imgGrandesVolumenes,
  },
  {
    id: 'retiro-fabricas',
    title: 'Retiro integral en fábricas',
    desc: 'Retiramos la totalidad de los materiales acordados y dejamos liberado el sector ocupado.',
    image: imgRetiroFabricas,
  },
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const WHATSAPP_PHONE = '5492612193613';

  const openWhatsApp = (customMessage = 'Hola Metales Reciclaje, quisiera solicitar una cotización.') => {
    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(customMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleMaterialClick = (materialTitle, e) => {
    if (e) e.stopPropagation();
    openWhatsApp(`Hola Metales Reciclaje, quisiera cotizar ${materialTitle}. ¿Me podrían pasar más información?`);
  };

  const handleServiceClick = (serviceTitle) => {
    openWhatsApp(`Hola Metales Reciclaje, quisiera consultar por el servicio de ${serviceTitle}.`);
  };

  return (
    <div className="page-wrapper">

      <header className="site-header">
        <div className="nav-container">

          <a
            href="#"
            className="brand-logo-link"
            onClick={(e) => {
              e.preventDefault();
              openWhatsApp('Hola Metales Reciclaje, quisiera realizar una consulta.');
            }}
            title="Contactar a Metales Reciclaje por WhatsApp"
          >
            <div className="logo-badge-small">
              <img src={imgReciclajeIcon} alt="Metales Reciclaje" className="logo-img-small" />
            </div>
            <span className="brand-title">Metales Reciclaje</span>
          </a>


          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>


          <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp('Hola Metales Reciclaje, quisiera conocer más información sobre su empresa.');
                setIsMobileMenuOpen(false);
              }}
            >
              Nosotros
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp('Hola Metales Reciclaje, quisiera consultar sobre los materiales y metales que compran.');
                setIsMobileMenuOpen(false);
              }}
            >
              Materiales
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp('Hola Metales Reciclaje, quisiera consultar sobre sus servicios de retiro y reciclaje.');
                setIsMobileMenuOpen(false);
              }}
            >
              Servicios
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp('Hola Metales Reciclaje, tengo metales y materiales para vender, quisiera coordinar una cotización.');
                setIsMobileMenuOpen(false);
              }}
            >
              Venta
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp('Hola Metales Reciclaje, quisiera solicitar una cotización inmediata.');
                setIsMobileMenuOpen(false);
              }}
            >
              Cotizar
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp('Hola Metales Reciclaje, tengo algunas dudas y quisiera realizarles una consulta.');
                setIsMobileMenuOpen(false);
              }}
            >
              Preguntas frecuentes
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp('Hola Metales Reciclaje, quisiera saber dónde se ubican y sus zonas de retiro/cobertura.');
                setIsMobileMenuOpen(false);
              }}
            >
              Ubicación
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp('Hola Metales Reciclaje, me gustaría ponerme en contacto con ustedes.');
                setIsMobileMenuOpen(false);
              }}
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>


      <section className="hero-section">
        <div className="hero-container">

          <div className="hero-left-column">
            <h1 className="hero-main-title">
              Compro todo tipo de Metales
            </h1>
            <p className="hero-description">
              Somos especialistas en el Reciclaje de los residuos industriales. Te damos la mejor cotización del mercado.
            </p>

            <div className="hero-cta-wrapper">
              <button
                className="btn-quote-green"
                onClick={() => openWhatsApp('Hola Metales Reciclaje, quisiera solicitar una cotización para venta de metales.')}
              >
                Ofrecemos la mejor Cotización del mercado
              </button>
            </div>


            <div className="hero-features-row">
              <div
                className="feature-card clickable-feature"
                onClick={() => openWhatsApp('Hola Metales Reciclaje, quisiera solicitar una cotización inmediata.')}
                title="Cotización Inmediata por WhatsApp"
              >
                <span className="feature-tag">COTIZACIÓN</span>
                <strong className="feature-highlight">INMEDIATA</strong>
              </div>

              <div
                className="feature-card clickable-feature"
                onClick={() => openWhatsApp('Hola Metales Reciclaje, quisiera consultar sobre el retiro sin cargo de materiales.')}
                title="Consultar por Retiro sin cargo en WhatsApp"
              >
                <span className="feature-tag">RETIRO</span>
                <strong className="feature-highlight">SIN CARGO</strong>
              </div>

              <div
                className="feature-card clickable-feature"
                onClick={() => openWhatsApp('Hola Metales Reciclaje, quisiera consultar sobre el retiro y logística en mi zona.')}
                title="Consultar Cobertura en toda Argentina en WhatsApp"
              >
                <span className="feature-tag">TRABAJAMOS</span>
                <strong className="feature-highlight">EN TODA ARGENTINA</strong>
              </div>
            </div>
          </div>


          <div className="hero-right-column">
            <div
              className="brand-display-card clickable-brand-card"
              onClick={() => openWhatsApp('Hola Metales Reciclaje, quisiera solicitar información sobre compra de metales.')}
              title="Contactar a Metales Reciclaje por WhatsApp"
            >
              <div className="brand-logo-large-box">
                <img src={imgLogo} alt="Metales Reciclaje" className="brand-logo-large-img" />
              </div>

              <h2 className="brand-display-title">METALES RECICLAJE</h2>

              <div className="brand-display-divider">
                <span className="divider-line"></span>
                <span className="divider-text">COMPRA DE METALES</span>
                <span className="divider-line"></span>
              </div>

              <p className="brand-metals-list">
                COBRE <span>•</span> BRONCE <span>•</span> ALUMINIO <span>•</span> ACERO <span>•</span> PLOMO
              </p>
            </div>
          </div>
        </div>
      </section>


      <section id="materiales" className="materials-section">
        <div className="materials-container">
          <div className="section-header-block">
            <div className="kicker-wrapper">
              <span className="section-kicker">COMPRAMOS</span>
              <div className="kicker-line"></div>
            </div>
            <h2 className="section-heading">Materiales que compramos</h2>
            <p className="section-subheading">
              Cotizamos según tipo de material, estado, volumen y ubicación. Tocá el ícono de WhatsApp para enviarnos los detalles.
            </p>
          </div>


          <div className="materials-grid">
            {MATERIALS_LIST.map((mat) => (
              <div
                key={mat.id}
                className="material-card"
                onClick={() => handleMaterialClick(mat.title)}
                title={`Cotizar ${mat.title} por WhatsApp`}
              >
                <div className="material-image-wrap">
                  <img src={mat.image} alt={mat.title} className="material-card-img" />
                  <div className="material-card-overlay"></div>
                </div>

                <div className="material-card-content">
                  <div className="material-text-info">
                    <h3 className="material-card-title">{mat.title}</h3>
                    <p className="material-card-desc">{mat.desc}</p>
                  </div>

                  <button
                    className="material-card-whatsapp-btn"
                    onClick={(e) => handleMaterialClick(mat.title, e)}
                    aria-label={`Contactar por WhatsApp para cotizar ${mat.title}`}
                  >
                    <WhatsAppIcon className="card-wa-icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="servicios" className="services-section">
        <div className="services-container">
          <div className="section-header-block">
            <div className="kicker-wrapper">
              <span className="section-kicker">QUÉ HACEMOS</span>
              <div className="kicker-line"></div>
            </div>
            <h2 className="section-heading">Servicios</h2>
          </div>


          <div className="services-grid">
            {SERVICES_LIST.map((srv) => (
              <div
                key={srv.id}
                className="service-card"
                onClick={() => handleServiceClick(srv.title)}
                title={`Consultar por ${srv.title} en WhatsApp`}
              >
                <div className="service-card-image-wrap">
                  {srv.image ? (
                    <img src={srv.image} alt={srv.title} className="service-card-img" />
                  ) : (
                    <div className="service-placeholder-bg">
                      <GenericPhotoIcon className="service-placeholder-icon" />
                    </div>
                  )}
                  <div className="service-card-overlay"></div>
                </div>

                <div className="service-card-content">
                  <h3 className="service-card-title">{srv.title}</h3>
                  <p className="service-card-desc">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="venta" className="industrial-banner-section">
        <div className="industrial-banner-container">
          <div className="industrial-card">
            <span className="industrial-kicker">VENTA DE MATERIALES</span>
            <h2 className="industrial-title">Compramos Materiales Industriales</h2>
            <p className="industrial-description">
              <span className="diamond">♦</span> Reciclaje y procesamiento de materiales ferrosos y no ferrosos a distintos tipos de empresas industriales, talleres, demoliciones, etc.{' '}
              <span className="diamond">♦</span> Cotizaciones de mercadería con vista previa.{' '}
              <span className="diamond">♦</span> Retiro y transporte de material a nuestras instalaciones, con equipamiento propio.
            </p>
            <button
              className="industrial-cta-btn"
              onClick={() => openWhatsApp('Hola Metales Reciclaje, quisiera consultar sobre la venta y compra de materiales industriales.')}
            >
              Consultar por WhatsApp
            </button>
          </div>
        </div>
      </section>


      <section id="nosotros" className="about-split-section">
        <div className="about-split-container">
          <div className="about-split-left">
            <div className="kicker-wrapper">
              <span className="section-kicker">QUIÉNES SOMOS</span>
              <div className="kicker-line"></div>
            </div>
            <h2 className="about-split-title">
              Compra, venta y retiro de materiales recuperables
            </h2>
          </div>

          <div className="about-split-right">
            <p>
              En <strong>Metales Reciclaje</strong> somos una empresa familiar con una sólida trayectoria de <strong>más de 4 generaciones</strong> en el rubro de la compra, recuperación y reciclaje de metales ferrosos y no ferrosos. A lo largo de décadas hemos forjado relaciones basadas en la honestidad, el trato directo y la máxima seriedad comercial con industrias, talleres, demoliciones y particulares de todo el país.
            </p>
            <p>
              Estamos profundamente <strong>comprometidos con el cuidado del medio ambiente</strong> y el desarrollo de la economía circular. Sabemos que cada tonelada de metal recuperado evita la sobreexplotación de recursos naturales y disminuye el impacto ambiental de los desechos industriales, transformando rezagos en materias primas reutilizables para la industria nacional.
            </p>
            <p>
              Brindamos soluciones integrales de retiro a domicilio con logística y transporte propio, pesaje transparente y la mejor cotización del mercado. Nuestro objetivo es ser su socio estratégico en la gestión y valorización sustentable de materiales reciclables.
            </p>
          </div>
        </div>
      </section>


      <footer className="site-footer">
        <div className="footer-main-container">

          <div className="footer-brand-col">
            <div
              className="footer-brand-header"
              onClick={() => openWhatsApp('Hola Metales Reciclaje, quisiera realizar una consulta.')}
              title="Contactar a Metales Reciclaje por WhatsApp"
            >
              <div className="footer-logo-box">
                <img src={imgReciclajeIcon} alt="Metales Reciclaje" className="footer-logo-img" />
              </div>
              <span className="footer-brand-name">METALES RECICLAJE</span>
            </div>
            <p className="footer-brand-tagline">
              Compra y comercialización de materiales recuperables en toda la Argentina.
            </p>
          </div>


          <div className="footer-nav-col">
            <h3 className="footer-col-title">NAVEGACIÓN</h3>
            <ul className="footer-links-list">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openWhatsApp('Hola Metales Reciclaje, quisiera consultar sobre los materiales y metales que compran.');
                  }}
                >
                  Materiales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openWhatsApp('Hola Metales Reciclaje, quisiera consultar sobre sus servicios de retiro y reciclaje.');
                  }}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openWhatsApp('Hola Metales Reciclaje, quisiera conocer más información sobre su empresa.');
                  }}
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openWhatsApp('Hola Metales Reciclaje, quisiera solicitar una cotización inmediata.');
                  }}
                >
                  Cotizar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openWhatsApp('Hola Metales Reciclaje, quisiera consultar sobre sus términos y políticas de privacidad.');
                  }}
                >
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>


          <div className="footer-contact-col">
            <h3 className="footer-col-title">CONTACTO</h3>
            <div className="footer-contact-info">
              <p>
                <strong>Teléfono:</strong>{' '}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openWhatsApp('Hola Metales Reciclaje, me gustaría comunicarme con ustedes por teléfono.');
                  }}
                  className="footer-phone-link"
                >
                  +54 9 2612 19-3613
                </a>
              </p>
            </div>
          </div>
        </div>


        <div className="footer-bottom-bar">
          <div className="footer-bottom-container">
            <p className="footer-copyright">
              © 2026 Metales Reciclaje. Todos los derechos reservados.
            </p>
            <span className="footer-country">Argentina</span>
          </div>
        </div>
      </footer>


      <a
        href="https://api.whatsapp.com/send?phone=5492612193613&text=Hola%20Metales%20Reciclaje,%20quisiera%20solicitar%20una%20cotizaci%C3%B3n"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating-btn"
        title="Contactar por WhatsApp"
      >
        <WhatsAppIcon className="whatsapp-floating-icon" />
      </a>
    </div>
  )
}

export default App