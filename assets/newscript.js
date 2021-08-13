// Vars

var QN = document.getElementById('QN');
var QQ = document.getElementById('QQ');
var QA1 = document.getElementById('QA1');
var buttons1 = document.getElementById('buttons1')
var dip = document.getElementById('dip')
var container = document.getElementById('container')
var clicks = 0;


// Timer

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
  };
  
  function timerOp() {
    var twoMinutes = 60 * 2,
    display = document.querySelector('#timerLocation');
    startTimer(twoMinutes, display);
  };

  $( "#startTimer" ).click(function(event) {
    event.preventDefault();
    var ogscorz = 0;
    var ogplacement = document.getElementById('allScore');
    ogplacement.innerHTML = ogscorz;
    timerOp();
    getQuest1();
    container.removeChild(dip)
  });


// Quest One


  function getQuest1() {
    // Inner HTML

    QN.innerHTML = "Question 1";
    QQ.innerHTML = "What is JavaScript?";

    // Nodes and Childs

    var node1 = document.createElement("LI");                
    var textnode1 = document.createTextNode("Client-Side Scripting Language");        
    node1.appendChild(textnode1);                             
    QA1.appendChild(node1); 
    
    var node2 = document.createElement("LI");                
    var textnode2 = document.createTextNode("Pancakes for breakfast");        
    node2.appendChild(textnode2);                             
    QA1.appendChild(node2); 

    var node3 = document.createElement("LI");                
    var textnode3 = document.createTextNode("A database intended for audio engineering");        
    node3.appendChild(textnode3);                             
    QA1.appendChild(node3); 

    var node4 = document.createElement("LI");                
    var textnode4 = document.createTextNode("William is the greatest");        
    node4.appendChild(textnode4);                             
    QA1.appendChild(node4); 

    // Buttons

    var btn1 = document.createElement("BUTTON");  
    var btnli1 = document.createElement("LI");
    btn1.innerHTML = "One"; 
    btnli1.appendChild(btn1);                  
    buttons1.appendChild(btnli1); 

    var btn2 = document.createElement("BUTTON"); 
    var btnli2 = document.createElement("LI"); 
    btn2.innerHTML = "Two";                   
    btnli2.appendChild(btn2);                  
    buttons1.appendChild(btnli2); 

    var btn3 = document.createElement("BUTTON");  
    var btnli3 = document.createElement("LI");
    btn3.innerHTML = "Three"; 
    btnli3.appendChild(btn3);                  
    buttons1.appendChild(btnli3); 

    var btn4 = document.createElement("BUTTON"); 
    var btnli4 = document.createElement("LI"); 
    btn4.innerHTML = "Four";                   
    btnli4.appendChild(btn4);                  
    buttons1.appendChild(btnli4); 

    // Button Clicks

    btn1.onclick = function QOO(event) {
        event.preventDefault();
        
        localStorage.removeItem("A1");

        var A1 = {
            score: 10,
        };
    
        localStorage.setItem("A1", JSON.stringify(A1));
        var allScore = document.getElementById("allScore");
        let giveA1 = JSON.parse(localStorage.getItem('A1'));
        allScore.innerHTML = giveA1.score;
        QA1.removeChild(node1);
        QA1.removeChild(node2);
        QA1.removeChild(node3);
        QA1.removeChild(node4);
        buttons1.removeChild(btnli1);
        buttons1.removeChild(btnli2);
        buttons1.removeChild(btnli3);
        buttons1.removeChild(btnli4);
        getQuest2();
    }

    btn2.onclick = function QOTw(event) {
        event.preventDefault();
        localStorage.removeItem("A1");
    
        var A1 = {
            score: 0,
        };
    
        localStorage.setItem("A1", JSON.stringify(A1));
        var allScore = document.getElementById("allScore");
        let giveA1 = JSON.parse(localStorage.getItem('A1'));
        allScore.innerHTML = giveA1.score;
        QA1.removeChild(node1);
        QA1.removeChild(node2);
        QA1.removeChild(node3);
        QA1.removeChild(node4);
        buttons1.removeChild(btnli1);
        buttons1.removeChild(btnli2);
        buttons1.removeChild(btnli3);
        buttons1.removeChild(btnli4);
        getQuest2();

        
    }

    btn3.onclick = function QOTh(event) {
        event.preventDefault();
        localStorage.removeItem("A1");

        var A1 = {
            score: 0,
        };
    
        localStorage.setItem("A1", JSON.stringify(A1));
        var allScore = document.getElementById("allScore");
        let giveA1 = JSON.parse(localStorage.getItem('A1'));
        allScore.innerHTML = giveA1.score;
        QA1.removeChild(node1);
        QA1.removeChild(node2);
        QA1.removeChild(node3);
        QA1.removeChild(node4);
        buttons1.removeChild(btnli1);
        buttons1.removeChild(btnli2);
        buttons1.removeChild(btnli3);
        buttons1.removeChild(btnli4);
        getQuest2();


    }

    btn4.onclick = function QOTh(event) {
        event.preventDefault();
        localStorage.removeItem("A1");

        var A1 = {
            score: 5,
        };
    
        localStorage.setItem("A1", JSON.stringify(A1));
        var allScore = document.getElementById("allScore");
        let giveA1 = JSON.parse(localStorage.getItem('A1'));
        allScore.innerHTML = giveA1.score;
        QA1.removeChild(node1);
        QA1.removeChild(node2);
        QA1.removeChild(node3);
        QA1.removeChild(node4);
        buttons1.removeChild(btnli1);
        buttons1.removeChild(btnli2);
        buttons1.removeChild(btnli3);
        buttons1.removeChild(btnli4);
        getQuest2();

    }
};


