let ranarr=[];
let userarr=[];
let start=false;
let level=0;
let h3=document.querySelector("h3");
let body=document.querySelector("body");
function random(){
    return "c"+(Math.floor(Math.random()*4)+1);
}

document.addEventListener("dblclick", function(event){
    if(start===false) {
        console.log("Game Started");
        start = true;
        setTimeout(levelUp,1000);
    }
});

function gameFlash(child){
    if (child) { // Check if child is not null
        child.classList.add("flash");
        setTimeout(function(){
            child.classList.remove("flash");
        },500);
    } else {
        console.error("Element not found");
    }
}

function userFlash(child){
    child.classList.add("userflash");
    setTimeout(function(){
        child.classList.remove("userflash");
    },200)
}

function levelUp(){
    userarr=[];
    level++;
    h3.innerText=`Level ${level}`;
    let rb="c" + (Math.floor(Math.random() * 4) + 1);
    let selBtn=document.querySelector(`.${rb}`);
    // console.log(selBtn);
    // console.log(`${rb}`);
    ranarr.push(rb);
    gameFlash(selBtn);
    console.log(ranarr);
}

function btnPress(){
    if(start===true){
        // console.log(this);
        userFlash(this);
        userarr.push(this.getAttribute("id"));
        console.log(this.getAttribute("id"));
        chkSeq(userarr.length-1);
    }
}
let allbtn=document.querySelectorAll(".child");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

function chkSeq(idx){
    if(userarr[idx]==ranarr[idx]){
        if(userarr.length==ranarr.length){
            setTimeout(levelUp,500);
        }
    }else{
        h3.innerText=`Your score is ${level}\n`+'"Game Over !" You enter a wrong sequence.\n Now double click to restart the game';
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor="rgb(101,110,89)";
        },200);
        reset();
    }
}
function reset(){
    userarr=[];
    ranarr=[];
    start=false;
    level=0;
}


