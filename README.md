<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Invitación de boda" />
  <title>David & Estrella | Nuestra boda</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="hero" id="inicio">
    <img class="hero-flower hero-flower-left" src="assets/floral-corner.svg" alt="" aria-hidden="true">
    <img class="hero-flower hero-flower-right" src="assets/floral-corner.svg" alt="" aria-hidden="true">
    <div class="hero-overlay"></div>
    <nav class="nav">
      <a class="brand" href="#inicio">D &amp; E</a>
      <button class="menu-btn" aria-label="Abrir menú">☰</button>
      <div class="nav-links">
        <a href="#ceremonia">Ceremonia</a>
        <a href="#fiesta">Fiesta</a>
        <a href="#dresscode">Dress code</a>
        <a href="#rsvp">Confirmar</a>
      </div>
    </nav>

    <div class="hero-content reveal">
      <span class="eyebrow">Nos casamos</span>
      <h1>David <span>&amp;</span> Estrella</h1>
      <p class="date">03 · 10 · 2027</p>
      <p class="hero-copy">Hay momentos que merecen ser celebrados para siempre. Queremos compartir este día contigo.</p>
      <a class="btn btn-primary" href="#rsvp">Confirmar asistencia</a>
    </div>

    <div class="hero-icons" aria-hidden="true">
      <span class="horse-icon">♞</span>
      <span class="controller-icon">🎮</span>
    </div>
    <a class="scroll" href="#ceremonia" aria-label="Bajar">⌄</a>
  </header>

  <main>
    <section class="intro section reveal" aria-label="Bienvenida">
      <img class="floral-sprig floral-sprig-left" src="assets/floral-sprig.svg" alt="" aria-hidden="true">
      <img class="floral-sprig floral-sprig-right" src="assets/floral-sprig.svg" alt="" aria-hidden="true">
      <p class="section-kicker">Una fecha para recordar</p>
      <h2>Queremos celebrarlo contigo</h2>
      <p class="lead">Nos hace muchísima ilusión compartir este día con las personas que forman parte de nuestra historia.</p>
    </section>

    <section class="details section" id="ceremonia">
      <div class="section-heading reveal">
        <p class="section-kicker">El gran día</p>
        <h2>La ceremonia</h2>
      </div>
      <div class="cards-grid">
        <article class="detail-card reveal">
          <div class="card-icon">◷</div>
          <h3>Hora</h3>
          <p>18:00 h</p>
          <small>Te recomendamos llegar 30 minutos antes.</small>
        </article>
        <article class="detail-card reveal">
          <div class="card-icon">⌖</div>
          <h3>Lugar</h3>
          <p>Finca La Torreta</p>
          <small>Av. de Elda, 5 · 03550 Sant Joan d’Alacant</small>
          <a class="text-link" href="https://www.google.com/maps/search/?api=1&query=Finca+La+Torreta+Avenida+de+Elda+5+Sant+Joan+d%27Alacant" target="_blank" rel="noopener">Abrir en Google Maps</a>
        </article>
        <article class="detail-card reveal">
          <div class="card-icon">❦</div>
          <h3>Ceremonia</h3>
          <p>Al aire libre</p>
          <small>Una celebración rodeada de jardines y naturaleza.</small>
        </article>
      </div>
    </section>

    <section class="timeline section" id="fiesta">
      <div class="section-heading reveal">
        <p class="section-kicker">Después del sí</p>
        <h2>Celebración y fiesta</h2>
      </div>
      <div class="timeline-list">
        <div class="timeline-item reveal"><span>18:00</span><div><h3>Ceremonia</h3><p>Comenzamos el día más especial.</p></div></div>
        <div class="timeline-item reveal"><span>19:00</span><div><h3>Cóctel</h3><p>Brindis, aperitivos y música en los jardines.</p></div></div>
        <div class="timeline-item reveal"><span>21:00</span><div><h3>Cena</h3><p>Compartiremos mesa, historias y muchas sorpresas.</p></div></div>
        <div class="timeline-item reveal"><span>23:30</span><div><h3>Fiesta</h3><p>Baile, barra libre y diversión hasta que el cuerpo aguante.</p></div></div>
      </div>
    </section>

    <section class="dress-code section" id="dresscode">
      <div class="dress-content reveal">
        <p class="section-kicker">Dress code</p>
        <h2>Elegante y con personalidad</h2>
        <p>Nos encantará verte con un look elegante de celebración. Reservamos el blanco y los tonos crema muy claros para la novia.</p>
        <div class="palette" aria-label="Paleta sugerida">
          <span style="--c:#314b3a"></span>
          <span style="--c:#75866b"></span>
          <span style="--c:#b9b89c"></span>
          <span style="--c:#c9aa8b"></span>
          <span style="--c:#7b5e57"></span>
        </div>
        <small>Elige tejidos cómodos: parte de la celebración será al aire libre.</small>
      </div>
    </section>

    <section class="info section">
      <div class="section-heading reveal">
        <p class="section-kicker">Información útil</p>
        <h2>Todo lo que necesitas saber</h2>
      </div>
      <div class="info-grid">
        <article class="info-box reveal"><h3>Autobús</h3><p>Habrá servicio de autobús desde Alicante y San Juan. Horarios por confirmar.</p></article>
        <article class="info-box reveal"><h3>Regalo</h3><p>Vuestra presencia es nuestro mejor regalo. Si además queréis ayudarnos con nuestra aventura, añadiremos aquí la información.</p></article>
        <article class="info-box reveal"><h3>Niños</h3><p>Indica en la confirmación si vienes con niños y sus edades para organizarlo todo.</p></article>
        <article class="info-box reveal"><h3>Ubicación</h3><p>La celebración será en Finca La Torreta, en Sant Joan d’Alacant.</p><a class="text-link" href="https://www.google.com/maps/search/?api=1&query=Finca+La+Torreta+Avenida+de+Elda+5+Sant+Joan+d%27Alacant" target="_blank" rel="noopener">Cómo llegar</a></article>
      </div>
    </section>


    <section class="hotels section" id="alojamiento">
      <img class="floral-corner corner-top" src="assets/floral-corner.svg" alt="" aria-hidden="true">
      <img class="floral-corner corner-bottom" src="assets/floral-corner.svg" alt="" aria-hidden="true">
      <div class="section-heading reveal">
        <p class="section-kicker">Para descansar después de la fiesta</p>
        <h2>Hoteles cercanos</h2>
        <p>Dos opciones de 4 estrellas en la zona de Playa de San Juan.</p>
      </div>
      <div class="hotel-grid">
        <article class="hotel-card reveal">
          <span class="hotel-stars">★★★★</span>
          <h3>Hotel Alicante Golf</h3>
          <p>C. Escultor José Gutiérrez, 23 · Alicante</p>
          <div class="hotel-actions">
            <a class="btn btn-outline" href="https://www.google.com/maps/search/?api=1&query=Hotel+Alicante+Golf+Calle+Escultor+Jose+Gutierrez+23+Alicante" target="_blank" rel="noopener">Ver en Maps</a>
            <a class="text-link" href="https://hotelalicantegolf.com/" target="_blank" rel="noopener">Ver hotel</a>
          </div>
        </article>
        <article class="hotel-card reveal">
          <span class="hotel-stars">★★★★ superior</span>
          <h3>Port Alicante City &amp; Beach</h3>
          <p>Av. de Cataluña, 20 · Alicante</p>
          <div class="hotel-actions">
            <a class="btn btn-outline" href="https://www.google.com/maps/search/?api=1&query=Port+Alicante+City+Beach+Avenida+de+Cataluna+20+Alicante" target="_blank" rel="noopener">Ver en Maps</a>
            <a class="text-link" href="https://www.porthotels.es/port-alicante.html" target="_blank" rel="noopener">Ver hotel</a>
          </div>
        </article>
      </div>
    </section>

    <section class="countdown section">
      <div class="countdown-inner reveal">
        <p class="section-kicker">Cuenta atrás</p>
        <h2>Ya queda menos</h2>
        <div class="countdown-grid" data-date="2027-10-03T18:00:00">
          <div><strong id="days">000</strong><span>Días</span></div>
          <div><strong id="hours">00</strong><span>Horas</span></div>
          <div><strong id="minutes">00</strong><span>Minutos</span></div>
          <div><strong id="seconds">00</strong><span>Segundos</span></div>
        </div>
      </div>
    </section>

    <section class="rsvp section" id="rsvp">
      <div class="rsvp-wrap reveal">
        <div class="rsvp-copy">
          <p class="section-kicker">RSVP</p>
          <h2>¿Nos acompañas?</h2>
          <p>Confirma tu asistencia para acompañarnos en este día tan especial.</p>
        </div>
        <form id="rsvp-form">
          <div class="form-row">
            <label>Nombre y apellidos<input type="text" name="nombre" required placeholder="Escribe tu nombre" /></label>
            <label>Teléfono<input type="tel" name="telefono" placeholder="600 000 000" /></label>
          </div>
          <label>¿Asistirás?
            <select name="asistencia" required>
              <option value="">Selecciona una opción</option>
              <option value="si">Sí, allí estaré</option>
              <option value="no">No podré asistir</option>
            </select>
          </label>
          <div class="form-row">
            <label>Número de adultos<input type="number" name="adultos" min="0" value="1" /></label>
            <label>Número de niños<input type="number" name="ninos" min="0" value="0" /></label>
          </div>
          <label>Alergias o intolerancias<textarea name="alergias" rows="3" placeholder="Cuéntanos lo que necesitemos saber"></textarea></label>
          <label>Canción que no puede faltar<input type="text" name="cancion" placeholder="Artista y canción" /></label>
          <button class="btn btn-primary" type="submit">Enviar confirmación</button>
          <p class="form-status" id="form-status"></p>
        </form>
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-flower">❦</div>
    <h2>David &amp; Estrella</h2>
    <p>03 · 10 · 2027</p>
    <small>Hecho con mucho amor ♡</small>
  </footer>

  <script src="script.js"></script>
</body>
</html>
