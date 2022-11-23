import {} from './Constants/Constants'
import { API_KEY } from './Constants/Constants'
export const originals =`discover/tv?api_key=${API_KEY}&with_network=213`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`
export const trending = `trending/all/day?api_key=${API_KEY}`
export const upcoming = `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
export const topRated = `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`