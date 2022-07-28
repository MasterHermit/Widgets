import React, { useState } from "react";
import Accordian from "./Accordian";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const items = [
  {
    title: "who is King Vikramaaditya",
    content: "King of Kings, who has won the whole the world ",
  },
  {
    title: "who is King Raja Raja chola",
    content: " the tamil king who won the whole bharata",
  },
];

const options = [
  {
    label: "Bangalore Pheranta",
    value: "amit",
  },
  {
    label: "Mun Dieting karibi",
    value: "Sraddha",
  },
  {
    label: "ratire ase needa re nuha",
    value: "bhoota",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container" style={{ marginTop: "15px" }}>
      <Header />
      <Route path="/dropdown">
        <button
          type="button"
          onClick={() => {
            setShowDropdown(!showDropdown);
          }}
        >
          click
        </button>
        {showDropdown ? (
          <Dropdown
            options={options}
            selected={selected}
            onSelectChange={setSelected}
            label="Select a Person"
          />
        ) : null}
      </Route>
      <Route path="/">
        <Accordian items={items} />
      </Route>
      <Route path="/searchbar">
        <SearchBar />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
export default App;
