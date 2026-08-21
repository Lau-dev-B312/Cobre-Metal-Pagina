import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleLightMode = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    document.documentElement.classList.toggle('light-mode', newMode);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        setIsServicesMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nombre = formData.get('nombre');
    const telefono = formData.get('telefono');
    const email = formData.get('email');
    const mensaje = formData.get('mensaje');
    
    const subject = encodeURIComponent(`Nuevo contacto de ${nombre}`);
    const body = encodeURIComponent(`Nombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\n\nMensaje:\n${mensaje}`);
    
    window.location.href = `mailto:ejemplo@gmail.com?subject=${subject}&body=${body}`;
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo-container">
          <span className="logo-text">Cobre<span className="logo-accent">Metal</span></span>
        </div>
        <div className="nav-links">
          <a href="#about">Nosotros</a>
          <div className="nav-dropdown">
            <a href="#services" onClick={(e) => { e.preventDefault(); setIsServicesMenuOpen(!isServicesMenuOpen); }}>Servicios</a>
            {isServicesMenuOpen && (
              <div className="dropdown-menu">
                <a href="#" onClick={(e) => { e.preventDefault(); window.open('https://wa.me/1010110101', '_blank', 'noopener,noreferrer'); setIsServicesMenuOpen(false); }}>📱 WhatsApp</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); setIsServicesMenuOpen(false); }}>✉️ Formulario</a>
                <a href="#" onClick={(e) => { e.preventDefault(); window.open('https://maps.google.com/?q=Mendoza,+Argentina', '_blank'); setIsServicesMenuOpen(false); }}>📍 Argentina, Mendoza</a>
              </div>
            )}
          </div>
          <a href="#contact" className="btn-primary">Contacto</a>
          <button id="theme-toggle" className="theme-toggle" onClick={toggleLightMode} title={isLightMode ? 'Modo Oscuro' : 'Modo Claro'}>
            {isLightMode ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>

      <main>
        <section className="hero-section">
          <div className="hero-bg">
            <div className="hero-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            </div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">
              Compramos tu <span className="text-gradient">Cobre</span> al Mejor Precio
            </h1>
            <p className="hero-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary btn-large">Cotizar Ahora</a>
              <a href="#about" className="btn-secondary btn-large">Conocer Más</a>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title">Sobre <span className="text-gradient">Nosotros</span></h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                Vivamus hendrerit arcu sed erat molestie vehicula.
              </p>
              <p>
                Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. 
                Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
              </p>
              <div className="stats-container">
                <div className="stat-box">
                  <h3>15+</h3>
                  <span>Años de experiencia</span>
                </div>
                <div className="stat-box">
                  <h3>10k+</h3>
                  <span>Toneladas recicladas</span>
                </div>
                <div className="stat-box">
                  <h3>100%</h3>
                  <span>Transparencia</span>
                </div>
              </div>
            </div>
            <div className="about-image-container">
              <svg xmlns="http://www.w3.org/2000/svg" className="about-image" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{backgroundColor: "#222", padding: "20%"}}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              <div className="glass-card image-card">
                <p>Valoramos cada gramo</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2 className="section-title text-center">Información de <span className="text-gradient">Contacto</span></h2>
          <p className="text-center contact-subtitle">Estamos listos para recibir tu material. Contáctanos por cualquiera de nuestros canales.</p>

          <div className="contact-cards">
            <div className="glass-card contact-card clickable-card" onClick={() => window.open('https://wa.me/1010110101', '_blank', 'noopener,noreferrer')}>
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <h3>Teléfono</h3>
              <p>10101-10101</p>
              <p>Lunes a Viernes: 8:00 - 18:00</p>
            </div>
            <div className="glass-card contact-card clickable-card" onClick={() => setIsModalOpen(true)}>
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <h3>Email</h3>
              <p>ejemplo@gmail.com</p>
              <p>Respuesta en menos de 24hs</p>
            </div>
            <div className="glass-card contact-card clickable-card" onClick={() => window.open('https://maps.google.com/?q=Mendoza,+Argentina', '_blank')}>
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h3>Ubicación</h3>
              <p>Argentina, Mendoza</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="logo-container">
            <span className="logo-text">Cobre<span className="logo-accent">Metal</span></span>
          </div>
          <p>© 2026 CobreMetal. Todos los derechos reservados.</p>
        </div>
      </footer>

      <a href="https://wa.me/1010110101" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </a>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>&times;</button>
            <h3 className="modal-title">Envíanos un mensaje</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre y Apellido</label>
                <input type="text" name="nombre" required />
              </div>
              <div className="form-group">
                <label>Número de teléfono</label>
                <input type="tel" name="telefono" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" required />
              </div>
              <div className="form-group">
                <label>Mensaje</label>
                <textarea name="mensaje" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '1rem'}}>Enviar Mensaje</button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App