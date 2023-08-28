import './ShowTask.css';
import React from 'react'



const ShowTask = ({taskList, setTaskList, task, setTask}) => {

  // const tasks = [
  //   {id: 100, name: "Task A", time: "4:10:03 PM 8/25/23"},
  //   {id: 101, name: "Task B", time: "4:10:03 PM 8/25/23"},
  //   {id: 102, name: "Task C", time: "4:10:03 PM 8/25/23"}
  // ]

  const handleEdit = (id) => {
    const selectedTask = taskList.find(item => item.id === id)
    setTask(selectedTask)
  }

  const handleDelete = (id) => {
    const updatedTasklist = taskList.filter(item => item.id !== id)
    setTaskList(updatedTasklist)
  }
 

  return (
    <section className='showtask'>
      <div className="head">
        <div>
          <span className='title'>ToDo</span>
          <span className='count'>{taskList.length}</span>
        </div>
        <button className='clearAll' onClick={()=>setTaskList([])}>Clear All</button>
      </div>
      <ul>
        { taskList.map((item) => (
          <li key={item.id}>
          <p>
            <span className='name'>{item.name}</span>
            <span className='time'>{item.time}</span>
          </p>
          <div>
          <i onClick={()=>handleEdit(item.id)} className="fa-solid fa-pen-to-square"></i>
          <i onClick={()=>handleDelete(item.id)} className="fa-sharp fa-solid fa-trash"></i>
          </div>
        </li>
        ))}
        
      </ul>
    </section>
  )
}

export default ShowTask
