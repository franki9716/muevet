# Landing MueveT

Página de aterrizaje para promocionar y descargar MueveT.

## Cómo publicar en internet

1. **Sube la carpeta `landing`** a tu hosting (Netlify, Vercel, GitHub Pages, o cualquier servidor con HTML estático).
2. **Descarga del .exe:** El botón apunta a **GitHub Releases**. Para que funcione:
   - Ve al repo → **Releases** → **Create a new release**.
   - Etiqueta ej. `v1.0.0`, título ej. "MueveT v1.0.0".
   - Arrastra o sube **MueveT.exe** (el generado con PyInstaller desde la raíz del proyecto).
   - Publica el release. La URL `https://github.com/franki9716/muevet/releases/latest/download/MueveT.exe` servirá el .exe y la descarga será estable (sin límite de tamaño del repo).

## Monetización con publicidad

Sí, puedes monetizar con publicidad. En la página hay **dos zonas** preparadas (clase `ad-slot`):

1. **Banner bajo el hero** — Ideal para un bloque horizontal (ej. 728x90 o responsive).
2. **Banner antes de la sección Descargar** — Segunda oportunidad de impresión.

### Cómo añadir Google AdSense

1. Entra en [Google AdSense](https://www.google.com/adsense), crea una cuenta y que te aprueben el sitio.
2. Crea una “unidad de anuncio” (display responsive o tamaño fijo).
3. AdSense te dará un código similar a:
   ```html
   <script async src="https://pagead2.googlesyndication.com/..."></script>
   <ins class="adsbygoogle" ...></ins>
   <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
   ```
4. En `index.html`, **sustituye** el contenido de uno de los `<div class="ad-inner">` por ese código (puedes dejar el `<p class="ad-placeholder">` y borrarlo una vez que el anuncio se vea, o quitarlo desde ya).
5. Repite para la segunda zona si quieres dos bloques.

El CSS ya está pensado para que, cuando haya un `<ins>` o `<iframe>` dentro de `ad-inner`, el texto “Espacio publicitario” se pueda ocultar.

### Otras opciones de monetización

- **Donaciones:** Añadir un botón “Invítame a un café” (Ko-fi, Buy Me a Coffee) o enlace a PayPal.
- **Producto de pago:** Si en el futuro sacas una versión “Pro” o de pago, puedes enlazarla desde la misma landing.

## Estructura de archivos

- `index.html` — Contenido de la página.
- `styles.css` — Estilos (tema oscuro, acento verde/teal MueveT).
- `script.js` — Scroll suave para enlaces internos.
- `README.md` — Este archivo.

No subas el .exe al repo (está en `.gitignore`). Súbelo solo en un Release. Antes: copia `dist/MueveT.exe` dentro de la carpeta `landing` y déjalo como está el enlace. Si no, cambia el `href` del botón “Descargar MueveT.exe” en `index.html` a la URL donde tengas alojado el ejecutable.
