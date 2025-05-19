import React, { useState } from "react";

const useCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => setIsChecked((prev) => !prev);
  return { isChecked, setIsChecked, handleCheck };
};

export default useCheckbox;
