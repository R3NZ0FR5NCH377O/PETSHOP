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
      modalHVisible:false,
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
          this.sort = this.sort.filter(articulo => articulo.producto.toLowerCase().includes(this.filtroNombre.toLowerCase()))
        }
      }, // finaliza filtroprecio/categoria
       //inicia menu hamburguesa
      abrirModalHamb(){
        this.modalHVisible=true
      },
      cerrarModalHamb (){
        this.modalHVisible=false
      },
       //finaliza menu hamburguesa
    showModal(articulo){
      this.articulo = articulo
      this.modalVisible = true
      if (this.modalVisible){
        document.body.classList.add('overflow-y-hidden')
      }
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
    if (this.modalVisible == false){
      document.body.classList.remove('overflow-y-hidden')
    }
    }, // finaliza closeModal
    agregarAlCarro(articulo){
      let storageCarrito = JSON.parse(localStorage.getItem('carrito')) || []
      const index = storageCarrito.findIndex(item => item.id === articulo._id)
      if (index !== -1) {
        if (storageCarrito[index].cantidad + 1 > articulo.disponibles) {
          alert("Se excedió el límite de stock para este artículo")
          return; // No agrega más al carrito si excede el límite
        }
        storageCarrito[index].cantidad++
      } else {
        if (1 > articulo.disponibles) {
          alert("Se excedió el límite de stock para este artículo")
          return; // No agrega al carrito si excede el límite
        }
        storageCarrito.push({ id: articulo._id, cantidad: 1 })
      }
      localStorage.setItem('carrito', JSON.stringify(storageCarrito))
      this.localStorage = storageCarrito
    }, // finaliza AgregarAlCarro
    dotsNumbers(number){
      // se verifica que los datos sean distinto de undefined y null
      // luego se usa el metodo toLocaleString que convierte
      // un string segun la region establecida, se le da
      // el stylo de moneda y se selecciona USD como moneda
      //ademas se establece que no debe mostrar numeros fraccionados.
      if(number !== undefined && number !== null){
        return number.toLocaleString("es-MX",{
          style: "currency",
          currency: "ARS",
          minimumFractingDigits: 0,
        })
      }
    },//fin del dotsNumbers
  },//aca finaliza methods
  computed:{
    ponePuntitos(){
    return(articulo) => this.dotsNumbers(articulo.precio)
    },//finaliza ponePuntitos
  },// finaliza computed
}//finalizacion de options

const app = createApp(options)
app.mount ('#app')
