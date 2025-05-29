import { useState, useEffect } from "react";
export default function Editor({ magic, starterCode = "" }) {
  const [code, setCode] = useState(starterCode);

  useEffect(() => {
    setCode(magic);
  }, [magic]);

  const runCode = () => {
    try {
      eval(`${starterCode}\n${code}`);
    } catch {
      alert("Oops! Something’s wrong.");
    }
  };

  return (
    <div>
      <small className="font-bold">YOUR'S MAGIC ❤️</small>
      <textarea
        className="w-full p-4 rounded-xl font-mono bg-pink-100 text-purple-700 text-sm leading-relaxed outline-none resize-none shadow-inner border-2 border-pink-300 focus:ring-4 focus:ring-pink-200"
        style={{
          fontFamily: "'Fira Code', monospace",
          whiteSpace: "pre",
          tabSize: 2,
        }}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={12}
        spellCheck="false"
        onKeyDown={(e) => {
          if (e.key === "Tab") {
            e.preventDefault();
            const start = e.target.selectionStart;
            const end = e.target.selectionEnd;
            const newCode = code.slice(0, start) + " " + code.slice(end);
            setCode(newCode);
            setTimeout(() => {
              e.target.selectionStart = e.target.selectionEnd = start + 2;
            });
          }
        }}
      />

      <button onClick={runCode} className="cursor-pointer uppercase font-bold mt-2 bg-green-400 hover:bg-green-500 text-white px-4 py-1 rounded-lg">
        Run 🍓
      </button>
    </div>
  );
}
