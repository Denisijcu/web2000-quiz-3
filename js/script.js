console.log('Running....');

// UI vars
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');

const sound = document.querySelector('#sound');
const modal = document.querySelector('.carta');



let lucykNumber = 0;

/*  Show instructions on the page  */

// create an element div 
let container = document.createElement('div');
// also adding  a class name container
container.className = 'container';
document.body.appendChild(container);
// declaring a var taking the class container 
let containe = document.querySelector('.container');
// create a <p> Element 
let instructions = document.createElement('p');
// adding text to the <p> element 
instructions.innerHTML = 'Scratch entire play area, Count the "1" symbol(s) revealed. See Legend for prize won.';
console.log(instructions.innerText);
// adding some  styles to the <p> element
instructions.style.position = "absolute";
instructions.style.top = "50px";
instructions.style.left = "0px";
instructions.style.fontSize = "0.7em";
instructions.style.color = "blue";
// Adding to the Container class 
container.appendChild(instructions);

//Show tike off image
// create an image element

// defining events click

s1.addEventListener('click', () => {
    s1.innerHTML = "<img src = 'img/scratching.gif' alt='pic' />";
    play(1);
}, false);

s2.addEventListener('click', () => {
    s2.innerHTML = "<img src = 'img/scratching.gif' alt='pic' />";
    play(2);
}, false);
s3.addEventListener('click', () => {
    s3.innerHTML = "<img src = 'img/scratching.gif' alt='pic' />";
    play(3);
}, false);
s4.addEventListener('click', () => {
    s4.innerHTML = "<img src = 'img/img/scratching.gif' alt='pic' />";
    play(4);
}, false);
s5.addEventListener('click', () => {
    s5.innerHTML = "<img src = 'img/scratching.gif' alt='pic' />";
    play(5);
}, false);

s6.addEventListener('click', () => {
    s6.innerHTML = "<img src = 'img/scratching.gif' alt='pic' />";
    play(6);

}, false);




function play(n) {
    console.log('Lucky Number', lucykNumber);
    if (lucykNumber === n) {
        var winsound = ` <audio id="cAudio"  autoplay>
        <source src="img/ding.mp3" type="audio/mp3">
         </audio>`;
        sound.innerHTML = winsound;
        modal.style.display = 'block';
    }

    lucykNumber = Math.floor(Math.random() * 6);
}

function close() {
    modal.style.display = 'none';
}