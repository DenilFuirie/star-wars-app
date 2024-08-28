import {Character} from "../../types";

export const mockCharacters = Array.from({ length: 10 }, (_, i) => ({
    id: String(i + 1),
    name: `test`,
    height: 'test',
    mass: 'test',
    hair_color: 'test',
    skin_color: 'test',
    eye_color: 'test',
    birth_year: 'test',
    gender: 'test',
    homeworld: 'test',
    films: ['test'],
    species: ['test'],
    vehicles: ['test'],
    starships: ['test'],
    created: 'test',
    edited: 'test',
    url: 'test',
}));

export const getCharacterToDisplay = (character: Character) => {
    const localDataString = localStorage.getItem(`character-${character.id}`) ?? 'null';
    const localData = JSON.parse(localDataString);

    return localData || character;
};
