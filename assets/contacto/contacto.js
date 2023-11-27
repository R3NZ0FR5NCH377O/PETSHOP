const { createApp } = Vue
const optionsVue = {
    data() {
        return {
            modalHVisible: false,
            modalVisibleAlert: false,
        }
    },
    methods: {
        abrirModalHamb() {
            this.modalHVisible = true;
        },
        cerrarModalHamb() {
            this.modalHVisible = false;
        },
        showModal(event) {
            event.preventDefault()
            this.modalVisibleAlert = true
            if (this.modalVisibleAlert) {
                document.body.classList.add('overflow-y-hidden')
            }
        }, // finaliza showModal
        cerrarModal() {
            this.modalVisibleAlert = false
            if (this.modalVisibleAlert == false) {
                document.body.classList.remove('overflow-y-hidden')
            }
        },// finaliza cerrarModal
    },
}


const app = createApp(optionsVue)
app.mount('#app')