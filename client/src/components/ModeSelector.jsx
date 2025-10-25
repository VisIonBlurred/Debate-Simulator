function ModeSelector({ onSelect }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center mt-10">
      <button
        onClick={() => onSelect("yapper")}
        className="bg-indigo-500 hover:bg-indigo-600 px-6 py-4 rounded-xl shadow-lg transition transform hover:scale-105"
      >
        🧠 Professional Yapper
      </button>

      <button
        onClick={() => onSelect("watcher")}
        className="bg-purple-500 hover:bg-purple-600 px-6 py-4 rounded-xl shadow-lg transition transform hover:scale-105"
      >
        👀 Experienced Watcher
      </button>
    </div>
  );
}

export default ModeSelector;
