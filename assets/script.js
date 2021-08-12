// Variables

var gradeOne = 10;
var answerOne = "One";
console.log(answerOne);
console.log(gradeOne);

var gradeTwo = 0;
var answerTwo = "Two";
console.log(answerTwo);
console.log(gradeTwo);

var gradeThree = 0;
var answerThree = "Three";
console.log(answerThree);
console.log(gradeThree);

var gradeFour = 5;
var answerFour = "What a Kiss Ass!!! ";
console.log(answerFour);
console.log(gradeFour);

// Question One

$( "#buttOne" ).click(function(event) {
    event.preventDefault();
    console.log("hat1");
    localStorage.setItem("duck1", "duck1");
    var duck1 = localStorage.getItem("duck1");
    console.log(duck1);

    // Changes
    

    var A1 = {
        answer: answerOne,
        grade: gradeOne,
    };

    localStorage.setItem("A1", JSON.stringify(A1));
    FacePlant1();

  });

function FacePlant1() {
    var curScoreOne = JSON.parse(localStorage.getItem("A1"));
    if (curScoreOne !== null) {
      document.querySelector("#Score").textContent = curScoreOne.answer + 
      " Current Score: " + curScoreOne.grade
    }
  };

$( "#buttTwo" ).click(function(event) {
    event.preventDefault();
    console.log("crash1");
    localStorage.setItem("falcon1", "falcon1");
    var falcon1 = localStorage.getItem("falcon1");
    console.log(falcon1);

    var A2 = {
        answer: answerTwo,
        grade: gradeTwo,
    };

    localStorage.setItem("A2", JSON.stringify(A2));
    FacePlant2();

  });


  function FacePlant2() {
    var curScoreTwo = JSON.parse(localStorage.getItem("A2"));
    if (curScoreTwo !== null) {
      document.querySelector("#Score").textContent = curScoreTwo.answer + 
      " Current Score: " + curScoreTwo.grade
    }
  };



  $( "#buttThree" ).click(function() {
    console.log("splash1");
    localStorage.setItem("raven1", "raven1");
    var raven1 = localStorage.getItem("raven1");
    console.log(raven1);

    var A3 = {
        answer: answerThree,
        grade: gradeThree,
    };

    localStorage.setItem("A3", JSON.stringify(A3));
    FacePlant3();

  });

  function FacePlant3() {
    var curScoreThree = JSON.parse(localStorage.getItem("A3"));
    if (curScoreThree !== null) {
      document.querySelector("#Score").textContent = curScoreThree.answer + 
      " Current Score: " + curScoreThree.grade
    }
  };

  $( "#buttFour" ).click(function() {
    console.log("snare1");
    localStorage.setItem("eagle1", "eagle1");
    var eagle1 = localStorage.getItem("eagle1");
    console.log(eagle1);

    var A4 = {
        answer: answerFour,
        grade: gradeFour,
    };

    localStorage.setItem("A4", JSON.stringify(A4));
    FacePlant4();

  });

  function FacePlant4() {
    var curScoreFour = JSON.parse(localStorage.getItem("A4"));
    if (curScoreFour !== null) {
      document.querySelector("#Score").textContent = curScoreFour.answer + 
      " Ugh.... Score: " + curScoreFour.grade
    }
  };


  //   Questions Two  

  $( "#buttFive" ).click(function() {
    console.log("hat2");
    localStorage.setItem("duck2", "duck2");
    var duck2 = localStorage.getItem("duck2");
    console.log(duck2);
  });

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
var buttclick = document.getElementById("clicker");

function onClick() {
clicks += 1;
document.getElementById("clicks").innerHTML = clicks;
};