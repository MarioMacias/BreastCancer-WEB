from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField, RadioField, HiddenField
from wtforms.validators import DataRequired

class Bloque1Form(FlaskForm):
    panel = HiddenField("panel")
    peso = IntegerField("¿Cuál es tu peso?", validators=[DataRequired()])
    estatura = DecimalField("¿Cuánto mides?", validators=[DataRequired()])
    fuma = RadioField('¿Regularmente fumas?', choices=[('Si fuma','Si'),('No fuma','No')], validators=[DataRequired()])
    toma = RadioField('¿Regularmente tomas bebidas alcohólicas?', choices=[('Si toma','Si'),('No toma','No')], validators=[DataRequired()])
    
    menopausia = RadioField('¿Ya pasó por la menopausia?', choices=[('Si','Si'),('No','No')], validators=[DataRequired()])
