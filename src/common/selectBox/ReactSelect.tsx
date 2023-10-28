import React from 'react'
import Select from 'react-select';


export default function ReactSelect(props: any) {
    return (
        <div className='reactSelect'>

            <Select
                id={props.id}
                styles={props.styles}
                name={props.name}
                options={props.options}
                placeholder={props.placeHolder}
                isSearchable={true}
                onChange={props.onChange}
                value={props.values?.value === "" ? [] : props.values}
                className={props.className}
                onBlur={props.onBlur}
<<<<<<< HEAD
                isDisabled={props.disabled}
                isMulti={props.isMulti}
                defaultValue={props.defaultValue}
=======
                isDisabled={props?.disabled}
>>>>>>> 21519260320bf954e42392d1389d48a6629142da
            />
        </div>
    )
}
