# Invitación online de boda — plantilla

Esta versión está hecha SIN DATOS DEFINITIVOS, con huecos para rellenar.

## Qué subir a GitHub

Sube estos elementos a la raíz del repositorio:

- index.html
- css/styles.css
- js/app.js
- assets/

## Dónde cambiar los datos

### En index.html

Busca textos entre corchetes, por ejemplo:

- [Nombre 1]
- [Nombre 2]
- [DÍA]
- [MES]
- [AÑO]
- [HORA]
- [Nombre del lugar de la ceremonia]
- [Dirección]
- [ENLACE GOOGLE MAPS CEREMONIA]

### En js/app.js

Cambia:

```js
const weddingDate = new Date("2027-06-15T17:30:00");
const confirmationEmail = "TU_EMAIL_AQUI@ejemplo.com";
```

### Música

Sube una canción llamada:

assets/audio/entrada.mp3

Si no subes música, la web funciona igual, solo que no sonará.

### Fotos

Más adelante se pueden añadir fotos en:

assets/images/
