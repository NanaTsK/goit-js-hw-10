import axios from "axios";

const API_KEY = "live_kSIRSSuXC66Asfm1UmGRFimLVxLxKgZLpH0ehQLig7yUCgW8RM2ZryaFPNo8SDAW";
axios.defaults.headers.common["x-api-key"] = API_KEY;

// axios.defaults.headers.common["x-api-key"] = "live_kSIRSSuXC66Asfm1UmGRFimLVxLxKgZLpH0ehQLig7yUCgW8RM2ZryaFPNo8SDAW";

const BASE_URL = "https://api.thecatapi.com/v1";

function fetchBreeds() { 
    return axios.get(`${BASE_URL}/breeds`)
        .then(resp => { 
            if (!resp.ok) { 
                throw new ErrorEvent(resp.statusText)
            }
            return resp.data()
        })
};

function fetchCatByBreed(breedId) { 
     return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
        .then(resp => { 
            if (!resp.ok) { 
                throw new ErrorEvent(resp.statusText)
            }
            return resp.data()
        })
}

export { fetchBreeds, fetchCatByBreed };

