import React from "react";

function Header() {
  const date = new Date();
  return (
    <header>
      <h1>GetShitDone 👏</h1>
      <p>{date.toJSON().slice(0, 10)}</p>
    </header>
  );
}

export { Header };
