import {getIdFromUrl, getLocalCharacterData} from "../index";

describe('getIdFromUrl', () => {
    it('should extract id from url', () => {
        expect(getIdFromUrl('/123456/')).toEqual('123456');
        expect(getIdFromUrl('/some/url/123456/')).toEqual('123456');
    });
});

describe('getLocalCharacterData', () => {
    it('should return character data from local storage', () => {
        localStorage.setItem('character-123456', '{"name":"Test"}');
        expect(getLocalCharacterData('123456')).toEqual({name: 'Test'});
    });

    it('should return null when no data is found', () => {
        expect(getLocalCharacterData()).toBeNull();
    });
});
