import axios from 'axios';

describe('API Testing - FakeRestAPI', () => {
    test('GET /Books should return status 200', async () => {
        const response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
    });
});