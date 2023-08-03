import { HANDELDELETE, HANDELEDIT, HANDLEADD, HANDLEDONE } from "./ActionTypes"

export const handelAdd = (payload)=>{
    return(
        {
            type : HANDLEADD,
            payload
        }
    )

}
export const handleDone = (payload)=>{
    return(
        {
            type: HANDLEDONE ,
            payload
        }
    )
}
export const handelDelete = (payload)=>{
    return(
        {
            type : HANDELDELETE,
            payload
        }
    )
}
export const handleEdit = (payload)=>{
    return(
        {
            type : HANDELEDIT,
            payload
        }
    )

}