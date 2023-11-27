const { createApp } = Vue
const optionsVue = {
    data() {
        return {
            modalHVisible: false,
        }
    },

    methods: {
    },
    abrirModalHamb() {
        this.modalHVisible = true;
    },

    cerrarModalHamb() {
        this.modalHVisible = false;
    }
}


const app = createApp(optionsVue)
app.mount('#app')