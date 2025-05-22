import React, { useRef, useState } from "react";

const useFocus = () => {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return { inputRef, isFocused, handleFocus, handleBlur };
};

export default useFocus;
