import Api from '@/services/Api'

export default {
    getShoppingCart(id){
        return Api().get(`/getShoppingCart/${id}`);
    }
}