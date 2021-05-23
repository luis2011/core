const arrayPaises = ['Argentina', 'Brasil', 'Paraguay', 'Uruguay', 'Colombia', 'Venezuela'];
console.log(arrayPaises)
let value = 0

for (const key in arrayPaises) {
  value++;
  loadCountry(key, value)

}



function loadCountry(country, value) {

  axios.get(`http://api.weatherstack.com/current?access_key=d90c9e3a720cb99fdd799059cdd10a35&query=${arrayPaises[country]}`)
    .then(response => {
      const apiResponse = response.data;
      console.log(apiResponse);
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



