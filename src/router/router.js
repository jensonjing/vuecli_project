export const routerPath = [
    {
        path:'/',
        redirect: '/Home'
    },
    {
        path: '/Home',
        meta:{
            title:'首页',
            keepAlive: false,//不需要缓存
        },
        name: 'Home',
        component: resolve=>{
            require(['@/views/Home.vue'],resolve)
        },
        children:[]
    }
];