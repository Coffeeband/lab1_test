import axios from 'axios';

describe('Integration Tests for Books API (Variant 7)', () => {
    const BASE_URL = 'https://fakerestapi.azurewebsites.net/api/v1/Books';
    let response;

    test('GET /Books - should return all books', async () => {
        response = await axios.get(BASE_URL);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);
    });

    test('GET /Books/1 - should return specific book details', async () => {
        response = await axios.get(`${BASE_URL}/1`);
        expect(response.status).toBe(200);
        expect(response.data.id).toBe(1);
        expect(response.data).toHaveProperty('title');
    });

    test('POST /Books - should create a new book', async () => {
        const newBook = {
            id: 999,
            title: "SmartHunt Guide",
            description: "How to find jobs with Python",
            pageCount: 150,
            excerpt: "Short text",
            publishDate: new Date().toISOString()
        };
        response = await axios.post(BASE_URL, newBook);
        expect(response.status).toBe(200); // Цей API повертає 200 на POST
        expect(response.data.title).toBe("SmartHunt Guide");
    });

    test('PUT /Books/1 - should update book information', async () => {
        const updatedData = {
            id: 1,
            title: "Updated Title",
            description: "Updated description"
        };
        response = await axios.put(`${BASE_URL}/1`, updatedData);
        expect(response.status).toBe(200);
        expect(response.data.title).toBe("Updated Title");
    });

    test('DELETE /Books/1 - should delete the book', async () => {
        response = await axios.delete(`${BASE_URL}/1`);
        expect(response.status).toBe(200);
    });
});