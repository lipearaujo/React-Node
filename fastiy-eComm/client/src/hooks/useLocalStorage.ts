/* import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let value = localStorage.getItem(item);
    if (value) setValue(JSON.parse(value));
  }, [window]);

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return {
    value,
    updateLocalStorage,
  };
} */

import { useState } from "react";

export function useLocalStorage(item: string) {
  const [value, setValue] = useState(localStorage.getItem(item) ?? "");

  const updateLocalStorage = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return {
    value,
    updateLocalStorage,
  };
}
