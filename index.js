/*/ Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
*/

//writeCards function
//for adding the string to the Array, I've tried newArrayToMessages[i] = 
function writeCards(stringNames, eventName){
    const newArrayToMessages = [];
    for (let i = 0; i < stringNames.length; i++) {
        newArrayToMessages.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`);
    }
    return newArrayToMessages;
}

/*
function writeCards(array, event) {
    for (let i = 0; i < array.length; i++) {
        //return message into cards array
        cards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}
*/

function countDown(positiveInt){
    let i = 0;
    while (i <= 10){
        console.log(i++);
    }
}

