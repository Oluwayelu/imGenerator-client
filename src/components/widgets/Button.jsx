import React from "react";
import { Spinner } from "./Spinner";

export const Button = ({ loading, children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${
        className && className
      } w-fit h-14 px-3 bg-primary hover:bg-primary-300 rounded-lg`}
    >
      {loading ? <Spinner size="sm" /> : children}
    </button>
  );
};
