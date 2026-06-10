:root {
  /* Modo Claro - Dinero Morado Sutil */
  --fondo-dinero: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><text x="20" y="50" fill="rgba(168,85,247,0.06)" font-size="38" font-weight="bold">$</text><text x="80" y="100" fill="rgba(168,85,247,0.03)" font-size="24">$</text></svg>');
  --fondo-gradiente: linear-gradient(135deg, #f3e8ff, #e9d5ff, #c084fc);
  --texto: #3b0764;
  --caja: #ffffff;
  --neon: #a855f7;
  --neon-glow: rgba(168, 85, 247, 0.4);
  --border-input: #d8b4fe;
}

body.dark {
  /* Modo Oscuro - Dinero Magenta Neón Cyberpunk */
  --fondo-dinero: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><text x="20" y="50" fill="rgba(223,32,255,0.15)" font-size="38" font-weight="bold">$</text><text x="80" y="100" fill="rgba(223,32,255,0.07)" font-size="24">$</text></svg>');
  --fondo-gradiente: linear-gradient(135deg, #090212, #130624, #1e0a36);
  --texto: #f5f3ff;
  --caja: #0f051d;
  --neon: #df20ff;
  --neon-glow: rgba(223, 32, 255, 0.6);
  --border-input: #4c1d95;
}

/* ========================================================
   2. ESTILOS BASE Y ANIMACIÓN DEL FONDO DE DINERO
   ======================================================== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Arial, sans-serif;
}

body {
  /* Fondo doble: capa de dinero + capa de color degradado */
  background-image: var(--fondo-dinero), var(--fondo-gradiente);
  background-attachment: fixed;
  color: var(--texto);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  transition: color 0.3s ease;
 
  /* Animación infinita para que el dinero flote */
  animation: flotarDinero 20s linear infinite;
}

/* ========================================================
   3. CONTENEDOR PRINCIPAL CON BORDE NEÓN
   ======================================================== */
.contenedor {
  position: relative;
  backdrop-filter: blur(10px);
  background: var(--caja);
  width: 380px;
  padding: 45px 35px 35px 35px;
  border-radius: 24px;
  text-align: center;
 
  /* Efecto Neón en el Borde */
  border: 2px solid var(--neon);
  box-shadow: 0 0 25px var(--neon-glow), 0 15px 40px rgba(0, 0, 0, 0.6);
 
  animation: entrada 0.8s ease;
  transition: background 0.3s, border 0.3s, box-shadow 0.3s;
}

h1 {
  margin-top: 15px;
  margin-bottom: 5px;
  color: var(--neon);
  text-shadow: 0 0 8px var(--neon-glow);
}

h3 {
  margin-bottom: 25px;
  color: var(--texto);
  opacity: 0.8;
  font-weight: normal;
  font-size: 15px;
}

/* ========================================================
   4. CASILLAS DE ENTRADA (INPUTS)
   ======================================================== */
input {
  width: 100%;
  padding: 14px;
  margin-top: 12px;
  background: var(--caja);
  color: var(--texto);
  border: 2px solid var(--border-input);
  border-radius: 12px;
  transition: .3s ease;
}

input::placeholder {
  color: var(--texto);
  opacity: 0.5;
}

input:focus {
  outline: none;
  border-color: var(--neon);
  box-shadow: 0 0 12px var(--neon);
}

/* ========================================================
   5. BOTÓN DE INGRESO
   ======================================================== */
button {
  width: 100%;
  padding: 14px;
  margin-top: 20px;
  border: none;
  border-radius: 12px;
  background: var(--neon);
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 15px var(--neon-glow);
  transition: .3s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px var(--neon);
}

/* ========================================================
   6. BOTONES SUPERIORES (IDIOMA E IZQUIERDA / TEMA A LA DERECHA)
   ======================================================== */
#idioma {
  position: absolute;
  top: 15px;
  left: 15px; /* Movido arriba a la izquierda */
  background: var(--caja);
  color: var(--texto);
  border: 2px solid var(--neon);
  border-radius: 10px;
  padding: 6px 8px;
  font-size: 13px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 0 8px var(--neon-glow);
  transition: .3s ease;
}

