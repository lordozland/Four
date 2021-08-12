// var boswer = document.getElementById('chere');

$( "#buttOne" ).click(function() {
    console.log("hit");
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

// boswer.addEventListener("click" function{
    
// })

// boswer.click(function() {
//     localStorage.setItem("got", click)
//     var lockling = localStorage.getItem(click);
//     console.log(lockling)
// });


// var count = localStorage.getItem("count");



// addButton.addEventListener("click", function() {
//   if (count < 24) {
//     count++;
//     counter.textContent = count;
//     localStorage.setItem("count", count);
//   }
// });

// subtractButton.addEventListener("click", function() {
//   if (count > 0) {
//     count--;
//     counter.textContent = count;
//     localStorage.setItem("count", count);
//   }
// });