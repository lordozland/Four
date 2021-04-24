// git branch -M main
// git remote add origin git@github.com:lordozland/Four.git
//git push -u origin main

console.log("Document Body: ")
console.log(document.body);

console.log("Children of Document Body: ")
console.log(document.body.children);

console.log("Second child of body: ")
console.log(document.body.children[1]);

var One = document.getElementById("One")

One.style.backgroundColor = "white"