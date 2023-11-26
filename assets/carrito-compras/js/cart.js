const {createApp} = Vue

const options = {
  data(){
    return{
      articulos: [],
      jugueteria:'jugueteria',
      farmacia:'farmacia',
      localStorageCart:[],
      localStorageFiltrado:[],
    }
  },

  beforeCreate(){
    fetch("https://moviestack.onrender.com/api/petshop")
      .then(response => response.json())
      .then(data => {
        this.articulos = data
        this.localStorageCart = JSON.parse(localStorage.getItem('carrito')) || []
        this.localStorageFiltrado = this.articulos.filter(articulo => this.localStorageCart.some(storage => storage.id === articulo._id))
        console.log(this.localStorageFiltrado)
        console.log(this.localStorageFiltrado[0].precio)
      })
      .catch(error => console.log(error))
    },//finaliza beforeCreate
    computed:{
      precioTotal(){
        return (this.localStorageFiltrado.precio * 2)
      }
    },//aca finaliza el computed
    methods: {
    removerDelCarro(articulo){
      let storageCarrito = JSON.parse(localStorage.getItem('carrito')) || []
      const carrito = storageCarrito.some( item => item.id === articulo._id)
      if(carrito){
        storageCarrito = storageCarrito.filter(item => item.id !== articulo._id)
      }
      localStorage.setItem('carrito', JSON.stringify(storageCarrito))
      this.localStorageCart = storageCarrito
    }, // finaliza AgregarAlCarro
    },
}//finalizacion de options

const app = createApp(options)
app.mount ('#app')


// this.localStorageFiltrado = this.articulos.filter(articulo =>this.localStorageCart.some(storage => this.localStorageCart.id  ===  articulo._id))