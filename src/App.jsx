
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'

function App() {
  
  return (
    <>
      <h1 className='text-5xl'>React Redux Todo </h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App