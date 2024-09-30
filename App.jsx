import './App.css'
import Input from '../components/Input'
import Todo from '../components/Todo'
import { useState } from 'react'


function App() {

  const [inputval, setinputval] = useState('')
  const [todos, settodos] = useState([])

  function writetodo(e){
    setinputval(e.target.value)
  }

  function addtodo(e){
    if(inputval!=''){
        settodos((prevtodos)=> [...prevtodos,inputval])
        setinputval('')
    }
  }
  function deltodos(todoindex) {
    settodos((prevtodos) => 
      prevtodos.filter((prevtodos, pretodosIndex) => pretodosIndex !== todoindex)
    );
  }
  
  return (
    <main>
      <h1>MY TO DO LIST</h1>
      <Input inputval={inputval} writetodo={writetodo} addtodo={addtodo}/>

      <Todo todos={todos} deltodos={deltodos}/>
    </main>
  )
}

export default App
