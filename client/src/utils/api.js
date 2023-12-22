import axios from "axios";

const baseUrl = "http://localhost:5000";

export const getProduct = async () => {
    try {
        const response = await axios.get(`${baseUrl}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching product data:", error);
        throw error;
    }
}

export const sendAccount = async (username, password) => {
    try {
        const response = await axios.post(`${baseUrl}/users/login`, {
            username,
            password
        });
        return true;
    } catch (error) {
        console.error("Error creating account:", error);
        throw error;
    }
}
