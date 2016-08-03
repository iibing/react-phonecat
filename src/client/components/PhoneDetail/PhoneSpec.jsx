import React,{PropTypes} from 'react'

const checkMark = flag => flag? '✓': '✘'

const propTypes = {
    phone: PropTypes.object.isRequired
}

const PhoneSpec = ({phone}) => (
    <ul className='specs'>
        <li>
            <span>Availability and Networks</span>
            <dl>
                <dt>Availability</dt>
                {phone.availability.map(availability => <dd key={availability}>{availability}</dd>)}
            </dl>
        </li>
        <li>
            <span>Battery</span>
            <dl>
                <dt>Type</dt>
                <dd>{phone.battery.type}</dd>
                <dt>Talk Time</dt>
                <dd>{phone.battery.talkTime}</dd>
                <dt>Standby time (max)</dt>
                <dd>{phone.battery.standbyTime}</dd>
            </dl>
        </li>
        <li>
            <span>Storage and Memory</span>
            <dl>
                <dt>RAM</dt>
                <dd>{phone.storage.ram}</dd>
                <dt>Internal Storage</dt>
                <dd>{phone.storage.flash}</dd>
            </dl>
        </li>
        <li>
            <span>Connectivity</span>
            <dl>
                <dt>Network Support</dt>
                <dd>{phone.connectivity.cell}</dd>
                <dt>WiFi</dt>
                <dd>{phone.connectivity.wifi}</dd>
                <dt>Bluetooth</dt>
                <dd>{phone.connectivity.bluetooth}</dd>
                <dt>Infrared</dt>
                <dd>{checkMark(phone.connectivity.infrared)}</dd>
                <dt>GPS</dt>
                <dd>{checkMark(phone.connectivity.gps)}</dd>
            </dl>
        </li>
        <li>
            <span>Android</span>
            <dl>
                <dt>OS Version</dt>
                <dd>{phone.android.os}</dd>
                <dt>UI</dt>
                <dd>{phone.android.ui}</dd>
            </dl>
        </li>
        <li>
            <span>Size and Weight</span>
            <dl>
                <dt>Dimensions</dt>
                {phone.sizeAndWeight.dimensions.map(dim => <dd key={dim}>{dim}</dd>)}

                <dt>Weight</dt>
                <dd>{phone.sizeAndWeight.weight}</dd>
            </dl>
        </li>
        <li>
            <span>Display</span>
            <dl>
                <dt>Screen size</dt>
                <dd>{phone.display.screenSize}</dd>
                <dt>Screen resolution</dt>
                <dd>{phone.display.screenResolution}</dd>
                <dt>Touch screen</dt>
                <dd>{checkMark(phone.display.touchScreen)}</dd>
            </dl>
        </li>
        <li>
            <span>Hardware</span>
            <dl>
                <dt>CPU</dt>
                <dd>{phone.hardware.cpu}</dd>
                <dt>USB</dt>
                <dd>{phone.hardware.usb}</dd>
                <dt>Audio / headphone jack</dt>
                <dd>{phone.hardware.audioJack}</dd>
                <dt>FM Radio</dt>
                <dd>{checkMark(phone.hardware.fmRadio)}</dd>
                <dt>Accelerometer</dt>
                <dd>{checkMark(phone.hardware.accelerometer)}</dd>
            </dl>
        </li>
        <li>
            <span>Camera</span>
            <dl>
                <dt>Primary</dt>
                <dd>{phone.camera.primary}</dd>
                <dt>Features</dt>
                <dd>{phone.camera.features.join(', ')}</dd>
            </dl>
        </li>
        <li>
            <span>Additional Features</span>
            <dd>{phone.additionalFeatures}</dd>
        </li>
    </ul>
)
PhoneSpec.propTypes = propTypes
export default PhoneSpec