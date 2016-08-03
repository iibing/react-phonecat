import React, {PropTypes} from 'react'
import {Link} from 'react-router'

const phonePropTypes = {
    age: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    snippet: PropTypes.string.isRequired
}

const propTypes = {
    phone: PropTypes.shape(phonePropTypes).isRequired
}
const PhoneListItem = ({phone}) => (
    <li className='thumbnail'>
        <Link to={'phones/' + phone.id} className='thumb'>
            <img src={phone.imageUrl} alt={phone.name}/>
        </Link>
        <Link to={'phones/' + phone.id}>{phone.name}</Link>
        <p>{phone.snippet}</p>
    </li>
)

PhoneListItem.propTypes = propTypes

export default PhoneListItem
