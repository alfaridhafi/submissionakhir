import '../component/search-bar.js';
import DataSource from "../data/data-source.js";
const main = () => {
  const searchElement = document.querySelector('search-bar');
  const restaurantListElement = document.querySelector('#restaurantList');

  const onButtonSearchClicked = () => {
    DataSource.searchRestaurant(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = results => {
    restaurantListElement.innerHTML = '';

    results.forEach(restaurant => {
      const {nama, gambar, deskripsi} = restaurant;
      const restaurantElement = document.createElement('div');
      restaurantElement.setAttribute('class', 'restaurant');

      restaurantElement.innerHTML = `
      <img class="info-restaurant" src="${gambar}" alt="Gambar">
          <div class="restaurant-info">
          <h2> ${nama} </h2> 
          <p> ${deskripsi}  </p> 
          </div>
          `;
          restaurantListElement.appendChild(restaurantElement);
    });
  };

  const fallbackResult = message => {
    restaurantListElement.innerHTML = '';
    restaurantListElement.innerHTML += `<h2 class="placeholder"> ${message} </h2>`;
  };

  searchElement.clickEvent = onButtonSearchClicked;
};
// const main = () => {
//   const searchElement = document.querySelector('search-bar');
//   const restaurantListElement = document.querySelector('club-list');

//   const onButtonSearchClicked = async () => {
//     try {
//       const result = await DataSource.searchRestaurant(searchElement.value);
//       renderResult(result);
//     } catch (message) {
//       fallbackResult(message);
//     }
//   };

//   const renderResult = results => {
//     restaurantListElement.restaurants = results;
//   };

//   const fallbackResult = message => {
//     restaurantListElement.renderError(message);
//   };
//   searchElement.clickEvent = onButtonSearchClicked;
// };
export default main;