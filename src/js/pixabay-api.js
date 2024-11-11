import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "46908572-03cf8a6fd9728954a0f037e03";

   
 export async function fetchData(requestValue, page = 1) {
   const params = {
     key: API_KEY,
     q: requestValue,
     image_type: "photo",
     orientation: "horizontal",
     safesearch: true,
     per_page: 15,
     page
};
     try {
      const response = await axios(BASE_URL, {params: params})      
      return response.data;
     } catch (error) {
      console.log("catch", error);
     }
}