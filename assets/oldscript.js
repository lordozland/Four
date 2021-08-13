// Variables



var gradeOne = 10;
var answerOne = "One!";

var gradeTwo = 0;
var answerTwo = "Two....";

var gradeThree = 0;
var answerThree = "Three...";

var gradeFour = 5;
var answerFour = "Excellent! ";

var Gr5 = 0;
var An5 = "One...";


var Gr6 = 0;
var An6 = "Two...";


var Gr7 = 10;
var An7 = "Three! ";


var Gr8 = 5;
var An8 = "Metal! ";


// Question One

$( "#buttOne" ).click(function(event) {
    event.preventDefault();

    var A1 = {
        answer: answerOne,
        grade: gradeOne,
    };

    localStorage.removeItem("A4");
    localStorage.removeItem("A2");
    localStorage.removeItem("A3"); 

    localStorage.setItem("A1", JSON.stringify(A1));
    FacePlant1();

    timerOp();

  });

function FacePlant1() {
    var curScoreOne = JSON.parse(localStorage.getItem("A1"));
    if (curScoreOne !== null) {
      document.querySelector("#Score1").textContent = curScoreOne.answer + 
      " Points: " + curScoreOne.grade
    };
    allScorz1();
  };

  function allScorz1() {
    var getA1 = JSON.parse(localStorage.getItem("A1"));
    var allScore = document.getElementById("allScore");
    let letA1 = getA1.grade;
    localStorage.removeItem("CS1"); 
    localStorage.setItem("CS1", letA1);
    allScore.innerHTML = letA1;
  };

