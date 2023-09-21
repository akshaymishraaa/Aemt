let OrgtypeValues = ["privateOrg", "GovernmentOrg", "NonEducationSector"]
let Countries = ["India", "USA", "NEPAL", "CANADA", "SOUTHAMERICA"]
let States = ["Telangana", "SanFrasisco", "Delhi", "Sanfransisco"]
let cities = ["Hyderabad", "Illinois", "Bhutan", "NewDelhi", "Warangal"]
let EmpIds = ["ERP1234", "ERP1236", "ERP12389", "ERP1288"]
export const orgTypeOptions = OrgtypeValues?.map((item: string, index: number) => {
    let optionObject = { value: '', label: '' }

    optionObject.value = item

    optionObject.label = item
    return optionObject
})
export const CountryOption = Countries?.map((item: string, index: number) => {
    let optionObject = { value: '', label: '' }

    optionObject.value = item

    optionObject.label = item
    return optionObject
})
export const StateOption = States?.map((item: string, index: number) => {
    let optionObject = { value: '', label: '' }

    optionObject.value = item

    optionObject.label = item
    return optionObject
})
export const CityOption = cities?.map((item: string, index: number) => {
    let optionObject = { value: '', label: '' }

    optionObject.value = item

    optionObject.label = item
    return optionObject
})
export const EmpOption = EmpIds?.map((item: string, index: number) => {
    let optionObject = { value: '', label: '' }

    optionObject.value = item

    optionObject.label = item
    return optionObject
})