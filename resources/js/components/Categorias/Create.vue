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
      <form @submit.prevent="crearCategoria">
        <div>
          <label for="">Nombre</label>
          <input type="text" name="" id="" v-model="categoria.nombre">        
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
  name: "categoria",
  data() {
    return {
      categoria: {
        nombre: '',
      }
    };
  },
  mounted() {
    this.mostrarCategorias();
  },
  methods: {
    async mostrarCategorias() {
      await this.axios
        .get("/api/categorias")
        .then((response) => {
          console.log(response.data.categorias);
          this.categorias = response.data.categorias;
        })
        .catch((errors) => {
          this.categorias = [];
        });
    },
    async crearCategoria() {
      console.log(this.categoria);
      await this.axios.post("/api/categorias", this.categoria)
      .then((response) => {
        alert('Guardado');
        this.$router.push({ name: "indexCategoria" });      
      })
      .catch((err) => {
      });
    },
  },
};
</script>