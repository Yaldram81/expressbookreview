
const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// Get all books
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/`);
        console.log("All Books:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching all books:", error.message);
    }
}

// Get books by ISBN
async function getBooksByISBN(isbn) {
    try {
        const response = await axios.get(
            `${BASE_URL}/isbn/${encodeURIComponent(isbn)}`
        );
        console.log("Books by ISBN:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching book by ISBN:", error.message);
    }
}

// Get books by author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(
            `${BASE_URL}/author/${encodeURIComponent(author)}`
        );
        console.log("Books by Author:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching books by author:", error.message);
    }
}

// Get books by title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(
            `${BASE_URL}/title/${encodeURIComponent(title)}`
        );
        console.log("Books by Title:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching books by title:", error.message);
    }
}

// Export functions
module.exports = {
    getAllBooks,
    getBooksByISBN,
    getBooksByAuthor,
    getBooksByTitle
};

// Execute functions when this file is run directly
if (require.main === module) {
    (async () => {
        await getAllBooks();
        await getBooksByISBN("1");
        await getBooksByAuthor("Chinua Achebe");
        await getBooksByTitle("Things Fall Apart");
    })();
}
