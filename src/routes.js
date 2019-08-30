import HomePage from './pages/home.vue'
import AboutPage from './pages/about.vue'
// import LoginPage from './pages/login.vue'
import HomeIndexPage from './views/mostRight/index.vue'
import DynamicPage from './views/dynamic/index.vue'
import ReleaseIndexPage from './views/release/index.vue'
import NewsIndexPage from './views/news/index.vue'
import MyIndexPage from './views/my/index.vue'
import PrivateLetterPage from './views/news/privateLetter.vue'
import ExaminePage from './views/my/examine.vue'
import RemindListPage from './views/news/remindList.vue'
import SearchListPage from './views/news/searchList.vue'

export default [{
        path: '/',
        component: HomeIndexPage
    },
    {
        path: '/dynamic/',
        component: DynamicPage
    },
    {
        path: '/release/',
        component: ReleaseIndexPage
    },
    {
        path: '/news/',
        component: NewsIndexPage,
        routes: [{
                path: '/privateLetter/',
                component: PrivateLetterPage,
            },
            {
                path: '/remindList/',
                component: RemindListPage,
            },
            {
                path: '/searchList/',
                component: SearchListPage,
            }
        ]
    },
    {
        path: '/my/',
        component: MyIndexPage,
        routes: [{
            path: '/examine/',
            component: ExaminePage,
        }]
    },
    {
        path: '/about/',
        component: AboutPage
    },
    {
        path: '/login/',
        async (routeTo, routeFrom, resolve, reject) {
            const LoginPage = () => import('./pages/login.vue');
            // resolve promise
            LoginPage().then((vc) => {
                // resolve with component
                resolve({
                    component: vc.default
                })
            });
        },
        // component: LoginPage
    },

]