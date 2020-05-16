import React, { FunctionComponent } from 'react'
import { Ocean } from '../../model'
import './OceanInfo.scss'


const OceanInfo: FunctionComponent<Ocean> = (props: Ocean) => {

    return (
            <div className={`ocean-container ${props.available ? 'active' : 'inactive'}`}>
                { (props.rank || 4) < 4 ? <div className={`ocean-rank r${props.rank}`}>{props.rank}</div> : null}
                <div className="ocean-name">
                    {props.name}
                </div>
                <div className="ocean-population">{props.population}</div>
            </div>
    )
}

export { OceanInfo }