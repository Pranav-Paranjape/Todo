import React from 'react'

function Todos({todos,deleteTodos}){
    let todoList = todos.length ? 
        todos.map(todo=>{
            return(
                <div key={todo.id} className="collection-item">
                    <span onClick={()=>{deleteTodos(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
     : 
        <p>No Todos left, Yay!</p>
    
    return(
        <div className="todo collection">
            {todoList}
        </div>
    )
}

export default Todos;