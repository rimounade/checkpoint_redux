import { useDispatch } from "react-redux"
import { handelAdd } from "../Redux/Actions"
import { useState } from "react"
import { Button } from "react-bootstrap"


const AddCard = ()=>{
    const [desc,setDesc]=useState("")
    const dispatch = useDispatch()
    return(
        <div>
        
            <input type="text" onChange={(e)=>setDesc(e.target.value)}/>
            <br/>
            <br/>
            <>
            <Button variant="secondary">Add Task</Button>{' '}
            </>
        </div>
    )
}
export default AddCard