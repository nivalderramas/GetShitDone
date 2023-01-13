import React from "react";

function useLocalStorage(key, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  setTimeout(() => {
    try {
      const storageItem = localStorage.getItem(key);
      let parsedItem;

      if (!storageItem) {
        parsedItem = initialValue;
        localStorage.setItem(key, JSON.stringify(initialValue));
      } else {
        parsedItem = JSON.parse(storageItem);
      }
      setItem(parsedItem);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, 1000);
  const setItemValue = (itemValue) => {
    localStorage.setItem(key, JSON.stringify(itemValue));
    setItem(itemValue);
  };
  return { item, setItemValue, error, loading };
}

export { useLocalStorage };
