import './AddTask.css';
import React from 'react'

const AddTask = ({taskList, setTaskList, task, setTask}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    if(task.id){
      const date = new Date()
      const updatedtasklist = taskList.map((item) => (
      item.id === task.id ? 
      {id: task.id, name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } 
      : item
      ))
      setTaskList(updatedtasklist)
      setTask({})
    }else{

    const date = new Date()
    // console.log(date)
    const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
    setTaskList([...taskList, newTask])
    setTask({})
    }
  
  }


  return (
    <section className='addtask'>
      <form onSubmit={handleSubmit}>
        <input type="text" name='task' value={task.name || ""} placeholder='addTask' autoComplete='off' maxLength="25" 
        onChange={(e)=>setTask({...task, name: e.target.value})}
        />
        <button type='submit'>{task.id ? "Update" : "Add" }</button>
      </form>
    </section>
  )
}

export default AddTask
