<template>
    <div>
        <div class="grid grid-cols-1 gap-4">
            <div >
                <button class="btn-primary bg-blue-600">
                <router-link :to='{name:"crearComentario"}' class="text-white font-bold py-2 px-4 rounded text-5xl">+</router-link>
                </button>
                <table id="" class="table table-striped table-bordered" style="width:100%">
                    <thead class="bg-gray-400">
                        <tr>
                            <th>Post</th>
                            <th>Comntario</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="comentario in comentarios" :key="comentario.id">
                            <td>{{comentario.contenido}}</td>
                            <td>{{comentario.post.titulo}}</td>
                            <td>
                                <router-link class="btn-primary" :to='{name:"editarComentario", params:{id:comentario.id}}'>
                                    editar
                                </router-link>
                            </td>
                            <td>
                                <button class="btn-primary" @click="borrarComenario(comentario.id, comentario.post.titulo)">
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
    name:"comentarios",
    data(){
        return {
            comentarios:[]
            }
    },
    mounted(){
        this.mostrarcomentario()
    },
    methods:{
        async mostrarcomentario(){
            await this.axios.get('/api/comentarios')
                    .then((response) => {
                        console.log(response.data.comentarios);
                        this.comentarios = response.data.comentarios;
                    }).catch((err) => {
                    this.comentarios = []
                    });
        },
        borrarComenario(id, post){
            if (confirm(`eliminar a comentario del post "${post}"`)) {
                this.axios.delete(`api/comentarios/${id}`)
                .then((response) => {
                    alert('registro eliminado');
                    this.mostrarcomentario()
                })
                .catch((err) => {
                    this.comentarios = []
                })
            }
        }
    }
}
</script>