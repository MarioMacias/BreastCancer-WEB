from flask import Flask, render_template,request

app = Flask(__name__)

#Este es para el index
@app.route('/',methods=['GET','POST']) 
def formulario():
    if request.method == 'POST':
        peso = request.form.get("peso")
        estatura = request.form.get("estatura")
        fuma = request.form.get("fuma")
        toma = request.form.get("toma")
        return render_template("resultados.html",peso=peso,estatura=estatura,toma=toma,fuma=fuma)
        
    return render_template('formulario.html')

@app.route('/form1',methods=["POST"])
def form1():
    peso = request.form.get("peso")
    estatura = request.form.get("estatura")
    fuma = request.form.get("fuma")
    toma = request.form.get("toma")
    return render_template("resultados.html",peso=peso,estatura=estatura,toma=toma,fuma=fuma)

if __name__ == '__main__':
    app.run(debug=True)