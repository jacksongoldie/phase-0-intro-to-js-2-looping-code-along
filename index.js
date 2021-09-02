//NEW CODE

//For loop
function writeCards(namesArray, eventName){
   const returnedArray = [];
    for(let i=0; i < namesArray.length; i++){
        returnedArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`)
    }
    return returnedArray;
}

//while loop
function countDown(int){
    let i = 0;
    while(i <= int){
        console.log(i++)
    }
}

/* //writeCards function
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
/*
function countDown(positiveInt){
    let i = 0;
    while (i <= 10){
        console.log(i++);
    }
}

 */