import React, { FunctionComponent } from 'react'
import { Ocean } from '../../model'
import './OceanInfo.scss'


const OceanInfo: FunctionComponent<Ocean> = (props: Ocean) => {

    return (
        <div className={`ocean-container ${props.available ? 'active' : 'inactive'}`}>
            {/* <div className={props.available ? "ocean-status active" : "ocean-status inactive"}></div> */}
            <div className="ocean-name">
                {props.name}
            </div>
            <div className="ocean-population">{props.population}</div>
        </div>
    )
}

export { OceanInfo }