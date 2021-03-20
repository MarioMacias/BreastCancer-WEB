addEventListener('DOMContentLoaded', () =>{
    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('muestra')
        })
    }
})

var bg =document.querySelector('#bg');
window.addEventListener('scroll',function(){
    var value = window.scrollY;
    bg.style.backgroundSize = 300 + value*2+"px";
})

var numPanel = 1;
var totalPanel = 2;

function siguienteForm(){
    if(numPanel == totalPanel) return;
    
    var panelActual = "panel"+numPanel;
    var panelSiguiente = "panel";
    var panelA = document.getElementById(panelActual);
    numPanel++;
    panelSiguiente = panelSiguiente+numPanel;
    var panelS = document.getElementById(panelSiguiente);
    
    panelA.style.display = "none";
    panelS.style.display = "block";
}

function anteriorForm(){
    if(numPanel == 1) return;

    var panelActual = "panel"+numPanel;
    var panelSiguiente = "panel";
    var panelA = document.getElementById(panelActual);
    numPanel--;
    panelSiguiente = panelSiguiente+numPanel;
    var panelS = document.getElementById(panelSiguiente);
    
    panelA.style.display = "none";
    panelS.style.display = "block";
}