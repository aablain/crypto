//Business End Logic
function jumbled(cryptoInput) {
  debugger;

  var cryptoString = "";
  var coordinates = new Array();
  var nonAlpha = cryptoInput.toLowerCase().replace(/[^a-z]+/gi, '');
  var sentance = nonAlpha.split("");
  var counter = 0;
  var counter2 = 0;
  var columns = sentance.length;
  columns = Math.floor(Math.sqrt(columns));
  var row = columns + 1;

  for (ro = 0; ro < row; ro++) {
    coordinates[ro]=new Array();
    for (col = 0; col < columns; col++) {
      coordinates[ro][col] = sentance[counter];
      counter++;
    }
  };
  for (col = 0; col < columns; col++) {
    for (ro = 0; ro < row; ro++) {
      if (coordinates[ro][col] !==undefined) {
        cryptoString+= coordinates[ro][col];
        counter2++;
      // }
      // if (counter2 % 6 === 0) {
        cryptoString+=" ";
       }
    }
  };
  return cryptoString;

};


//User Interface Logic
$(document).ready(function() {
  $("form#crypto").submit(function(event) {
    event.preventDefault();

    var cryptoInput = $("input#entr").val();
    var cryptoOutput = jumbled(cryptoInput);

    $(".convertedResult").text(cryptoOutput);
    $("#result").show();
  });
});
