import { Product } from "./product";
import { Helpers } from "./libs/helpers";
export class ProductRepository{
    private products: Product[] = [];

    constructor(){
    this.addItem(new Product(100, "Gái Xinh1", "number1.jpg", "From the very first step of my life, beside my parents, I have my older sister as one of my idols. She is 23 years old and she works as a teacher in a local primary school", 20));
    this.addItem(new Product(101, "Gái Xinh2", "number2.jpg", "From the very first step of my life, beside my parents, I have my older sister as one of my idols. She is 23 years old and she works as a teacher in a local primary school", 50));
    this.addItem(new Product(102, "Gái Xinh3", "number3.jpg", "From the very first step of my life, beside my parents, I have my older sister as one of my idols. She is 23 years old and she works as a teacher in a local primary school", 70));
    this.addItem(new Product(103, "Gái Xinh4", "number4.jpg", "From the very first step of my life, beside my parents, I have my older sister as one of my idols. She is 23 years old and she works as a teacher in a local primary school", 40));
    this.addItem(new Product(104, "Gái Xinh5", "number5.jpg", "From the very first step of my life, beside my parents, I have my older sister as one of my idols. She is 23 years old and she works as a teacher in a local primary school", 30, false));
    }

    public addItem(product: Product){

          this.products[this.products.length] = product;
           
    }

    public getItems() : Product[]{
        
        return this.products;
    }

    public getItemByID(id: number) : Product {
        let total : number = this.products.length;
       for(let i: number = 0; i < total; i++){
           if(this.products[i].id == id) return this.products[i];
       }
       return null;

    }

    public showItemsInHTML() : string {
        let total: number = this.products.length;
        let xhtmlResult : string = "";

        if(total > 0){
            for(let i: number = 0; i < total; i++){
               let currentItem: Product =  this.products[i];
            
               xhtmlResult += `<div class="media product">
               <div class="media-left">
                   <a href="#">
                       <img class="media-object" src="img/girl/${ currentItem.image }" alt="${ currentItem.name }">
                   </a>
               </div>
               <div class="media-body">
                   <h4 class="media-heading">${ currentItem.name }</h4>
                   <p>${ currentItem.summary }</p>
                   ${ this.showBuyItemInHTML(currentItem)}
               </div>
           </div>`;
            }
        }else {
            xhtmlResult = "Không em nào được mua";
        }
       
    
        return xhtmlResult;
    }
    private showBuyItemInHTML(product: Product): string{
        let xhtmlResult: string = "";
        if(product.canBuy == true){
            xhtmlResult = `
            <a data-product="${product.id}" href="#" class="price" > ${Helpers.toCurrency(product.price, "USD", "right")} </a>`;
        }else{
            xhtmlResult = `<span class="price"> ${Helpers.toCurrency(product.price, "USD",)}</span>`;
        }
        return xhtmlResult;
    }
}