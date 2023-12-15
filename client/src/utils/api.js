import axios from "axios";

const baseUrl = "http://localhost:5000";

export const getAccount = async () => {
    try {
        const response = await axios.get(`${baseUrl}/users`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error fetching account data:", error);
        throw error; 
    }
}

export const getProduct = async () => {
    try {
        const response = await axios.get(`${baseUrl}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching product data:", error);
        throw error;
    }
}
