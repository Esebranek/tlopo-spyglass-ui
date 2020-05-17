import axios from 'axios'

const tlopoApiClient = axios.create({
    baseURL: 'https://tlopo-dashboard-api.herokuapp.com/'
    // baseURL: 'http://localhost:5000/'  // Useful for testing new API features when you're running that locally
})



const getOceans = async () => {
    try {
        const response = await tlopoApiClient.get('oceans')
        const oceans = response.data.oceans
        return oceans
    } catch (err) {
        if (err && err.response) {
            return err.response.data;
        }
    }

}

export {getOceans}