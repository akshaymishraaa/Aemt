import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import '../common/style.scss';

function CommonSearchField(props: any) {
    return (
        <React.Fragment>
            <div className='common-search'>
                <span><SearchIcon /> | </span>
                <input type="text" placeholder={props.placeholder} />
            </div>
        </React.Fragment>
    )
}

export default CommonSearchField