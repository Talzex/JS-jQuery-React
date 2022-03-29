var level = 0;
var sequence = [];
var usedsequence = [];
var playing = false;
var animation = false;

function startGame() {
    if(!animation && !playing){
        animation = true;
        $(".level").text("level: " + (++level));
        RandomSequence()
        playSequence();
    }
    
}
function RandomSequence() {
    let allPads = $(".pad")
    let pad = allPads[Math.floor(Math.random() * allPads.length)]
    sequence.push(pad);
}


function playSequence() {
    for (var i = 0; i < sequence.length; i++) {
        var delayTime = i * 1000;
        setTimeout(AfficherSequence, delayTime);
    }
    animation = false;
    playing = true;
}

function AfficherSequence() {
    let pad = sequence.pop();
    console.log($(pad).children());
    $(pad).fadeTo(400, 0.5, function () {
        $(this).fadeTo(400, 1,)
        $(this).children()[0].play();
    });
    usedsequence.push(pad);
}

function click(){
    if(playing){
        var lost = false
        var item = usedsequence.shift();
        $(this).children()[0].play();
        $(this).fadeTo(400, 0.5, function () {
            function ckeckWin() {
                if(usedsequence.length == 0 && !lost){
                    playing = false;
                    startGame();
                }
            }
            $(this).fadeTo(400, 1, ckeckWin);
        });
        var itemvalue = $(item).attr("class").split("shape")[1]
        var played = $(this).attr("class").split("shape")[1];
        if (itemvalue != played) {
            lost = true;
            sequence = []
            level = 0;
            playing = false;
            $(".level").text("GameOver !!")
        }
        sequence.push(item);
    }
}

$(document).ready(function () {
    $(".circle").on("click", startGame);
    $(".pad").on("click", click);
});
