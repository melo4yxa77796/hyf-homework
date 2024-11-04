"use client";

import { useContext, useState, createContext } from "react";
import clsx from "clsx";

const AccordionContext = createContext();

function AccordionProvider({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </AccordionContext.Provider>
  );
}

function Panel({ title, children, panelIndex }) {
  const { activeIndex } = useContext(AccordionContext);

  const isOpen = activeIndex === panelIndex;

  return (
    <div className="p-2 border-t border-t-black flex flex-col justify-center items-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <div
        className={clsx({
          hidden: !isOpen,
        })}
      >
        {children}
      </div>
      {!isOpen && (
        <button className="border border-blue-500 rounded text-blue-500">
          Show more
        </button>
      )}
    </div>
  );
}

export default function Accordion() {
  return (
    <AccordionProvider>
      <div className="flex flex-col border border-black rounded">
        <Panel title="Section 1" panelIndex={1}>
          Content 1
        </Panel>
        <Panel title="Section 2" panelIndex={2}>
          Content 2
        </Panel>
        <Panel title="Section 3" panelIndex={3}>
          Content 3
        </Panel>
      </div>
    </AccordionProvider>
  );
}
