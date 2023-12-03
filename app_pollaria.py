from flask import Flask, render_template, request, redirect, jsonify, url_for, send_from_directory
from bson import ObjectId
from pymongo import MongoClient
import os


app = Flask(__name__, static_folder='static')

client = MongoClient("mongodb://localhost:27017")
basedatos = client.paginas
misencargos = basedatos.lista




# # Rutas hacia la pagina
# @app.route("/")
# def pag_principal():
#     return send_from_directory(app.root_path, 'index.html')

# # Redirigir a galeria
# @app.route("/principal_galeria")
# def pag_principal_galeria():
#     return redirect(url_for('galeria', _anchor='galeria'))

# @app.route("/galeria")
# def galeria():
#     return send_from_directory(app.root_path, 'index.html')


# # Redirigir a contacto
# @app.route("/principal_contacto")
# def pag_principal_contacto():
#     return redirect(url_for('contact', _anchor='contact'))

# @app.route("/contact")
# def contacto():
#     return send_from_directory(app.root_path, 'index.html')




if __name__ == "__main__":
    print(os.path.abspath(app.template_folder))
    app.run()
