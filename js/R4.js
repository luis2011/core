
// creamos un array con los nombres de los paises para pasarle como parametro a la function loadCountry
const arrayPaises = ['Argentina', 'Brasil', 'Paraguay', 'Uruguay', 'Colombia', 'Venezuela'];
let value = 0 // value: nos dejara posicionar nuestra data en nuestra navegador por el elemento id

// recorremos el array y ejecutamos tanta veces sean los paises solitidos
for (const key in arrayPaises) {
  value++;
  loadCountry(key, value)
}


// le pasamos como parametro el country para cargar en la url y el value para asignar enlazar los id
function loadCountry(country, value) {

  axios.get(`http://api.weatherstack.com/current?access_key=d90c9e3a720cb99fdd799059cdd10a35&query=${arrayPaises[country]}`)
    .then(response => {
      const apiResponse = response.data;
      console.log(apiResponse);
      // hago un destructurin de la api y la guardo en las siguiente variables
      let { name, country, region, lat, lon, timezone_id } = apiResponse.location

      jQuery(`#detail-${value}`).append(`<div class="borde">${country}</div>`);
      jQuery(`#detail-${value}`).append(`<div class="borde">${name}</div>`);
      jQuery(`#detail-${value}`).append(`<div class="borde">${region}</div>`);
      jQuery(`#detail-${value}`).append(`<div class="borde">${lat}</div>`);
      jQuery(`#detail-${value}`).append(`<div class="borde">${lon}</div>`);
      jQuery(`#detail-${value}`).append(`<div class="borde">${timezone_id}</div>`);

    }).catch(error => {
      console.log(error);
    });

}



