// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Editor from "./Editor";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export default function LessonCard({ lesson, onNext }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div key={lesson.title} className="bg-white p-6  shadow-xl" variants={variants} initial="hidden" animate="visible" exit="exit">
        <div className="inline-flex justify-between items-center w-full">
          <h2 className="text-2xl font-bold mb-2">{lesson.title}</h2>
          {lesson.guide && <img src={`/${lesson.guide}`} alt="Guiding Sanrio" className="w-full max-w-24 object-cover" loading="lazy" width={100} height={120} />}
        </div>
        <div className="inline-flex items-start justify-start gap-2">
          <p className="mb-4 max-w-[65ch] ">{lesson.description}</p>
        </div>
        <div className="mb-4">
          <p className="mb-4 text-pink-800 font-semibold italic max-w-[80ch]">{lesson.task}</p>
        </div>
        <div className="mb-8">
          <small className="font-bold">STARTER</small>
          <code className="block bg-gray-100 text-sm text-pink-700 p-2 rounded-lg font-mono whitespace-pre-wrap">{lesson.starterCode}</code>
        </div>

        <Editor magic={lesson.magic} starterCode={lesson.starterCode} />

        <button onClick={onNext} className="cursor-pointer uppercase font-bold ml-auto block mt-4 bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-xl">
          Next
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
