import React from "react";

export const Spinner = ({ size = "md" }) => {
  const getSize = () => {
    switch (size) {
      case "sm":
        return "w-6 h-6";
      case "md":
        return "w-10 h-10";
      case "lg":
        return "w-16 h-16";

      default:
        return "w-10 h-10";
    }
  };

  return (
    <div className="w-auto h-auto flex item-center justify-center">
      <div
        className={`${getSize()} border-4 border-white border-t-primary rounded-full animate-spin`}
      />
    </div>
  );
};
