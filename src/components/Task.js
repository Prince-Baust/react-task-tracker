import {FaTimes} from 'react-icons/fa';

const Task = ({task, onDelete, reminder}) =>{
return(
  <div className="task" onDoubleClick={()=>reminder(task.id)}>
    <h3>{task.text}
      <FaTimes style={{color: 'red'}}
               onClick={()=>onDelete(task.id)}
      />
    </h3>
  </div>
);
}

export default Task;