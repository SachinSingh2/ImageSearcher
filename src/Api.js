import axios from 'axios'

const SearchImages = async (SearchTerm) =>{

    const response =  await axios.get('https://api.unsplash.com/search/photos' , {
        headers:{
            Authorization: 'Client-ID 9aAfCkdNyYKolRGZK2hN5qsjvL8cIg030vJfZE1UCZs'
        },
        params:{
            query: SearchTerm
        }
    })

    // console.log(response.data.results)
    // console.log(response.data)
    return response.data.results;
};

export default SearchImages