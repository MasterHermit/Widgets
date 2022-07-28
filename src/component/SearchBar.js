import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {
  const [input, setInput] = useState("react js");
  const [debaouncedInput,setDebaounceInput] = useState(input)
  const [results, setResults] = useState([]);

useEffect(()=>{
  const timerId=setTimeout(()=>{
setDebaounceInput(input);
  },600)
  return ()=>{
    clearTimeout(timerId);
  }
},[input])

useEffect(()=>{
      const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debaouncedInput,
        },
      });
      setResults(data.query.search);
    };
    search();

},[debaouncedInput])



  const toBeRenderedRes = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            search
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="field">
          <input
            type="text"
            placeholder="Search"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="ui celled list">{toBeRenderedRes}</div>
    </div>
  );
};

export default SearchBar;
