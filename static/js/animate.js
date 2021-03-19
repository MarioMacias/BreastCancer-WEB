var numPanel = 1;

function siguienteForm(){
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
    var panelActual = "panel"+numPanel;
    var panelSiguiente = "panel";
    var panelA = document.getElementById(panelActual);
    numPanel--;
    panelSiguiente = panelSiguiente+numPanel;
    var panelS = document.getElementById(panelSiguiente);
    
    panelA.style.display = "none";
    panelS.style.display = "block";
}