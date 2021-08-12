// var boswer = document.getElementById('chere');

$( "#buttOne" ).click(function() {
    console.log("hat");
    localStorage.setItem("duck", "duck1");
    var duck = localStorage.getItem("duck");
    console.log(duck);
  });

$( "#buttTwo" ).click(function() {
    console.log("crash");
    localStorage.setItem("falcon", "falcon1");
    var falcon = localStorage.getItem("falcon");
    console.log(falcon);
  });

  $( "#buttThree" ).click(function() {
    console.log("splash");
    localStorage.setItem("raven", "raven1");
    var raven = localStorage.getItem("raven");
    console.log(raven);
  });

  $( "#buttFour" ).click(function() {
    console.log("snare");
    localStorage.setItem("eagle", "eagle1");
    var eagle = localStorage.getItem("eagle");
    console.log(eagle);
  });

