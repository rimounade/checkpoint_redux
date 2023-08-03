import { HANDELDELETE, HANDELEDIT, HANDLEADD, HANDLEDONE } from "./ActionTypes"
import { handleEdit } from "./Actions"

const intitalState = {
    tasks : [
                {desc:"Drink Coffee", value:false, id: Math.random()},
                {desc:"Clean The House", value:false, id: Math.random()},
                {desc:"Watch a Film", value:false, id: Math.random()},
            ]
}
const Reducer =(state=intitalState,action)=>{
    switch (action.type){
        case HANDLEADD: return {...state, tasks:[...state.tasks,{desc:action.payload, valid: false, id: Math.random()}]}
        case HANDLEDONE : return {...state,tasks: state.tasks.map(task=> task.id == action.payload?{...task,valid:!task.valid}:task)}
        case HANDELDELETE: return {...state,tasks:state.tasks.filter(task=> task.id!=action.payload)}
        case HANDELEDIT : return {...state,tasks: state.tasks.map(task=> task.id == action.payload.id? {...task, desc : action.payload.desc}:task)}
        default: return state
    }
}
export default Reducer