addEventListener('DOMContentLoaded', () =>{
    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('muestra')
        })
    }
})

addEventListener('DOMContentLoaded', () =>{
    var numA = document.getElementById('panelAct').value;
    // var numS = document.getElementById('panelSig').value;

    var sPA = "panel"+numA;
    // var sPS = "panel"+numS;
    // alert(sPA);
    // alert(sPS);
    var panelActual = document.getElementById(sPA);
    // var panelSiguiente = document.getElementById(sPS);

    panelActual.style.display = "block";
    //panelSiguiente.style.display = "block";
})

var bg =document.querySelector('#bg');
window.addEventListener('scroll',function(){
    var value = window.scrollY;
    bg.style.backgroundSize = 300 + value*2+"px";
})

function siguienteForm(){
    // var panelA = document.getElementById(panelActual);
    // numPanel++;
    // panelSiguiente = panelSiguiente+numPanel;
    // var panelS = document.getElementById(panelSiguiente);
    
    // panelA.style.display = "none";
    // panelS.style.display = "block";

    // var form = "form" + formActual;
    var numA = document.getElementById('panelAct').value;
    var numS = document.getElementById('panelSig').value;

    var sPA = "panel"+numA;
    var sPS = "panel"+numS;
    
    var panelActual = document.getElementById(sPA);
    var panelSiguiente = document.getElementById(sPS);

    panelActual.style.display = "none";
    panelSiguiente.style.display = "block";
var p = "form" + numA;
alert(p);
    var form = document.getElementById(p);

    document.getElementById(form).submit();
}

// function anteriorForm(){
//     if(numPanel == 1) return;

//     var panelActual = "panel"+numPanel;
//     var panelSiguiente = "panel";
//     var panelA = document.getElementById(panelActual);
//     numPanel--;
//     panelSiguiente = panelSiguiente+numPanel;
//     var panelS = document.getElementById(panelSiguiente);
    
//     panelA.style.display = "none";
//     panelS.style.display = "block";
// }