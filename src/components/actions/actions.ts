import { Actiontypes } from "../../types/ActionTypes"
import { url } from "../commonHelpers/envi"
import { fetch } from "../commonHelpers/fetch"

export const registerOrganization: any = (props: any) => {
    console.log(props, "5....")
    return ((dispatch: any) => {
        fetch({
            url: `${url}/reregisterUser`,
            method: 'POST',
            data: props
        }).then((res: any) => {
            console.log("res...99", res)
            dispatch({ type: Actiontypes.organization, payload: res?.dsat })
        }).catch((err: any) => {
            console.log(err)
        })

    })
}
// export const action={}
