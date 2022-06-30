
import { ProductRepository } from './product-repository'
import { Product } from './product';
import { Cart } from './cart';


namespace MElement {
  export const ELM_LIST_PRODUCT: string =  "#list-product";
  export const ELM_NOTIFICATION : string = "#mnotification";
  export const ELM_CART_BODY : string = "#my-cart-body";
  export const ELM_CART_FOOTER : string = "#my-cart-footer";
}

namespace MNotification {
   export const NOTI_READY_TO_BUY: string =  "Sẵn sàng để mua";
   export const NOTI_GREATER_THAN_ONE: string =  "Lớn hơn hoặc bằng 1";

   
 }

let productRepository = new ProductRepository();
let cartObj = new Cart();
let products : Product[] = productRepository.getItems();
 productRepository.getItems();

 function showListFroduct(): void{
    $(MElement.ELM_LIST_PRODUCT).html(productRepository.showItemsInHTML());
 }

 function showNotification(str: string): void{
    $(MElement.ELM_NOTIFICATION).html(str);
 }

 function showCart(): void{
    $(MElement.ELM_CART_BODY).html(cartObj.showCartBodyInHTML());
    $(MElement.ELM_CART_FOOTER).html(cartObj.showCartFooterInHTML());
 }

 function addProduct(id: number){
  
      let product: Product = productRepository.getItemByID(id);
      cartObj.addProduct(product);
      showCart();
   
 }



 function deleteProduct(id: number){
   let product: Product = productRepository.getItemByID(id);
   cartObj.removeProduct(product);
   showCart();
   
 }



$(document).ready(function(){
   showListFroduct();
   showNotification(MNotification.NOTI_READY_TO_BUY);
   showCart();

 $("a.price").click(function(){
  let id: number =  $(this).data("product");

   addProduct(id);
 });


 
   $(document).on("click", "a.delete-cart-item", function(){
      let id: number = $(this).data("product");
      deleteProduct(id);
   });

});
 