import React from "react";
import { withNavigation } from "react-navigation";
import { Button, Icon } from "native-base";
import cartStore from "../../store/cartStore";
import observer from "mobx-react";

const CartButton = ({ navigation }) => {
  return (
    <Button transparent onPress={() => navigation.navigate("CoffeeCart")}>
      <Text>{cartStore.quantity}</Text>
      <Icon name="shoppingcart" type="AntDesign" />
    </Button>
  );
};

export default withNavigation(observable(CartButton));
