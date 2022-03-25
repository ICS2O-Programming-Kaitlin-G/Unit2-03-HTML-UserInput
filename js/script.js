// Created by: Katie
// Created on: March 2022
// This file contains the JS functions for index.html

function submitClicked () {
  // This function will make the user information appear when the user presses the submit button

  // Getting full name from user text field input
  let fullName = document.getElementById("full-name").value

  // Getting age from user number field input and casting integer
  let userAge = parseInt(document.getElementById("user-age").value) 

  // Getting address number from user number field input and casting integer
  let addressNumber = parseInt(document.getElementById("address-number").value) 

  // Getting street name from user text field input
  let addressStreet = document.getElementById("user-address").value 

  // Getting sibling number from user number field input and casting integer
  let siblingNumber = parseInt(document.getElementById("number-siblings").value) 

  // Getting government number from user number field input and casting integer
  let govNumber = parseInt(document.getElementById("gov-number").value) 

  // Getting street name from user text field input
  let spouseName = document.getElementById("spouse-name").value 

  // Display information back to user
  document.getElementById('submitted-info').innerHTML = "ah yes. i have collected some scrumptious information. ok SO your full name is " + fullName + ", your age is " + userAge + " years, you live on " + addressNumber + " " + addressStreet + ", your special little government number that you were totally supposed to tell me is " + govNumber + ", your spouse's name is" + spouseName + ", and you have this many siblings: " + siblingNumber + "."
}