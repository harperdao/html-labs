var puppy = document.getElementById("puppy");
var puppyOriginalLocation = puppy.getBoundingClientRect();
var translateX = 0;
var translateY = 0;
puppy.style.transition = "0.5s";

function runPuppy() {
translateX += 50;
translateY += 50;
puppy.style.transform = "translateX("+translateX+"px) translateY("+translateY+"px)";

if (translateX + puppyOriginalLocation.width > window.innerWidth) {
    translateX = 0;
    translateY = 0;
    puppy.style.transform = "translateX("+translateX+"px) translateY("+translateY+"px)";
}
}