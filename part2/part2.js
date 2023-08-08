"use strict";


const BASE_URL = 'https://deckofcardsapi.com/api/deck/';

/** Gets a card from a newly shuffled deck, and display suit and value. */

async function partOne() {
  const response = await axios.get(`${BASE_URL}/new/draw/?count=1`);

  console.log(response);
  console.log(response.data.cards[0].suit);
  console.log(response.data.cards[0].value);

}

partOne();


/** */

async function partTwo(){
  const newDeck_response = await axios.get(`${BASE_URL}/new/shuffle/?deck_count=1`);
  console.log('newDeck_response', newDeck_response);
  let deckId = newDeck_response.data.deck_id;

  const card1_response = await axios.get(`${BASE_URL}/${deckId}/draw/?count=1`);
  const card2_response = await axios.get(`${BASE_URL}/${deckId}/draw/?count=1`);

  console.log(card1_response.data.cards[0].suit, card1_response.data.cards[0].value);
  console.log(card1_response.data.cards[0].suit, card2_response.data.cards[0].value);

}

partTwo();