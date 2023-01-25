import React, { useState } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";

const data = [
    {
        _id:"sfdgh",
        title: "Сдать лабу бабайкину",
        isCompleted: false,
    },
    {
        _id:"zdhgtbooulhnb",
        title: "дать пизды павлову",
        isCompleted: false,
    },
    {
        _id:"45w37645376",
        title: "помыть трубина",
        isCompleted: false,
    },
    {
        _id:"45w376234245376",
        title: "как он заебал со своими пропсами даже не сказал что это такое :-(",
        isCompleted: false,
    }
]

const Home = () => {
    const [todos, setTodos] = useState(data)
    const changeTodo = (id) => {
        const copy = [...todos]
       const current =  copy.find(t => t._id === id)
       current.isCompleted = !current.isCompleted
       setTodos(copy)
    }

    const removeTodo = (id) => {
       setTodos([...todos].filter(t => t._id !== id))
    }

    
    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-8">Туториал говно ебаное до слез довел</h1>
            {todos.map(todo => (
            <TodoItem key={todo._id} todo = {todo} changeTodo = {changeTodo} removeTodo = {removeTodo}/> ))}
            <CreateTodoField setTodos = {setTodos} />
        </div>
    )
}

export default Home