import React, { useState } from "react";

const Accordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const itemArray = items.map((item, index) => {
const active=index===activeIndex?"active":"";


    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div>
      <div className="ui styled accordion">{itemArray}</div>;
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordian;
