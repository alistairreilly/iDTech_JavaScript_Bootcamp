/*Instructions
 - Greet your friend by printing a message to the console.
*/
var myFriend = "Alistair";

///////////////
function greetings() {
    var greeting = `Welcome back, ${myFriend}!` 
    return greeting;
}
  
  //leave this line unchanged to console log the results
  console.log('results: ', greetings());
  
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = greetings;
  }
  