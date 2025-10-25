from utils.groq_client import call_groq

class DebateEngine:
    def __init__(self, topic, rounds=3):
        self.topic = topic
        self.rounds = rounds
        self.history = []
        self.personas = [
            {"name": "Professional Yapper", "style": "Logical and structured"},
            {"name": "Devil’s Advocate", "style": "Critical and contrarian"},
        ]

    def generate_message(self, persona, context):
        prompt = f"""
        You are {persona['name']}, a debater known for being {persona['style']}.
        The debate topic is: "{self.topic}".
        Here’s what has been said so far:
        {context}

        Now provide your next argument or counterpoint (2–3 sentences).
        """
        return call_groq(prompt)

    def start_debate(self):
        context = f"Topic: {self.topic}"
        for round_num in range(1, self.rounds + 1):
            print(f"\n🗣️ Round {round_num}:")
            for persona in self.personas:
                msg = self.generate_message(persona, context)
                self.history.append({"speaker": persona["name"], "message": msg})
                context += f"\n{persona['name']}: {msg}"
        return self.history
