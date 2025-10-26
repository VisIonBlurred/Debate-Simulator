import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { startDebate } from "../utils/api";
import ChatBubble from "../components/ChatBubble";
import LoadingSpinner from "../components/LoadingSpinner";

function DebateRoom() {
  const location = useLocation();
  const navigate = useNavigate();
  const bottomRef = useRef(null);
  const { topic, mode } = location.state || {};

  const [debateData, setDebateData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState(null); // for later use

  useEffect(() => {
    if (!topic) {
      navigate("/");
      return;
    }

    const fetchDebate = async () => {
      try {
        const data = await startDebate(topic, 2);
        setDebateData(data.debate);
        setSummary(data.summary || null); // if your backend returns one
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDebate();
  }, [topic, navigate]);

  // Auto-scroll to bottom when new debate messages arrive
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [debateData]);

  return (
    <div className="flex flex-col items-center px-4 py-10 min-h-screen bg-gradient-to-b from-[#0a0a1a] to-[#0e0e2a] text-gray-200">
      <h2 className="text-3xl font-bold mb-2 text-purple-400">{topic}</h2>
      <p className="text-gray-400 mb-6">
        Mode: {mode === "yapper" ? "Professional Yapper" : "Experienced Watcher"}
      </p>

      <div className="flex flex-col w-full max-w-2xl bg-slate-800/60 rounded-2xl p-6 overflow-y-auto max-h-[75vh] shadow-lg border border-slate-700">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {debateData.map((entry, index) => (
              <div key={index} className="mb-6">
                {/* 🧩 Round separator every 2 messages */}
                {index % 2 === 0 && (
                  <div className="text-center text-sm text-gray-400 my-3">
                    — Round {Math.floor(index / 2) + 1} —
                  </div>
                )}

                <ChatBubble message={entry.message} speaker={entry.speaker} />
              </div>
            ))}

            {/* 🧠 Optional: summarizer card */}
            {summary && (
              <div className="bg-[#1a1a3d] p-5 rounded-xl shadow-md mt-6 text-center border border-slate-600">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">
                  🧠 Debate Summary
                </h3>
                <p className="text-gray-300">{summary}</p>
              </div>
            )}

            {/* Keeps scroll at the end */}
            <div ref={bottomRef} />
          </>
        )}
      </div>
    </div>
  );
}

export default DebateRoom;
