<template>
  <div class="flex justify-center items-stretch h-auto">
    <div
      class="
        self-center
        bg-green-300
        box-border
        h-auto
        w-7/12
        p-4
        border-4
        self-center
      "
    >
      <form @submit.prevent="actualizarcomentario">
        <div>
          <label for="">Titulo</label>
          <input type="text" name="" id="" v-model="comentario.contenido" />
        </div>
        <div>
          <label for="">Contenido</label>
          <select
            class="form-control"
            id="docente"
            v-model="comentario.post_id"
          >
            <option
              v-for="post in posts"
              :key="post.id"
              :value="post.id"
            >
              {{ post.titulo }}
            </option>
          </select>
        </div>

        <div>
          <button class="btn-primary">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name: "post",
  data() {
    return {
      posts: [],
      comentario: {
        contenido: "",
        post_id: "",
      }
    };
  },
  mounted() {
      console.log(this.$route.params.id);
    this.mostrarPost();
    this.mostrarComentario();
  },
  methods: {
    async mostrarPost() {
      await this.axios
        .get("/api/posts")
        .then((response) => {
          console.log(response.data);
          this.posts = response.data;
        })
        .catch((errors) => {
          this.posts = [];
        });
    },
    async mostrarComentario() {
    //   console.log(this.post);
      await this.axios.get(`/api/comentarios/${this.$route.params.id}`)
      .then((response) => {
        // console.log(response.data);
        this.comentario.contenido = response.data.comentario.contenido,
        this.comentario.post_id = response.data.comentario.post_id
        console.log(this.post);
      })
      .catch((err) => {
        this.errors = err.errors;          
      });
    },
    async actualizarcomentario() {
      // console.log(this.comentario);
      await this.axios.put(`/api/comentarios/${this.$route.params.id}`, this.comentario)
      .then((response) => {
        // console.log(response.data);
        alert('Actualizado');
        this.$router.push({ name: "indexComentario" });
        console.log(this.comentario);
      })
      .catch((err) => {
        this.errors = err.errors;          
      });
    }
  },
}
</script>