let roles =["Admin", "Student Admin", "Account Admin", "Examination Admin"]
let tabs = ["Home", "Setting", "User Management"]
export const rolesOption = roles?.map((item:any,index:any)=>{
    let optionObject = {label:'', value:''}
    optionObject.label= item;
    optionObject.value= item;
    return optionObject;
});

export const tabOptions = tabs?.map((item:any,index:any)=>{
    let optionObject = {label:'', value:''}
    optionObject.label= item;
    optionObject.value= item;
    return optionObject;
});