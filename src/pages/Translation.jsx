import React from "react";

export default function Translation({ doStuff, setInput, result }) {
  return (
    <div>
      <h1>MANTHAN-GPT</h1>
      <textarea
        className="text-area"
        cols={100}
        rows={2}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <br />
      <button
        className="action-btn"
        onClick={doStuff}
        style={{ color: "black", background: "lightgreen" }}
      >
        Get Answer
      </button>
      <br />
      <button
        className="action-btn"
        onClick={() => location.reload()}
        style={{ color: "black", background: "lightblue" }}
      >
        Go Home
      </button>

      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  );
}
