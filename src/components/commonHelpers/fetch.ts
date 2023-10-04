import axios from "axios";
export const fetch = (props: any) => {
    console.log(props, "prrr")
    const options = {
        url: props?.url,
        method: props.method,
        data: props.data,
        // timeOut: (1000 * 2),
        // headers:""
    }
    return (
        axios(options).then((response: any) => {
            return (response)
        })
    )
}