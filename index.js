function scuberGreetingForFeet(distanceInFeet) {
  let greeting;
  if (distanceInFeet <= 400) {
    greeting = 'This one is on me!';
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (distanceInFeet > 2500) {
    greeting = 'No can do.';
  }
  return greeting;
}

console.log(scuberGreetingForFeet(199)); 
console.log(scuberGreetingForFeet(2000)); 
console.log(scuberGreetingForFeet(2501)); 

function ternaryCheckCity(destination) {
  return destination === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}


console.log(ternaryCheckCity('NYC')); 
console.log(ternaryCheckCity('LA'));


function switchOnCharmFromTip(tipAmount) {
  switch (tipAmount) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}


console.log(switchOnCharmFromTip('generous')); 
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('whatever')); 