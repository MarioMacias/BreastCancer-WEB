from flask import Flask, render_template, request
from forms import *
app = Flask(__name__)

app.secret_key = "@proy321"
data = []
famele = True

#Este es para el index
@app.route('/',methods=['GET','POST']) 
def index():
     return render_template('prueba.html')

@app.route('/formulario/<panel>', methods=['GET', 'POST'])
def formulario(panel=1):
    form = Bloque1Form()
    return render_template('formulario.html',panel=panel, form = form)
    # if request.method == 'POST':
    #     peso = request.form.get("peso")
    #     estatura = request.form.get("estatura")
    #     fuma = request.form.get("fuma")
    #     toma = request.form.get("toma")
    #     list = [["peso",peso],["estatura",estatura], ["fuma",fuma], ["toma",toma]]
    #     data.append(list)

# @app.route('/agregarDatos')
# def agregarDatos():
#    return render_template('formulario.html', form=form)

if __name__ == '__main__':
    app.run(debug=True)