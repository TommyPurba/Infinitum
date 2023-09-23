"use client";

import React from "react";
import { Search } from "lucide-react";

export const Find = () => {
  return (
    <div className="flex rounded-xl bg-highlight-color shadow-none">
      <input
        className="rounded-l-xl w-72 px-4 hover:border-highlight-color caret-highlight-color"
        id="inputSearch"
        type="text"
        placeholder="Find Event"
      />
      <button
        className="w-fit p-2 text-white hover:rounded-r-xl hover:text-paraghraph-text duration-300 transition ease-in-out cursor-pointer"
        type="submit"
      >
        <Search strokeWidth={3} />
      </button>
    </div>
  );
};
