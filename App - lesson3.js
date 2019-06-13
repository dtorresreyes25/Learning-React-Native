import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Switch,
  ScrollView
} from "react-native";
import { Constants } from "expo";

const styles = StyleSheet.create({
  countText: {
    fontSize: 48
  },
  appContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight
  }
});

export class CountEvenNumbers extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !(nextProps.count % 2);
  }
  render() {
    return <Text syle={styles.countText}>{this.props.count}</Text>;
  }
}

export class Count extends React.Component {
  render() {
    return <Text style={styles.countText}>{this.props.count}</Text>;
  }
}

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.Inc, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  Inc = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <View>
        <Text style={styles.countText}>{this.state.count}</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true
    };
  }

  toggleCounter = () => {
    this.setState(prevState => ({ showCounter: !prevState.showCounter }));
  };

  render() {
    if (this.state.showCounter) {
      return (
        <View>
          <Button title="show counter" onPress={this.toggleCounter} />
          <Counter />
        </View>
      );
    } else {
      return (
        <View>
          <Button title="show counter" onPress={this.toggleCounter} />
        </View>
      );
    }
  }
}
