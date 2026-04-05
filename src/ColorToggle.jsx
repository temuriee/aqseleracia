import React, { useState, useEffect } from "react";

function ColorToggle() {
  const [color, setColor] = useState("black");

  // ჩატვირთვისას წაიკითხოს შენახული ფერი
  useEffect(() => {
    const savedColor = localStorage.getItem("textColor");
    if (savedColor) {
      setColor(savedColor);
    }
  }, []);

  // ფერის შეცვლა + შენახვა
  const handleColorChange = (newColor) => {
    setColor(newColor);
    localStorage.setItem("textColor", newColor);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <div className="flex gap-3">
        <button
          onClick={() => handleColorChange("white")}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          White
        </button>

        <button
          onClick={() => handleColorChange("black")}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
        >
          Black
        </button>
      </div>

      <p
        className={`text-lg font-medium ${
          color === "white" ? "text-white bg-black p-2 rounded" : "text-black"
        }`}
      >
        This is a paragraph with changing styles!
      </p>
    </div>
  );
}

export default ColorToggle;
