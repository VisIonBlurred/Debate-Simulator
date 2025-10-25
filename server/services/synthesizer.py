from utils.groq_client import call_groq , groq_client

def generate_summary(topic, debate):
    """Creates a concise summary of the debate"""
    conversation_text = "\n".join(
        [f"{msg['speaker']}: {msg['message']}" for msg in debate]
    )

    prompt = f"""
    Topic: {topic}

    Debate Transcript:
    {conversation_text}

    Please provide a neutral, insightful summary of the key arguments from both sides.
    Focus on fairness and clarity.
    """

    response = groq_client.chat.completions.create(
        model="llama-3.3-70b-versatile",  # or your chosen model
        messages=[
            {"role": "system", "content": "You are an objective debate summarizer.So summarize everything that has happened like a human would. No need to go in depth.Keep it around 100 words"
            },
            {"role": "user", "content": prompt}
        ],
    )

    return response.choices[0].message.content.strip()
