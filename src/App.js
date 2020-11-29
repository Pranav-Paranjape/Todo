import React from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends React.Component{

  constructor() {
    super()
    this.state = {
      todos:[
        {}
      ]
    }
    this.addTodo=this.addTodo.bind(this);
    this.deleteTodos=this.deleteTodos.bind(this);
  }

  addTodo(todos){
    todos.id=Math.random();
    let todo = [...this.state.todos,todos]
    this.setState({
      todos:todo
    });
  }

  deleteTodos(id){
    let remTodo = this.state.todos.filter((todo)=>{
      return (id!==todo.id)
    });
    this.setState({
      todos:remTodo
    });
  }

  render() {
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">TODO's</h1>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} deleteTodos={this.deleteTodos}/>
               
      </div>
    )
  }
}

export default App;
