# 🌤️ Santiago Meteo - App de Clima (Módulo 5)

## 📝 Descripción

Esta aplicación proporciona un monitoreo preciso de comunas clave de la Región Metropolitana. En esta iteración (Módulo 5), se reestructuró por completo la lógica interna utilizando principios de Programación Orientada a Objetos (POO), funciones modernas de JavaScript (ES6+) y consumo de datos mediante flujos asíncronos (`fetch` y `async/await`).

## 🏗️ Estructura de Clases (POO)

La aplicación distribuye sus responsabilidades mediante dos clases principales:

- **`ApiClient`**: Ubicada en `js/apiclient.js`. Clase autónoma encargada exclusivamente de realizar solicitudes de red mediante `fetch`, validar las respuestas HTTP y retornar estructuras crudas JSON.
- **`WeatherApp`**: Ubicada en `js/weatherapp.js`. Clase controladora central que gestiona el estado local de la app, coordina las invocaciones del cliente, interactúa de forma segura con los elementos del DOM y encapsula los motores de cálculos estadísticos y alertas.

## 📡 API de Clima Utilizada

- **Endpoint de Prueba**: Servidor de archivos locales mediante la ruta estática `./data/clima.json`, simulando una respuesta JSON asíncrona de producción con tiempos de respuesta optimizados y libre de restricciones de CORS o tokens de autenticación.

## 📊 Resumen de Cálculos Estadísticos y Alertas

1.  **Estadísticas de la Semana**: Se calculan los valores extremos absolutos de temperatura mínima ($T_{min}$) y máxima ($T_{max}$), así como un promedio ponderado exacto por iteración lineal clásica sobre el arreglo de pronósticos.
2.  **Filtros de Frecuencias**: Se agrupan y cuantifican las ocurrencias diarias por cadenas de estados meteorológicos coincidentes.
3.  **Alertas Climáticas**: Implementación de condicionales con lógica de negocio:
    - Si la temperatura promedio semanal es superior a los 22°C, se activa de forma automática una **"Alerta de Calor"**.
    - Si se detectan dos o más días bajo descriptores de lluvia, se activa una alerta de **"Semana Lluviosa"**.

---

- **Repositorio Público**: https://github.com/lvalderramav/weather-frontend-m5.git
