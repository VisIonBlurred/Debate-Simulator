from flask import Blueprint, request, jsonify
from services.debate_engine import DebateEngine
from services.synthesizer import generate_summary

debate_bp = Blueprint("debate", __name__)

@debate_bp.route("/start_debate", methods=["POST"])
def start_debate():
    data = request.get_json()
    topic = data.get("topic")
    rounds = int(data.get("rounds", 3))

    debate = DebateEngine(topic, rounds)
    result = debate.start_debate()

    summary = generate_summary(topic, result)
    return jsonify({"topic": topic, "rounds": rounds, "debate": result, "summary": summary })
