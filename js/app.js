let userSeq = [];
let simonSeq = [];
let count = 5;
let on;
let off;
let j = 0;
const introSeq = [2,3,5];

const snareDrum = document.getElementById('snare-drum');
const leftTom = document.getElementById('left-tom');
const rightTom = document.getElementById('right-tom');
const kickDrum = document.getElementById('kick-drum');
const rightCymbal = document.getElementById('right-cymbal');
const leftCymbal = document.getElementById('left-cymbal-top-one');
const leftCymbalTop = document.getElementById('left-top-cymbal');
const overlay = document.getElementById('overlay');
const drumContainer = document.getElementById('drum-container');
const startButton = document.getElementById('start-button');
const drumOverlay = document.getElementById('drum-overlay');

// audio variables
const snareDrumAudio = new Audio('./drum-sounds/snare.wav');
const leftTomAudio = new Audio('./drum-sounds/left-tom.wav');
const rightTomAudio = new Audio('./drum-sounds/right-tom.wav');
const kickDrumAudio = new Audio('./drum-sounds/kickdrum.wav');
const rightCymbalAudio = new Audio('./drum-sounds/cymbal.wav');
const leftCymbalAudio = new Audio('./drum-sounds/closed-cymbal.wav');
const buttonPushed = new Audio('./drum-sounds/button-push.wav');

window.onload = function() {

    for(let i = 0; i < 5; i++){
        simonSeq[i] = Math.ceil((Math.random() * 6));
    }
    console.log(simonSeq);
    startScreen();
    setTimeout(() => {
        introSequence();
    }, 2200);

    startButton.addEventListener("click", function(){
        buttonPushed.play();
        setTimeout(() => {
            drumOverlay.classList.remove("show");
            drumOverlay.classList.add("fade-out");
            setTimeout(() => {
                drumOverlay.classList.add("hide");
            }, 900);
        }, 500);
        startSequence();
        console.log(count, j);
    })




};

function introSequence(){
    var onIntro = 500;
    var offIntro = 100;
    var index = 0;

    a = setInterval(function() {
        if(introSeq[index] == 2){
            leftTom.classList.add("animate--beat");
            playAudio(leftTomAudio);
            setTimeout(function() {
                leftTom.classList.remove("animate--beat");
            }, offIntro);
        }
        if(introSeq[index] == 3){
            rightTom.classList.add("animate--beat");
            playAudio(rightTomAudio);
            setTimeout(function() {
                rightTom.classList.remove("animate--beat");
            }, offIntro);
        }
        if(introSeq[index] == 5){
            rightCymbal.classList.add("animate--beat");
            playAudio(rightCymbalAudio);
            setTimeout(function() {
                rightCymbal.classList.remove("animate--beat");
            }, 1000);
        }
        index++;
        if(index == introSeq.length){
            clearInterval(a);
            startButton.classList.remove("disable-click");
            startButton.classList.add("enable-click");
            setTimeout(() => {
                drumOverlay.classList.remove("hide");
                drumOverlay.classList.add("show");
                drumOverlay.classList.add("fade-in");
            }, 500);

            index = 0;
        }
    }, onIntro)
}

function startScreen() {
    setTimeout(() => {
        overlay.classList.add('hide');
        drumContainer.classList.add('fade-in');
    }, 1800);
    setTimeout(() => {
        drumContainer.classList.remove('hide');
        drumContainer.classList.add('show');
    }, 1900);
}

function playAudio(source) {
    setTimeout(function(){
        source.play();
        setTimeout(function(){
            source.pause();
            source.currentTime = 0;
        }, 900)
    }, 100);
}

function startSequence() {
    // set interval length
    if(count <= 10){
        off = 800;
        on = 1600;
    }
    else {
        off = 500;
        on = 1000;
    }

    x = setInterval(function () {
        if(simonSeq[j] == 1){
            snareDrum.classList.add("animate--beat");
            console.log("Inside of snare drum");
            
            playAudio(snareDrumAudio);

            setTimeout(function() {
                snareDrum.classList.remove("animate--beat");
            }, off);
        }
        else if(simonSeq[j] == 2) {
            leftTom.classList.add("animate--beat");
            console.log("Inside of left tom drum");
            playAudio(leftTomAudio);
            setTimeout(function() {
                leftTom.classList.remove("animate--beat");
            }, off);
        }
        else if(simonSeq[j] == 3) {
            rightTom.classList.add("animate--beat");
            console.log("Inside of right tom drum");
            playAudio(rightTomAudio);
            setTimeout(function() {
                rightTom.classList.remove("animate--beat");
            }, off);
        }
        else if(simonSeq[j] == 4) {
            kickDrum.classList.add("animate--beat");
            console.log("Inside of kick drum");
            playAudio(kickDrumAudio);
            setTimeout(function() {
                kickDrum.classList.remove("animate--beat");
            }, off);
        }
        else if(simonSeq[j] == 5) {
            rightCymbal.classList.add("cymbal-shake");
            console.log("Inside of open cymbal");
            playAudio(rightCymbalAudio);
            setTimeout(function() {
                rightCymbal.classList.remove("cymbal-shake");
            }, off);
        }
        else if(simonSeq[j] == 6) {
            leftCymbal.classList.add("move-cymbal-down");
            leftCymbalTop.classList.add("move-cymbal-down");
            console.log("Inside of closed cymbal");
            playAudio(leftCymbalAudio);
            setTimeout(function() {
                leftCymbal.classList.remove("move-cymbal-down");
                leftCymbalTop.classList.remove("move-cymbal-down");
            }, off);
        }
        j++;
        console.log("This is the: " + j + "nth time throught the interval");
        if(j == count){
            clearInterval(x);
            j = 0;
        }

    }, on);
}