import React, { useEffect, useState } from "react";

function Header() {
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const date = new Date();
    const options = { month: "long", year: "numeric" };
    setCurrentDate(date.toLocaleDateString(undefined, options));
  }, []);
  return (
    <header>
      <h1>To Do List ({currentDate})</h1>
    </header>
  );
}

export default Header;
