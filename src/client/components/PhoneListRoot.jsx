import React from 'react'
import SortedPhoneList from '../containers/SortedPhoneList'
import FilterPhone from '../containers/FilterPhone'

// Load all images
// http://stackoverflow.com/questions/37313954/how-to-url-loader-multiple-images-in-webpack
// https://webpack.github.io/docs/context.html#require-context
let requireContext = require.context('../img/phones', true, /^\.\/.*\.jpg$/)
requireContext.keys().map(requireContext)

const PhoneListRoot = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-2">
                <FilterPhone/>
            </div>
            <div className="col-md-10">
                <SortedPhoneList/>
            </div>
        </div>
    </div>
)

export default PhoneListRoot