// Quest Two


function getQuest2() {
    // Inner HTML



    QN.innerHTML = "Question 2";
    QQ.innerHTML = "What is this: ";

    var divinus = document.createElement("DIV")
    var dankCode = document.createElement("BUTTON");
    var wordz = document.createTextNode("EXAMPLE");
    var div2 = document.createElement("div");
    
    dankCode.appendChild(wordz);
    divinus.appendChild(dankCode);
    QQ.appendChild(divinus);
    divinus.appendChild(div2);

    dankCode.onclick = function tracking() {
        clicks += 1;
        console.log("clicks");
        div2.innerHTML = clicks;
    
    };
    
    // Nodes and Childs

    var node1 = document.createElement("LI");                
    var textnode1 = document.createTextNode("Click Defusser (yes, to de-fuss)");        
    node1.appendChild(textnode1);                             
    QA1.appendChild(node1); 
    
    var node2 = document.createElement("LI");                
    var textnode2 = document.createTextNode("Click Refractor");        
    node2.appendChild(textnode2);                             
    QA1.appendChild(node2); 

    var node3 = document.createElement("LI");                
    var textnode3 = document.createTextNode("Click Counter");        
    node3.appendChild(textnode3);                             
    QA1.appendChild(node3); 

    var node4 = document.createElement("LI");                
    var textnode4 = document.createTextNode("Click Decapitator");        
    node4.appendChild(textnode4);                             
    QA1.appendChild(node4); 

    // Buttons

    var btn1 = document.createElement("BUTTON");  
    var btnli1 = document.createElement("LI");
    btn1.innerHTML = "One"; 
    btnli1.appendChild(btn1);                  
    buttons1.appendChild(btnli1); 

    var btn2 = document.createElement("BUTTON"); 
    var btnli2 = document.createElement("LI"); 
    btn2.innerHTML = "Two";                   
    btnli2.appendChild(btn2);                  
    buttons1.appendChild(btnli2); 

    var btn3 = document.createElement("BUTTON");  
    var btnli3 = document.createElement("LI");
    btn3.innerHTML = "Three"; 
    btnli3.appendChild(btn3);                  
    buttons1.appendChild(btnli3); 

    var btn4 = document.createElement("BUTTON"); 
    var btnli4 = document.createElement("LI"); 
    btn4.innerHTML = "Four";                   
    btnli4.appendChild(btn4);                  
    buttons1.appendChild(btnli4); 

    // Button Clicks

    btn1.onclick = function QOO(event) {
        event.preventDefault();
        localStorage.removeItem("A2");
    
        var A2 = {
            score: 0,
        };
    
        localStorage.setItem("A2", JSON.stringify(A2));
        var allScore = document.getElementById("allScore");
        let giveA1 = JSON.parse(localStorage.getItem('A1'));
        let giveA2 = JSON.parse(localStorage.getItem('A2'));
        let add1 = giveA1.score += giveA2.score;
        console.log(add1)
        allScore.innerHTML = add1;
        QA1.removeChild(node1);
        QA1.removeChild(node2);
        QA1.removeChild(node3);
        QA1.removeChild(node4);
        buttons1.removeChild(btnli1);
        buttons1.removeChild(btnli2);
        buttons1.removeChild(btnli3);
        buttons1.removeChild(btnli4);
        getQuest3();
    }

    btn2.onclick = function QOTw(event) {
        event.preventDefault();
        localStorage.removeItem("A2");
    
        var A2 = {
            score: 0,
        };
    
        localStorage.setItem("A2", JSON.stringify(A2));
        var allScore = document.getElementById("allScore");
        let giveA1 = JSON.parse(localStorage.getItem('A1'));
        let giveA2 = JSON.parse(localStorage.getItem('A2'));
        let add1 = giveA1.score += giveA2.score;
        console.log(add1)
        allScore.innerHTML = add1;
        QA1.removeChild(node1);
        QA1.removeChild(node2);
        QA1.removeChild(node3);
        QA1.removeChild(node4);
        buttons1.removeChild(btnli1);
        buttons1.removeChild(btnli2);
        buttons1.removeChild(btnli3);
        buttons1.removeChild(btnli4);
        getQuest3();
    }

    btn3.onclick = function QOTh(event) {
        localStorage.removeItem("A2");
    
        var A2 = {
            score: 0,
        };
    
        localStorage.setItem("A2", JSON.stringify(A2));
        var allScore = document.getElementById("allScore");
        let giveA1 = JSON.parse(localStorage.getItem('A1'));
        let giveA2 = JSON.parse(localStorage.getItem('A2'));
        let add1 = giveA1.score += giveA2.score;
        console.log(add1)
        allScore.innerHTML = add1;
        QA1.removeChild(node1);
        QA1.removeChild(node2);
        QA1.removeChild(node3);
        QA1.removeChild(node4);
        buttons1.removeChild(btnli1);
        buttons1.removeChild(btnli2);
        buttons1.removeChild(btnli3);
        buttons1.removeChild(btnli4);
        getQuest3();

        
    }

    btn4.onclick = function QOF(event) {
        event.preventDefault();
        localStorage.removeItem("A2");
    
        var A2 = {
            score: 0,
        };
    
        localStorage.setItem("A2", JSON.stringify(A2));
        var allScore = document.getElementById("allScore");
        let giveA1 = JSON.parse(localStorage.getItem('A1'));
        let giveA2 = JSON.parse(localStorage.getItem('A2'));
        let add1 = giveA1.score += giveA2.score;
        console.log(add1)
        allScore.innerHTML = add1;
        QA1.removeChild(node1);
        QA1.removeChild(node2);
        QA1.removeChild(node3);
        QA1.removeChild(node4);
        buttons1.removeChild(btnli1);
        buttons1.removeChild(btnli2);
        buttons1.removeChild(btnli3);
        buttons1.removeChild(btnli4);
        getQuest3();
    }
};

