var boswer = document.getElementById('chere');

$( "#chere" ).click(function() {
    console.log("hit");
    localStorage.setItem("duck");
    var duck = localStorage.getItem("duck");
    console.log(duck);
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