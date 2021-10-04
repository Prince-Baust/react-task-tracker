const AddTask = () =>{
  return(
    <form action="" className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task"/>
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeholder="Set Day & Time"/>
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input type="checkbox"/>
      </div>
      <input type="submit" value="Add Task" className="btn btn-block"/>
    </form>
  );
}

export default AddTask;