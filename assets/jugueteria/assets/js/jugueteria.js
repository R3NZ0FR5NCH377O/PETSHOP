const {createApp} = Vue

const options = {
  data(){
    return{
      articulos: [],
      articuloFiltrado:[],
      categoria:'jugueteria',
    }
  },

  beforeCreate(){
    fetch("https://moviestack.onrender.com/api/petshop")
      .then(response => response.json())
      .then(data => {
        this.articulo = data
        console.log(this.articulo)
        this.articuloFiltrado= this.articulo.filter(articulo => articulo.categoria == this.categoria)
      })
      .catch(error => console.log(error))
    },//finaliza beforeCreate

    
}//finalizacion de options

const app = createApp(options)
app.mount ('#app')