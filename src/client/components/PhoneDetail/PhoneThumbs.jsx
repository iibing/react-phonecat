import React, {PropTypes} from 'react'
import PhoneThumb from './PhoneThumb'

const propTypes = {
    images: PropTypes.array.isRequired,
    changeMainImage: PropTypes.func.isRequired
}

const PhoneThumbs = ({images, changeMainImage}) => (
    <ul className="phone-thumbs">
        {images.map((image, index) => {
            return (<PhoneThumb changeMainImage={changeMainImage} imageIndex={index} key={image} image={image}/>)
        })}
    </ul>
)
PhoneThumbs.propTypes = propTypes

export default PhoneThumbs