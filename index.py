from flask import Flask, render_template, request, redirect, url_for
from forms import *
app = Flask(__name__)

app.secret_key = "@proy321"
data = []

#Este es para el index
@app.route('/',methods=['GET','POST']) 
def index():
     return render_template('prueba.html')

@app.route('/formulario', methods=['GET', 'POST'])
def formulario():
    form = Bloque1Form(request.form)

    if request.method == 'POST':
        panel = form.panel.data
        if panel == "1":
            return render_template('formulario.html', panelAct = 2, form = form)
        elif panel == "2":
            return render_template('formulario.html', panelAct = 3, form = form)

    return render_template('formulario.html',panelAct = 1, form = form)

@app.route('/guarda')
def guarda():
   print("entro")
if __name__ == '__main__':
    app.run(debug=True)