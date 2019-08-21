<template>
    <div class="product-card">
        <div class="product-card__image">
            <img :src="product.image">
        </div>
        <div class="product-card__content">
            <div class="product-card__name">
                {{product.name}}
            </div>
            <div class="product-card__detail">
                {{product.description}}
            </div>
            <div class="product-card__price">
                ${{product.price}}
            </div>
            <div class="product-card__button">
                <button @click="addToCart">add to cart</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        product: Object
    },
    methods: {
        addToCart(){
            this.$store.dispatch("addToCart", {
                id: this.product._id,
                quantity: 1
            });
        }
    }
}
</script>
<style 
    lang="scss" 
    scoped 
    src="./productCard.scss">
</style>