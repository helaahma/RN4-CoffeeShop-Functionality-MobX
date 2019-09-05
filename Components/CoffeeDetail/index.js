import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content
} from "native-base";

// Style
import styles from "./styles";

// Store
import coffeeStore from "../../store/coffeeStore";
import CartButton from "../Buttons/CartButton";
import cartStore from "../../store/cartStore";

class CoffeeDetail extends Component {
  state = {
    drink: "Cappuccino",
    option: "Small",
    quant: 1
  };

  changeDrink = value => {
    this.setState({
      drink: value
    });
  };

  changeOption = value => {
    this.setState({
      option: value
    });
  };

  handleAdd = () => {
    cartStore.addItemCart(this.state);
  };

  render() {
    const { navigation } = this.props;
    //const navigation = this.props.navigation
    const { cafes } = coffeeStore;
    // const cafes = coffeeStore.cafes;
    if (!cafes) return <Content />;
    const cafeID = navigation.getParam("cafeID");
    const cafe = cafes.find(cafe => cafe.id === cafeID);
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {cafe.name + "\n"}
                <Text note>{cafe.location}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: cafe.img }} />
            </Right>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.drink}
                onValueChange={this.changeDrink}
              >
                <Picker.Item label="Cappuccino" value="Cappuccino" />
                <Picker.Item label="Latte" value="Latte" />
                <Picker.Item label="Espresso" value="Espresso" />
              </Picker>
            </Left>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.option}
                onValueChange={this.changeOption}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body>
          </ListItem>
          <Button full danger onPress={this.handleAdd}>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

CoffeeDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("cafeName"),
  headerRight: <CartButton />
});

export default observer(CoffeeDetail);
