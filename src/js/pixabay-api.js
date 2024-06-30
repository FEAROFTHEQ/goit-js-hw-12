import axios from "axios";

export const fetchImages = async (key, tagWord, page, perPage) =>{
  try {
    const response = await 
  axios.get(`https://pixabay.com/api/`, {
    params: {
        key: key,
        q: tagWord,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: perPage
    }
});
   return response.data;
  }
  catch(error){
  console.log(error);
  throw error;
  }
  };



