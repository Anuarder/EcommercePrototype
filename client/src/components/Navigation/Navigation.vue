<template>
	<nav class="navigation">
		<router-link to="/" class="navigation__title">Ecommerce</router-link>
		<router-link to="/shopping-cart" class="navigation__shoppingCart">
			<i class="material-icons">shopping_cart</i>
			<span v-if="shoppingCart.totalQuantity">{{shoppingCart.totalQuantity}}</span>
		</router-link>
	</nav>
</template>
<script>
import { mapState } from "vuex";
export default {
	computed: {
		...mapState(["shoppingCart"])
	}
};
</script>
<style 
    lang="scss" 
    scoped
    src="./navigation.scss">
</style>