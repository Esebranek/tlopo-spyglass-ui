import React, { FunctionComponent } from 'react'
import './LoadingRipple.scss'

const LoadingRipple: FunctionComponent = (props) => {
    return (
        <div className="lds-ripple"><div></div><div></div></div>
    )
}

export { LoadingRipple }