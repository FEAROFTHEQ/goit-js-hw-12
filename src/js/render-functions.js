export const renderImages = (images, container)=>{
    container.innerHTML = '';
    const markup =
    images.map(image=>
        `
        <li class="item">
  <a class="link" href="${image.largeImageURL}">
    <img
      class="image"
      src="${image.webformatURL}"
      alt="${image.tags}"
    />
  </a>
  <div class="desc-container">
  <p class="descr"><span class="descr-text">Likes </span>${image.likes}</p>
  <p class="descr"><span class="descr-text">Views </span>${image.views}</p>
  <p class="descr"><span class="descr-text">Comments </span>${image.comments}</p>
  <p class="descr"><span class="descr-text">Downloads </span>${image.downloads}</p>
  </div>
       </li>
        `
    ).join("");


container.insertAdjacentHTML("afterbegin", markup);

}


