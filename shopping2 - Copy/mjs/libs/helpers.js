"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helpers = void 0;
class Helpers {
    static toCurrency(value, currencyUnit, posision = "left") {
        if (posision == "left") {
            return currencyUnit + " " + value;
        }
        else if (posision == "right") {
            return value + " " + currencyUnit;
        }
    }
}
exports.Helpers = Helpers;
