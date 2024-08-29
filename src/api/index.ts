import {Character, ResponseWithPagination} from "../types";
import axios from "axios";
import {getIdFromUrl} from "../utils";

export const getCharactersApi = async (filters: { page: number, searchTerm: string }): Promise<ResponseWithPagination<Character[]>> => {
    const pageQuery = filters.page && !filters.searchTerm ? `page=${filters.page}` : '';
    const searchQuery = filters.searchTerm ? `search=${filters.searchTerm}` : '';
    const query = `?${pageQuery}&${searchQuery}`

    const res = await axios.get<ResponseWithPagination<Character[]>>(`https://swapi.dev/api/people${query}`);

    const resWithId = res.data.results.map((item) => {
        item.id = getIdFromUrl(item.url);

        return item;
    });

    const response = {
        ...res,
        results: resWithId
    }

    return response.data;
};

export const getCharacterApi = async (id: string | undefined) => {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);

    return {...res.data, id: getIdFromUrl(res.data.url)};
};
