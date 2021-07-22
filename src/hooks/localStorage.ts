import { useState } from "react";

const useLocalStorage = (prop: string) => {
  const [value, setValue] = useState<string>(localStorage.getItem(prop) ?? "");

  const setLocal = (value: string) => {
    try {
      localStorage.setItem(prop, value);
      setValue(value);
    } catch (error) {
      throw new Error("error to set value from localStorage");
    }
  };

  const removeLocal = (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      throw new Error("error to remove value from localStorage");
    }
  };

  return [value, setLocal, removeLocal] as const;
};

export { useLocalStorage };
