import { API } from "../@libs/axios";
import { ICategory, IMovie } from "../@libs/types";

const _ENDPOINT = '/categories';

const getAll = () => (API.get(_ENDPOINT)); 

const create = (category: ICategory) => (API.post(_ENDPOINT, category));
const getById = (id: number) => (API.get('${_ENDPOINT}/${id}'));
const  