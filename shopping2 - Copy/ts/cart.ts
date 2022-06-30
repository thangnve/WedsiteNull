import { CartItem  } from "./cart-item";
import { Product } from "./product";
import { Helpers } from "./libs/helpers";
export class Cart{
    private cartItems: CartItem[] = [];
    private totalPrice : number = 0;
    

    public addProduct (product: Product): void {
              let position: number = this.getProductPosition ( product);
               if(position > -1){
             
               }else{
                this.cartItems[this.cartItems.length] = new CartItem(product);
               }
        
               this.totalPrice = product.price;
            }
    private getProductPosition (product: Product): number{
         let total: number = this.cartItems.length;
         for( let i : number = 0 ; i < total; i++){
            if(this.cartItems[i].product.id == product.id) return i;

         }
         return -1;
    }



   public removeProduct (product: Product): void{
    let position: number = this.getProductPosition ( product);
    if(position > -1){
     
     this.totalPrice = this.totalPrice - product.price; 
     this.cartItems.splice(position, 1);  
 }
    }
   public  isEmpty(): boolean {
        return (this.cartItems.length == 0);
    }



    public getTotalPrice(): number{
        let total: number = 0;
        this.cartItems.forEach((cartItems: CartItem) => {
              total += cartItems.product.price;
        });
        return total;
    }

    
   public showCartBodyInHTML () : string {
    let  xhtmlResult : string = ``;
    if(!this.isEmpty ()){
        let total: number = this.cartItems.length;
        for(let i: number = 0; i< total; i++){
            let cartItemCurrent: CartItem = this.cartItems[i];
            xhtmlResult += cartItemCurrent.showCartItemHTML(i + 1);
        }
    }
        return xhtmlResult;
    }
   public showCartFooterInHTML () : string {
    let xhtmlResult = `<tr><th colspan="6">Empty product in your cart</th></tr>`;
    if(!this.isEmpty()){
        xhtmlResult = `<tr> 
                            <td colspan="2" class="total-price text-right">Tổng Tiền:  ${Helpers.toCurrency(this.getTotalPrice(), "USD", "right")} </td>
                            <tr/>`;
    }
        return xhtmlResult;
    }
}