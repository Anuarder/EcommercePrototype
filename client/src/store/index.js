import Vue from 'vue'
import Vuex from 'vuex'
import { findIndex } from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		apiContext: '',
		products: [],
		shoppingCart: {
			totalQuantity: 0,
			products: []
		}
	},
	mutations: {
		SET_API_CONTEXT(state, apiContext) {
			state.apiContext = apiContext
		},
		SET_PRODUCTS(state, products){
			state.products = products
		},
		ADD_TO_CART(state, product){
			const shoppingCart = state.shoppingCart;
			shoppingCart.totalQuantity += product.quantity;
			const index = findIndex(shoppingCart.products, el => (
				el.id === product.id
			));
			if(index !== -1){
				shoppingCart.products[index].quantity += product.quantity;
			}else{
				shoppingCart.products.push(product);
			}
		}
	},
	actions: {
		getApiContext({ commit }, apiContext) {
			commit('SET_API_CONTEXT', apiContext)
		},
		getProducts({ commit }, products){
			commit('SET_PRODUCTS', products);
		},
		addToCart({ commit }, product){
			commit('ADD_TO_CART', product);
		}
	}
})
