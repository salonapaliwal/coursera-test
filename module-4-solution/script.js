The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!
*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
( function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i in names) {
        var firstLetter = (names[i]).charAt(0);
        if (firstLetter =='j' || firstLetter=='J') {
          window.byeSpeaker.speak(names[i]);
        } else {
          window.helloSpeaker.speak(names[i]);
        }
    }

}) ();


// STEP 10:
// Loop over the names array and say either 'Hello' or "Good Bye"
// using the 'speak' method or either helloSpeaker's or byeSpeaker's
// 'speak' method.
// See Lecture 50, part 1
/* fill in parts of the 'for' loop to loop over names array */

  // STEP 11:
  // Retrieve the first letter of the current name in the loop.
  // Use the string object's 'charAt' function. Since we are looking for
  // names that start with either upper case or lower case 'J'/'j', call
  // string object's 'toLowerCase' method on the result so we can compare
  // to lower case character 'j' afterwards.
  // Look up these methods on Mozilla Developer Network web site if needed.
  // var firstLetter =

  // STEP 12:
  // Compare the 'firstLetter' retrieved in STEP 11 to lower case
  // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
  // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
  // name in the loop.
  /* fill in condition here */
    // byeSpeaker.xxxx
  
    // helloSpeaker.xxxx
