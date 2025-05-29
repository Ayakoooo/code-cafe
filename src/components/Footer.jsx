export default function Footer() {
  return (
    <footer className="sticky bottom-0 flex justify-center items-center flex-col text-center py-[20vh] text-pink-600 bg-gradient-to-t from-pink-100 to-pink-50 ">
      <p className="mb-4 text-lg text-pink-400">Keep shining and learning ✨</p>
      <div className="flex text-6xl justify-center items-center gap-2 uppercase font-extralight">
        <span>Made with</span>
        <span className="animate-bounce">💖</span>
        <span>by Sanrio Team!</span>
      </div>
      <ul className="flex items-center gap-4 border-y-2 py-4 mt-6">
        <li>WELCOME PAGE</li>
        <li>KUROMI'S INTRODUCTION</li>
        <li>MAKING FRIENDS</li>
        <li>SWEET HOME TO STAY</li>
        <li>EXPRESSING LOVE</li>
        <li>POMPOMPURIN'S RECIPE</li>
        <li>FINAL CONGRATULATIONS</li>
      </ul>
    </footer>
  );
}
