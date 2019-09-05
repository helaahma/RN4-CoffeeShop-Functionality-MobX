import React from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";
//Store
import cartStore from "../../store/cartStore";

const CartItem = ({ item }) => {
  return (
    <ListItem style={{ borderBottomWidth: 0 }}>
      <Left>
        <Text style={{ color: "white", marginLeft: 16 }}> {item.drink} </Text>
        <Text note style={{ marginLeft: 16 }}>
          {item.option}
        </Text>
      </Left>
      <Body>
        <Text style={{ color: "white" }}>{item.quant}</Text>
      </Body>
      <Right>
        {/* the mistake was that i passed the argument item onpress{(item)=>..} */}
        <Button transparent onPress={() => cartStore.removeItemFromCart(item)}>
          <Icon name="trash" style={{ color: "white", fontSize: 21 }} />
        </Button>
      </Right>
    </ListItem>
  );
};

export default CartItem;
