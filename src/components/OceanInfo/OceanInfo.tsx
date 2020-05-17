import React, { FunctionComponent } from 'react'
import { Ocean } from '../../model'
import './OceanInfo.scss'


const OceanInfo: FunctionComponent<Ocean> = (props: Ocean) => {

    return (
        <div className={`ocean-container${props.fleet || props.invasion ? ' event' : ''}`}>
            <div className={`ocean-metadata${props.available ? ' active' : ' inactive'}`}>
                {(props.rank || 4) < 4 ? <div className={`ocean-rank r${props.rank}`}>{props.rank}</div> : null}
                <div className="ocean-name">
                    {props.name}
                </div>
                <div className="ocean-population">{props.population}</div>
            </div>
            {props.fleet || props.invasion ?
                <div className="ocean-event">
                    {props.fleet ?
                        <div className="event-container">
                            <div className="event-title">Fleet</div>
                            <div className="event-info">State: {props.fleet.state || 'Unknown'}</div>
                            <div className="event-info">Type: {props.fleet.type || 'Unknown'}</div>
                            <div className="event-info">Remaining: {props.fleet.ships_remaining || 'Unknown'}</div>
                        </div>
                        : null
                    }
                    {props.invasion ?
                        <div className="event-container">
                            <div className="event-title">Invasion</div>
                            <div className="event-info">State: {props.invasion.state || 'Unknown'}</div>
                            <div className="event-info">Location: {props.invasion.location || 'Unknown'}</div>
                            <div className="event-info">Phase: {props.invasion.phase || 'Unknown'}</div>
                            <div className="event-info">Players: {props.invasion.num_players || 'Unknown'}</div>
                        </div>
                        : null
                    }
                </div> : null
            }
        </div>
    )
}

export { OceanInfo }