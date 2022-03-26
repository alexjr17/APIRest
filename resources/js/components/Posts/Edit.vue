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
      <form @submit.prevent="actualizarPost">
        <div>
          <label for="">Titulo</label>
          <input type="text" name="" id="" v-model="post.titulo">
          <!-- <span class="text-red-500 text-sm">{{errors.titulo}}</span>           -->
        </div>
        <div>
          <label for="">Contenido</label>
          <textarea name="" id="" v-model="post.contenido"></textarea>
          <!-- <span class="text-red-500 text-sm">{{errors.contenido}}</span> -->
        </div>
        <div>
          <label for="">cayegorias</label>
          <select class="form-control" id="docente" v-model="post.categoria_id">
            <option
              v-for="categoria in categorias"
              :key="categoria.id"
              :value="categoria.id"
            >
              {{ categoria.nombre }}
            </option>
          </select>
          <!-- <span class="text-red-500 text-sm">{{errors.categoria}}</span> -->
        </div>
        <div>
          <button class="btn-primary">Actualizar</button>
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
      categorias: [],
      post: {
        titulo: '',
        contenido: '',
        categoria_id: ''
      }
    };
  },
  mounted() {
      console.log(this.$route.params.id);
    this.mostrarCategorias();
    this.mostrarPost();
  },
  methods: {
    async mostrarCategorias() {
      await this.axios
        .get("/api/categorias")
        .then((response) => {
        //   console.log(response.data.categorias);
          this.categorias = response.data.categorias;
        })
        .catch((errors) => {
          this.categorias = [];
        });
    },
    async mostrarPost() {
    //   console.log(this.post);
      await this.axios.get(`/api/posts/${this.$route.params.id}`)
      .then((response) => {
        // console.log(response.data);
        this.post.titulo = response.data.post.titulo,
        this.post.contenido = response.data.post.contenido,
        this.post.categoria_id = response.data.post.categoria_id
        console.log(this.post);
      })
      .catch((err) => {
        this.errors = err.errors;          
      });
    },
    async actualizarPost() {
      console.log(this.post);
      await this.axios.put(`/api/posts/${this.$route.params.id}`, this.post)
      .then((response) => {
        // console.log(response.data);
        alert('Actualizado');
        this.$router.push({ name: "indexPost" });
        console.log(this.post);
      })
      .catch((err) => {
        this.errors = err.errors;          
      });
    }
  },
}
</script>