export default function Navbar() {
  return (
    <nav className="fixed px-4 top-0 z-10 inline-flex w-full items-center justify-between bg-pink-300/60 py-1 text-white text-xl font-bold shadow backdrop-blur-lg">
      <a href="/" className="uppercase cursor pointer inline-block px-3 py-1 rounded-full bg-pink-200 text-pink-800 font-semibold text-sm shadow-md select-none mr-2" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif", letterSpacing: "0.05em" }}>
        Code Café
      </a>
      <img src="/lesson-sanrio.png" alt="Logo" className="max-w-[120px]" />
    </nav>
  );
}
