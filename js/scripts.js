//Business End Logic
function jumbled(cryptoInput) {
  debugger;

  var nonAlpha = cryptoInput.replace(/[^a-z]+/gi, '');
  var lower = nonAlpha.toLowerCase();

  return lower;

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
