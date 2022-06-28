var circle = document.getElementById("circle");
var upbutton = document.getElementById("up-button");
var downbutton = document.getElementById("down-button");

var rotateValue = circle.style.transform;
var rotateSum;

upbutton.onclick = function ()
{
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

downbutton.onclick = function ()
{
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}