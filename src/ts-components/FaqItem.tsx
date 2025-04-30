// import React, { useState } from 'react';
// import { MdAdd, MdRemove } from 'react-icons/md';

// type FaqItemProps = {
//   question: string;
//   answer: string;
// };

// const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="faq-item">
//       <button
//         onClick={() => setIsOpen(prev => !prev)}
//         aria-expanded={isOpen}
//         aria-controls={`faq-answer-${question.replace(/\s+/g, '-')}`}
//         className="faq-question-button"
//       >
//         <span>{question}</span>
//         {isOpen ? <MdRemove aria-label="Collapse" /> : <MdAdd aria-label="Expand" />}
//       </button>
//       {isOpen && (
//         <p
//           id={`faq-answer-${question.replace(/\s+/g, '-')}`}
//           className="faq-answer"
//         >
//           {answer}
//         </p>
//       )}
//     </div>
//   );
// };

// export default FaqItem;
