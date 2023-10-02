import React from 'react'
import Select from 'react-select';


export default function ReactSelect(props: any) {
    console.log(props, "6..")
    return (
        <div className='reactSelect'>

            <Select
                id={props.id}
                name={props.name}
                options={props.options}
                placeholder={props.placeHolder}
                isSearchable={true}
                onChange={props.onChange}
                value={props.values?.value === "" ? [] : props.values}
                className={props.className}
                onBlur={props.onBlur}
                isDisabled={props.disabled}
            />
        </div>
    )
}
