/*import { useState } from "react";

function App() {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [debate, setDebate] = useState([]);

  const handleDebate = async () => {
    if (!topic.trim()) return alert("Enter a topic first!");
    setLoading(true);
    setDebate([]);

    try {
      const response = await fetch("http://127.0.0.1:5000/start_debate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, rounds: 2 }),
      });

      const data = await response.json();
      setDebate(data.debate);
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">💬 Debate Simulator</h1>

      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Enter a topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="px-4 py-2 rounded-lg text-black w-80"
        />
        <button
          onClick={handleDebate}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
        >
          {loading ? "Simulating..." : "Start Debate"}
        </button>
      </div>

      {debate.length > 0 && (
        <div className="bg-gray-800 p-4 rounded-lg max-w-2xl w-full space-y-3">
          {debate.map((turn, i) => (
            <div key={i} className="p-3 border-b border-gray-700">
              <h3 className="font-semibold text-blue-400">{turn.speaker}</h3>
              <p className="text-gray-300">{turn.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DebateRoom from "./pages/DebateRoom";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/debate" element={<DebateRoom />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
