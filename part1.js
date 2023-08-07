"use strict";

/** 1. Make a request to the Numbers API (http://numbersapi.com/) to
get a fact about your favorite number. (Make sure you get
back JSON by including the json query key, specific to this API. **/

const BASE_URL = 'http://numbersapi.com';

// async function questionOne() {

//   const response = await axios.get(`${BASE_URL}/3?json`);

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


questionThree();

