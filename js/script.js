// const hamburger = document.getElementById('hamburger');
// const navbar = document.getElementById('navbar');

// hamburger.addEventListener('click',()=>{
//     navbar.classList.toggle('show');
// });

function myFunction() {
    var x = document.getElementById("hamburger"); 
    if (x.style.display === "block") {
        x.style.display = "none"; 
    } else {
        x.style.display = "block";
    }
}