---
layout: ../../../layouts/DocsLayout.astro
title: Instalación
description: Instala OmniConsole en Windows 11.
---

## 1. Descarga

Consigue la última versión desde la [**Página de versiones (Releases)**](https://github.com/8bit2qubit/OmniConsole/releases/latest). El archivo ZIP contiene la aplicación principal, el widget OmniCharm, un certificado, las dependencias de entorno necesarias (VCLibs, Windows App Runtime) y el archivo `Install.bat`.

## 2. Instalación

Extrae el archivo `OmniConsole_*_x64.zip` en cualquier carpeta y luego elige una de las siguientes opciones.

### Opción A — Install.bat (Recomendado)

Ejecuta `Install.bat`. Este archivo activará el Modo de desarrollador, instalará el certificado, añadirá cualquier dependencia de entorno que falte e instalará ambos paquetes MSIX de forma automática.

### Opción B — Instalación manual

1. **[Crítico]** Abre la **Configuración de Windows → Sistema → Para desarrolladores** y activa el **Modo de desarrollador**.
2. **[Crítico]** Haz doble clic en `OmniConsole_*_x64.cer` → **Instalar certificado** → **Equipo local** → **Colocar todos los certificados en el siguiente almacén** → **Examinar** → **Entidades de certificación de raíz de confianza** (o *Personas de confianza*) → Finalizar. (Puedes saltarte este paso si ya habías instalado el certificado anteriormente).
3. _(Opcional — solo necesario en sistemas limpios o sin conexión a internet; los sistemas conectados las descargan automáticamente)_ Haz doble clic en cada archivo dentro de la carpeta `Dependencies\` para instalar los paquetes de entorno incluidos (salta cualquiera que indique que ya hay una versión igual o más reciente instalada).
4. Haz doble clic en `OmniConsole_*_x64.msix` para instalar la aplicación principal.
5. Haz doble clic en `OmniConsole.PhantomLink_*_x64-widget.msix` para instalar el widget OmniCharm.

## 3. Configura tu plataforma predeterminada

OmniConsole muestra su interfaz de Ajustes en el **primer inicio** y **después de cada actualización**. También puedes abrirla en cualquier momento desde el Menú de Inicio:

1. Abre **Ajustes de OmniConsole** desde **Todas las aplicaciones**.
2. Elige tu plataforma en la cuadrícula de tarjetas; puedes usar el ratón, la pantalla táctil o un mando de Xbox (**Cruceta/Stick izquierdo** para navegar, **A** para confirmar):
   - Steam Big Picture
   - Xbox App
   - Epic Games Store
   - Armoury Crate SE
   - Playnite Fullscreen
3. Pulsa **B** o haz clic en **Salir** para terminar. La selección se guarda automáticamente.

## 4. [Crítico] Establecer como aplicación de inicio del Modo Xbox (FSE)

1. Abre la **Configuración de Windows → Juegos → Modo Xbox (FSE)**.
2. Cambia la opción **Elegir aplicación de inicio** a **OmniConsole**.
3. Activa la opción **Iniciar el modo Xbox (FSE) al arrancar**.

## 5. ¡Listo!

Tu plataforma de juegos ahora se iniciará a través de cualquiera de estos puntos de acceso:

- **Arranque** — se inicia automáticamente en tu plataforma configurada (requiere tener activada la opción "Iniciar el modo Xbox (FSE) al arrancar").
- **Botón Xbox** — abre la Game Bar y elige **Inicio** para lanzar tu plataforma, o **Biblioteca** para abrir los ajustes de OmniConsole.
- **Menú de Inicio** — inicia OmniConsole desde el escritorio; el Modo Xbox (FSE) se activará automáticamente antes de que comience la plataforma.