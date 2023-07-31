from flask import Flask, render_template, request, redirect, session
from bson import ObjectId
from pymongo import MongoClient

app = Flask(__name__, static_folder='static')

client = MongoClient("mongodb://localhost:27017")
basedatos = client.paginas
mispaginas = basedatos.lista

# Rutas hacia las paginas


@app.route("/")
def pag_principal():
    return render_template('pagina.html')


@app.route("/our-product")
def pag_our_product():
    return render_template('product.html')


@app.route("/product")
def pag_producto():
    return render_template('pagina_compra.html')

# Ruta para la página de contacto (donde procesarías el formulario)


@app.route('/contact', methods=['POST'])
def contact():
    # Procesa el formulario y realiza las operaciones necesarias
    # Aquí puedes acceder a los datos del formulario con request.form
    return render_template('contact_response.html')


if __name__ == "__main__":
    app.run()
