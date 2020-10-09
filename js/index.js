const mytitle = document.querySelector('h3');

mytitle.addEventListener('mouseover', mouseOver)
mytitle.addEventListener('mouseout', mouseOut)

function mouseOver() {
    mytitle.style.color = "red";
}
function mouseOut() {
    mytitle.style.color = "black";
}

