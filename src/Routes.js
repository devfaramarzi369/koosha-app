import Home from './components/Home.vue'
import Product from './components/Product.vue'
import Aboutus from './components/Aboutus.vue'

export const Routes = [
    
    {  path: '/', component: Home, name: 'home'},

    { path: '/product/:name', component: Product, name: 'showProduct' },

    { path: '/aboutus', component: Aboutus, name: 'aboutus' }
]