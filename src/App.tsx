import React, { useEffect, useState } from "react";
import Login from "./login";
export default function RequestTracker(): React.ReactElement {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pending + 1);
    await delay(3000);
    setPending((pending) => pending - 1);
    setCompleted(completed + 1);
  }

  return (
    <>
      <h3>等待：{pending}</h3>
      <h3>完成：{completed}</h3>
      <button onClick={handleClick}>购买</button>
    </>
  );
}

function delay(ms: number) {
  return new Promise((resolve) => {
    console.log("延迟中...");
    setTimeout(resolve, ms);
  });
}
