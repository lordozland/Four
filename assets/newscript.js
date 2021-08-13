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
  });

  function getQuest1() {

    // vars

      var QN = document.getElementById('QN');
      var QQ = document.getElementById('QQ');
      var QA1 = document.getElementById('QA1');
      var buttons1 = document.getElementById('buttons1')
      var buttOne = document.getElementById('buttOne');
      var buttTwo = document.getElementById('buttTwo');
      var buttThree = document.getElementById('buttThree');
      var buttFour = document.getElementById('buttFour');

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

    var btn2 = document.createElement("BUTTON"); 
    var btnli2 = document.createElement("LI"); 
    btn2.innerHTML = "Two";                   
    btnli2.appendChild(btn2);                  
    buttons1.appendChild(btnli2); 
  }