import { useSelector } from "react-redux"
import Card from "./Card"
import { Button } from "react-bootstrap"
import { useState } from "react"

const ListCard =()=>{
    const tasks = useSelector(state=>state.tasks)
    const [test,setTest]= useState('ALL')
    return(
        <div>
            <>
      <Button onClick={()=>setTest('ALL')} variant="primary">All</Button>{' '}
     
      <Button onClick={()=>setTest('Done')} variant="success">Done</Button>{' '}
      <Button onClick={()=>setTest('NOTDONE')} variant="warning">Not Done</Button>{' '}
      </>
      <br/>
      <br/>
      {
                test =="ALL"?
                <>
                {
                    tasks.map((task,i,t)=><Card task={task}/>)
                }
                </>
                :
                test == "Done"?
                <>
                {
                    tasks.filter(task=> task.valid==true).map((task,i,t)=><Card task={task}/>)
                }
                </>
                :
                <>
                {
                    tasks.filter(task=> task.valid!=true).map((task,i,t)=><Card task={task}/>)
                }
                </>
                

            }
        </div>
    )

}
export default ListCard