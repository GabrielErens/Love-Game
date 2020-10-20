

function loveFunction(){

// Gets the value of what the user types in the textboxes
  var firstNameJs = document.getElementById("firstName").value;
  var secondNameJs = document.getElementById("secondeName").value;

// Calculate a random number
  var loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore) + 1;

// Check if there are values enterd in the text Boxes and ives an aler if the fields are empty
  if(firstNameJs === "" && secondNameJs === "" ){
    alert("Please Enter an name in the empty fields");
  }

 else  if (loveScore > 80) {
    var me = firstNameJs + " and " + secondNameJs + " love score is " + loveScore + "%" + " WOW! you are soulmates";
    document.getElementById("outPut").value = me;
  }

else  if (loveScore > 30 && loveScore <= 70) {
    var me = firstNameJs + " and " + secondNameJs + " love score is " + loveScore + "%" + " you will be good friends";
    document.getElementById("outPut").value= me;
  }

else  if (loveScore <= 30) {
    var me = firstNameJs + " and " + secondNameJs + " love score is " + loveScore + "%" + " you are better off as friends";
    document.getElementById("outPut").value= me;
  }



  return loveScore;

}

function clearLoveScore(){
  // Used for clear button to clear text boxes fields
  document.getElementById("firstName").value = "";
    document.getElementById("secondeName").value = "";
      document.getElementById("outPut").value = "";
}
