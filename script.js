alert("Click nos baloes e faça pontos!!!")

window.onload = function() {

iniciar1();
}
function iniciar1() {
    addbola1();
    addbola2();
    addbola3();
    addbola4();
    
}

function addbola1() {
    var tempo10 = Math.floor(Math.random() * 5000);
    setInterval(()=>{
        var bola1 = document.createElement("div");
    bola1.setAttribute("class","bola1");
        var p1 = Math.floor(Math.random() *90);
    var p2 = Math.floor(Math.random() * 90);
    bola1.setAttribute("style","left:"+p1+"%;top:"+p2+"%;");
    bola1.setAttribute("onclick","estourar(this)" );

    document.body.appendChild(bola1);
    
    }, tempo10);
    
}

function addbola2() {
    var tempo10 = Math.floor(Math.random() * 5000);
    setInterval(()=>{
        var bola2 = document.createElement("div");
        bola2.setAttribute("class","bola2");
        var p1 = Math.floor(Math.random() * 90);
        var p2 = Math.floor(Math.random() * 90);
        bola2.setAttribute("style","left:"+p1+"%;top:"+p2+"%;");
        bola2.setAttribute("onclick","estourar(this)" );

        document.body.appendChild(bola2);
    
    }, tempo10);
    
}

function addbola3() {
    var tempo10 = Math.floor(Math.random() * 5000);
    setInterval(()=>{
        var bola3 = document.createElement("div");
        bola3.setAttribute("class","bola3");
        var p1 = Math.floor(Math.random() * 90);
        var p2 = Math.floor(Math.random() * 90);
        bola3.setAttribute("style","left:"+p1+"%;top:"+p2+"%;");
        bola3.setAttribute("onclick","estourar(this)" );

        document.body.appendChild(bola3);
    
    }, tempo10);
    
}


function addbola4() {
    var tempo10 = Math.floor(Math.random() * 5000);
    setInterval(()=>{
        var bola4 = document.createElement("div");
        bola4.setAttribute("class","bola4");
        var p1 = Math.floor(Math.random() * 90);
        var p2 = Math.floor(Math.random() * 90);
        bola4.setAttribute("style","left:"+p1+"%;top:"+p2+"%;");
        bola4.setAttribute("onclick","estourar(this)" );

        document.body.appendChild(bola4);
    
    }, tempo10);
    
}

/*
function addbola2() {
    var bola2 = document.createElement("div");
    bola2.setAttribute("class","bola2");
    setInterval(addbola1, Math.floor(Math.random() * 5000));
    var p1 = Math.floor(Math.random() * 900);
    var p2 = Math.floor(Math.random() * 600);
    bola2.setAttribute("style","left:"+p1+"px;top:"+p2+"px;");
    bola2.setAttribute("onmouseover","estourar(this)" );

    document.body.appendChild(bola2)
    
}

function addbola3() {
    var bola3 = document.createElement("div");
    bola3.setAttribute("class","bola3");
    setInterval(addbola1, Math.floor(Math.random() * 5000));
    var p1 = Math.floor(Math.random() * 900);
    var p2 = Math.floor(Math.random() * 600);
    bola3.setAttribute("style","left:"+p1+"px;top:"+p2+"px;");
    bola3.setAttribute("onmouseover","estourar(this)" );

    document.body.appendChild(bola3)
    
}
*/
var count = 0;
function estourar(elemento) {
    document.body.removeChild(elemento);
    
    document.getElementById("resultado").innerHTML = count++;
    console.log ("count")
}/*
var tempo1 = Math.floor(Math.random() * 5000);
var tempo2 = Math.floor(Math.random() * 5000);
var tempo3 = Math.floor(Math.random() * 5000);
var tempo4 = Math.floor(Math.random() * 5000);*/
