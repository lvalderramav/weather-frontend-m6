<template>
    <div class="weather-app">
        <header class="bg-dark text-white py-3 mb-4 shadow-sm">
            <div class="container d-flex justify-content-between align-items-center">
                <h1 class="h3 mb-0 fw-bold"><i class="fa-solid fa-cloud-sun text-warning me-2"></i>Santiago Meteo</h1>
            </div>
        </header>

        <main class="container weather-app__content flex-grow-1">
            <router-view v-slot="{ Component }">
                <component :is="Component" :lugares="lugares" :unidad="unidad" @cambiar-unidad="cambiarUnidadGlobal" />
            </router-view>
        </main>

        <footer class="weather-app__footer text-white text-center py-4 bg-dark mt-5">
            <div class="container">
                <p class="mb-0">&copy; 2026 Santiago App de Clima.</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            lugares: [],
            unidad: "C",
        };
    },
    methods: {
        cambiarUnidadGlobal(nuevaUnidad) {
            this.unidad = nuevaUnidad;
        },
        async fetchClimaData() {
            try {
                // Buscamos tu JSON local del módulo anterior
                const response = await fetch("/data/clima.json");
                if (!response.ok) {
                    // Fallback por si la estructura de carpetas difiere en tu entorno local
                    const responseFallback = await fetch("./data/clima.json");
                    this.lugares = await responseFallback.json();
                    return;
                }
                this.lugares = await response.json();
            } catch (error) {
                console.error("Error al cargar el archivo de datos climáticos:", error);
            }
        },
    },
    mounted() {
        this.fetchClimaData();
    },
};
</script>
