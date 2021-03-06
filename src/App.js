import Header from './components/Header'
import Tasks from "./components/Tasks";
import {useState} from "react";
import AddTask from "./components/AddTask";


function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  // Add Task
  const addTask = (task)=> {
    const id = Math.floor(Math.random()*100)+1;
    const newTask = {id, ...task};
    setTasks([newTask, ...tasks]);
  }

  // Delete Task
  const deleteTask = (id) => setTasks(tasks.filter((task)=> task.id !== id));

  // Toggle Reminder
  const toggleReminder = (id) => setTasks(
    tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task)
  );

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?
        <Tasks tasks={tasks}
               onDelete={deleteTask}
               reminder = {toggleReminder}
        /> : "No Task Added"}
    </div>
  );
}

export default App;
