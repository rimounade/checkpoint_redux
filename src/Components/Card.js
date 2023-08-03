import { useDispatch } from "react-redux"
import { handelDelete, handleDone, handleEdit } from "../Redux/Actions"
import { useState } from "react"


const Card =({task})=>{
   const dispatch = useDispatch()
   const [edit,setEdit]=useState(false)
   const [desc,setDesc]=useState(task.desc)
   
   const handleSave =()=>{
    dispatch(handleEdit({id :task.id , desc}))
    setEdit(false)
   }
    return(
        <div>
          {
            edit?
            <>
            <input value ={desc} onChange={(e)=>setDesc(e.target.value)} type="text" />
            <button onClick={handleSave}>Save</button>
            </>
            :
            <>
            <h3 className={task.valid && "decor"}>{task.desc}</h3>
            <button onClick={()=>setEdit(true)}>Edit</button>
            </>
          }
            
            <i  onClick={()=>dispatch(handleDone(task.id))} class="fa-solid fa-check fa-2xl"></i>
          <i onClick={()=>dispatch(handelDelete(task.id))} class="fa-solid fa-trash fa-2xl"></i>

        </div>
    )
}
export default Card