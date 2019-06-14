import React from "react";
import { Button, View } from "react-native";
import { createSwitchNavigator } from "react-navigation";

export class ScreenComponent1 extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          borderColor: "blue",
          borderWidth: 21
        }}
      >
        <Button
          title="go to screen 2"
          onPress={this.props.navigation.navigate("Route2")}
        />
      </View>
    );
  }
}

export class ScreenComponent2 extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          borderColor: "orange",
          borderWidth: 21
        }}
      >
        <Button
          title="go to screen 1"
          onPress={this.props.navition.navigate("Route1")}
        />
      </View>
    );
  }
}

const AppNavigation = createSwitchNavigator({
  Route01: "ScreenComponent1",
  Route2: "ScreenComponent2"
});

export default class App extends React.Component {
  render() {
    return <AppNavigation />;
  }
}
