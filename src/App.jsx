import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import LessonCard from "./components/LessonCard";
import lessons from "./data/lessons";
import Footer from "./components/Footer";

const stars = Array.from({ length: 8 }, (_, i) => (
  <div
    key={i}
    className="sparkle-star"
    style={{
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      animationDelay: `${Math.random() * 3}s`,
    }}
  />
));

export default function App() {
  const [current, setCurrent] = useState(0);
  const lessonsContainer = useRef(null);

  const restoreScrollTop = () => {
    window.scrollTo(0, 0);
  };

  const nextLesson = () => {
    setCurrent((prev) => (prev + 1) % lessons.length);
    lessonsContainer.current.innerHTML = "";
    restoreScrollTop();
  };

  return (
    <>
      <div className="min-h-screen text-gray-700 relative overflow-hidden z-2">
        {stars}

        <Navbar />
        <main className="py-20">
          <LessonCard lesson={lessons[current]} onNext={nextLesson} />

          <div ref={lessonsContainer} className="lessons-container"></div>
        </main>
      </div>
      <Footer />
    </>
  );
}
