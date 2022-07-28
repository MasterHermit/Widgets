import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debounced, setDebounced] = useState(text);


  useEffect(() => {
   const timerId= setTimeout(() => {
setDebounced(text);
    },600)
    return ()=>{
clearTimeout(timerId);
    }
  },[text])

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debounced,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debounced]);

  return (<div className="ui header">
    <h1>{translated}</h1>
  </div>)
};

export default Convert;
