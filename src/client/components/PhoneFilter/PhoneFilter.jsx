import React, {PropTypes} from 'react'
import SearchBox from './SearchBox'
import SortSelection from './SortSelection'

const propTypes = {
    filterPhoneByKeyWord: PropTypes.func.isRequired,
    sortPhone: PropTypes.func.isRequired
}

const PhoneFilter = ({filterPhoneByKeyWord, sortPhone}) => (
    <div>
        <SearchBox filterPhoneByKeyWord={filterPhoneByKeyWord}/>
        <SortSelection sortPhone={sortPhone}/>
    </div>
)

PhoneFilter.propTypes = propTypes

export default PhoneFilter
