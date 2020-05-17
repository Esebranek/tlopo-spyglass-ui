import React, { FunctionComponent } from 'react'
import { Ocean } from '../../model'
import './OceanInfo.scss'


const OceanInfo: FunctionComponent<Ocean> = (props: Ocean) => {

    const getEventCount = () => {
        let count = 0;
        if (props.fleet) { count += 1 }
        if (props.invasion) { count += 1 }
        return count > 0 ? ` event-${count}` : ''
    }

    return (
        <div className={`ocean-container${getEventCount()}`}>
            <div className={`ocean-metadata${props.available ? ' active' : ' inactive'}`}>
                {(props.rank || 4) < 4 ? <div className={`ocean-rank r${props.rank}`}>{props.rank}</div> : null}
                <div className="ocean-name">
                    {props.name}
                </div>
                <div className="ocean-population">{props.population}</div>
            </div>
            {props.fleet || props.invasion ?
                <div className={`ocean-event ${props.fleet && props.invasion ? ' double' : ''}`}>
                    <div style={{height: "6rem"}}></div>
                    {props.invasion ?
                        <div className="event-container">
                            <div className="event-title">Invasion</div>
                            <div className="event-info">State: {props.invasion.state || 'Unknown'}</div>
                            <div className="event-info">Location: {props.invasion.location || 'Unknown'}</div>
                            <div className="event-info">Phase: {props.invasion.phase || 'Unknown'}</div>
                            <div className="event-info">Players: {props.invasion.num_players || 0}</div>
                        </div>
                        : null
                    }
                    {props.fleet ?
                        <div className="event-container">
                            <div className="event-title">Fleet</div>
                            <div className="event-info">State: {props.fleet.state || 'Unknown'}</div>
                            <div className="event-info">Type: {props.fleet.type || 'Unknown'}</div>
                            <div className="event-info">Remaining: {props.fleet.ships_remaining || 0}</div>
                        </div>
                        : null
                    }
                </div> : null
            }
        </div>
    )
}

export { OceanInfo }