#idioma:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px var(--neon);
}

.tema-btn {
  position: absolute;
  top: 15px;
  right: 15px; /* Mantener arriba a la derecha */
  width: 36px;
  height: 36px;
  margin-top: 0;
  padding: 0;
  border: 2px solid var(--neon);
  border-radius: 50%;
  background: var(--caja);
  color: var(--texto);
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 0 8px var(--neon-glow);
  transition: .3s;
}

.tema-btn:hover {
  transform: rotate(20deg) scale(1.1);
  box-shadow: 0 0 15px var(--neon);
}

/* ========================================================
   7. COMPONENTES MENORES Y ANIMACIONES
   ======================================================== */
.mostrar-pass {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-top: 15px;
  margin-bottom: 10px;
}

.mostrar-pass label {
  color: var(--texto);
  font-size: 14px;
  cursor: pointer;
}

.mostrar-pass input {
  width: auto;
  margin: 0;
}

#mensaje {
  margin-top: 15px;
  font-weight: bold;
}

.exito { color: #10b981; text-shadow: 0 0 8px rgba(16, 185, 129, 0.4); }
.error { color: #ef4444; text-shadow: 0 0 8px rgba(239, 68, 68, 0.4); }

.logo { font-size: 32px; margin-bottom: 5px; }
.version { font-size: 11px; color: var(--texto); opacity: 0.5; }
footer { margin-top: 25px; color: var(--texto); opacity: 0.4; font-size: 12px; }

/* Animación del movimiento diagonal del dinero */
@keyframes flotarDinero {
  from { background-position: 0 0, 0 0; }
  to { background-position: 120px 120px, 0 0; }
}

/* Animación de entrada de la tarjeta */
@keyframes entrada {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

El vie, 5 jun 2026 a la(s) 12:30 p.m., Luciano Cabaña (lucianocabana001@gmail.com) escribió:
/* ========================================================
   1. VARIABLES DE COLOR (Morado Oscuro + Dinero Neón SVG)
   ======================================================== */
:root {
  /* Modo Claro - Dinero Morado Sutil */
  --fondo-dinero: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><text x="20" y="50" fill="rgba(168,85,247,0.06)" font-size="38" font-weight="bold">$</text><text x="80" y="100" fill="rgba(168,85,247,0.03)" font-size="24">$</text></svg>');
  --fondo-gradiente: linear-gradient(135deg, #f3e8ff, #e9d5ff, #c084fc);
  --texto: #3b0764;
  --caja: #ffffff;
  --neon: #a855f7;
  --neon-glow: rgba(168, 85, 247, 0.4);
  --border-input: #d8b4fe;
}

body.dark {
  /* Modo Oscuro - Dinero Magenta Neón Cyberpunk */
  --fondo-dinero: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><text x="20" y="50" fill="rgba(223,32,255,0.15)" font-size="38" font-weight="bold">$</text><text x="80" y="100" fill="rgba(223,32,255,0.07)" font-size="24">$</text></svg>');
  --fondo-gradiente: linear-gradient(135deg, #090212, #130624, #1e0a36);
  --texto: #f5f3ff;
  --caja: #0f051d;
  --neon: #df20ff;
  --neon-glow: rgba(223, 32, 255, 0.6);
  --border-input: #4c1d95;
}

/* ========================================================
   2. ESTILOS BASE Y ANIMACIÓN DEL FONDO DE DINERO
   ======================================================== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Arial, sans-serif;
}

body {
  /* Fondo doble: capa de dinero + capa de color degradado */
  background-image: var(--fondo-dinero), var(--fondo-gradiente);
  background-attachment: fixed;
  color: var(--texto);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  transition: color 0.3s ease;
 
  /* Animación infinita para que el dinero flote */
  animation: flotarDinero 20s linear infinite;
}

/* ========================================================
   3. CONTENEDOR PRINCIPAL CON BORDE NEÓN
   ======================================================== */
.contenedor {
  position: relative;
  backdrop-filter: blur(10px);
  background: var(--caja);
  width: 380px;
  padding: 45px 35px 35px 35px;
  border-radius: 24px;
  text-align: center;
 
  /* Efecto Neón en el Borde */
  border: 2px solid var(--neon);
  box-shadow: 0 0 25px var(--neon-glow), 0 15px 40px rgba(0, 0, 0, 0.6);
 
  animation: entrada 0.8s ease;
  transition: background 0.3s, border 0.3s, box-shadow 0.3s;
}

h1 {
  margin-top: 15px;
  margin-bottom: 5px;
  color: var(--neon);
  text-shadow: 0 0 8px var(--neon-glow);
}

h3 {
  margin-bottom: 25px;
  color: var(--texto);
  opacity: 0.8;
  font-weight: normal;
  font-size: 15px;
}

/* ========================================================
   4. CASILLAS DE ENTRADA (INPUTS)
   ======================================================== */
input {
  width: 100%;
  padding: 14px;
  margin-top: 12px;
  background: var(--caja);
  color: var(--texto);
  border: 2px solid var(--border-input);
  border-radius: 12px;
  transition: .3s ease;
}

input::placeholder {
  color: var(--texto);
  opacity: 0.5;
}

input:focus {
  outline: none;
  border-color: var(--neon);
  box-shadow: 0 0 12px var(--neon);
}

/* ========================================================
   5. BOTÓN DE INGRESO
   ======================================================== */
button {
  width: 100%;
  padding: 14px;
  margin-top: 20px;
  border: none;
  border-radius: 12px;
  background: var(--neon);
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 15px var(--neon-glow);
  transition: .3s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px var(--neon);
}

/* ========================================================
   6. BOTONES SUPERIORES (IDIOMA E IZQUIERDA / TEMA A LA DERECHA)
   ======================================================== */
#idioma {
  position: absolute;
  top: 15px;
  left: 15px; /* Movido arriba a la izquierda */
  background: var(--caja);
  color: var(--texto);
  border: 2px solid var(--neon);
  border-radius: 10px;
  padding: 6px 8px;
  font-size: 13px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 0 8px var(--neon-glow);
  transition: .3s ease;
}

#idioma:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px var(--neon);
}

.tema-btn {
  position: absolute;
  top: 15px;
  right: 15px; /* Mantener arriba a la derecha */
  width: 36px;
  height: 36px;
  margin-top: 0;
  padding: 0;
  border: 2px solid var(--neon);
  border-radius: 50%;
  background: var(--caja);
  color: var(--texto);
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 0 8px var(--neon-glow);
  transition: .3s;
}

.tema-btn:hover {
  transform: rotate(20deg) scale(1.1);
  box-shadow: 0 0 15px var(--neon);
}

/* ========================================================
   7. COMPONENTES MENORES Y ANIMACIONES
   ======================================================== */
.mostrar-pass {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-top: 15px;
  margin-bottom: 10px;
}

.mostrar-pass label {
  color: var(--texto);
  font-size: 14px;
  cursor: pointer;
}

.mostrar-pass input {
  width: auto;
  margin: 0;
}

#mensaje {
  margin-top: 15px;
  font-weight: bold;
}

.exito { color: #10b981; text-shadow: 0 0 8px rgba(16, 185, 129, 0.4); }
.error { color: #ef4444; text-shadow: 0 0 8px rgba(239, 68, 68, 0.4); }

.logo { font-size: 32px; margin-bottom: 5px; }
.version { font-size: 11px; color: var(--texto); opacity: 0.5; }
footer { margin-top: 25px; color: var(--texto); opacity: 0.4; font-size: 12px; }

/* Animación del movimiento diagonal del dinero */
@keyframes flotarDinero {
  from { background-position: 0 0, 0 0; }
  to { background-position: 120px 120px, 0 0; }
}

/* Animación de entrada de la tarjeta */
@keyframes entrada {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
} 
