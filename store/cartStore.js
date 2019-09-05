import { decorate, observable } from "mobx";

class CartStore {
  items = [];

  addItemCart = incommingItem => {
    const checkItem = this.items.find(
      item =>
        item.option === incommingItem.option &&
        item.drink === incommingItem.drink
    );
    checkItem ? checkItem.quant++ : this.items.push(checkItem);
  };
  removeItemFromCart = itemA => {
    this.items = this.items.filter(itemB => itemA !== itemB);
  };
  checkoutCart = () => {
    this.items = [];
  };
  incrementQuant = () => {
    this.items.find(item =>
      item.quant.length !== 0 ? item.quant === item.quant.length + 1 : ""
    );
  };
}
checkoutCart = decorate(CartStore, {
  items: observable
});
const cartStore = new CartStore();

export default cartStore;
