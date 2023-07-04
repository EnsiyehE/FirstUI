'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  // in the first argument we should use the type of http request ,, to get data we use GET 
  request.open('GET', `https://restcountries.com/v2/name/${country}`)


  request.send();


  // as soon as the data arrives 
  request.addEventListener('load', function () {


    const [data] = JSON.parse(this.responseText)


    const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div >
    </article >
        `;
    countriesContainer.insertAdjacentHTML('beforeend', html)

    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany')
