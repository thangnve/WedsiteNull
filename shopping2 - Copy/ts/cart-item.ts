import { Product } from "./product";
import { Helpers } from "./libs/helpers";
export class CartItem{
    private _product : Product;
 
  
    constructor (product: Product ){
           this._product = product;
    }
    public showCartItemHTML(index: number): string{

        return `<tr>
        <th scope="row">${index}</th>
        <td>${this.product.name}</td>
        <td> ${Helpers.toCurrency(this.product.price, "USD", "right")} </td>
      
        <td>
         
            <a class="label label-danger delete-cart-item" herf="#"  data-product="${this.product.id}">Delete</a>
            </td>
            </tr>`;
    }
    


   public get product() : Product{
    return this._product;
   }

   public set product(v : Product){
    this._product = v;
   }


}