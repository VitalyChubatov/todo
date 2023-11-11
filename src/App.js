
import { useState } from 'react';
import './App.css';
import { Check } from './components/Check';
import { CheckAdd } from './components/ChekAdd';


function App() {
const [todos,setTodos] = useState([]);

const addTask = (message) => {
if (message) {
  const newItem = {
    id: Math.random().toString(36).substring(2,9),
    task: message,
    isComplete : false
  }
  setTodos([...todos,newItem])
}
}

const removeTask = (id) => {
  setTodos([...todos.filter((todo) => todo.id !== id)])
}

const handeToggle = (id) => {
  setTodos([...todos.map(todo => todo.id === id ? {...todo , isComplete : !todo.isComplete} : {...todo}
    )
  ])
}


  return (
		<div className='App'>
			<div className='background-todos'>
				<div className='app-todo'>Мои цели</div>
				{todos.map(todo => (
					<Check
						todo={todo}
						key={todo.id}
						toggleTask={handeToggle}
						removeTask={removeTask}
					/>
				))}
				<CheckAdd addTask={addTask} />
			</div>
		</div>
	)
}

export default App;
