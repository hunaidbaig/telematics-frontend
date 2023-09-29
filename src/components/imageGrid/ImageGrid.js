// ImageGrid.js
import React, { useState, useEffect } from "react";
import "./ImageGrid.css";
function ImageGrid() {
  const [images, setImages] = useState([]);
  const [gridClass, setGridClass] = useState("grid-2");

  useEffect(() => {
    const fetchImages = async () => {
     
      const dummyImages = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWr0M7oepymXhohPpSetQOlpeEvxw1rCiKQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWr0M7oepymXhohPpSetQOlpeEvxw1rCiKQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWr0M7oepymXhohPpSetQOlpeEvxw1rCiKQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWr0M7oepymXhohPpSetQOlpeEvxw1rCiKQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWr0M7oepymXhohPpSetQOlpeEvxw1rCiKQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWr0M7oepymXhohPpSetQOlpeEvxw1rCiKQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWr0M7oepymXhohPpSetQOlpeEvxw1rCiKQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWr0M7oepymXhohPpSetQOlpeEvxw1rCiKQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWr0M7oepymXhohPpSetQOlpeEvxw1rCiKQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWr0M7oepymXhohPpSetQOlpeEvxw1rCiKQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWr0M7oepymXhohPpSetQOlpeEvxw1rCiKQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWr0M7oepymXhohPpSetQOlpeEvxw1rCiKQ&usqp=CAU",
      ];

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setImages(dummyImages);
    };

    fetchImages();
  }, []);

  const changeGrid = (gridSize) => {
    setGridClass(`grid-${gridSize}`);
  };

  return (
    <div>
      <div className="header">
        <button
          className={`btn ${gridClass === "grid-1" ? "active" : ""}`}
          onClick={() => changeGrid(1)}
        >
          1
        </button>
        <button
          className={`btn ${gridClass === "grid-2" ? "active" : ""}`}
          onClick={() => changeGrid(2)}
        >
          2
        </button>
        <button
          className={`btn ${gridClass === "grid-3" ? "active" : ""}`}
          onClick={() => changeGrid(3)}
        >
          3
        </button>
      </div>

      <div className={`row ${gridClass}`}>
        {images.map((imageUrl, index) => (
          <div className="column" key={index}>
            <img
              src={imageUrl}
              alt={`${index}`}
              style={{ width: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
