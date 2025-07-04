import React, { useState } from "react";

const data = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    title: "What is Tailwind CSS?",
    content:
      "Tailwind is a utility-first CSS framework for rapidly building custom designs.",
  },
  {
    title: "Is this Accordion reusable?",
    content: "Yes! Each item is a reusable component with dynamic content.",
  },
];

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg mb-3 overflow-hidden">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
      >
        <span className="font-medium">{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="px-4 py-3 bg-white text-gray-700 border-t">
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="max-w-xl mx-auto mt-10">
      {data.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
