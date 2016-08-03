import {connect} from 'react-redux'
import PhoneDetail from '../components/PhoneDetail'
import {fetchPhoneDetail} from '../actions'

const mapStateToProps = (state) => {
    return {phone: state.phones.phone}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPhoneDetail: (phoneId) => dispatch(fetchPhoneDetail(phoneId))
    }
}
const PhoneDetails = connect(mapStateToProps, mapDispatchToProps)(PhoneDetail)

export default PhoneDetails