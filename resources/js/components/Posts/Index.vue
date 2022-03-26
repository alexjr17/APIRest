<template>
    <div>
        <div class="grid grid-cols-1 gap-4">
            
            
            <div >
                <button class="bg-blue-500 hover:bg-blue-700">
                <router-link :to='{name:"crearPost"}' class="text-white font-bold py-2 px-4 rounded text-5xl">+</router-link>
                </button>
                <table id="" class="table table-striped table-bordered" style="width:100%">
                    <thead class="bg-gray-400">
                        <tr>
                            <th>Titulo</th>
                            <th>contenido</th>
                            <th>categoria</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="post in posts" :key="post.id">
                            <td>{{post.titulo}}</td>
                            <td>{{post.contenido}}</td>
                            <td>{{post.categoria.nombre}}</td>
                            <td>
                                <router-link>
                                    <button :to="{name:{editarUser, params:{id:post.id}}}" @click="editar(post.id)">Eliminar</button>
                                </router-link>
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
    name:"posts",
    data(){
        return {
            posts:[]
            }
    },
    mounted(){
        this.mostrarPost()
    },
    methods:{
        async mostrarPost(){
            await this.axios.get('http://127.0.0.1:8000/api/posts')
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