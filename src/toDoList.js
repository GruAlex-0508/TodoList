import React, { Component } from "react";
import InputList from "./components/InputList";
import MonitorList from "./components/MonitorList";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newToDo: "",
      toDoId: 7,
      toDoLists: [],
    };

    this.handleAddToDo = this.handleAddToDo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleToDo = this.toggleToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
  }

  handleAddToDo(event) {
    event.preventDefault();
    const input = this.state.newToDo.trim();
    if (input) {
      this.setState((prevState) => ({
        newToDo: "",
        toDoId: prevState.toDoId + 1,
        toDoLists: [
          ...prevState.toDoLists,
          { id: prevState.toDoId, title: input, completed: false },
        ],
      }));
    }
  }

  handleInputChange(event) {
    this.setState({ newToDo: event.target.value });
  }

  toggleToDo(id) {
    this.setState((prevState) => ({
      toDoLists: prevState.toDoLists.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo,
      ),
    }));
  }

  deleteToDo(id) {
    this.setState((prevState) => ({
      toDoLists: prevState.toDoLists.filter((toDo) => toDo.id !== id),
    }));
  }

  render() {
    return (
      <>
        <InputList
          value={this.state.newToDo}
          onChange={this.handleInputChange}
          onSubmit={this.handleAddToDo}
        />
        <MonitorList
          toDos={this.state.toDoLists}
          onToggle={this.toggleToDo}
          onDelete={this.deleteToDo}
        />
      </>
    );
  }
}

export default ToDoList;
