
var screen = document.querySelector(".screen");
var btn = document.querySelectorAll(".btn");

for(item of btn){
item.addEventListener("click",(e)=>{
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

    screen.value += btn_text;
});
}

function result(){
    try{
        screen.value = eval(screen.value);
    }
    catch(error){
        alert("Invalid!");
    }
}

function clear(){
    screen.value = "";
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
    num = result.value;

    for(i=1;i<=num;i++){
        f = f * i;
    }

    result.value = f;
}

function sqrt(){
    result.value = Math.sqrt(result.value);
}



