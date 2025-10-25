import { useState } from "react";
import ModeSelector from "../components/ModeSelector";
import TopicInput from "../components/TopicInput";
import { useNavigate } from "react-router-dom";

function Home() {
  const [mode, setMode] = useState(null);
  const navigate = useNavigate();

  const handleTopicSubmit = (topic) => {
    navigate("/debate", { state: { topic, mode } });
  };

  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-16">
      <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
        AI Debate Arena
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl">
        Engage with AI or watch multiple personas battle it out on any topic you choose.
      </p>

      {!mode ? (
        <ModeSelector onSelect={setMode} />
      ) : (
        <TopicInput onSubmit={handleTopicSubmit} />
      )}
    </div>
  );
}

export default Home;
