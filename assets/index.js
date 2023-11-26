const {createApp} = Vue
const optionsVue = {
        data (){
             return {
                cards: [
                    {
                      id: 1,
                      image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      name: 'Marie',
                      review:  "Mi visita a este pet shop fue genial. El personal mostró un gran conocimiento sobre los productos y fue muy servicial al ayudarme a elegir lo mejor para mi mascota. ¡Definitivamente volveré por la calidad del servicio!",
                      fecha: "25/07/2019",
                      rate: 'assets/Images/rate5.0.png'
                    },
                    {
                      id: 2,
                      image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      name: 'Ricky',
                      review: " Excelente experiencia en este pet shop. El equipo fue amable y me brindó asesoramiento experto sobre la mejor comida y juguetes para mi mascota. Su dedicación al cuidado animal es evidente en su servicio.",
                      fecha: "24/03/2022",
                      rate: 'assets/Images/rate4.5.png'
                    },
                    {
                      id: 3,
                      image: 'https://images.unsplash.com/photo-1485981133625-f1a03c887f0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      name: 'Pichulo',
                      review: " Visité este pet shop y quedé impresionado. El personal fue muy atento y conocedor, ofreciéndome una amplia gama de productos para mis mascotas. Su servicio al cliente y variedad de artículos son excelentes.",
                      fecha: "03/11/2020",
                      rate: 'assets/Images/rate4.0.png'
                    },
                    {
                      id: 4,
                      image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      name: 'Orion',
                      review: "Recomiendo este pet shop. El equipo fue increíblemente servicial al ayudarme a encontrar los mejores productos para mis animales. Su atención personalizada y variedad de suministros son inigualables. ",
                      fecha: "29/01/2023",
                      rate: 'assets/Images/rate5.0.png'
                    },
                    {
                        id: 5,
                        image: 'https://images.unsplash.com/photo-1605638868237-0660a05a135b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      name: 'Mimi',
                      review: "Este pet shop ofrece un servicio excepcional. El equipo fue muy atento y el conocimiento del personal sobre las necesidades de las mascotas fue impresionante. Su amplia selección de productos es justo lo que necesitaba. ",
                      fecha: "31/04/2021",
                      rate: 'assets/Images/rate5.0.png'
                       
                      },
                    {
                      id: 6,
                      image: 'https://images.unsplash.com/photo-1558947530-cbcf6e9aeeae?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      name: 'Tuki',
                      review: "Visité este pet shop y quedé encantado. El personal fue muy servicial y el conocimiento que tienen sobre las necesidades de las mascotas es impresionante. Su compromiso con la calidad y la atención al cliente es notable. ",
                      fecha: "01/12/2022",
                      rate: 'assets/Images/rate4.0.png'
                      
                      
                    },
                    {
                        id: 7,
                        image: 'https://images.unsplash.com/photo-1548366086-7f1b76106622?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        name: 'Samu',
                        review: " ¡Qué gran pet shop! El personal fue amable y se tomó el tiempo para recomendarme los mejores productos para mis mascotas. Su atención personalizada y variedad de suministros hacen de este lugar mi elección preferida.",
                        fecha: "02/02/2022",
                        rate: 'assets/Images/rate4.5.png'
                      },
                      {
                        id: 8,
                        image: 'https://images.unsplash.com/photo-1519120430-a7d2287c986a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        name: 'Juana',
                        review: " Excelente atención en este pet shop. El equipo fue muy amigable y conocedor, guiándome a través de sus productos y ayudándome a tomar las mejores decisiones para el cuidado de mis mascotas.",
                        fecha: "10/09/2023",
                        rate: 'assets/Images/rate5.0.png'
                      },
                      {
                        id: 9,
                        image: 'https://images.unsplash.com/photo-1607791502157-a5c7b4cdd47b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                      name: 'Eufemio',
                      review: " Mi experiencia en este pet shop fue fantástica. El personal fue amigable y conocedor, brindándome orientación experta sobre los cuidados y accesorios ideales para mis mascotas. ¡Un lugar confiable y excelente servicio!",
                      fecha: "15/09/2022",
                      rate: 'assets/Images/rate5.0.png'
                      
                      },                       
                    
                  ],
                  modalVisible:false,

                 card: {},              
                  
                
             }
        },

        methods:{
            abrirModal (card){
                this.modalVisible=true;
                this.card=card
            },

            cerrarModal(){
                this.modalVisible = false;
                this.card = null;

            }
            
            

        },

        
}

const app = createApp (optionsVue)
app.mount('#app')