import Api from '@/services/Api'

export default {
    getShoppingCart(id){
        return Api().get(`cart/get_cart/${id}`);
    },
    addToCart(payload){
        return Api().post(`cart/upsert_cart`, payload);
    }
}