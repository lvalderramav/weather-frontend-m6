<template>
    <div id="vista-clima">
        <div class="row mb-4 align-items-center g-3">
            <div class="col-12 col-md-8">
                <div class="input-group">
                    <span class="input-group-text bg-white border-end-0 text-muted">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input type="text" v-model="busqueda" class="form-control border-start-0 ps-0" placeholder="Buscar comuna de la RM (ej: Maipú, Ñuñoa...)" />
                </div>
            </div>
            <div class="col-12 col-md-4 text-md-end">
                <label class="me-2 fw-medium text-secondary">Escala:</label>
                <div class="btn-group" role="group">
                    <input type="radio" class="btn-check" id="celsius" value="C" v-model="unidadLocal" />
                    <label class="btn btn-outline-primary" for="celsius">°C</label>

                    <input type="radio" class="btn-check" id="fahrenheit" value="F" v-model="unidadLocal" />
                    <label class="btn btn-outline-primary" for="fahrenheit">°F</label>
                </div>
            </div>
        </div>

        <div v-if="lugaresFiltrados.length === 0" class="alert alert-warning text-center my-4 py-4 shadow-sm">
            <i class="fa-solid fa-circle-info me-2 fs-4 align-middle"></i>
            No se encontró ninguna comuna que coincida con "{{ busqueda }}".
        </div>

        <div v-else class="row" id="tiempo-container">
            <div v-for="lugar in lugaresFiltrados" :key="lugar.id" class="col-12 col-sm-6 col-md-4 mb-4">
                <router-link :to="{ name: 'detalle', params: { id: lugar.id } }" class="text-decoration-none">
                    <article class="place-card card h-100" :class="obtenerClaseEstilo(lugar.estadoActual)">
                        <img :src="lugar.imagen" class="card-img-top object-fit-cover" :alt="lugar.nombre" />
                        <div class="card-body d-flex flex-column">
                            <h5 class="place-card__name text-dark mb-1">{{ lugar.nombre }}</h5>
                            <p class="place-card__temp mb-3">
                                <small class="fw-bold text-secondary"> {{ mostrarTemperatura(lugar.tempActual) }} — {{ lugar.estadoActual }} </small>
                            </p>
                            <div class="mt-auto d-flex justify-content-between align-items-center">
                                <i class="fa-solid text-warning fs-3" :class="lugar.icono"></i>
                                <span class="btn btn-sm btn-outline-secondary rounded-pill px-3">Ver reporte</span>
                            </div>
                        </div>
                    </article>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeView",
    props: {
        lugares: { type: Array, required: true },
        unidad: { type: String, required: true },
    },
    data() {
        return {
            busqueda: "",
        };
    },
    computed: {
        unidadLocal: {
            get() {
                return this.unidad;
            },
            set(val) {
                this.$emit("cambiar-unidad", val);
            },
        },
        lugaresFiltrados() {
            return this.lugares.filter((lugar) => lugar.nombre.toLowerCase().includes(this.busqueda.trim().toLowerCase()));
        },
    },
    methods: {
        mostrarTemperatura(tempC) {
            if (this.unidad === "F") {
                const tempF = Math.round((tempC * 9) / 5 + 32);
                return `${tempF} °F`;
            }
            return `${tempC} °C`;
        },
        obtenerClaseEstilo(estado) {
            const lluvia = ["Lluvia", "Llovizna", "Chubascos", "Tormenta Eléctrica"];
            if (lluvia.includes(estado)) return "place-card--rainy";
            return "place-card--sunny";
        },
    },
};
</script>
