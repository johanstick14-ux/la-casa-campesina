# La Casa Campesina · FrescoAlerta — página del proyecto

Página informativa del proyecto final Lean UX (Universidad EAN · Trend + Tech, noviembre de 2026).
Es HTML, CSS y JavaScript sin frameworks ni compilación: se publica tal cual en GitHub Pages.

```
web/
├── index.html   contenido de la página
├── styles.css   estilos (paleta y tipografía de la presentación)
├── main.js      objeto CONFIG con los enlaces + lógica de los botones
└── assets/      fotos optimizadas (WebP)
```

## 1. Poner los enlaces (prototipo, video pitch)

Todo se cambia en un solo lugar: el objeto `CONFIG` al inicio de `main.js`.

```js
const CONFIG = {
  prototipoUrl: "",          // enlace público al proyecto de Wokwi/Tinkercad
  prototipoEmbed: false,     // true para incrustarlo en un iframe si el enlace lo permite
  videoEntrevista: "https://www.youtube.com/watch?v=Y5393YsYWb8",
  videoPitch: ""             // opcional, cuando exista
};
```

- Mientras `prototipoUrl` esté vacío, los botones dicen **«Prototipo · Próximamente»**, están deshabilitados y la sección dice «Prototipo en desarrollo».
- Al pegar el enlace de Wokwi (por ejemplo `https://wokwi.com/projects/123456789012345678`), los botones se activan solos.
- Si quieres ver la simulación dentro de la página, pon `prototipoEmbed: true`. Wokwi permite incrustar con la dirección `https://wokwi.com/projects/<id>/embed`; si el iframe sale en blanco, vuelve a `false`.
- `videoPitch` funciona igual: vacío = «Video pitch · Próximamente».

Para el enlace de Wokwi: en el proyecto, **Save** → **Share** → copia el enlace público.

## 2. Ver la página en tu computador

Abre `index.html` con doble clic, o, para probarla como en internet:

```bash
python -m http.server 8000
```

y entra a http://localhost:8000.

## 3. Publicar en GitHub Pages

La carpeta `web/` ya es un repositorio git local (rama `main`, sin commits todavía). Falta el primer commit, crear el repositorio en GitHub y subirlo:

1. En GitHub crea un repositorio **público** vacío, por ejemplo `la-casa-campesina` (sin README ni licencia).
2. Desde esta carpeta (`web/`):

   ```bash
   git add .
   git commit -m "Página del proyecto La Casa Campesina"
   git remote add origin https://github.com/<tu-usuario>/la-casa-campesina.git
   git push -u origin main
   ```

   O, con GitHub CLI, en un solo paso: `gh repo create la-casa-campesina --public --source . --push`
3. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)` → **Save**.
4. En uno o dos minutos la página queda en `https://<tu-usuario>.github.io/la-casa-campesina/`.

Cada cambio posterior se publica con:

```bash
git add .
git commit -m "Actualizar enlace del prototipo"
git push
```

## 4. Después de publicar

- Pon la URL de la página en los QR de las diapositivas 21 (prototipo) y 27 (gracias) de la presentación, y en el Anexo D del documento.
- Pon el enlace de Wokwi en `CONFIG.prototipoUrl` y en el Anexo D del documento.

## Notas de contenido

- $800.000 por semana es una **estimación de la propietaria**; el 20 % es una **meta de validación**, no un resultado.
- El prototipo, las piezas de FabLab y la prueba con los usuarios están **en desarrollo**.
- La foto de Luz Mery se usa con su permiso.
