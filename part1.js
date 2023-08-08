"use strict";

const BASE_URL = 'http://numbersapi.com';
const $factsFromMultipleNums = $('#factsFromMultipleNums');
const $factsFromOneNum = $('#factsFromOneNum');

/** Get the fact of a favorite number  */

async function questionOne() {

  const response = await axios.get(`${BASE_URL}/3?json`);

  console.log('fact', response.data.text);
}

questionOne();

/** Get the facts of multiple numbers and show the facts on the page */

async function questionTwo() {

  const response = await axios.get(`${BASE_URL}/3,5,10?json`);

  // let facts = Object.values(response.data);

  for (let key in response.data) {
    $factsFromMultipleNums.append(`<li>${response.data[key]}</li>`);
  }
}

questionTwo();


/** Get multiple facts of one number and show the facts on the page */

async function questionThree() {

  const p1 = axios.get(`${BASE_URL}/3?json`);
  const p2 = axios.get(`${BASE_URL}/3?json`);
  const p3 = axios.get(`${BASE_URL}/3?json`);
  const p4 = axios.get(`${BASE_URL}/3?json`);

  let results = await Promise.allSettled([p1, p2, p3, p4]);

  console.log(results);

  for (let result of results) {

    if (result.status === 'fulfilled') {

      $factsFromOneNum.append(`<li>${result.value.data.text}</li>`);

    } else { // result.status === 'rejected'
      console.log('the fact is missing');
    }
  }
}



questionThree();