$( "#buttTwo" ).click(function(event) {
    event.preventDefault();

    var A2 = {
        answer: answerTwo,
        grade: gradeTwo,
    };

    localStorage.removeItem("A1");
    localStorage.removeItem("A4");
    localStorage.removeItem("A3"); 

    localStorage.setItem("A2", JSON.stringify(A2));
    FacePlant2();

    timerOp();
  });


  function FacePlant2() {
    var curScoreTwo = JSON.parse(localStorage.getItem("A2"));
    if (curScoreTwo !== null) {
      document.querySelector("#Score1").textContent = curScoreTwo.answer + 
      " Current Score: " + curScoreTwo.grade
    };
    allScorz2();
  };

  function allScorz2() {
    var getA2 = JSON.parse(localStorage.getItem("A2"));
    var allScore = document.getElementById("allScore");
    let letA2 = getA2.grade;
    localStorage.removeItem("CS1"); 
    localStorage.setItem("CS1", letA2);
    allScore.innerHTML = letA2;
  };



  $( "#buttThree" ).click(function(event) {
    event.preventDefault();

    var A3 = {
        answer: answerThree,
        grade: gradeThree,
    };

    localStorage.removeItem("A1");
    localStorage.removeItem("A2");
    localStorage.removeItem("A4"); 

    localStorage.setItem("A3", JSON.stringify(A3));
    FacePlant3();

    timerOp();
  });

  function FacePlant3() {
    var curScoreThree = JSON.parse(localStorage.getItem("A3"));
    if (curScoreThree !== null) {
      document.querySelector("#Score1").textContent = curScoreThree.answer + 
      " Current Score: " + curScoreThree.grade
    }
    allScorz3();
  };

  function allScorz3() {
    var getA3 = JSON.parse(localStorage.getItem("A3"));
    var allScore = document.getElementById("allScore");
    let letA3 = getA3.grade;
    localStorage.removeItem("CS1"); 
    localStorage.setItem("CS1", letA3);
    allScore.innerHTML = letA3;
  };

  $( "#buttFour" ).click(function(event) {
    event.preventDefault();

    var A4 = {
        answer: answerFour,
        grade: gradeFour,
    };

    localStorage.removeItem("A1");
    localStorage.removeItem("A2");
    localStorage.removeItem("A3"); 

    localStorage.setItem("A4", JSON.stringify(A4));
    FacePlant4();

    timerOp();

  });

  function FacePlant4() {
    var curScoreFour = JSON.parse(localStorage.getItem("A4"));
    if (curScoreFour !== null) {
      document.querySelector("#Score1").textContent = curScoreFour.answer + 
      " Points Awarded to Hufflepuff: " + curScoreFour.grade
    };
    allScorz4();
  };

  function allScorz4() {
    var getA4 = JSON.parse(localStorage.getItem("A4"));
    var allScore = document.getElementById("allScore");
    let letA4 = getA4.grade;
    localStorage.removeItem("CS1"); 
    localStorage.setItem("CS1", letA4);
    allScore.innerHTML = letA4;
  };


  //   Questions Two  

  $( "#buttFive" ).click(function(event) {
    event.preventDefault();

    localStorage.removeItem("A6");
    localStorage.removeItem("A7");
    localStorage.removeItem("A8"); 

    var A5 = {
        answer: An5,
        grade: Gr5,
    };

    localStorage.setItem("A5", JSON.stringify(A5));
    FacePlant5();

  });

  function FacePlant5() {
    var curScoreFive = JSON.parse(localStorage.getItem("A5"));
    if (curScoreFive !== null) {
      document.querySelector("#Score2").textContent = curScoreFive.answer + 
      " Current Score: " + curScoreFive.grade
    };
    allScorz5();
  };

  function allScorz5() {
    var getA5 = JSON.parse(localStorage.getItem("A5"));
    var allScore = document.getElementById("allScore");
    var CurSe1 = localStorage.getItem("CS1");
    let letA5 = getA5.grade;
    localStorage.removeItem("CS2"); 
    localStorage.setItem("CS2", letA5);
    allScore.innerHTML = Number(letA5) + Number(CurSe1);
  };


  $( "#buttSix" ).click(function(event) {
    event.preventDefault();

    localStorage.removeItem("A5");
    localStorage.removeItem("A7");
    localStorage.removeItem("A8"); 

    var A6 = {
        answer: An6,
        grade: Gr6,
    };

    localStorage.setItem("A6", JSON.stringify(A6));
    FacePlant6();

  });

  function FacePlant6() {
    var curScoreFour = JSON.parse(localStorage.getItem("A6"));
    if (curScoreFour !== null) {
      document.querySelector("#Score2").textContent = curScoreSix.answer + 
      " Current Score: " + curScoreSix.grade
    };
    allScorz6();
  };

  function allScorz5() {
    var getA5 = JSON.parse(localStorage.getItem("A5"));
    var allScore = document.getElementById("allScore");
    var CurSe1 = localStorage.getItem("CS1");
    let letA5 = getA5.grade;
    localStorage.removeItem("CS2"); 
    localStorage.setItem("CS2", letA5);
    allScore.innerHTML = Number(letA5) + Number(CurSe1);
  };



// Timer

// https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript

function startTimer(duration, display) {
  var start = Date.now(),
      diff,
      minutes,
      seconds;
  function timer() {
      // get the number of seconds that have elapsed since 
      // startTimer() was called
      diff = duration - (((Date.now() - start) / 1000) | 0);

      // does the same job as parseInt truncates the float
      minutes = (diff / 60) | 0;
      seconds = (diff % 60) | 0;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds; 

      if (diff <= 0) {
          // add one second so that the count down starts at the full duration
          // example 05:00 not 04:59
          start = Date.now() + 1000;
      }
  };
  // we don't want to wait a full second before the timer starts
  timer();
  setInterval(timer, 1000);
}

function timerOp() {
  var twoMinutes = 60 * 2,
      display = document.querySelector('#time');
  startTimer(twoMinutes, display);
};


// Hi-Scorz







// Random Clicker for Q2

var clicks = 0;

// function onClick() {

// document.getElementById("clicks").innerHTML = clicks;
// };

$( "#clicker" ).click(function() {
    clicks += 1;
    console.log("clicks");
    var exOut = document.getElementById("exOut");
    exOut.innerHTML = clicks
  });