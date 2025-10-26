import { useState } from "react";
import randomTopics from "../utils/randomTopics";

function TopicInput({ onSubmit }) {
  const [topic, setTopic] = useState("");

  const handleSurprise = () => {
    const newTopic = randomTopics[Math.floor(Math.random() * randomTopics.length)];
    setTopic(newTopic);
  };

  return (
    <div className="flex flex-col items-center mt-8 space-y-4">
      <input
         type="text"
        placeholder="Enter a debate topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="
          w-full max-w-md px-4 py-3 
          rounded-xl 
          text-slate-100
          bg-slate-800 
          placeholder-slate-400 
          outline-none 
          ring-2 ring-transparent focus:ring-2 focus:ring-indigo-400
          border border-slate-600 focus:border-indigo-400
          shadow-md focus:shadow-indigo-500/30
          "
        />

      <div className="flex gap-4">
        <button
          onClick={() => onSubmit(topic)}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md transition"
        >
          Start Debate
        </button>
        <button
          onClick={handleSurprise}
          className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg shadow-md transition"
        >
          🎲 Surprise Me
        </button>
      </div>
    </div>
  );
}

export default TopicInput;
