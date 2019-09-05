import { decorate, observable, computed } from "mobx";

class CartStore {
  items = [];

  addItemCart = newItem => {
    const checkItem = this.items.find(
      item => item.drink === newItem.drink && item.option === newItem.option
    );
    // if (checkItem) checkItem.quant++;
    // else this.items.push(newItem);
    //if we enable the user to enter 5 instead of 1 at the initial stage
    //this will help
    if (checkItem) checkItem.quant += newItem.quant;
    else this.items.push(newItem);
  };
  removeItemFromCart = itemA => {
    this.items = this.items.filter(itemB => itemA !== itemB);
  };

  checkoutCart = () => {
    this.items = [];
  };
  //Review
  get quantity() {
    let total = 0;
    this.items.forEach(item => (total += item.quantity));
    return total;
  }
  //   incrementQuant = () => {
  //     this.items.find(item =>
  //       item.quant.length !== 0 ? item.quant === item.quant.length + 1 : ""
  //     )
  //};
}
checkoutCart = decorate(CartStore, {
  items: observable,
  quantity: computed
});
const cartStore = new CartStore();

export default cartStore;
