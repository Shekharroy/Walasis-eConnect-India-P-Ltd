import React, { useState } from "react";
import "./InputBox.css";

function InputBox() {
  const [inputValues, setInputValues] = useState([""]); // Initial state with an empty input

  const handleAddInput = () => {
    setInputValues([...inputValues, ""]); // Add a new empty input to the state
  };

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleRemoveInput = (index) => {
    const newInputValues = [...inputValues];
    newInputValues.splice(index, 1);
    setInputValues(newInputValues);
  };

  return (
    <div>
      <section className="container text-center row d-flex flex-column justify-content-center align-items-center">
        {inputValues.map((input, index) => (
          <div className="col-md-12 mb-2" key={index}>
            <input
              type="text"
              value={input}
              className="ClassInputBox mb-2"
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
            <span className="mx-2 d-flex justify-content-end align-item-center">
              <button
                className="btn btn-outline-info"
                onClick={() => handleRemoveInput(index)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </span>
          </div>
        ))}
        <div className="col-md-12 mb-2">
          <button
            onClick={handleAddInput}
            className="btn btn-outline-info ClassBtnBox"
          >
            <i className="bi bi-plus" style={{ fontSize: "48px" }}></i>
          </button>
        </div>
      </section>
    </div>
  );
}

export default InputBox;
