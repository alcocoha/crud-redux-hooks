const baseURL = "http://localhost:4000/";

export const clientPost = async (endPoint, data) => {
  const response = await fetch(`${baseURL}${endPoint}`, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json"
    }
  });
  if( response.status === 404 || response.status === 500 ) throw new Error('Error ups!');
  return await response.json();
};
