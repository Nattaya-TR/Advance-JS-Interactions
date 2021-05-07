//dark mode & light mode

function switchMode() {
    let element = document.body;
    element.classList.toggle("darkMode");
}

//carousel

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName('carousel-cell');
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlides, 2000);
}

//collage & modal
//get the modal
let modal = document.getElementById("modal");

//get the image and insert it inside the modal, use alt text for the caption
let img = document.getElementsByClassName('colImg');
let modalImg = document.getElementById('modalImg');
let captionText = document.getElementById("caption");

let showModal = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

for(let i =0; i < img.length; i++) {
    img[i].addEventListener('click', showModal);
}
//get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

//when the user click on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//pokemon mouseover

function show(id) {
    document.getElementById(id).style.display = "inline";
}

function hide(id) {
    document.getElementById(id).style.display = "none" ;
}

// chasing circle
let circle = document.getElementById('chaser');
let box = document.getElementById("chaserBox")

const onMouseMove = (e) => {
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
}

box.addEventListener('mousemove', onMouseMove);

box.addEventListener('mouseout', function() {
    circle.style.top = "2725px";
    circle.style.left = "125px";
});

//run away from cursor
let runner = document.getElementById("runner");
let runnerBox = document.getElementById("runnerBox");

function run(e) {
    let parentPosition = getPosition(e.currentTarget);
    let xPosition = e.clientX + parentPosition.x + (runner.clientWidth  /2);
    let yPosition = e.clientY + parentPosition.y + (runner.clientHeight /2);
    runner.style.left = xPosition + "px";
    runner.style.top = yPosition + "px";
}

function getPosition(el) {
    let xPos = 0;
    let yPos = 0;
    while (el) {
        if (el.tagName === "body") {
            // deal with browser quirks with body/window/document and page scroll
            let xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            let yScroll = el.scrollTop || document.documentElement.scrollTop;

            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
        } else {
            // for all other non-BODY elements
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
        }

        el = el.offsetParent;
    }
    return {
        x: xPos,
        y: yPos
    };
}

runnerBox.addEventListener('mousemove', run);

runnerBox.addEventListener("mouseout", function () {
    runner.style.top = "3500px";
    runner.style.left = "125px";
})

//letters
Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
