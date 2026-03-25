"use client";
import clsx from "clsx";
import { useState } from "react";

export default function MagicButton() {
  const [toggle, setToggle] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={clsx(darkMode && "dark")}>
  
        <button
          type="button"
          onClick={() => setToggle((prev) => !prev)}
          className={clsx(
            "m-2 px-4 py-2 rounded-2xl",
            toggle ? "bg-amber-100 text-black" : "bg-green-100 text-black",
          )}
        >
          Change color
        </button>
     
    </div>
  );
}
