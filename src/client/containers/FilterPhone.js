import {connect} from 'react-redux'
import {filterPhoneByKeyWord, sortPhone} from '../actions'
import PhoneFilter from '../components/PhoneFilter'

const mapDispatchToProps = (dispatch) => {
    return {
        filterPhoneByKeyWord: (fliter) => dispatch(filterPhoneByKeyWord(fliter)),
        sortPhone: (sortBy) => dispatch(sortPhone(sortBy))
    }
}

const FilterPhone = connect(null, mapDispatchToProps)(PhoneFilter)

export default FilterPhone