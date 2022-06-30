export class Helpers {
  public static toCurrency(value: number, currencyUnit: string, posision: string = "left"): string{
  
  if(posision == "left"){
    return currencyUnit + " " + value;
  }else  if(posision == "right"){
    return value + " " + currencyUnit;
}
   }
}