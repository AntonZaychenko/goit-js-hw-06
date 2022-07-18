const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
    width: 200,
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    width: 200,
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
    width: 200,
  },
];

 const galleryListEl = document.querySelector(".gallery");
 
 const total = images.map(image => {
  
  const galleryItemEl = document.createElement("li");
  galleryItemEl.classList.add("gallery-list__img");

  const galleryImgEl = document.createElement("img");
  galleryImgEl.src = image.url;
  galleryImgEl.alt = image.alt;
  galleryImgEl.width = image.width;

  galleryItemEl.appendChild(galleryImgEl);

  return galleryItemEl;

});

galleryListEl.append(...total);


galleryListEl.style.cssText = `
  
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  `;
 