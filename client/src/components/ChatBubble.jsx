import { motion } from "framer-motion";

function ChatBubble({ message, speaker, index }) {
  // 🎨 Assign side and color based on the speaker
  const isLeft =
    speaker.toLowerCase().includes("yapper") ||
    speaker.toLowerCase().includes("researcher") ||
    speaker.toLowerCase().includes("ethicist");

  const bubbleStyle = isLeft
    ? "bg-indigo-600/80 text-white self-start rounded-tr-2xl rounded-bl-none"
    : "bg-purple-600/80 text-white self-end rounded-tl-2xl rounded-br-none";

  const nameStyle = isLeft ? "text-indigo-300" : "text-purple-300";

  return (
    <motion.div
      className={`flex flex-col mb-4 max-w-[80%] ${
        isLeft ? "items-start" : "items-end ml-auto"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className={`text-sm font-semibold mb-1 ${nameStyle}`}>
        {speaker}
      </span>
      <div className={`px-4 py-3 ${bubbleStyle} shadow-md`}>
        <p className="text-sm leading-relaxed">{message}</p>
      </div>
    </motion.div>
  );
}

export default ChatBubble;
