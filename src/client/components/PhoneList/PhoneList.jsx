import React, {PropTypes} from 'react'
import PhoneListItem from './PhoneListItem'

const propTypes = {
    filter: PropTypes.string,
    sortBy: PropTypes.string,
    phones: PropTypes.array.isRequired,
    fetchPhoneList: PropTypes.func.isRequired
}

class PhoneList extends React.Component {

    componentDidMount() {
        this.props.fetchPhoneList()
    }

    render() {
        const {filter, sortBy, phones} = this.props
        if (phones.length > 0) {
            let filterredPhone = phones
            if (filter && filter !== '') {
                filterredPhone = phones.filter(phone => phone.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0 || phone.snippet.toLowerCase().indexOf(filter.toLowerCase()) >= 0)
            }
            if (sortBy === 'name') {
                filterredPhone.sort((prev, next) => prev.name.localeCompare(next.name))
            } else if (sortBy === 'age') {
                filterredPhone.sort((prev, next) => + (prev.age > next.age) || + (prev.age === next.age) - 1)
            }
            const sortedPhones = filterredPhone.map(phone => <PhoneListItem key={phone.name} phone={phone}/>)

            return (
                <ul className='phones'>
                    {sortedPhones}
                </ul>
            )
        } else {
            return null
        }

    }
}

PhoneList.propTypes = propTypes

export default PhoneList