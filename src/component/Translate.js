import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
const options = [
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Armenia",
    value: "hy",
  },
  {
    label: "Bulgarian",
    value: "bg",
  },
  {
    label: "Bengali",
    value: "bn",
  },
];

const Translate = () => {
  const label = "Select a Language";
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("Hello");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>

      <Dropdown
        options={options}
        selected={language}
        onSelectChange={setLanguage}
        label={label}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
