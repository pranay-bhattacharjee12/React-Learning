import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  // Dynamic color list
  const colors = ["red", "green", "blue", "black", "purple", "orange"];

  // Random HEX color generator
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let randomColor = "#";

    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }

    setColor(randomColor);
  };

  return (
    <div
      className="w-full h-screen transition-all duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-3xl">

          {/* Dynamic Color Buttons */}
          {colors.map((clr) => (
            <button
              key={clr}
              onClick={() => setColor(clr)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg capitalize hover:scale-105 transition"
              style={{ backgroundColor: clr }}
            >
              {clr}
            </button>
          ))}

          {/* Random Color Button */}
          <button
            onClick={generateRandomColor}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gray-700 hover:scale-105 transition"
          >
            Random
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
