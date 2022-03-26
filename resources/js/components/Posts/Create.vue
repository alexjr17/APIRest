<template>
    <div>
        <form >
            <div>
                <label for="">Titulo</label>
                <input type="text">
            </div>
            <div>
                <label for="">Contenido</label>
                <input type="text">
            </div>
            <select v-for="categoria in categorias" :key="categoria.id">
                <option value='{{categoria.id}}'>{{categoria.nombre}}</option>
            </select>
        </form>
    </div>
</template>

<script>
export default {
    name:"categorias",
    data(){
        return {
            cayegorias:[]
            }
    },
    mounted(){
        this.mostrarCategorias()
    },
    methods:{
        async mostrarCategorias(){
            await this.axios.get('http://127.0.0.1:8000/api/categorias')
                    .then((response) => {
                        console.log(response.data);
                        this.posts = response.data;
                    }).catch((err) => {
                    this.posts = []
                    });
        }
    }
}
</script>