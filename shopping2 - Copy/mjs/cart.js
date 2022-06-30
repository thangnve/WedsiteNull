"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const cart_item_1 = require("./cart-item");
const helpers_1 = require("./libs/helpers");
class Cart {
    constructor() {
        this.cartItems = [];
        this.totalPrice = 0;
    }
    addProduct(product) {
        let position = this.getProductPosition(product);
        if (position > -1) {
        }
        else {
            this.cartItems[this.cartItems.length] = new cart_item_1.CartItem(product);
        }
        this.totalPrice = product.price;
    }
    getProductPosition(product) {
        let total = this.cartItems.length;
        for (let i = 0; i < total; i++) {
            if (this.cartItems[i].product.id == product.id)
                return i;
        }
        return -1;
    }
    removeProduct(product) {
        let position = this.getProductPosition(product);
        if (position > -1) {
            this.totalPrice = this.totalPrice - product.price;
            this.cartItems.splice(position, 1);
        }
    }
    isEmpty() {
        return (this.cartItems.length == 0);
    }
    getTotalPrice() {
        let total = 0;
        this.cartItems.forEach((cartItems) => {
            total += cartItems.product.price;
        });
        return total;
    }
    showCartBodyInHTML() {
        let xhtmlResult = ``;
        if (!this.isEmpty()) {
            let total = this.cartItems.length;
            for (let i = 0; i < total; i++) {
                let cartItemCurrent = this.cartItems[i];
                xhtmlResult += cartItemCurrent.showCartItemHTML(i + 1);
            }
        }
        return xhtmlResult;
    }
    showCartFooterInHTML() {
        let xhtmlResult = `<tr><th colspan="6">Empty product in your cart</th></tr>`;
        if (!this.isEmpty()) {
            xhtmlResult = `<tr> 
                            <td colspan="2" class="total-price text-right">Tổng Tiền:  ${helpers_1.Helpers.toCurrency(this.getTotalPrice(), "USD", "right")} </td>
                            <tr/>`;
        }
        return xhtmlResult;
    }
}
exports.Cart = Cart;
