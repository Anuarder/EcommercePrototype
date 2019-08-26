import Vue from 'vue'
import Vuex from 'vuex'
// import { findIndex } from 'lodash'
import ShoppingCartServices from "../services/ShoppingCart"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		apiContext: '',
		products: [],
		shoppingCart: {}
	},
	mutations: {
		SET_API_CONTEXT(state, apiContext) {
			state.apiContext = apiContext
		},
		SET_PRODUCTS(state, products){
			state.products = products
		},
		ADD_TO_CART(state, product){
			state.shoppingCart = product;
		}
	},
	actions: {
		getApiContext({ commit }, apiContext) {
			commit('SET_API_CONTEXT', apiContext)
		},
		getProducts({ commit }, products){
			commit('SET_PRODUCTS', products);
		},
		async addToCart({ commit }, product){
            try{
                let response = await ShoppingCartServices.addToCart({
                    cart_id: '',
                    products: ''
                });
                console.log(response);
                commit('ADD_TO_CART', product);
            }catch(err){
                console.log(err);
            }
		}
	}
})