
var screen = document.querySelector(".screen");
var btn = document.querySelectorAll(".btn");
let isResultDisplayed = false;
let lastResult = null;

function clearScreen() {
    screen.value = '';
    isResultDisplayed = false;
}

for(item of btn){
item.addEventListener("click",(e)=>{
    if (isResultDisplayed) {
        clearScreen();
    }

    if (lastResult !== null) {
        screen.value += lastResult; 
        lastResult = null; 
    }

    else{
    btn_text = e.target.innerText;

    if(btn_text == "⨯"){
        btn_text = "*";
    }

    if(btn_text == "÷"){
        btn_text = "/";
    }

    if(btn_text == "^"){
        btn_text = "**";
    }

    if(btn_text == '%'){
        btn_text = "/100";
    }

    screen.value += btn_text;
    }
});
}

function result(){
    try{
        screen.value = eval(screen.value);
        isResultDisplayed = true;
    }
    catch(error){
        alert("Invalid!");
    }
}


function pi(){
    screen.value = Math.PI;
}

function exp(){
    screen.value = Math.exp(screen.value);
}

function del(){
    screen.value = screen.value.slice(0,-1);
}

function sin(){
    screen.value = Math.sin(screen.value);
}

function cos(){
    screen.value = Math.cos(screen.value);
}

function tan(){
    screen.value = Math.tan(screen.value);
}

function log(){
    screen.value = Math.log(screen.value);
}


function fact(){
    let i, num, f;
    f = 1;
    num = screen.value;

    for(i=1;i<=num;i++){
        f = f * i;
    }

    screen.value = f;
}

function sqrt(){
    screen.value = Math.sqrt(screen.value);
}



