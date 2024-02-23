// MathTextEditor.js
import React, { useState } from 'react';
import MathQuill from "react-mathquill";

const MathTextEditor = () => {
  const [editorContent, setEditorContent] = useState([{ type: 'text', content: '' }]);

  const handleAddElement = () => {
    setEditorContent([...editorContent, { type: 'text', content: '' }]);
  };

  const handleMathChange = (index, mathValue) => {
    const newEditorContent = [...editorContent];
    newEditorContent[index].content = mathValue;
    setEditorContent(newEditorContent);
  };

  return (
    <div>
      {editorContent.map((element, index) => (
        <div key={index}>
          {element.type === 'text' ? (
            <textarea
              value={element.content}
              onChange={(e) => handleMathChange(index, e.target.value)}
            />
          ) : (
            <div className="col-md-3 p-1">
             <MathQuill
              latex={element.content}
              onChange={(mathValue) => handleMathChange(index, mathValue)}
            />
          </div>
           
          )}
        </div>
      ))}
      <button onClick={handleAddElement}>Add Element</button>
    </div>
  );
};

export default MathTextEditor;
