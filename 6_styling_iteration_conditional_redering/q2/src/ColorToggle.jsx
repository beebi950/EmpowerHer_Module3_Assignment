import { useState } from "react";

const ColorToggle = () => {
  const [isRed, setIsRed] = useState(true);

  const divStyle = {
    width: "200px",
    padding: "20px",
    color: "white",
    backgroundColor: isRed ? "red" : "blue",
    textAlign: "center",
    marginBottom: "10px",
  };

  return (
    <div>
      <div style={divStyle}>
        Color Toggle Box
      </div>

      <button onClick={() => setIsRed(!isRed)}>
        Toggle Color
      </button>
    </div>
  );
};

export default ColorToggle;
