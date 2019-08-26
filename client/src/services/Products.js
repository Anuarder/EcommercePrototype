import Api from '@/services/Api'

export default {
    getProducts(){
        return Api().get("product/get_products?size=4&page_number=1");
    }
}