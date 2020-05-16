import React, { FunctionComponent, useState, useEffect } from 'react'
import { Ocean } from '../../model/ApiModels'
import { getOceans } from '../../services/TlopoApiService'
import { OceanInfo } from '../OceanInfo'
import { LoadingRipple } from '../LoadingRipple'
import './OceanOverview.scss'


const OceanOverview: FunctionComponent = () => {
    const [oceans, setOceans] = useState<Ocean[] | undefined>()

    useEffect(() => {
        const fetchData = async () => {
            const data = await getOceans();
            setOceans(data)
        }
        fetchData();
    }, [])

    console.log(oceans)
    return (
        <div className="container">
            <div className="ocean-title">Oceans</div>
            {oceans ?
                <div className="ocean-overview-container">
                    {oceans.map((ocean: Ocean) => (
                        <OceanInfo {...ocean} />
                    ))}
                </div>
                :
                <div className="ocean-loading-container">
                    <LoadingRipple />
                </div>
            }
        </div>
    )
}

export { OceanOverview }