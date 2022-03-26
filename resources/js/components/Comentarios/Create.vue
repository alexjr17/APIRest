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
      <form @submit.prevent="crearComentario">
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
  name: "comentario",
  data() {
    return {
      posts: [],
      comentario: {
        contenido: "",
        post_id: "",
      },
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
        .catch((errors) => {
          this.posts = [];
        });
    },
    async crearComentario() {
      console.log(this.comentario);
      await this.axios
        .post("/api/comentarios", this.comentario)
        .then((response) => {
          alert("Guardado");
          this.$router.push({ name: "indexComentario" });
        })
        .catch((err) => {
          this.errors = err.errors;
        });
    },
  },
};
</script>