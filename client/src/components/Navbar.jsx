import logo from '../assets/logos/logo-png.png';
function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-slate-950/60 backdrop-blur-md border-b border-slate-700 shadow-md sticky top-0 z-50">
      {/* Left Placeholder (optional future button/logo) */}
      <div className="w-32 flex items-center">
        <img src={logo} alt="Logo" className="h-8" />
      </div>

      {/* Center Title */}
      <div className="flex-grow text-center">
        <a href="/" className="hover:text-indigo-400 text-[56px] font-bold text-indigo-400">
          Yap Battle
        </a>
      </div>

      {/* Right Links */}
      <div className="w-32 flex justify-end space-x-6">
        <a href="#" className="hover:text-indigo-400 transition">About</a>
        <a href="https://github.com/VisIonBlurred/Debate-Simulator/" target="_blank" className="hover:text-indigo-400 transition">GitHub</a>
      </div>
    </nav>
  );
}

export default Navbar;
