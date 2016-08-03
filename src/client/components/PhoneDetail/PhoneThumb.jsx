import React, {PropTypes} from 'react'

const propTypes = {
    image: PropTypes.string.isRequired,
    changeMainImage: PropTypes.func.isRequired,
    imageIndex: PropTypes.number.isRequired
}

const PhoneThumb = ({image, changeMainImage, imageIndex}) => (
    <li>
        <img src={image} onClick={() => changeMainImage(imageIndex)}/>
    </li>
)

PhoneThumb.propTypes = propTypes
export default PhoneThumb