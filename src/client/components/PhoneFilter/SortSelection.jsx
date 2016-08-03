import React, {PropTypes} from 'react'

const propTypes = {
    sortPhone: PropTypes.func.isRequired
}

class SortSelection extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sortBy: 'age'
        }
        this.sortPhone = this.sortPhone.bind(this)
    }

    sortPhone() {
        const sortBy = this.refs.sortPhone.value
        this.props.sortPhone(sortBy)
        this.setState({sortBy: sortBy})
    }

    render() {
        return (
            <p>
                {'Sort by: '}
                <select ref='sortPhone' onChange={this.sortPhone} value={this.state.sortBy}>
                    <option value="name">Alphabetical</option>
                    <option value="age">Newest</option>
                </select>
            </p>
        )
    }
}

SortSelection.propTypes = propTypes

export default SortSelection
