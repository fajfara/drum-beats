let userSeq = [];
let simonSeq = [];
let count = 20;
let on;
let off;
let j = 0;
let snareDrum = document.getElementById('snare-drum');
let leftTom = document.getElementById('left-tom');
let rightTom = document.getElementById('right-tom');
let kickDrum = document.getElementById('kick-drum');
let rightCymbal = document.getElementById('right-cymbal');
let leftCymbal = document.getElementById('left-cymbal-top-one');

window.onload = function() {
    for(let i = 0; i < 20; i++){
        simonSeq[i] = Math.ceil((Math.random() * 6));
    }
    console.log(simonSeq);
    startSequence();



};

function startSequence() {
    // set inteveral length
    if(count <= 10){
        off = 400;
        on = 800;
    }
    else {
        off = 250;
        on = 500;
    }

    x = setInterval(function () {
        if(simonSeq[j] == 1){
            snareDrum.classList.add("animate--beat");
            setTimeout(function() {
                snareDrum.classList.remove("animate--beat");
            }, off);
        }
        else if(simonSeq[j] == 2) {
            leftTom.classList.add("animate--beat");
            setTimeout(function() {
                leftTom.classList.remove("animate--beat");
            }, off);
        }
        else if(simonSeq[j] == 3) {
            rightTom.classList.add("animate--beat");
            setTimeout(function() {
                rightTom.classList.remove("animate--beat");
            }, off);
        }
        else if(simonSeq[j] == 4) {
            kickDrum.classList.add("animate--beat");
            setTimeout(function() {
                kickDrum.classList.remove("animate--beat");
            }, off);
        }
        else if(simonSeq[j] == 5) {
            rightCymbal.classList.add("cymbal-shake");
            setTimeout(function() {
                rightCymbal.classList.remove("cymbal-shake");
            }, off);
        }
        else if(simonSeq[j] == 6) {
            leftCymbal.classList.add("move-cymbal-down");
            setTimeout(function() {
                leftCymbal.classList.remove("move-cymbal-down");
            }, off);
        }
        j++;
        console.log(j);
        console.log(count);
        if(j == count){
            clearInterval(x);
        }

    }, on);
}