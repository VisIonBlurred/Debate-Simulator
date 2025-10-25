import { motion } from "framer-motion";

function ChatBubble({ message, speaker }) {
  const isYapper = speaker.includes("Yapper");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`max-w-lg px-4 py-3 rounded-2xl shadow-md my-3 ${
        isYapper
          ? "self-start bg-indigo-100 text-indigo-900"
          : "self-end bg-purple-100 text-purple-900"
      }`}
    >
      <p className="font-semibold mb-1">{speaker}</p>
      <p className="text-sm leading-relaxed">{message}</p>
    </motion.div>
  );
}

export default ChatBubble;
