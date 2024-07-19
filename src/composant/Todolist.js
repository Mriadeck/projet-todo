import React,{useEffect,useState} from "react"
import Task from "./Task"
import Form from "./Form"

export default function Todolist(){
    const [add,setAdd]=useState(true)
    const [todos,setTodos]=useState([])
    const[nouveau,setNouveau]=useState([])
    const addTodo = (todo) => {
        console.log('todo',todo)
        setTodos([...todos, { id: Date.now(), name: todo, done: false }]);
    };

    const toggleDone= (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
          )
        );
      };

      useEffect(()=>{
          console.log(todos)
              },[todos])
            //   useEffect(()=>{
            //     console.log(nouveau)
            //         },[nouveau])
    return(
        <div className="max-w-lg ">
            <h1 className="text-2xl font-bold mb-4">My to do list</h1>
            <button
              onClick={nouveau}
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
            >{nouveau.map((todo) => {
                console.log(todo.name)
            return(
            <Task
                key={todo.id}
                name={todo.name}
                id={todo.id}
                toggleDone={toggleDone}
                done={todo.done}
            />
            ) })}
              Ajouter
            </button>
            {add && <Form addTodo={addTodo}/>}
            {/**Notre liste */}
            <div className="mt-4 flex flex-col">
                {todos.map((todo) => {
                    console.log(todo.name)
                return(
                <Task
                    key={todo.id}
                    name={todo.name}
                    id={todo.id}
                    toggleDone={toggleDone}
                    done={todo.done}
                />
                ) })}
      </div>
        </div>
    )

}