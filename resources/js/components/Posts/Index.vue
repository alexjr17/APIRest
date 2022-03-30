<template>
  <div>
    <div class="grid grid-cols-1 gap-4">
      <div>
        <button class="btn-primary bg-blue-600">
          <router-link
            :to="{ name: 'crearPost' }"
            class="text-white font-bold py-2 px-4 rounded text-5xl"
            >+</router-link
          >
        </button>
        <table
          id=""
          class="table table-striped table-bordered"
          style="width: 100%"
        >
          <thead class="bg-gray-400">
            <tr>
              <th>Titulo</th>
              <th>contenido</th>
              <th>categoria</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="post in posts" :key="post.id">
              <td>{{ post.titulo }}</td>
              <td>{{ post.contenido }}</td>
              <td class="text-center">
                <p v-if="post.categoria">{{`${post.categoria.nombre}`}}</p>
                <p v-else class="text-red-700 text-sm bg-red-500 flex-none rounded-xl p-auto">
                    No asinada
                </p>
              </td>
              <td>
                <router-link
                  class="btn-primary"
                  :to="{ name: 'editarPost', params: { id: post.id } }"
                  @click="editar(post.id, post.titulo)"
                >
                  editar
                </router-link>
              </td>
              <td>
                <button
                  class="btn-primary"
                  @click="borrarPost(post.id, post.titulo)"
                >
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
  name: "posts",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.mostrarPost();
  },
  methods: {
    async mostrarPost() {
      await this.axios
        .get("/api/posts")
        .then((response) => {
          console.log(response.data);
          this.posts = response.data;
        })
        .catch((err) => {
          this.posts = [];
        });
    },
    borrarPost(id, titulo) {
      if (confirm(`eliminar a ${titulo}`)) {
        this.axios
          .delete(`api/posts/${id}`)
          .then((response) => {
            alert("registro eliminado");
            this.mostrarPost();
          })
          .catch((err) => {
            this.posts = [];
          });
      }
    },
  },
};
</script>