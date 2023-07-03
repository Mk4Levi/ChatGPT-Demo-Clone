import React from "react";

export default function OptionSelection({ optionsArr, selectOption }) {
  return (
    <>
      <h1 className="heading">Manthan-GPT</h1>

      <div className="grid-main">
        {optionsArr.map((item) => {
          return (
            <div
              className="grid-child"
              onClick={() => selectOption(item.option)}
              key={item.id}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
