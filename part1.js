"use strict";

const BASE_URL = 'http://numbersapi.com';
const $factsFromMultipleNums = $('#factsFromMultipleNums');
const $factsFromOneNum = $('#factsFromOneNum');

/** Get the fact of a favorite number  */

async function questionOne() {

<<<<<<< HEAD
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


=======
//   console.log(response);
//   console.log('fact', response.data.text);
// }

// questionOne();


/** 2. Figure out how to get data on multiple numbers in a single request.
 * Make that request and when you get the data back, put all of the number
 * facts on the page. **/

// async function questionTwo() {
//   const response = await axios.get(`${BASE_URL}/3,5,10?json`);

//   // console.log(response);
//   // console.log('fact', response.data);

//   // for (let key in response.data){
//   //   console.log(response.data[key])
//   // }

//   let factsArray = Object.values(response.data);
//   console.log(factsArray);

//   for (let fact of factsArray){
//     console.log(fact);
//   }
// }

// questionTwo();

/** Use the API to get 4 facts on your favorite number.
 * Once you have them all, put them on the page. It’s okay if some of the
 * facts are repeats. **/

async function questionThree1() {
  const response1 = await axios.get(`${BASE_URL}/3?json`);

  let factsArray = Object.values(response1.data);
  console.log(factsArray);

  for (let fact of factsArray){
    console.log(fact);
  }

}

async function questionThree2() {
  const response1 = await axios.get(`${BASE_URL}/3?json`);

  let factsArray = Object.values(response1.data);
  console.log(factsArray);

  for (let fact of factsArray){
    console.log(fact);
  }

}

>>>>>>> 5747eec0b36103d3165693f6b678a8f7f0bc8ce1

questionThree();

