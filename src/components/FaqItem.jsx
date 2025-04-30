import React, { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border rounded-2xl overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s+/g, "-")}`}
        className="flex justify-between items-center w-full px-6 py-6 text-2xl font-semibold cursor-pointer"
      >
        <span>{question}</span>
        {isOpen ? (
          <MdRemove aria-label="Collapse" className="bg-black text-white rounded-full h-10 w-10 p-1 " />
        ) : (
          <MdAdd aria-label="Expand" className="bg-black text-white rounded-full h-10 w-10 p-1" />
        )}
      </button>

      {/* Transition Section */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="w-[calc(100%_-_3rem)] mx-auto mb-6 h-[3px] bg-black"></div>

          <p
            id={`faq-answer-${question.replace(/\s+/g, "-")}`}
            className="px-6 pb-6 leading-relaxed text-justify"
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
