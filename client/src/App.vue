<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
import "./styles/root_styles.scss"
export default {
    created(){
        this.$store.dispatch("getApiContext", "http://localhost:5000/");
    }
}
</script>