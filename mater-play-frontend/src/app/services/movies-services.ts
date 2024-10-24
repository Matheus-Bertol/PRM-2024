import { API } from "../@libs/axios";
import { IMovie } from "../@libs/types";

const _ENDPOINT = '/movies'

const getMovies = async (): Promise<IMovie[]> => {
    const {data} = await API.get(_ENDPOINT)
    return data;
}

const getMoviesById = async (): Promise<IMovie[]> => {
    const {data} = await API.get(_ENDPOINT)
    return data;
}

export const MovieService = {
    getMovies
}