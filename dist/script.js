var quoteArray = [
["Be the change that you wish to see in the world.", "-Mahatma Gandhi"],
["People who think they know everything are a great annoyance to those of us who do.", "-Isaac Asimov"],
["The fool doth think he is wise, but the wise man knows himself to be a fool.", "-William Shakespeare"],
["If you don't stand for something you will fall for anything.", "-Gordon A. Eadie"],
["I solemnly swear that I am up to no good.", "-J.K. Rowling"]];


var colorArray = [
"#FF99FF", // pinkish-purple
"#9999FF", // blue
"#00CC00", // green
"#FF6633", // orange
"#FFCC00", // yellow
"#999999" // gray
];
var randomNum = Math.floor(Math.random() * quoteArray.length);
var randomColorNum = Math.floor(Math.random() * colorArray.length);

$("#text").text("\" " + quoteArray[randomNum][0] + " \"");
$("#author").text(quoteArray[randomNum][1]);

function getQuote() {
  randomNum = Math.floor(Math.random() * quoteArray.length);
  randomColorNum = Math.floor(Math.random() * colorArray.length);
  $("#text").text("\" " + quoteArray[randomNum][0] + " \"");
  $("#author").text(quoteArray[randomNum][1]);

  $("#text").css("color", colorArray[randomColorNum]);
  $("#author").css("color", colorArray[randomColorNum]);
  $("#author").css("color", colorArray[randomColorNum]);
  $("body").css("background-color", colorArray[randomColorNum]);
  $("#new-quote").css("background-color", colorArray[randomColorNum]);
  $("#tweet-quote").css("background-color", colorArray[randomColorNum]);
};

$("#tweet-quote").on("click", function () {
  window.open("https://twitter.com/intent/tweet?text=" + "\" " + quoteArray[randomNum][0] + " \"");
});

$('#new-quote').on('click', getQuote);