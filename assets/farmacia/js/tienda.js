const { createApp } = Vue

const optionsVue = {
  data() {
    return {
      arreglo: [],
      filtroCate: [],
      select: "catego"
    }
  },

  beforeCreate() {
    fetch("https://moviestack.onrender.com/api/petshop")
      .then(pet => pet.json())
      .then(data => {
        console.log(this.arreglo = data)
        this.filtroCate = [... new Set(this.arreglo.map(catego => catego.categoria))]
        console.log(this.filtroCate)
      })

  },

  methods: {
    filtrarPorCategoria(event){
      this.select = event.target.value;
    }
  }

}
const app = createApp(optionsVue)
app.mount('#app')