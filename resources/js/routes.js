//importamos los componentes para post
const Index = () =>
    import ('./components/Posts/Index.vue')
const Crear = () =>
    import ('./components/Posts/Create.vue')
const Editar = () =>
    import ('./components/Posts/Edit.vue')
const Mostrar = () =>
    import ('./components/Posts/Show.vue')

export const routes = [{
        name: 'indexPost',
        path: '/posts',
        component: Index
    },
    {
        name: 'crearPost',
        path: '/posts/crear',
        component: Crear
    },
    {
        name: 'editarPost',
        path: '/posts/editar/:id',
        component: Editar
    },
    {
        name: 'mostrarPost',
        path: '/posts/posts/show',
        component: Mostrar
    }
]