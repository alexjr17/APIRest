<template>
<div>
    <div class="min-h-full">
        <nav class="bg-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img class="h-8 w-8"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    <router-link :to='{name: "indexPost"}'>
                                        publicacion
                                    </router-link> 
                                </a>

                                <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    <router-link :to='{name: "indexCategoria"}'>
                                        Categorias
                                    </router-link> 
                                </a>

                                <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    <router-link :to='{name: "indexComentario"}'>
                                        Comentario
                                    </router-link> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
            </div>
        </header> -->
            <main class="container justify-items-center bg-green-300">
                <router-view>
                </router-view>
                <div class="py-3">
                    <div v-for="blog in blogs" :key="blog.id" class="pb-2">
                        <div class="rounded-lg border-2 border-green-500">
                            <div class="backdrop-blur-sm bg-white/30 w-full p-6 grid gap-2">
                                <h1 class="text-xl">{{blog.titulo}}</h1>
                                <p class="text-justify">{{blog.contenido}}</p>
                                <small v-if="blog.categoria" class="bg-blue-500 grid-flow-col">{{`${blog.categoria.nombre}`}}</small>
                                <small v-else class="text-red-700 text-sm bg-red-500 rounded-xl p-auto">
                                    No asinada
                                </small>
                            </div>
                            <button v-on:click="show=!show">sontrar</button>
                            <span v-show="show" v-for="comentario in blog.comentarios" :key="comentario.id" class="grid gap-2">
                                <div >
                                    {{comentario.contenido}}
                                </div>
                            </span>
                            <div>
                                
                            </div>
                        </div>                    
                    </div>
                </div>
                
                
            </main>
    </div>    
</div>    
</template>

<script>
export default {
    name:"blog",
    data(){
        return {
            blogs:[],
            show: false,
        }
    },
    mounted() {
        this.mostrarblog();       
    },
    methods:{
        async mostrarblog(){
            await axios.get('/api/posts')
                .then(res => {
                    console.log(res.data)
                    this.blogs = res.data;
                })
                .catch(err => {
                    console.error(err); 
                })
        },
        // mostrarComentrios(){
        //     this.show.comentario = !this.show.comentario;
        // }
    }
}
</script>
