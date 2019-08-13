import React, { useState, useEffect } from 'react'
import About from './components/pages/About'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios';
import _ from 'lodash'


function App() {

  const [todos, setTodos] = useState([])
  const [list, setList] = useState([])

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
  // ])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        setTodos(res.data)
        setList(res.data)
      })
  }, [])


  // search TODO
  const search = (value) => {
    let li = _.union([...list], [...todos])
    // a = _.union(a, [1, 3, 3, 4]);

    let filtered = []
    if (value !== "") {
      filtered = li.filter(todo => {
        return todo.title.includes(value)
      })
    } else {
      filtered = li
    }
    setTodos(filtered)
  }

  // Toogle complete
  const toogleComplete = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !todos[index].completed

    // newTodos[index].completed = !newTodos[index].completed
    // newTodos.map(todo => {
    //   if (todo.id === id) { todo.completed = !todo.completed }
    //   return todo
    // })

    setTodos(newTodos)
    setList(newTodos)
  }

  // delete TODO
  const deleteTodo = (index) => {
    // axios.get('https://jsonplaceholder.typicode.com/todos')
    // axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    // .then(res => {
    const newTodos = todos.filter((todo, id) => {
      return index !== id
    })
    // setFiltered(newTodos)
    setTodos(newTodos)
    setList(newTodos)
  }

  // Add TODO
  const addTodo = (title) => {
    // axios.post('https://jsonplaceholder.typicode.com/todos', { title: todo.title, completed: todo.completed })
    // axios.post('https://jsonplaceholder.typicode.com/todos', { title: title })
    // .then(res => {
    // const newTodos = [res.data, ...todos]
    // setTodos(newTodos)
    // })
    const newTodos = [{ title }, ...todos]
    // setFiltered(newTodos)
    setTodos(newTodos)
    setList(newTodos)
  }

  return (
    <Router>
      <div className="App">
        <Header search={search} />
        <Route exact path='/' render={props => (
          <React.Fragment>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} toogleComplete={toogleComplete} deleteTodo={deleteTodo} />
            {/* <Todos todos={filtered} toogleComplete={toogleComplete} deleteTodo={deleteTodo} /> */}
          </React.Fragment>
        )} />
        <Route path='/about' component={About} />
      </div>
    </Router >

  )
}

export default App;
