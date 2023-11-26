const {createApp} = Vue

const options = {
  data(){
    return{
      articulos: [],
      articuloFiltrado:[],
      categoria:'jugueteria',
      sort:[],
      filtroPrecio:"none",
      filtroNombre:"",
      modalVisible: false,
      articulo:{ 
        producto: "", 
        descripcion: "", 
        precio: "", 
        disponibles: "", 
        imagen: "",
      },
      localStorage:[],
    }
  },

  beforeCreate(){
    fetch("https://moviestack.onrender.com/api/petshop")
      .then(response => response.json())
      .then(data => {
        this.articulo = data
        console.log(this.articulo)
        this.articuloFiltrado= this.articulo.filter(articulo => articulo.categoria == this.categoria)
        this.sort = this.articuloFiltrado
        this.localStorage = JSON.parse(localStorage.getItem('carrito')) || []
      })
      .catch(error => console.log(error))
    },//finaliza beforeCreate
    methods: {
      filtrarPorPrecio() {
        if (this.filtroPrecio === 'mayor') {
          // lógica para ordenar por precio ascendente
          this.sort = this.articuloFiltrado.slice().sort((a, b) => a.precio - b.precio)
        } else if (this.filtroPrecio === 'menor') {
          // lógica para ordenar por precio descendente
          this.sort = this.articuloFiltrado.slice().sort((a, b) => b.precio - a.precio)
        } else {
          // si el filtro es "none", mostrar los productos sin filtrar
          this.sort = this.articuloFiltrado.slice()
        }
        if (this.filtroNombre.trim() !== '') {
          this.sort = this.sort.filter(articulo => articulo.producto.toLowerCase().includes(this.filtroNombre.toLowerCase()));
        }
      }, // finaliza filtroprecio/categoria
    showModal(articulo){
      this.articulo = articulo
      this.modalVisible = true
    }, // finaliza showModal
    closeModal(){
      this.articulo = { 
        producto: "", 
        descripcion: "", 
        precio: "", 
        disponibles: "", 
        imagen: "",
      }
    this.modalVisible = false
    }, // finaliza closeModal
    agregarAlCarro(articulo){
      let storageCarrito = JSON.parse(localStorage.getItem('carrito')) || []
      const itemEnCarrito = storageCarrito.find(item => item.id === articulo._id);
      if (itemEnCarrito) {
        itemEnCarrito.cantidad += 1;
      } else {
        storageCarrito.push({ articulo, cantidad: 1 });
      }
      localStorage.setItem('carrito', JSON.stringify(storageCarrito))
      this.localStorage = storageCarrito
    }, // finaliza AgregarAlCarro
    },//aca finaliza methods
}//finalizacion de options

const app = createApp(options)
app.mount ('#app')