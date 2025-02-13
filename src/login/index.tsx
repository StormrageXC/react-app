import React from "react";
import { sculptureList } from "./data";
export default function Gallery() {
  let index = 0;
  let sculpture = sculptureList[index];
  function handleClick() {
    index = index + 1;
    sculpture = sculptureList[index];
  }

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}
