<template>
	<div class="home">
		<div class="container">
            <v-navigation></v-navigation>
            <div class="home__products content">
                <v-product-card
                    v-for="(item, i) in products"
                    :key="i"
                    :product="item">
                </v-product-card>
            </div>
        </div>
	</div>
</template>
<script>
import { mapState } from "vuex";
import ProductsServices from "@/services/Products";
export default {
    components: {
        VProductCard: () => import("@/components/ProductCard/ProductCard.vue"),
    },
	computed: {
		...mapState(["products"])
	},
	created() {
		this.getProducts();
	},
	methods: {
		async getProducts() {
			try {
				let response = await ProductsServices.getProducts();
				this.$store.dispatch("getProducts", response.data);
			} catch (err) {
				alert(err.response.data);
			}
		}
	}
};
</script>
<style 
    lang="scss" 
    scoped 
    src="./home.scss">
</style>