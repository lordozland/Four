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
console.log(An5);
console.log(Gr5);

var Gr6 = 0;
var An6 = "Two...";
console.log(Gr6);
console.log(An6);

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

  });

function FacePlant1() {
    var curScoreOne = JSON.parse(localStorage.getItem("A1"));
    if (curScoreOne !== null) {
      document.querySelector("#Score1").textContent = curScoreOne.answer + 
      " Current Score: " + curScoreOne.grade
    }
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

  });


  function FacePlant2() {
    var curScoreTwo = JSON.parse(localStorage.getItem("A2"));
    if (curScoreTwo !== null) {
      document.querySelector("#Score1").textContent = curScoreTwo.answer + 
      " Current Score: " + curScoreTwo.grade
    }
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

  });

  function FacePlant3() {
    var curScoreThree = JSON.parse(localStorage.getItem("A3"));
    if (curScoreThree !== null) {
      document.querySelector("#Score1").textContent = curScoreThree.answer + 
      " Current Score: " + curScoreThree.grade
    }
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


  });

  function FacePlant4() {
    var curScoreFour = JSON.parse(localStorage.getItem("A4"));
    if (curScoreFour !== null) {
      document.querySelector("#Score1").textContent = curScoreFour.answer + 
      " Points Awarded to Hufflepuff: " + curScoreFour.grade
    }
  };


  //   Questions Two  

  $( "#buttFive" ).click(function(event) {
    event.preventDefault();

    var A5 = {
        answer: answerFive,
        grade: gradeive,
    };

    localStorage.setItem("A5", JSON.stringify(A5));
    FacePlant5();

  });

  function FacePlant5() {
    var curScoreFour = JSON.parse(localStorage.getItem("A5"));
    if (curScoreFour !== null) {
      document.querySelector("#Score2").textContent = curScoreFour.answer + 
      " Current Score: " + curScoreFour.grade
    }
  };

$( "#buttSix" ).click(function() {
    console.log("crash2");
    localStorage.setItem("falcon2", "falcon2");
    var falcon2 = localStorage.getItem("falcon2");
    console.log(falcon2);
  });

  $( "#buttSeven" ).click(function() {
    console.log("splash2");
    localStorage.setItem("raven2", "raven2");
    var raven2 = localStorage.getItem("raven2");
    console.log(raven2);
  });

  $( "#buttEight" ).click(function() {
    console.log("snare2");
    localStorage.setItem("eagle2", "eagle2");
    var eagle2 = localStorage.getItem("eagle2");
    console.log(eagle2);
  });


// Quiz Storage Ideas

// var student = document.getElementById("student-names");
// var grade = document.getElementById("grades");
// var comment = document.getElementById("msg");
// var saveButton = document.getElementById("save");
// var savedName = document.getElementById("saved-name");

// saveButton.addEventListener("click", function(event) {
// event.preventDefault();

// var studentGrade = {
//   student: student.value,
//   grade: grade.value,
//   comment: comment.value.trim()
// };

// localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
// renderMessage();

// });

// function renderMessage() {
//   var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
//   if (lastGrade !== null) {
//     document.querySelector(".message").textContent = lastGrade.student + 
//     " received a/an " + lastGrade.grade
//   }
// }


// Timer


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