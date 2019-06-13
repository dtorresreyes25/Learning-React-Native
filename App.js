import React from "react";
import { StyleSheet, Text, View, Button, SectionList } from "react-native";
//import { Constants } from "expo";
import contacts, { compareNames } from "./contacts";
import Row from "./row";
import ContactsList from "./ContactsList";
import AddContactForm from "./AddContactForm";

const styles = StyleSheet.create({
  row: {
    padding: 20
  },
  button: {
    padding: 20
  }
});

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts,
    showForm: false
  };

  toggleContacts = () =>
    this.setState(prevState => ({
      showContacts: !prevState.showContacts
    }));

  sort = () =>
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames)
    }));

  toggleAddForm = () =>
    this.setState(prevState => ({ showForm: !prevState.showForm }));

  addContact = contact =>
    this.setState(prevState => ({
      showForm: false,
      contacts: [...prevState.contacts, contact]
    }));

  render() {
    if (this.state.showForm)
      return <AddContactForm onSubmit={this.addContact} />;

    return (
      <View style={styles.button}>
        <Button title="show contacts" onPress={this.toggleContacts} />
        <Button title="sort contacts" onPress={this.sort} />
        <Button title="add contact" onPress={this.toggleAddForm} />
        {this.state.showContacts && (
          <ContactsList
            renderItem={this.renderItem}
            renderSectionHeader={this.renderSectionHeader}
            contacts={this.state.contacts}
          />
        )}
      </View>
    );
  }
}
