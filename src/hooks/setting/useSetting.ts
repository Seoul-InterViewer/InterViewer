import { useState } from "react";

const useSetting = () => {
  const [on, setOn] = useState(false);
  const toggle = (value: boolean) => setOn(value);
  return { on, toggle };
};

export default useSetting;
