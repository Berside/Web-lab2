export const getAllTovar = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/v1/tovar/');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error) {
        const errorMessage = error.response?.data?.message || error.response?.data?.error || error.message; 
        throw new Error(errorMessage || 'Failed to fetch content');
    }
}