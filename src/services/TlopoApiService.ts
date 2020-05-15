import axios from 'axios'

const tlopoApiClient = axios.create({
    baseURL: 'https://tlopo-dashboard-api.herokuapp.com/'
})



const getOceans = async () => {
    try {
        const response = await tlopoApiClient.get('oceans')
        const oceans = response.data.oceans
        console.log(oceans)
        return oceans
    } catch (err) {
        if (err && err.response) {
            return err.response.data;
        }
    }

}

export {getOceans}