---
layout: ../../../layouts/DocsLayout.astro
title: Preguntas frecuentes
description: Preguntas comunes sobre OmniConsole.
---

## ¿Bajo qué licencia está OmniConsole?

OmniConsole está bajo la licencia [**PolyForm Noncommercial 1.0.0**](https://github.com/8bit2qubit/OmniConsole/blob/main/LICENSE).

## ¿OmniConsole reemplaza a la aplicación de Xbox?

No. OmniConsole se registra como la **aplicación de inicio del Modo Xbox (FSE)** utilizando la API oficial de Windows, el mismo mecanismo que Microsoft utiliza para la aplicación de Xbox. La aplicación de Xbox sigue funcionando normalmente como una aplicación de Windows, y aún puedes configurarla como tu objetivo de lanzamiento dentro de OmniConsole.

## ¿Es necesario utilizar un dispositivo portátil?

No. OmniConsole se ejecuta en cualquier PC con Windows 11. Los ordenadores de sobremesa, portátiles y tablets utilizan primero [**XFSET**](https://github.com/8bit2qubit/XboxFullScreenExperienceTool) para activar el Modo Xbox (FSE); los dispositivos portátiles nativos (ROG Xbox Ally X, etc.) admiten el Modo Xbox (FSE) de serie.

## ¿Necesito un mando de Xbox?

La Game Bar de Windows 11, la navegación por el Modo Xbox (FSE) y el flujo del botón Xbox requieren un **mando compatible con XInput que disponga de botón Xbox**.

## ¿Puedo añadir mi propia plataforma?

Sí, OmniConsole admite plataformas personalizadas mediante **URI de protocolo**, **ruta de ejecutable** o **aplicación empaquetada (MSIX / APPX)**. También puedes añadir imágenes de portada y argumentos de lanzamiento (solo para el tipo de ruta de ejecutable). Las configuraciones se pueden exportar e importar en formato JSON.

## ¿OmniConsole se actualiza automáticamente?

Sí, OmniConsole comprueba si hay nuevas versiones en GitHub y puede descargar e instalar actualizaciones directamente desde la página de ajustes **Avanzados**.

## ¿Cómo lo desinstalo de forma segura?

Cambia siempre la aplicación de inicio del Modo Xbox (FSE) a **Xbox** o **Ninguna** *antes* de desinstalar. Consulta [Cómo revertir los cambios](/omniconsole-site/docs/revert).

## ¿Dónde puedo reportar fallos?

Puedes abrir una incidencia en [github.com/8bit2qubit/OmniConsole/issues](https://github.com/8bit2qubit/OmniConsole/issues).