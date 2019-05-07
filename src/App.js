import React, { useState, useEffect } from 'react'
import About from './components/pages/About'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios';


function App() {

  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   title: 'Take out the trash',
    //   completed: true
    // },
    // {
    //   id: 2,
    //   title: 'Meeting 1',
    //   completed: false
    // },
    // {
    //   id: 3,
    //   title: 'Meeting 2',
    //   completed: false
    // }
  ])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        setTodos(res.data)
      })
  }, [])

  // Toogle complete
  const toogleComplete = (id) => {
    const newTodos = [...todos]
    newTodos.map(todo => {
      if (todo.id === id) { todo.completed = !todo.completed }
      return todo
    })
    setTodos(newTodos)

  }

  // delte TODO
  const deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
      })

  }

  // Add TODO
  const addTodo = (todo) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', { title: todo.title, completed: todo.completed })
      .then(res => {
        const newTodos = [...todos, res.data]
        setTodos(newTodos)
      })
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path='/' render={props => (
          <React.Fragment>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} toogleComplete={toogleComplete} deleteTodo={deleteTodo} />
          </React.Fragment>
        )} />
        <Route path='/about' component={About} />
      </div>
    </Router >

  )
}

export default App;
