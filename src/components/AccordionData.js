import Accordion from "./Accordion";
import { useState } from "react";
export const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces, maintained by Facebook.",
  },
  {
    id: 2,
    title: "What is a component?",
    content:
      "A component is a reusable piece of UI that can be used independently or within other components.",
  },
  {
    id: 3,
    title: "What are hooks?",
    content:
      "Hooks are special functions in React that let you use state and other features without writing a class.",
  },
];

export const AccordionParent = () => {
  const [isOpenIndex, setOpenIndex] = useState(1);

  return (
    <div className="w-[50%] m-auto">
      {accordionData.map((data) => (
        <Accordion
          key={data.id}
          title={data.title}
          content={data.content}
          isOpen={data.id === isOpenIndex ? true : false}
          setOpen={() =>{
            data.id === isOpenIndex
              ? setOpenIndex(null)
              : setOpenIndex(data.id)
          }}
        />
      ))}
    </div>
  );
};
