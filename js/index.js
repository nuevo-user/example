const mytitle = document.querySelector('h1');

mytitle.addEventListener('mouseover', mouseOver)
mytitle.addEventListener('mouseout', mouseOut)

function mouseOver() {
    mytitle.style.color = "white";
}
function mouseOut() {
    mytitle.style.color = "black";
}

