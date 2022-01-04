import { useEffect, useState } from "react";

export default function useLocalStorage<T>(itemName: string, initialState: T) {
  const [item, setItem] = useState<T>(initialState);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem: T;
      if (localStorageItem) {
        parsedItem = JSON.parse(localStorageItem);
      } else {
        localStorage.setItem(itemName, JSON.stringify(initialState));
        parsedItem = initialState;
      }

      setItem(parsedItem);
      setLoading(false);
    }, 2000);
  }, []);


  const saveItem = (newItem: T) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return {
    item, 
    setItem: saveItem,
    loading,
    setLoading,
  };
}