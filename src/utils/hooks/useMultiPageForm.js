import { useState } from "react";

export const useMultiplePageForm = (pages = ["default"]) => {
  let [current, setCurrent] = useState(pages[0]);

  let next = () => {
    let currentIndex = pages.indexOf(current);
    //to check if next item exceeds the length of pages array
    if (currentIndex + 1 <= pages.length - 1) {
      setCurrent(pages[++currentIndex]);
    }
  };
  let previous = () => {
    let currentIndex = pages.indexOf(current);
    // to check if the previous item is first item in array
    if (currentIndex - 1 >= 0) {
      setCurrent(pages[--currentIndex]);
    }
  };

  let reset = () => {
    // resets page back to first page
    setCurrent(pages[0]);
  };

  let goto = (pageTitle) => {
    // if page title exist then set  current page to that specific page
    if (pages.indexOf(pageTitle) !== -1) {
      setCurrent(pages[pages.indexOf(pageTitle)]);
    }
  };

  return {
    current,
    next,
    previous,
    reset,
    goto,
  };
};
