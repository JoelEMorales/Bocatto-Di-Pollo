from flask import Flask, render_template, request, redirect, jsonify, url_for
from bson import ObjectId
from pymongo import MongoClient

app = Flask(__name__, static_folder='static')

client = MongoClient("mongodb://localhost:27017")
basedatos = client.paginas
misencargos = basedatos.lista

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


# @app.route('/buy', methods=['POST'])
# def buy():
#     try:
#         print("Received POST request to /buy")
#         productos = request.json  # Obtiene los datos enviados en el cuerpo de la solicitud

#         print("Received products:", productos)

#         # Aquí puedes manejar la inserción en la base de datos
#         for producto in productos:
#             #img = producto['imgSrc']
#             nombre = producto['nombre']
#             cantidadCaja = producto['cantidadCaja']
#             aclaracion = producto['aclaracion']

#             # Realiza la inserción en tu base de datos aquí
#             misencargos.insert_one({
#                 # "imagen": img,
#                 "producto": nombre,
#                 "cantidad": cantidadCaja,
#                 "opcion": aclaracion
#             })

#         # Redirige al usuario a la página su_carrito.html después de la inserción
#         return redirect(url_for('su_carrito'))
#     except Exception as e:
#         print("Error:", str(e))
#         return jsonify({'error': str(e)})


@app.route('/su_carrito')
def pag_carrito():
    # Puedes hacer aquí cualquier proceso necesario antes de renderizar la página su_carrito.html
    return render_template('su_carrito.html')








# Ruta para la página de contacto (donde procesarías el formulario)


@app.route('/contact', methods=['POST'])
def contact():
    # Procesa el formulario y realiza las operaciones necesarias
    # Aquí puedes acceder a los datos del formulario con request.form
    return render_template('contact_response.html')


if __name__ == "__main__":
    app.run()
