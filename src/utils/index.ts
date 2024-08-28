export const getIdFromUrl = (url: string) => {
    return url.match(/\/(\d+)\/$/)?.[1]
};

export const getLocalCharacterData = (id?: string) => {
    return JSON.parse(localStorage.getItem(`character-${id}`) ?? 'null');
}

