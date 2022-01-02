import { useState } from "react";

export default function useLocalStorage<T>(itemName: string, initialState: T): [T, (newItem: T) => void] {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem: T;
  if (localStorageItem) {
    parsedItem = JSON.parse(localStorageItem);
  } else {
    localStorage.setItem(itemName, JSON.stringify(initialState));
    parsedItem = initialState;
  }

  const [item, setItem] = useState<T>(parsedItem);

  const saveItem = (newItem: T) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [item, saveItem];
}