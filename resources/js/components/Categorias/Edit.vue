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
      <form @submit.prevent="actualizarCategoria">
        <div>
          <label for="">Nombre</label>
          <input type="text" name="" id="" v-model="categoria.nombre">        
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
      categoria: {
        nombre: ''
      }
    };
  },
  mounted() {
      console.log(this.$route.params.id);
    this.mostrarcategoria();
  },
  methods: {
    async mostrarcategoria() {
    //   console.log(this.post);
      await this.axios.get(`/api/categorias/${this.$route.params.id}`)
      .then((response) => {
        console.log(response.data.categoria.nombre);
        this.categoria.nombre = response.data.categoria.nombre
        console.log(this.post);
      })
      .catch((err) => {
        this.errors = err.errors;          
      });
    },
    async actualizarCategoria() {
      console.log(this.categoria);
      await this.axios.put(`/api/categorias/${this.$route.params.id}`, this.categoria)
      .then((response) => {
        // console.log(response.data);
        alert('Actualizado');
        this.$router.push({ name: "indexCategoria" });
        console.log(this.categoria);
      })
      .catch((err) => {
        this.errors = err.errors;          
      });
    }
  },
}
</script>