export const fetchImages = (key, tagWord) =>{
    return fetch(`https://pixabay.com/api/?key=${key}&q=${encodeURIComponent(tagWord)}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
          return data.hits;
    })
    .catch(error => {
          console.log(error);
    });
}

