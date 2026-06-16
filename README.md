# 🌤️ Santiago Meteo SPA - Aplicación de Clima (Módulo 6)

## 📝 Descripción

Este proyecto transforma la aplicación tradicional de monitoreo meteorológico de la Región Metropolitana en una **Single Page Application (SPA)** moderna construida sobre **Vue.js 3** y estructurada mediante **Vue Router**. La interfaz opera de forma 100% reactiva procesando los flujos asíncronos de la API _Open-Meteo_ y ofreciendo una navegación fluida e interacciones dinámicas en tiempo real sin recargar el navegador.

## 📦 Vistas Principales

La interfaz se divide de forma limpia en componentes y vistas modulares:

1.  **Home (Ruta Inicial `/`)**: Despliega el catálogo de las **12 comunas históricas**. Incorpora un buscador predictivo interactivo enlazado mediante `v-model` y un selector global de unidades térmicas.
2.  **Detalle de Lugar (Ruta Dinámica `/lugar/:id`)**: Renderiza la información extendida de la comuna seleccionada (humedad, viento y pronóstico extendido), calculando de manera automatizada las estadísticas semanales extremas, el histograma de condiciones y el sistema de alertas críticas.

## 🛣️ Enrutamiento (Vue Router)

- `/` -> `HomeView.vue` (Listado y filtrado global).
- `/lugar/:id` -> `DetailView.vue` (Ficha dinámica parametrizada mediante el ID único de la comuna).

## 📊 Reglas de Negocio Incorporadas

- **Conversión Dinámica**: Cambio simultáneo en toda la interfaz entre la escala Celsius y Fahrenheit.
- **Alertas Automatizadas**: Activación de una _Alerta de Calor_ si el promedio semanal supera los 22°C o una _Alerta de Semana Lluviosa_ si se registran dos o más jornadas con precipitaciones.

## 🚀 Instrucciones de Ejecución

Para levantar el proyecto en un entorno local, asegúrate de contar con Node.js instalado y ejecuta los siguientes comandos:

```bash
# 1. Clonar el repositorio público
git clone [https://github.com/lvalderramav/weather-frontend-m6.git](https://github.com/lvalderramav/weather-frontend-m6.git)

# 2. Ingresar a la carpeta raíz del proyecto
cd weather-frontend-m6

# 3. Instalar las dependencias requeridas
npm install

# 4. Compilar los estilos SCSS (En caso de desarrollo)
npm run sass:watch

# 5. Levantar el servidor de desarrollo local
npm run dev
```

# weather-frontend-m6
