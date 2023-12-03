import { Actiontypes } from "../types/ActionTypes"

export const  toastEnabled:any=(payload:any)=>{
    return((dispatch:any)=>{
        dispatch({type:Actiontypes.TOAST_ENALBLED,payload:payload})

    })
}