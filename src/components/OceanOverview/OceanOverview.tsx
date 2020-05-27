import React, { FunctionComponent, useState } from 'react'
import useInterval from 'use-interval'
import { Ocean } from '../../model/ApiModels'
import { getOceans } from '../../services/TlopoApiService'
import { OceanInfo } from '../OceanInfo'
import { LoadingRipple } from '../LoadingRipple'
import './OceanOverview.scss'


const OceanOverview: FunctionComponent = () => {
    const [oceans, setOceans] = useState<Ocean[] | undefined>()
    const [totalPopulation, setTotalPopulation] = useState<number | undefined>()

    useInterval(async () => {
        let data = await getOceans()
        if (data && data.length) {
            data = rankPopulations(data)
            setOceans(data)
            setTotalPopulation(sumPopulation(data))
        }
    }, 5 * 1000, true)



    const sumPopulation = (oceans: Ocean[]) => {
        let totalPopulation = 0;
        oceans.forEach(ocean => totalPopulation += ocean.population)
        return totalPopulation
    }

    const rankPopulations = (oceans: Ocean[]) => {
        oceans
            .sort((a, b) => b.population - a.population)
            .forEach((ocean, index) => { ocean.rank = index + 1; return ocean })
        return oceans
    }

    return (
        <div className="overview-container">
            <div className="ocean-title">Oceans</div>
            {totalPopulation ? <div className="oceans-population">Pirates: {totalPopulation}</div> : null}
            {oceans ?
                <div className="ocean-overview-container">
                    {oceans.map((ocean: Ocean) => (
                        <OceanInfo key={ocean.name} {...ocean} />
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