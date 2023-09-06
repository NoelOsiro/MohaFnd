// apiService.ts
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;


async function fetchData(apiEndpoint:string, accessToken:string) {
    try {
      const response = await fetch(apiEndpoint, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Request failed');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export { fetchData };
  