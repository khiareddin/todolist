import {ADD, EDIT,DONE} from "../Constants/actions-types"


export const Add = (payload)=> {
    return{
        type: ADD,
        payload
    }
}

export const Edit = (payload)=> {
    return{
        type: EDIT,
        payload


    }
}
export const Done = (payload)=> {
    return{
        type: DONE,
        payload
    }
}

//payload:


