var timer = 6;
var score = 0;
var hitrn = 0;

//jispe click karoge wo  element par event raise hoga,aur event listner na milane par event element ke parent pr listner dhundega vaha bhi na milne pr event parent ke parent ke parent pr listner dhundega
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 78; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div> `;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
var timer = 60;
function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML ="";
        }
    }, 1000);
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = (Number(dets.target.textContent));
    if (clickednum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});
runtimer();
makeBubble();
getNewHit();