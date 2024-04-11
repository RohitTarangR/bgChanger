import React from "react";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen transition-all duration-300"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor("gray")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: "gray" }}
            >
              Gray
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("lavender")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: "lavender" }}
            >
              Lavender
            </button>
            <button
              onClick={() => setColor("white")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;