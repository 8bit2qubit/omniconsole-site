---
layout: ../../../layouts/DocsLayout.astro
title: Solución de problemas
description: Soluciona problemas relacionados con el Modo Xbox (FSE) en Windows 11.
---

## No aparece el cuadro de diálogo de entrada al Modo Xbox (FSE)

En algunas versiones de Windows, el cuadro de diálogo "Reiniciar para obtener un mejor rendimiento" no se muestra al entrar en el Modo Xbox (FSE). OmniConsole incluye una función de recuperación para solucionarlo:

1. Abre los **Ajustes de OmniConsole** desde el Menú de Inicio.
2. Cambia a la pestaña **Solución de problemas** en el menú de la izquierda.
3. Junto a **Reiniciar Game Bar y entrar en el Modo Xbox (FSE)**, haz clic en **Ejecutar**. Esto reiniciará la Game Bar y forzará la entrada al Modo Xbox (FSE); una vez reiniciada la Game Bar, el cuadro de diálogo aparecerá correctamente.

## OmniConsole no inicia mi plataforma

1. Confirma que OmniConsole está establecida como la **aplicación de inicio del Modo Xbox (FSE)** en **Configuración → Juegos → Modo Xbox (FSE)**.
2. Abre los **Ajustes de OmniConsole** desde el Menú de Inicio y verifica que tu plataforma predeterminada está seleccionada.
3. Asegúrate de que la plataforma seleccionada está instalada en el equipo. Steam Big Picture requiere Steam; la aplicación de Xbox requiere la app oficial de Xbox, etc.

## La instalación falla debido a errores de firma

Debes instalar el certificado `.cer` suministrado en **Equipo local → Entidades de certificación de raíz de confianza** (o *Personas de confianza*). Ejecuta `Install.bat` para realizar una configuración guiada.

## La instalación falla con errores de tipo SCCD

Ve a **Configuración → Sistema → Para desarrolladores** y activa el **Modo de desarrollador**.