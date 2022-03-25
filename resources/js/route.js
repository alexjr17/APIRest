const Home = ()=> import('./components/Home.vue')
const Contacto = ()=> import('./components/Contacto.vue')

//importamos los componentes para user
const Mostrar = ()=> import('./components/user/Show.vue')
const Crear = ()=> import('./components/user/Create.vue')
const Editar = ()=> import('./components/user/Edit.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'contacto',
        path: '/contacto',
        component: Contacto
    },
    {
        name: 'mostrarUsers',
        path: '/users',
        component: Mostrar
    },
    {
        name: 'crearUser',
        path: '/crear',
        component: Crear
    },
    {
        name: 'editarUser',
        path: '/editar/:id',
        component: Editar
    },
]

