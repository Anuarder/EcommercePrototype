import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/shopping-cart',
			name: 'shoppingCart',
			component: () => import("./views/ShoppingCart/ShoppingCart.vue")
		}
	]
})
