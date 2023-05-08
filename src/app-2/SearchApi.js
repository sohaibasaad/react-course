import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID a85Hbi3VizLUfm43D3FjPT1eXf4RMcupoZ7K3dBXmpc'
        },
        params: {
            query: term
        },
    });
    return response.data.results;
}


export default searchImages
