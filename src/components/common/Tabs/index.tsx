"use client";

import { useState } from "react";

interface IProps {
  items: string[];
  onClick?: (value: number) => void;
}

const Tabs = ({ items, onClick }: IProps) => {
  const [tabNumbers, setTabNumbers] = useState(0);

  return (
    <ul className="flex gap-4 p-4 mb-4">
      {items?.map((item, idx) => {
        return (
          <li
            key={item}
            className={`text-[14px] cursor-pointer border-b-indigo-600  ${
              tabNumbers === idx && `border-b`
            }`}
            onClick={() => {
              setTabNumbers(idx);
              onClick?.(idx);
            }}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
