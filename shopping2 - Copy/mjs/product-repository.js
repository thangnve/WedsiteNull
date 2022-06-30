"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const product_1 = require("./product");
const helpers_1 = require("./libs/helpers");
class ProductRepository {
    constructor() {
        this.products = [];
        this.addItem(new product_1.Product(100, "Gái Xinh1", "number1.jpg", "From the very first step of my life, beside my parents, I have my older sister as one of my idols. She is 23 years old and she works as a teacher in a local primary school", 20));
        this.addItem(new product_1.Product(101, "Gái Xinh2", "number2.jpg", "From the very first step of my life, beside my parents, I have my older sister as one of my idols. She is 23 years old and she works as a teacher in a local primary school", 50));
        this.addItem(new product_1.Product(102, "Gái Xinh3", "number3.jpg", "From the very first step of my life, beside my parents, I have my older sister as one of my idols. She is 23 years old and she works as a teacher in a local primary school", 70));
        this.addItem(new product_1.Product(103, "Gái Xinh4", "number4.jpg", "From the very first step of my life, beside my parents, I have my older sister as one of my idols. She is 23 years old and she works as a teacher in a local primary school", 40));
        this.addItem(new product_1.Product(104, "Gái Xinh5", "number5.jpg", "From the very first step of my life, beside my parents, I have my older sister as one of my idols. She is 23 years old and she works as a teacher in a local primary school", 30, false));
    }
    addItem(product) {
        this.products[this.products.length] = product;
    }
    getItems() {
        return this.products;
    }
    getItemByID(id) {
        let total = this.products.length;
        for (let i = 0; i < total; i++) {
            if (this.products[i].id == id)
                return this.products[i];
        }
        return null;
    }
    showItemsInHTML() {
        let total = this.products.length;
        let xhtmlResult = "";
        if (total > 0) {
            for (let i = 0; i < total; i++) {
                let currentItem = this.products[i];
                xhtmlResult += `<div class="media product">
               <div class="media-left">
                   <a href="#">
                       <img class="media-object" src="img/girl/${currentItem.image}" alt="${currentItem.name}">
                   </a>
               </div>
               <div class="media-body">
                   <h4 class="media-heading">${currentItem.name}</h4>
                   <p>${currentItem.summary}</p>
                   ${this.showBuyItemInHTML(currentItem)}
               </div>
           </div>`;
            }
        }
        else {
            xhtmlResult = "Không em nào được mua";
        }
        return xhtmlResult;
    }
    showBuyItemInHTML(product) {
        let xhtmlResult = "";
        if (product.canBuy == true) {
            xhtmlResult = `
            <a data-product="${product.id}" href="#" class="price" > ${helpers_1.Helpers.toCurrency(product.price, "USD", "right")} </a>`;
        }
        else {
            xhtmlResult = `<span class="price"> ${helpers_1.Helpers.toCurrency(product.price, "USD")}</span>`;
        }
        return xhtmlResult;
    }
}
exports.ProductRepository = ProductRepository;
