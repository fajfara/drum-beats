var generatedSeq = [0,1,2,3,0,1,4];
var firstDrum = document.getElementById("kick-drum"); 

function startGame () {
    for(let i = 0; i < generatedSeq.length; i++){
        console.log(generatedSeq[i]);
        if(generatedSeq[i] == 0){
            firstDrum.classList.add("animate--beat");
            firstDrum.classList.remove("animate--beat");
            
        }
    }
}

window.onload = function() {
    startGame();
}