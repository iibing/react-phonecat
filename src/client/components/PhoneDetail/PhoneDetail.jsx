import React, {PropTypes} from 'react'
import PhoneThumbs from './PhoneThumbs'
import PhoneSpec from './PhoneSpec'

import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

const propTypes = {
    fetchPhoneDetail: PropTypes.func.isRequired,
    phone: PropTypes.object,
    params: PropTypes.object

}
class PhoneDetail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageIndex: 0
        }
        this.changeMainImage = this.changeMainImage.bind(this)
    }
    componentDidMount() {
        this.props.fetchPhoneDetail(this.props.params.phoneId)
    }
    changeMainImage(imageIndex) {
        if (imageIndex !== this.state.imageIndex) {
            this.setState({imageIndex: imageIndex})
        }
    }
    render() {
        const phone = this.props.phone
        if (phone.images) {
            return (
                <div>
                    <div className="phone-images">
                        <ReactCSSTransitionGroup transitionName="view-frame" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                            <div className="phone"></div>
                            <img src={phone.images[this.state.imageIndex]} className="phone phone-frame" key={phone.images[this.state.imageIndex]}/>
                        </ReactCSSTransitionGroup>
                    </div>
                    <h1>{phone.name}</h1>
                    <p>{phone.description}</p>
                    <PhoneThumbs images={phone.images} changeMainImage={this.changeMainImage}/>
                    <PhoneSpec phone={phone}/>
                </div>
            )
        } else {
            return null
        }
    }
}

PhoneDetail.propTypes = propTypes

export default PhoneDetail