import React from 'react'
import Select from 'react-select';


export default function ReactSelect(props: any) {
    return (
        <div className='reactSelect'>

            <Select
                options={[{ value: 'chocolate', label: 'Chocolate' },
                { value: 'otion2', label: 'otion2' },
                { value: 'option3', label: 'option3' },]}
                placeholder={"Select City"}
                isSearchable={true}
            />
        </div>
    )
}
