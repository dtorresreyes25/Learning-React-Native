import React from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    margin: 5,
    borderWidth: 1,
    borderColor: "black"
  },
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
export default class AddContactForm extends React.Component {
  state = {
    name: "",
    phone: "",
    isFormValid: false
  };

  validateForm = () => {
    const name = this.state.name.split(" ");
    if (
      +this.state.phone >= 0 &&
      this.state.phone.length === 10 &&
      this.state.name.length >= 3 &&
      name[1]
    ) {
      this.setState({ isFormValid: true });
    } else {
      this.setState({ isFormValid: false });
    }
  };

  getHandler = key => val => this.setState({ [key]: val }, this.validateForm);

  //handleName = name => this.setState({ name }, this.validateForm);
  //handlePhone = phone => this.setState({ phone }, this.validateForm);

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          placeHolder="name"
          value={this.state.name}
          onChangeText={this.getHandler("name")}
          style={styles.input}
        />
        <TextInput
          placeHolder="phone"
          value={this.state.phone}
          onChangeText={this.getHandler("phone")}
          style={styles.input}
          keyboardType="numeric"
        />
        <Button
          title="enviar"
          onPress={this.handleSubmit}
          disabled={!this.state.isFormValid}
        />
      </KeyboardAvoidingView>
    );
  }
}
