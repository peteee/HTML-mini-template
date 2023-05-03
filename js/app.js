const myMenu = document.querySelector("#menu");
const myPanel = document.querySelector("#panel");
const myCloseBtn = document.querySelector("#close");
const mobileLinks = document.querySelectorAll("#panel nav a");

myMenu.addEventListener("click", function() {
    myPanel.classList.add("slide-in");
});
myCloseBtn.addEventListener("click", function() {
    myPanel.classList.remove("slide-in");
});

mobileLinks.forEach(function(item) {
    item.addEventListener("click", function() {
        myPanel.classList.toggle("slide-in");
    });
});
