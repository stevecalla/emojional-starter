//TARGET
var happy = document.querySelector('.happy');
var silly = document.querySelector('.silly');
var crying = document.querySelector('.crying');
var displayMessage = document.querySelector('.message');

var phrases = {
  happy: ["You go!", "Your smile just cheered me up!", "YAY!"],
  silly: ["Interesting response", "Sounds ... good?", "Me too."],
  sad: ["Do you want to talk?", "Keep your head up", "We can cry together!", "What can I do?"]
}

//EVENT LISTENER
happy.addEventListener('click', happyButton);
silly.addEventListener('click', sillyButton);
crying.addEventListener('click', sadButton);

//DO SOMETHING
function randomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function happyButton() {
  var currentMessage = phrases.happy[randomNumber(phrases.happy)];
  displayMessage.innerText = currentMessage;
}

function sillyButton() { 
  var currentMessage = phrases.silly[randomNumber(phrases.silly)];
  displayMessage.innerText = currentMessage;
}

function sadButton() { 
  var currentMessage = phrases.sad[randomNumber(phrases.sad)];
  displayMessage.innerText = currentMessage;
}


// function renderMessage() {
//   var keys = Object.keys(phrases);
//   for (var i = 0; i < keys.length; i++) {
//     displayMessage.innerText = phrases[keys[i]][randomNumber(phrases[keys[i]])];
//     console.log(keys[i])
//   }
// }