const countdown = number => {
  for (let j = number; j >= 0; j--) {
    console.log(j);
  }
};

//countdown(10);
// Woohooo!
// const countdownparty = number => {
//   for(let i = number; i >= 0; i--) {
//     console.log(`it's a party for ${i} days`)
//   }
//   console.log('Oooops the party is over')
// }
const countdownparty = number => {
  if (number == 1) {
    console.log("Oooops the party is over");
  } else {
    console.log(`it's a party for ${number} days`);

      countdownparty(number - 1);
  }
};
console.time('countdownparty');
countdownparty(2000);
console.timeEnd('countdownparty');
  
