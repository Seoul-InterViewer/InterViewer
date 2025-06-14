"use client";
import { useState } from "react";
import { ICheckDataProps } from "./checkbox.type";
import { Button, buttonVariants } from "@/app/components/button";
import { Icon } from "@/app/components/icon";
export const Checkbox = ({
  checkName,
  text,
  value,
  count,
  firstPathname,
  removeBookmarkOpen,
}: ICheckDataProps) => {
  const [checked, setChecked] = useState(false);

  const handleRemoveButton = () => {
    if (!removeBookmarkOpen) return;

    removeBookmarkOpen(value);
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        <label className="flex items-center gap-4 cursor-pointer select-none">
          {firstPathname !== "bookmarks" && (
            <>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                className="hidden"
                name={checkName}
                value={value}
              />
              <span
                className={`w-5 h-5 rounded border transition-all flex items-center justify-center
                ${checked ? "bg-black border-black" : "bg-white border-gray-400"}`}
              >
                {checked && <span className="text-white text-sm leading-none">✓</span>}
              </span>
            </>
          )}
          <span className="font-regular-14">{text}</span>
        </label>
        <span className="flex items-center gap-5">
          <span className="font-regular-14">{count}</span>
          {firstPathname === "bookmarks" && (
            <Button
              type="button"
              className={buttonVariants({ icon: true })}
              onClick={handleRemoveButton}
            >
              <Icon name="close" size={14} />
            </Button>
          )}
        </span>
      </div>
    </div>
  );
};
