import { forwardRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const Input = forwardRef(
  (
    { label, error, required, caption, className, inputClassName, ...rest },
    ref
  ) => {
    return (
      <div className={`${className && className} flex flex-col`}>
        {label && (
          <div className="flex items-start gap-2 mb-1">
            <label htmlFor={rest.name} className="text-sm font-medium">
              {label}
            </label>
            {required ? (
              <span className="text-red-400">*</span>
            ) : (
              <span className="text-primary-100">(*optional)</span>
            )}
          </div>
        )}
        <div
          className={`${
            rest.type === "search" ? "rounded-full h-12" : "rounded-lg h-14"
          } w-full px-3 flex items-center justify-between border border-primary bg-white text-background font-medium focus:ring-primary-100 outline-none overflow-hidden`}
        >
          {rest.type === "search" && (
            <div className="pr-3">
              <AiOutlineSearch className="w-6 h-6" />
            </div>
          )}
          <input ref={ref} {...rest} className="w-full h-full" />
        </div>
        <span className="text-sm text-error">{error?.message}</span>
        {caption && <div className="mt-1">{caption}</div>}
      </div>
    );
  }
);
