<template>
    <div class="product-card">
        <div class="product-card__image">
            <img :src="mainImage(product)" alt="">
        </div>
        <div class="product-card__content">
            <div class="product-card__name">
                {{product.title}}
            </div>
            <div class="product-card__detail">
                {{product.description.ru}}
            </div>
            <hr>
            <div class="product-card__actions">
                <div class="product-card__price-container">
                    <span
                        v-if="isDiscount(product)"
                        class="discount-price">
                        ${{getPrice(product).discount_amount}}
                    </span>
                    <span 
                        class="price"
                        :class="isDiscount(product) ? 'old-price' : ''">
                        ${{getPrice(product).amount}}
                    </span>
                </div>
                <button @click="addToCart" class="product-card__button">
                    <i class="material-icons">
                        shopping_cart
                    </i>
                </button>
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
        },
        isDiscount(product){
            return product.prices[0].discount_rate !== 0;
        },
        getPrice(product){
            return product.prices[0];
        },
        mainImage(product){
            return product.photos[0];
        }
    }
}
</script>
<style 
    lang="scss" 
    scoped 
    src="./productCard.scss">
</style>