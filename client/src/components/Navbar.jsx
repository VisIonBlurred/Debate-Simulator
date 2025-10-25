function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-slate-950/60 backdrop-blur-md border-b border-slate-700 shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-indigo-400">AI Debate Arena</h1>
      <div className="space-x-6">
        <a href="/" className="hover:text-indigo-400 transition">Home</a>
        <a href="#" className="hover:text-indigo-400 transition">About</a>
        <a href="https://github.com/" target="_blank" className="hover:text-indigo-400 transition">GitHub</a>
      </div>
    </nav>
  );
}

export default Navbar;
