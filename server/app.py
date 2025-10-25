from flask import Flask
from flask_cors import CORS
from routes.debate_routes import debate_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(debate_bp)

@app.route("/")
def home():
    return {"message": "Debate Simulator API running!"}

if __name__ == "__main__":
    app.run(debug=True)
