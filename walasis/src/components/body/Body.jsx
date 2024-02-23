import React, { useState } from "react";
// import MathQuill from "react-mathquill";
import "./Body.css";
import Editors from "../editor/Editors";
import SubHeader from "../subheader/SubHeader";
import InputBox from "../inputbox/InputBox";

function Body() {
  const [editorContent, setEditorContent] = useState([
    { type: "text", content: "" },
  ]);

  const handleAddElement = () => {
    alert("calling");
    setEditorContent([...editorContent, { type: "text", content: "" }]);
  };

  const handleDeleteElement = (index) => {
    const newInputValues = [...editorContent];
    newInputValues.splice(index, 1);
    setEditorContent(newInputValues);
  };

  const handleMathChange = (index, mathValue) => {
    const newEditorContent = [...editorContent];
    newEditorContent[index].content = mathValue;
    setEditorContent(newEditorContent);
  };
  return (
    <div>
      <section
        style={{ paddingTop: "4%", height: "100vh", overflow: "hidden" }}
      >
        <div className="row m-0">
          <div
            className="col-md-3 borderLeft"
            style={{ maxHeight: "90vh"}}
          >
            <div style={{maxHeight:"80vh", overflow:"auto"}}>
            <InputBox />
            </div>
            
            <div className="row mb-0">
              <div className="col-md-12 mb-2">
                <button type="button" className="btn btn-secondary w-100 text-center">
                  <i className="bi bi-search mx-2"></i>Search
                </button>
              </div>
              <div className="col-md-12">
                <button type="button" className="btn btn-primary w-100 text-center">
                  <i class="bi bi-floppy mx-2"></i>Add Question
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-md-9"
            style={{ maxHeight: "90vh ", overflowY: "scroll" }}
          >
            <SubHeader />
            <div className="Box p-1">
              <div className="row p-0 d-flex">
                <div className="col-md-12 w-100">
                  <Editors />
                </div>
              </div>
              <div className="row p-2">
                {editorContent.map((element, index) => (
                  <div className="col-md-3 p-1 w-25">
                    <Editors
                      latex={element.content}
                      onChange={(mathValue) =>
                        handleMathChange(index, mathValue)
                      }
                    />
                  </div>
                ))}
                <div className="custom d-flex justify-content-sm-end align-item-center">
                  <button
                    onClick={handleAddElement}
                    className="btn btn-info w-25 m-1 border-none"
                    style={{ border:"none" }}
                  >
                    <i className="bi bi-plus"> Create Option</i>
                  </button>
                  <button
                    onClick={(index) => handleDeleteElement(index)}
                    className="btn btn-info w-25 m-1"
                    style={{ border:"none"}}
                  >
                    <i className="bi bi-trash"> Remove Option</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
