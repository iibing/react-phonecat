import {connect} from 'react-redux'
import {fetchPhoneList, fetchPhoneDetail} from '../actions'
import PhoneList from '../components/PhoneList/PhoneList'

const mapStateToProps = (state) => {
    return {filter: state.phoneFilter.filter, sortBy: state.phoneFilter.sortBy, phones: state.phones.phones}
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPhoneList: () => dispatch(fetchPhoneList()),
        fetchPhoneDetail: (phoneId) => dispatch(fetchPhoneDetail(phoneId))
    }
}

const SortedPhoneList = connect(mapStateToProps, mapDispatchToProps)(PhoneList)

export default SortedPhoneList