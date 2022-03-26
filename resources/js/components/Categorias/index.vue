<template>
    <div>
        <div class="grid grid-cols-1 gap-4">
            <div >
                <button class="btn-primary bg-blue-600">
                <router-link :to='{name:"crearCategoria"}' class="text-white font-bold py-2 px-4 rounded text-5xl">+</router-link>
                </button>
                <table id="" class="table table-striped table-bordered" style="width:100%">
                    <thead class="bg-gray-400">
                        <tr>
                            <th>Nombre</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="categoria in categorias" :key="categoria.id">
                            <td>{{categoria.nombre}}</td>
                            <td>
                                <router-link class="btn-primary" :to='{name:"editarCategoria", params:{id:categoria.id}}'>
                                    editar
                                </router-link>
                            </td>
                            <td>
                                <button class="btn-primary" @click="borrarCategoria(categoria.id, categoria.nombre)">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>            
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"categorias",
    data(){
        return {
            categorias:[]
            }
    },
    mounted(){
        this.mostrarCategoria()
    },
    methods:{
        async mostrarCategoria(){
            await this.axios.get('/api/categorias')
                    .then((response) => {
                        console.log(response.data.categorias);
                        this.categorias = response.data.categorias;
                    }).catch((err) => {
                    this.categorias = []
                    });
        },
        borrarCategoria(id, nombre){
            if (confirm(`eliminar a ${nombre}`)) {
                this.axios.delete(`api/categorias/${id}`)
                .then((response) => {
                    alert('registro eliminado');
                    this.mostrarCategoria()
                })
                .catch((err) => {
                    this.posts = []
                })
            }
        }
    }
}
</script>