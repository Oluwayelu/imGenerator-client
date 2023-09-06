import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineDown } from "react-icons/ai";

export const FaqCard = ({ data }) => {
  const { id, question, answer } = data;

  return (
    <div className="w-full md:w-2/3 p-5 group bg-primary object-blur rounded-lg transiton duration-300 cursor-pointer">
      <div className="w-full flex items-center justify-between">
        <p className="text-lg">{question}</p>
        <button className="transition duration-90 group-hover:rotate-180">
          <AiOutlineDown className="w-5 h-5" />
        </button>
      </div>

      <p className="hidden group-hover:block text-primary-100 leading-loose">
        {answer}
      </p>
    </div>
  );
};
