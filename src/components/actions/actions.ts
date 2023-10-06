import { Actiontypes } from "../../types/ActionTypes"
import { baseurl } from "../commonHelpers/envi"
import { fetch } from "../commonHelpers/fetch"

export const registerOrganization: any = (props: any) => {
    console.log(props, "5....")
    const url = `${baseurl}/registerUser`
    return ((dispatch: any) => {
        fetch({
            url: url,
            method: 'POST',
            data: props
        }).then((res: any) => {
            console.log("res...99", res)
            // dispatch({ type: Actiontypes.organization, payload: res?.data })
        }).catch((err: any) => {
            console.log(err)
        })

    })
}
// export const action={}
