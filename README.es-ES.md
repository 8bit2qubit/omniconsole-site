# Sitio web de OmniConsole

> 🌐 **Español** | [Inglés](README) | [Chino](README.zh-TW.md) | [Sitio web en vivo ↗](https://8bit2qubit.github.io/omniconsole-site/es-ES)

<p align="center">
<img src="public/logo.png" alt="Sitio web de OmniConsole" style="height: 80px; object-fit: contain; display: block; margin: 0 auto;">
</p>

El sitio web oficial de [**OmniConsole**](https://github.com/8bit2qubit/OmniConsole): un sitio estático multilingüe, prerrenderizado con Astro 6 y desplegado en GitHub Pages.

---

## 💡 ¿Qué es el sitio web de OmniConsole?

Es el código fuente de la página oficial de OmniConsole. Incluye la página de destino (*landing page*), documentación multilingüe (instalación, solución de problemas, referencia del mando) y una página sincronizada con los lanzamientos, todo ello prerrenderizado a HTML estático y desarrollado con Astro 6.

### Cómo funciona

> Push a `main` → GitHub Actions ejecuta `astro build`  
> → La obtención en tiempo de compilación (*build-time fetch*) de `api.github.com/.../releases/latest` integra la información de la última versión directamente en el HTML prerrenderizado  
> → La carpeta `dist/` se publica en GitHub Pages

---

## ✨ Características

- **Prerrenderizado a HTML estático** – Cada página se prerrenderiza a HTML/CSS puro en tiempo de compilación mediante las islas de Astro 6; no se requiere un entorno de ejecución en el servidor.
- **Interfaz multilingüe** – Disponible en inglés, chino tradicional (繁體中文) y chino simplificado (简体中文), enrutado a través del sistema de internacionalización (i18n) integrado de Astro con rutas con prefijo de idioma. *Nota: Contenido en español en proceso de integración.*
- **Sincronización de versiones en tiempo de compilación** – La consulta a la API de GitHub durante el proceso de empaquetado integra automáticamente la última versión, la URL del recurso y el tamaño del archivo en el HTML definitivo.
- **Colecciones de contenido** – Las tarjetas de características se redactan como archivos Markdown con tipado comprobado (uno por idioma) dentro de `src/content/features/`.
- **Iconify + Lucide** – Iconos SVG optimizados mediante *tree-shaking* a través de `astro-icon`.
- **Fuentes nativas del sistema** – Cada idioma se representa con la fuente nativa de su sistema operativo (PingFang / Microsoft JhengHei para `zh-TW`, PingFang SC / Microsoft YaHei para `zh-CN`, system-ui / Segoe UI para `en` y `es`) mediante reglas `:lang()`. Sin descargas de fuentes, sin parpadeos de texto (FOUT) y con una velocidad de carga instantánea.
- **Imágenes locales del sitio** – Las capturas de pantalla se guardan en `public/images/` para que el sitio sea autónomo, funcione sin conexión durante el desarrollo y no dependa de cambios en CDN externos.
- **Compatibilidad con subrutas de GitHub Pages** – El archivo `astro.config.mjs` define `base: "/omniconsole-site"`; todos los enlaces internos emplean `import.meta.env.BASE_URL` para garantizar que funcione tanto en despliegues bajo una subruta como en un dominio personalizado.
- **Modo oscuro por defecto** – Paleta de colores oscuros diseñada a juego con la estética de la aplicación OmniConsole.
- **Optimizado para SEO** – Metadatos Open Graph y Twitter Card por página, URLs canónicas y etiquetas `hreflang` alternativas para cada idioma.

---

## ⚙️ Requisitos previos

**Node.js 22.12.0 o superior**

---

## 🚀 Inicio rápido

### 1. Clonar el repositorio

```bash
git clone [https://github.com/8bit2qubit/omniconsole-site.git](https://github.com/8bit2qubit/omniconsole-site.git)
cd omniconsole-site
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abre `http://localhost:4321/omniconsole-site/` en tu navegador. El sufijo `/omniconsole-site/` replica la ruta base de producción.

### 4. Compilar para producción

```bash
npm run build
```

Primero se ejecuta `astro check` (comprobación de tipos) y, a continuación, `astro build` genera el HTML prerrenderizado en la carpeta `dist/`. Puedes previsualizarlo localmente con `npm run preview`.

### 5. Desplegar

Haz un *push* a la rama `main` y el flujo de trabajo de GitHub Actions incluido (`.github/workflows/deploy.yml`) compilará y publicará el sitio en GitHub Pages de forma automática.

---

## 💻 Tecnologías utilizadas

* **Framework**: Astro 6
* **Estilos**: Tailwind CSS 3 (vía PostCSS)
* **Iconos**: Iconify (`@iconify-json/lucide`) a través de `astro-icon`
* **Fuentes**: Fuentes nativas del sistema (sin fuentes web externas)
* **Comprobación de tipos**: TypeScript (estricto)
* **Alojamiento**: GitHub Pages
* **CI/CD**: GitHub Actions (`withastro/action@v3` + `actions/deploy-pages@v4`)

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **[GNU Affero General Public License v3.0 (AGPL-3.0)](https://github.com/8bit2qubit/omniconsole-site/blob/main/LICENSE)**.

Eres libre de utilizar, modificar y distribuir este software, pero cualquier trabajo derivado —**incluidas las versiones modificadas que se ejecuten de cara al público a través de una red**— también deberá distribuirse bajo la **misma licencia AGPL-3.0 y proporcionar el código fuente completo** a todos los usuarios que interactúen con el servicio. Para más detalles, consulta los [términos oficiales de la licencia AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.html).