// Quest Three


function getQuest3() {
    // Inner HTML



    QN.innerHTML = "Question 3";
    QQ.innerHTML = "Why are JavaScript and Java Interchangible?";

    var divinus = document.createElement("DIV")
    var dankCode = document.createElement("BUTTON");
    var wordz = document.createTextNode("EXAMPLE");
    var div2 = document.createElement("div");

    
    // Nodes and Childs

    var node1 = document.createElement("LI");                
    var textnode1 = document.createTextNode("Both are a complete programming language");        
    node1.appendChild(textnode1);                             
    QA1.appendChild(node1); 
    
    var node2 = document.createElement("LI");                
    var textnode2 = document.createTextNode("Both are client-side scripting languages");        
    node2.appendChild(textnode2);                             
    QA1.appendChild(node2); 

    var node3 = document.createElement("LI");                
    var textnode3 = document.createTextNode("Both were used in the creation of the telescope");        
    node3.appendChild(textnode3);                             
    QA1.appendChild(node3); 

    var node4 = document.createElement("LI");                
    var textnode4 = document.createTextNode("I don't recognize these as answers");        
    node4.appendChild(textnode4);                             
    QA1.appendChild(node4); 

    // Buttons

    var btn1 = document.createElement("BUTTON");  
    var btnli1 = document.createElement("LI");
    btn1.innerHTML = "One"; 
    btnli1.appendChild(btn1);                  
    buttons1.appendChild(btnli1); 

    var btn2 = document.createElement("BUTTON"); 
    var btnli2 = document.createElement("LI"); 
    btn2.innerHTML = "Two";                   
    btnli2.appendChild(btn2);                  
    buttons1.appendChild(btnli2); 

    var btn3 = document.createElement("BUTTON");  
    var btnli3 = document.createElement("LI");
    btn3.innerHTML = "Three"; 
    btnli3.appendChild(btn3);                  
    buttons1.appendChild(btnli3); 

    var btn4 = document.createElement("BUTTON"); 
    var btnli4 = document.createElement("LI"); 
    btn4.innerHTML = "Four";                   
    btnli4.appendChild(btn4);                  
    buttons1.appendChild(btnli4); 

    // Button Clicks

    btn1.onclick = function QOO(event) {
        event.preventDefault();
        var A2 = 0;
    
        localStorage.removeItem("A2");
    
        localStorage.setItem("A2", A2);
    
        console.log(A2);
        
            
        var allScore = document.getElementById("allScore");
        let giveA2 = localStorage.getItem("A2")
        allScore.innerHTML = giveA2;
        QA1.removeChild(node1);
        QA1.removeChild(node2);
        QA1.removeChild(node3);
        QA1.removeChild(node4);
        buttons1.removeChild(btnli1);
        buttons1.removeChild(btnli2);
        buttons1.removeChild(btnli3);
        buttons1.removeChild(btnli4);
        getQuest3();
    }

    btn2.onclick = function QOTw(event) {
        event.preventDefault();
        var A2 = 0;
    
        localStorage.removeItem("A2");
    
        localStorage.setItem("A2", A2);
    
        console.log(A2);
        
            
        var allScore = document.getElementById("allScore");
        let giveA2 = localStorage.getItem("A2")
        allScore.innerHTML = giveA2;
        QA1.removeChild(node1);
        QA1.removeChild(node2);
        QA1.removeChild(node3);
        QA1.removeChild(node4);
        buttons1.removeChild(btnli1);
        buttons1.removeChild(btnli2);
        buttons1.removeChild(btnli3);
        buttons1.removeChild(btnli4);
        getQuest3();
    }

    btn3.onclick = function QOTh(event) {
        event.preventDefault();
        var A2 = 10;
    
        localStorage.removeItem("A2");
    
        localStorage.setItem("A2", A2);
    
        console.log(A2);
        
            
        var allScore = document.getElementById("allScore");
        let giveA2 = localStorage.getItem("A2")
        allScore.innerHTML = giveA2;
        QA1.removeChild(node1);
        QA1.removeChild(node2);
        QA1.removeChild(node3);
        QA1.removeChild(node4);
        buttons1.removeChild(btnli1);
        buttons1.removeChild(btnli2);
        buttons1.removeChild(btnli3);
        buttons1.removeChild(btnli4);
        getQuest3();

        
    }

    btn4.onclick = function QOF(event) {
        event.preventDefault();
        var A2 = 5;
    
        localStorage.removeItem("A2");
    
        localStorage.setItem("A2", A2);
    
        console.log(A2);
        
            
        var allScore = document.getElementById("allScore");
        let giveA1 = localStorage.getItem("A1")
        let giveA2 = localStorage.getItem("A2")
        allScore.innerHTML = (giveA2 += giveA1);
        QA1.removeChild(node1);
        QA1.removeChild(node2);
        QA1.removeChild(node3);
        QA1.removeChild(node4);
        buttons1.removeChild(btnli1);
        buttons1.removeChild(btnli2);
        buttons1.removeChild(btnli3);
        buttons1.removeChild(btnli4);
        getQuest3();
    }
};

// End Game 

// endGame();