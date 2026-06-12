---
layout: ../../../layouts/DocsLayout.astro
title: Plataformas personalizadas
description: Añade tus propias plataformas y aplicaciones a OmniConsole.
---

OmniConsole incluye un conjunto de plataformas integradas de serie, pero puedes añadir las tuyas propias: cualquier ejecutable o aplicación. Todo se realiza a través de la interfaz gráfica, por lo que no es necesario editar manualmente ningún archivo de configuración JSON. Cada vez que se selecciona un campo de texto, el teclado para mando de Windows 11 se abre automáticamente, lo que te permite rellenarlo todo sin necesidad de un teclado físico.

> ⚠️ **Las plataformas personalizadas son una función experimental.** Las plataformas integradas han sido probadas, pero una plataforma personalizada configurada por ti mismo, no. Una plataforma mal configurada puede fallar al iniciarse y, en algunos casos, desestabilizar el entorno del Modo Xbox (FSE); la recuperación podría requerir el restablecimiento de la aplicación. La primera vez que abras esta función, OmniConsole mostrará un aviso de consentimiento que deberás aceptar.

## Añadir una plataforma

En la pantalla de Ajustes, abre la pestaña **Personalizado**. Pulsa el botón **Y** del mando, o haz clic en la indicación **"Y Añadir"** en la parte inferior de la pantalla para abrir el cuadro de diálogo de nueva plataforma.

## Tipos de lanzamiento

Una plataforma personalizada utiliza uno de los siguientes tres tipos de lanzamiento:

| Tipo | Descripción |
|---|---|
| Ejecutable | Apunta a un archivo `.exe`. Admite argumentos de lanzamiento personalizados. Incluye un selector de archivos adaptado para mandos, lo que te permite buscar sin necesidad de un ratón. |
| URI de protocolo | Se lanza mediante un enlace de protocolo, como por ejemplo `steam://`. |
| Aplicación empaquetada | Para aplicaciones MSIX / APPX (aplicaciones UWP o de la Microsoft Store). Busca entre los paquetes instalados por su nombre de familia de paquete (Package Family Name). |

## Portada de la tarjeta

Puedes asignarle a cada plataforma personalizada su propia imagen de portada para la tarjeta. La resolución recomendada es de 800 × 560 px (una relación de aspecto de 10:7); las imágenes se escalan a ese tamaño de forma automática.

## Importar y exportar

Para compartir una plataforma, haz clic derecho (o mantén pulsada) su tarjeta y elige **Exportar**: la configuración se copiará al portapapeles en formato JSON. Para añadir una plataforma compartida, utiliza el botón **Importar** en la pestaña Personalizado y pega el código JSON.