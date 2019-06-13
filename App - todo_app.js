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
  todoContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  appContainer: {
    paddingTop: Constants.statusBarHeight
  }
});

const Todo = props => (
  <View style={styles.todoContainer}>
    <Switch onValueChange={props.onToggle} value={props.todo.checked} />
    <Button onPress={props.onDelete} title="remove" />
    <Text>{props.todo.text}</Text>
  </View>
);

let id = 0;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo() {
    id++;
    const text = `Todo number ${id}`;
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: id,
          text: text,
          checked: false
        }
      ]
    });
  }

  onDeleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  onToggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) {
          return todo;
        } else {
          return {
            id: todo.id,
            text: todo.text,
            checked: !todo.checked
          };
        }
      })
    });
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Text>
          Unchecked todo count:
          {this.state.todos.filter(todo => !todo.checked).length}
        </Text>
        <Text>Count todo:{this.state.todos.length}</Text>
        <Button onPress={() => this.addTodo()} title="ADD TODO" />
        <ScrollView>
          {this.state.todos.map(todo => (
            <Todo
              onDelete={() => this.onDeleteTodo(todo.id)}
              onToggle={() => this.onToggleTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
