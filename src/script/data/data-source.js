import restaurants from "./restaurant";
class DataSource {
  static searchRestaurant(keyword) {
  const baseUrl = 'www.themealdb.com/api/json/v1/1';
   return fetch(`${baseUrl}/search.php?s=${keyword}`)
   .then(response => {
    return response.json();
  })
  .then(responseJson => {
    if (responseJson.meals) {
      return Promise.resolve(responseJson.meals);
    } else {
      return Promise.reject(`${keyword} is not found`);
    }
  });
  }
}
export default DataSource;