var obj = ["", "Breeje", "Shikhar", "Vatsal", "Chaitanya", "Vardhil"];
var text = "";
$(".butn").click(function () {
  var rando1 = Math.floor(Math.random() * 5) + 1;
  var rando2 = Math.floor(Math.random() * 5) + 1;
  while (rando1 === rando2) {
    rando2 = Math.floor(Math.random() * 5) + 1;
  }
  var rando3 = Math.floor(Math.random() * 2) + 1;
  text =
    obj[rando1] +
    " will " +
    (rando3 === 1 ? "give dare" : "ask question") +
    " to " +
    obj[rando2];
  $(".answer").text(text);
});
