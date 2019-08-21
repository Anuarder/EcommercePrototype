<template>
    <div class="shoppingCart">
        <div class="container">
            <v-navigation></v-navigation>
            <div class="shoppingCart__content content">
                {{shoppingCart}}
            </div>
        </div>
    </div>
</template>
<script>
import ShoppingCartServices from "@/services/ShoppingCart"
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(['shoppingCart'])
    },
    methods: {
        async getShoppingCart(){
            try{
                let response = await ShoppingCartServices.getShoppingCart();
                console.log(response);
            }catch(err){
                console.log(err.response);
            }
        }
    }
}
</script>