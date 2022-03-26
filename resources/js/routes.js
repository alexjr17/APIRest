//importamos los componentes para post
const IndexPost = () =>
    import('./components/Posts/Index.vue')
const CrearPost = () =>
    import('./components/Posts/Create.vue')
const EditarPost = () =>
    import('./components/Posts/Edit.vue')
//importamos los componentes para categorias
const IndexCategoria = () =>
    import('./components/Categorias/Index.vue')
const CrearCategoria = () =>
    import('./components/Categorias/Create.vue')
const EditarCategoria = () =>
    import('./components/Categorias/Edit.vue')
//importamos los componentes para comentarios
const IndexComentario = () =>
    import('./components/Comentarios/Index.vue')
const CrearComentario = () =>
    import('./components/Comentarios/Create.vue')
const EditarComentario = () =>
    import('./components/Comentarios/Edit.vue')

export const routes = [{
    name: 'indexPost',
    path: '/posts',
    component: IndexPost
},
{
    name: 'crearPost',
    path: '/posts/crear',
    component: CrearPost
},
{
    name: 'editarPost',
    path: '/posts/editar/:id',
    component: EditarPost
},
{
    name: 'indexCategoria',
    path: '/categorias',
    component: IndexCategoria
},
{
    name: 'crearCategoria',
    path: '/categorias/crear',
    component: CrearCategoria
},
{
    name: 'editarCategoria',
    path: '/categorias/editar/:id',
    component: EditarCategoria
},
{
    name: 'indexComentario',
    path: '/comentarios',
    component: IndexComentario
},
{
    name: 'crearComentario',
    path: '/comentarios/crear',
    component: CrearComentario
},
{
    name: 'editarComentario',
    path: '/comentarios/editar/:id',
    component: EditarComentario
}
]