from flask import Flask, render_template, request, redirect, jsonify, url_for, send_from_directory
from bson import ObjectId
from pymongo import MongoClient
import os

app = Flask(__name__, static_folder='static')

client = MongoClient("mongodb://localhost:27017")
basedatos = client.paginas
misencargos = basedatos.lista

# Rutas hacia las paginas


@app.route("/")
def pag_principal():
    return send_from_directory(app.root_path, 'index.html')


@app.route("/our-product")
def pag_our_product():
    return render_template('product.html')


@app.route("/product")
def pag_producto():
    return render_template('pagina_compra.html')



@app.route('/resumen_compra')
def pag_carrito():
    # Puedes hacer aquí cualquier proceso necesario antes de renderizar la página su_carrito.html
    return render_template('resumen_compra.html')
    


# Redirigir a galeria
@app.route("/principal_galeria")
def pag_principal_galeria():
    return redirect(url_for('galeria', _anchor='galeria'))

@app.route("/galeria")
def galeria():
    return send_from_directory(app.root_path, 'index.html')



# Redirigir a contacto
@app.route("/principal_contacto")
def pag_principal_contacto():
    return redirect(url_for('contact', _anchor='contact'))

@app.route("/contact")
def contacto():
    return send_from_directory(app.root_path, 'index.html')









# Ruta para la página de contacto (donde procesarías el formulario)


@app.route('/contact', methods=['POST'])
def contact():
    # Procesa el formulario y realiza las operaciones necesarias
    # Aquí puedes acceder a los datos del formulario con request.form
    return render_template('contact_response.html')


if __name__ == "__main__":
    print(os.path.abspath(app.template_folder))
    app.run()
