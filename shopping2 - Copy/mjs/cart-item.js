"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItem = void 0;
const helpers_1 = require("./libs/helpers");
class CartItem {
    constructor(product) {
        this._product = product;
    }
    showCartItemHTML(index) {
        return `<tr>
        <th scope="row">${index}</th>
        <td>${this.product.name}</td>
        <td> ${helpers_1.Helpers.toCurrency(this.product.price, "USD", "right")} </td>
      
        <td>
         
            <a class="label label-danger delete-cart-item" herf="#"  data-product="${this.product.id}">Delete</a>
            </td>
            </tr>`;
    }
    get product() {
        return this._product;
    }
    set product(v) {
        this._product = v;
    }
}
exports.CartItem = CartItem;
