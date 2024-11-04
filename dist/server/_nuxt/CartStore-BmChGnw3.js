import { aS as defineStore, aT as apiService } from "../server.mjs";
const useCartStore = defineStore("cart", {
  state: () => ({
    currentCart: []
  }),
  actions: {
    addProductToCart(product) {
      this.currentCart.push({
        product,
        quantity: 1
      });
    },
    deleteProduct(id) {
      this.currentCart = this.currentCart.filter((item) => item.product._id !== id);
    },
    async addOrder(contacts, delivery) {
      const order = {
        products: this.currentCart,
        totalPrice: this.totalPrice,
        guestContact: contacts,
        delivery
      };
      return await apiService.postOrder(order);
    },
    async getOrders() {
      return await apiService.getOrders();
    },
    async getOrder() {
      return await apiService.getOrder();
    }
  },
  getters: {
    totalPrice: (state) => {
      return state.currentCart.reduce((acum, elem) => {
        return acum + elem.product.price * elem.quantity;
      }, 0);
    }
  }
});
export {
  useCartStore as u
};
//# sourceMappingURL=CartStore-BmChGnw3.js.map
