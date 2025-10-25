import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { startDebate } from "../utils/api";
import ChatBubble from "../components/ChatBubble";
import LoadingSpinner from "../components/LoadingSpinner";

function DebateRoom() {
  const location = useLocation();
  const navigate = useNavigate();
  const { topic, mode } = location.state || {};

  const [debateData, setDebateData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!topic) {
      navigate("/");
      return;
    }

    const fetchDebate = async () => {
      try {
        const data = await startDebate(topic, 2);
        setDebateData(data.debate);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDebate();
  }, [topic, navigate]);

  return (
    <div className="flex flex-col items-center px-4 py-10">
      <h2 className="text-3xl font-bold mb-2 text-indigo-400">{topic}</h2>
      <p className="text-gray-400 mb-6">Mode: {mode === "yapper" ? "Professional Yapper" : "Experienced Watcher"}</p>

      <div className="flex flex-col w-full max-w-2xl bg-slate-800/60 rounded-2xl p-6 overflow-y-auto max-h-[75vh] shadow-lg border border-slate-700">
        {loading ? (
          <LoadingSpinner />
        ) : (
          debateData.map((entry, index) => (
            <ChatBubble
              key={index}
              message={entry.message}
              speaker={entry.speaker}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default DebateRoom;
