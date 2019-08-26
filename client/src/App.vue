<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
import "./styles/root_styles.scss"
export default {
    created(){
        this.$store.dispatch("getApiContext", "http://192.168.88.29:5000/api/shop/");
    }
}
</script>