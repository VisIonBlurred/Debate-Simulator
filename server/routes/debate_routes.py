from flask import Blueprint, request, jsonify
from services.debate_engine import DebateEngine

debate_bp = Blueprint("debate", __name__)

@debate_bp.route("/start_debate", methods=["POST"])
def start_debate():
    data = request.get_json()
    topic = data.get("topic")
    rounds = int(data.get("rounds", 3))

    debate = DebateEngine(topic, rounds)
    result = debate.start_debate()

    return jsonify({"topic": topic, "rounds": rounds, "debate": result})
