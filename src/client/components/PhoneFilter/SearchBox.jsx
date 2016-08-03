import React, {PropTypes} from 'react'

const propTypes = {
    filterPhoneByKeyWord: PropTypes.func.isRequired
}

class SearchBox extends React.Component {

    constructor(props) {
        super(props)
        this.filterPhoneByKeyWord = this.filterPhoneByKeyWord.bind(this)
    }

    filterPhoneByKeyWord() {
        this.props.filterPhoneByKeyWord(this.refs.filterInput.value)
    }
    render() {
        return (
            <p>
                Search:
                <input ref='filterInput' onChange={this.filterPhoneByKeyWord}/>
            </p>
        )
    }
}

SearchBox.propTypes = propTypes

export default SearchBox
