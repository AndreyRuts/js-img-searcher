const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "46908572-03cf8a6fd9728954a0f037e03";

 export function fetchData(requestValue) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: requestValue,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
  })
  return fetch(`${BASE_URL}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json();
    })  
    .catch(error => {
     console.log("catch", error);
   });
   
}