from flask import Flask, jsonify
import json

app = Flask(__name__)

# Função para carregar dados do JSON
def carregar_dados():
    with open("dados.json", "r", encoding="utf-8") as arquivo:
        return json.load(arquivo)

# Rota para listar todas as notícias
@app.route("/api/noticias", methods=["GET"])
def listar_noticias():
    return jsonify(carregar_dados())

if __name__ == "__main__":
    app.run(debug=True, port=5000)


# http://localhost:5000/api/noticiaskkkk