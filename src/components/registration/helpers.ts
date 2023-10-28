export const extractOptions=(response:any)=>{
    let OptList = response?.map((item: any, index: number) => {
        let option: { label: string, value: number } = { label: '', value: 0 }
        option.label = item.name
        option.value = item.id
        return option
    })
    return OptList

}