"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_repository_1 = require("./product-repository");
const cart_1 = require("./cart");
var MElement;
(function (MElement) {
    MElement.ELM_LIST_PRODUCT = "#list-product";
    MElement.ELM_NOTIFICATION = "#mnotification";
    MElement.ELM_CART_BODY = "#my-cart-body";
    MElement.ELM_CART_FOOTER = "#my-cart-footer";
})(MElement || (MElement = {}));
var MNotification;
(function (MNotification) {
    MNotification.NOTI_READY_TO_BUY = "Sẵn sàng để mua";
    MNotification.NOTI_GREATER_THAN_ONE = "Lớn hơn hoặc bằng 1";
})(MNotification || (MNotification = {}));
let productRepository = new product_repository_1.ProductRepository();
let cartObj = new cart_1.Cart();
let products = productRepository.getItems();
productRepository.getItems();
function showListFroduct() {
    $(MElement.ELM_LIST_PRODUCT).html(productRepository.showItemsInHTML());
}
function showNotification(str) {
    $(MElement.ELM_NOTIFICATION).html(str);
}
function showCart() {
    $(MElement.ELM_CART_BODY).html(cartObj.showCartBodyInHTML());
    $(MElement.ELM_CART_FOOTER).html(cartObj.showCartFooterInHTML());
}
function addProduct(id) {
    let product = productRepository.getItemByID(id);
    cartObj.addProduct(product);
    showCart();
}
function deleteProduct(id) {
    let product = productRepository.getItemByID(id);
    cartObj.removeProduct(product);
    showCart();
}
$(document).ready(function () {
    showListFroduct();
    showNotification(MNotification.NOTI_READY_TO_BUY);
    showCart();
    $("a.price").click(function () {
        let id = $(this).data("product");
        addProduct(id);
    });
    $(document).on("click", "a.delete-cart-item", function () {
        let id = $(this).data("product");
        deleteProduct(id);
    });
});
