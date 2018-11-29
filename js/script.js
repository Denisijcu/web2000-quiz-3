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

const pic = document.querySelector('#pic');
let nlucky = document.querySelector('#nlucky');

let lucykNumber = 0;
let t = 1;

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
instructions.innerHTML =
  'Scratch entire play area, Count the "1" symbol(s) revealed. See Legend for prize won.';
console.log(instructions.innerText);
// adding some  styles to the <p> element
instructions.style.position = 'absolute';
instructions.style.top = '50px';
instructions.style.left = '0px';
instructions.style.fontSize = '0.7em';
instructions.style.color = 'blue';
// Adding to the Container class
container.appendChild(instructions);

//Show tike off image
// create an image element

// defining events click

s1.addEventListener(
  'click',
  () => {
    s1.innerHTML = "<img src = 'img/scratching.gif' alt='pic' />";
    play(1);
  },
  false
);

s2.addEventListener(
  'click',
  () => {
    s2.innerHTML = "<img src = 'img/scratching.gif' alt='pic' />";
    play(2);
  },
  false
);
s3.addEventListener(
  'click',
  () => {
    s3.innerHTML = "<img src = 'img/scratching.gif' alt='pic' />";
    play(3);
  },
  false
);
s4.addEventListener(
  'click',
  () => {
    s4.innerHTML = "<img src = 'img/scratching.gif' alt='pic' />";
    play(4);
  },
  false
);
s5.addEventListener(
  'click',
  () => {
    s5.innerHTML = "<img src = 'img/scratching.gif' alt='pic' />";
    play(5);
  },
  false
);

s6.addEventListener(
  'click',
  () => {
    s6.innerHTML = "<img src = 'img/scratching.gif' alt='pic' />";
    play(6);
  },
  false
);

function play(n) {
  if (lucykNumber === n) {
    modal.style.display = 'block';
    pic.style.display = 'block';
    pic.classList = 'animated flash';
    var dls = '';
    if (n === 1) {
      dls =
        'You have won $ <h3> <span style="color:blue">$</span> <span  class="animated flash">2</span></h3>';
    } else if (n === 2) {
      dls =
        'Good! You have won <h3> <span style="color:blue">$</span> <span class="animated flash">4 </span> </h3>';
    } else if (n === 3) {
      dls =
        'Cool! You have won <h3> <span style="color:blue">$</span><span class="animated flash"> 12 </span> </h3>';
    } else if (n === 4) {
      dls =
        'Great! You have won <h3> <span style="color:blue">$</span></span><span class="animated flash"> 34</span> </h3>';
    } else if (n === 5) {
      dls =
        'Awesome! You have won <h3><span style="color:blue">$</span> </span><span class="animated flash">123</span> </h3> ';
    } else if (n === 6) {
      dls =
        'Wonderfull, Congratulation You have won <h3><span style="color:blue">$</span></span><span class="animated flash"> 1, 234 </span></h3>';
    }

    var winsound = ` <audio id="cAudio"  autoplay>
        <source src="img/ding.mp3" type="audio/mp3">
         </audio>`;
    sound.innerHTML = winsound;

    nlucky.innerHTML = `The Lucky number is <br><span class="animated flash" style="color: gold; font-size:50px; font-weight:bold; text-align:center;">${n}</span> <br> ${dls}</h1> `;
  }
  lucykNumber = Math.floor(Math.random() * 6);
  if (t > 6) {
    modal.style.display = 'block';
    pic.style.display = 'none';
    nlucky.innerHTML = `Game Over... Try again.`;
    t = 0;
    init();
  }
  t++;
}

function init() {
  s1.innerHTML = "<img src = 'img/scratch-off-solid.png' alt='pic' />";
  s2.innerHTML = "<img src = 'img/scratch-off-solid.png' alt='pic' />";
  s3.innerHTML = "<img src = 'img/scratch-off-solid.png' alt='pic' />";
  s4.innerHTML = "<img src = 'img/scratch-off-solid.png' alt='pic' />";
  s5.innerHTML = "<img src = 'img/scratch-off-solid.png' alt='pic' />";
  s6.innerHTML = "<img src = 'img/scratch-off-solid.png' alt='pic' />";
}
