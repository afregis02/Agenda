const app1 = {
    data() {
        return {
            contactos: [],
            nuevoNombre: '',
            nuevoTelefono: '',
            nuevaCategoria: '',
        };
    },
    computed: {
        totalLlamadas() {
            return this.contactos.reduce((acc, contacto) => acc + contacto.llamadas, 0);
        },
        totalMensajes() {
            return this.contactos.reduce((acc, contacto) => acc + contacto.mensajes, 0);
        },  
        
    },
    methods: {
        agregarContacto() {
            if (this.nuevoNombre && this.nuevoTelefono && this.nuevaCategoria ) {
                this.contactos.push({
                    nombre: this.nuevoNombre,
                    telefono: this.nuevoTelefono,
                    categoria : this.nuevaCategoria,
                    llamadas: 0,
                    mensajes: 0
                });
                this.nuevoNombre = '';
                this.nuevoTelefono = '';
                this.nuevaCategoria = '';
            }
        },
        eliminarContacto(index) {
            this.contactos.splice(index, 1);
        }
    }
};

Vue.createApp(app1).mount('#seccion');
